let photo, maskImage;
function preload() {
  photo = loadImage('m1.png');
  //maskImage = loadImage('assets/mask2.png');
}

function setup() {
  //background(0);
 // background(0);
  createCanvas(1000, 700);
}
function draw(){
  photo.mask(circle(0, 0, 100));
  //image(photo,0,0,100,100);
  image(photo,0,0,100,100);
}



  //createCanvas(100, 100);
  //photo.mask(circle(50, 50, 100));
  //image(photo,0,0,100,100);
