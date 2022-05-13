Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("picca").innerHTML = '<img id="Captured" src="'+data_uri+'">';
    });
}


function modelLoaded(){
    console.log('modelLoaded')
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function familyed(){
    img = document.getElementById("Captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("notobject").innerHTML = results[0].label;
        document.getElementById("really").innerHTML = results[0].confidence.toFixed(3);
    }
}