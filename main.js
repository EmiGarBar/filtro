noseX=0;
noseY=0;

function preload() {
  img_num=loadImage('https://i.postimg.cc/JhJ20mRR/kisspng-glasses-nose-pince-nez-face-5b38a9ca8cb0a4-1001807815304401385763.png')
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet está inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill(255,0,0);
  stroke(255,0,0);
  circle(noseX, noseY, 20);
  image(img_num, noseX-50, noseY-70,100,100);
}

function take_snapshot(){    
  save('myFilterImage.png');
}