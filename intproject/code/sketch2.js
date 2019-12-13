
function preload() {
//let photo, maskImage;
  photo = loadImage('m2.jpg');
  //maskImage = loadImage('assets/mask2.png');
}

function setup() {
  createCanvas(200, 200);
  photo.mask(circle(100, 100, 200));
  image(photo,0,0,100,100);
}

