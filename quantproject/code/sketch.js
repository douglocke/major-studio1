
// 15 decade rosary
//  9-22-2019  10:07 AM  Version 1.0

function preload() {
  img = loadImage('m1.jpg');
  img6 = loadImage('m6.jpg');
  img10 = loadImage('m10.jpg');
  fontRegular = loadFont('PfefferMediaeval.otf');
  sumtable = loadTable("../data/summary.csv", "csv");
  detailtable = loadTable("../data/details.csv", "csv");


}

function setup() {
  // Sets the screen to be x pixels wide and y pixels high
  xcanvas = 1200;
  ycanvas = 800;
  createCanvas(xcanvas, ycanvas);
  //colorMode(HSB, 360, 100, 100);
  colorMode(HSB, 360, 100, 100);

//  var radius = min(width, height) / 2;  
  var radius = 300;  

  textFont(fontRegular);
  text('Font Style Normal', 50, 300);

  //center the rosary in the middle and a little higher

  h=xcanvas/2;
  k=ycanvas/2;

  //calced in Excel
  r9 = 4.18879; //top
  r8 = 4.607669;
  r7 = 5.026548;
  r6 = 5.445427;
  r5 = 5.864306;
  r4 = 0;
  r3 = 0.418879;
  r2 = 0.837758;
  r1 = 1.256647;//bottom
  r15 = 1.675516;
  r14 = 2.094395;
  r13 = 2.513274;
  r12 = 2.932153;
  r11 = 3.351032;
  r10 = 3.769911; 

  var radiai = [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,12,r13,r14,r15];
  
  m1_x = radius*cos(r1)+h; 
  m1_y = radius*sin(r1)+k; 

  m2_x = radius*cos(r2)+h; 
  m2_y = radius*sin(r2)+k; 

  m3_x = radius*cos(r3)+h; 
  m3_y = radius*sin(r3)+k; 

  m4_x = radius*cos(r4)+h; 
  m4_y = radius*sin(r4)+k; 

  m5_x = radius*cos(r5)+h; 
  m5_y = radius*sin(r5)+k; 

  m6_x = radius*cos(r6)+h; 
  m6_y = radius*sin(r6)+k; 

  m7_x = radius*cos(r7)+h; 
  m7_y = radius*sin(r7)+k; 

  m8_x = radius*cos(r8)+h; 
  m8_y = radius*sin(r8)+k; 

  m9_x = radius*cos(r9)+h; 
  m9_y = radius*sin(r9)+k; 

  m10_x = radius*cos(r10)+h; 
  m10_y = radius*sin(r10)+k; 

  m11_x = radius*cos(r11)+h; 
  m11_y = radius*sin(r11)+k; 

  m12_x = radius*cos(r12)+h; 
  m12_y = radius*sin(r12)+k; 

  m13_x = radius*cos(r13)+h; 
  m13_y = radius*sin(r13)+k; 

  m14_x = radius*cos(r14)+h; 
  m14_y = radius*sin(r14)+k; 

  m15_x = radius*cos(r15)+h; 
  m15_y = radius*sin(r15)+k; 

  //center of circles
  xpos = [m1_x,m2_x,m3_x,m4_x,m5_x,m6_x,m7_x,m8_x,m9_x,m10_x,m11_x,m12_x,m13_x,m14_x,m15_x];
  ypos = [m1_y,m2_y,m3_y,m4_y,m5_y,m6_y,m7_y,m8_y,m9_y,m10_y,m11_y,m12_y,m13_y,m14_y,m15_y];
   

}
// Hue , Saturation, Brightnes, alpha
//colorMode(HSB,360,100,100);

