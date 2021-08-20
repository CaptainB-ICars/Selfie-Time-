var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

 recognition.onresult=function run(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"||content=="cheese"||content=="picture time")
    {
        speak();
    }
    
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data="Your selfie will be taken in 5 seconds(or you have the right to complain to me/the manager (who also happens to be me) with the power bestowed upon you as the user of my webapp"
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera)
    setTimeout(function()
    {
    takeselfie();
    save();
    },15000
);
}

Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");


function takeselfie()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagec" src="'+data_uri+'">';
    });                       
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("imagec").src;
    link.href=image;
    link.click();
}


