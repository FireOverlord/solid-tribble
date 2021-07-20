var img="";
var status="";
function preload(){
    img=loadImage("BLAHBLAHBLAH.jpg");

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("STATUS").innerHTML="";
}
function modelLoaded(){
    window.alert("Coco SSD has loaded");
    status=true;
document.getElementById("STATUS").innerHTML="SCANNING PICTURE";
objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(":( Failed to load answer");
    }else{
        console.info(results);
    }
}
function draw(){
    image(img,0,0,500,500);
    fill("cyan");
    stroke("cyan");
    noFill();
    rect(125,125,200,);
}
