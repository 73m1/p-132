statusofCoco = ""

function preload() {
    image1 = loadImage("img1.jpg");
}

function setup() {

    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("statusofCoco").innerHTML = "Object Detecting...";
}

function modelLoaded() {
    console.log("Model Loaded");
    statusofCoco=true;
    objectDetector.detect(image1,gotResults);
}


function gotResults(error,results) {
    if(error){
        console.error(error);
    }else {
        console.log(results);
    }
}