function draw() {
  var radius = 40;  
background(0,20,20);
strokeWeight(0);

fill(20, 100, 100);
//text here
textSize(20);
text ('The Annunciation',m1_x+35,m1_y+60);
text ('The Visitation',m2_x,m2_y+60);
text ('The Nativity',m3_x+30,m3_y+60);
text ('The Presentation',m4_x+30,m4_y+60);
text ('Finding In the Temple',m5_x+50,m5_y+40);
text ('The Agony in the Garden',m6_x+40,m6_y+20);
text ('The Scourging',m7_x+50,m7_y);
text ('The Crowning with Thorns',m8_x-110,m8_y-54);
text ('The Carrying of the Cross',m9_x-250,m9_y-50);
text ('The Crucifixion',m10_x-220,m10_y-10);
text ('The Resurrection',m11_x-200,m11_y+20);
text ('The Ascension',m12_x-170,m12_y+40);
text ('The Decent of',m13_x-180,m13_y+40);
text ('the Holy Ghost',m13_x-180,m13_y+60);
text ('The Assumption of Mary',m14_x-140,m14_y+60);
text ('The Coronation',m15_x-80,m15_y+80);

textSize(14);
text ('711 Objects',m10_x-180,m10_y+20);
text ('311 Objects',m1_x+45,m1_y+80);
text ('54 Objects',m6_x+100,m6_y+40);
text ('5 Objects',m13_x-140,m13_y+75);

fill(1, 0, 87);
textSize(10);
text ('1 A.D.',m1_x-10,m1_y-70);
text ('500 A.D.',m1_x+65,m1_y);
text ('1000 A.D.',m1_x-20,m1_y+75);
text ('1500 A.D.',m1_x-80,m1_y);
//image(img, 300,300);
//circle(100,100,50);
//ellipse(j_x,j_y,30, 30);

//(HSB, 360, 100, 100, 1).
//lunch

//ellipse(200,200,400, 400);
//debug 

// H, S & B integer values
//strokeWeight(1);
//rect(20, 20, 60, 60);

//Title
fill(90, 100, 100);
textSize(25);
text ('Catholic Art at the Met',450,360);
text ('Through the Lens of the Holy Rosary',400,390);

var rowCounter=sumtable.getRowCount();
var rowCounterMax=sumtable.getRowCount();
  var objcount = 0;
//  var objclass = 0;
  var maxRow = 20;
  var curcount=0;
  var curcountmap=0;


if (sumtable.getRowCount() < 20) maxRow = sumtable.getRowCount();

//loop through summary
for (var r = 1; r < sumtable.getRowCount() ; r++){

curcount = int(sumtable.getString (r,3));
curcountmap = map(curcount, 0, 711,1,100);

//strokeWeight(curcountmap);
intensity_curcountmap = map(curcount, 0, 711,50,90);

fill(49, intensity_curcountmap, intensity_curcountmap);
circle(xpos[r-1],ypos[r-1],2*radius+curcountmap);

//radius+curcountmap)
//line(30, 20, 85, 75)
fill(80,90,90);
strokeWeight(2);

//++line(xpos[r-1], ypos[r-1],xpos[r-1]+2*radius+curcountmap,ypos[r-1]);

//ticker 

strokeWeight(0);

//img.mask(circle(50, 50, 100));
//image(photo, 0, 0,100,100);
}

var ct =  0
//strokeWeight(1);
for (var d = 1; d < detailtable.getRowCount() ; d++){
stroke(60,100,100);
strokeWeight(2);
objcount = int(detailtable.getString (d,3));
century  = int(detailtable.getString (d,2));
mystery  = int(detailtable.getString (d,0));
ct = map(century,0,2000,0, TWO_PI) - HALF_PI;
lengthcnt = map(objcount, 1, 204, 3, 140);

//text (detailtable.getString (d,3),400,40*d); 
//if (mystery == 1) 
// line(m1_x + cos(ct) * radius, m1_y + sin(ct) * radius , m1_x + cos(ct) * lengthcnt, m1_y + sin(ct) * lengthcnt);
   line(xpos[mystery-1] + cos(ct) * radius, ypos[mystery-1] + sin(ct) * radius , xpos[mystery-1] + cos(ct) * lengthcnt, ypos[mystery-1] + sin(ct) * lengthcnt);

}
//img.mask(circle(m9_x,m9_y,100));
//"regular circle"
stroke(0,20,20);
fill(65, 20, 20);
//stroke(0,0,0);
//fill(60, 100, 100);
//interB = lerpColor(from, to, .66);
//outside circle
//circle(m1_x,m1_y,2*radius);
circle(m1_x,m1_y,1.75*radius);
circle(m2_x,m2_y,1.75*radius);
circle(m3_x,m3_y,1.75*radius);
circle(m4_x,m4_y,1.75*radius);
circle(m5_x,m5_y,1.75*radius);
circle(m6_x,m6_y,1.75*radius);
circle(m7_x,m7_y,1.75*radius);
circle(m8_x,m8_y,1.75*radius);
circle(m9_x,m9_y,1.75*radius);
circle(m10_x,m10_y,1.75*radius);
circle(m11_x,m11_y,1.75*radius);
circle(m12_x,m12_y,1.75*radius);
circle(m13_x,m13_y,1.75*radius);
circle(m14_x,m14_y,1.75*radius);
circle(m15_x,m15_y,1.75*radius);

image(img, m1_x-25,m1_y-25,50,50);
image(img6, m6_x-25,m6_y-25,50,50);
image(img10, m10_x-25,m10_y-25,50,50);

}
