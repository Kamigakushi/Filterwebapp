nosex=0;
nosey=0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("PoseNet is initialized");
}

function gotposes(results)
{
    if ( results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y;
    }
}
/*function draw(){
    image(video, 0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nosex,nosey,25);
}*/

function draw(){
    image(video, 0,0,300,300);
    image(clown_nose,nosex ,nosey, 35,35)
}

function take_snapshot(){
    save('myFilterImage.jpg')
}                                                                                      