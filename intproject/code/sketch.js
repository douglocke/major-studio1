//project 4 Mobile Dec 10 
// made by Douglas Locke
// for Ewan

var xpos= [696.4103531737484, 808.7687586803667, 885.0261853832683, 912, 885.0261464016041, 808.7686874573362, 696.4132293255519, 567.3870495628194, 443.9999446667356, 347.5866639550066, 294.8179379437165, 294.8179578699785, 347.586720288361, 444.00002766663465, 567.3871448778281];
var ypos = [696.730591279216, 631.8611769983471, 526.9018268027013, 400, 273.0980856430789, 168.1387588721628, 103.27034322296237, 89.70917599164812, 129.8001059659378, 216.61104780647977, 335.1316024625647, 464.8684912831319, 583.3890297297357, 670.1999419540819, 710.2908340263699];

//menu
var mxpos = [1200,1200,1200,1200,1200,1200,1200,1200];
var mypos = [40,70,100,130,160,190,220,250];
var cmenu = ['Italian', 'German', 'French', 'Dutch', 'Spanish', 'American', 'Others', 'Everything']; 

var defaultimg = ['m1.jpg', 'm2.png', 'm3.png','m4.png', 'm5.png', 'm6.jpg', 'm7.png', 'm8.png', 'm9.png', 'm10.jpg', 'm11.png', 'm12.png', 'm13.png', 'm14.png', 'm15.png'];


var adjxby = 0;
var adjyby = 0;

var offsetx =0;
var offsety =0;

var zoom = 1;
var xdiff = 0;
var ydiff = 0;
var mystnames =['The Annunciation','The Visitation','The Nativity','The Presentation','Finding In the Temple','The Agony in the Garden','The Scourging','The Crowning with Thorns','The Carrying of the Cross','The Crucifixion','The Resurrection','The Ascension','The Decent of the Holy Ghost','The Assumption of Mary','The Coronation'];

var xadj=[35,0,30,30,50,40,50,-110,-250,-220,-200,-170,-180,-140,-80];
var yadj=[60,60,60,60,40,20,0,-54,-50,-10,20,40,60,60,60];

var mysteries = [];
var defaultimgs =[];
var defaultimgs_fullsize =[];
var menuitems = [];

//appstate 1 = intro  2 = regular
var appstate = 1;
var mobilemystery = 0;
var mobile = false;
var mobileinitial = false;
var mobileheight = 150;
var mobilewidth = 375;
//firstdraw  1 = first  0 = regular
var firstdraw = 1;
var fr = 30;

//firstdraw  1 = first  0 = regular
var menuchoice = 8;
//function to create a crop image for the circle
function makeCircle(r){
   const imgmc = createImage(r, r);
   imgmc.loadPixels();
   for (let i = 0; i < imgmc.width; i++) {
   for (let j = 0; j < imgmc.height; j++) {
   const n = dist(r/2, r/2, i, j) < r/2 ? 255 : 0
   imgmc.set(i, j, color(0, 0, 0, n));
      }
   }
   imgmc.updatePixels();
   return imgmc
}

function preload() {
  //img = loadImage('m1.jpg');
  img = loadImage(defaultimg[0]);
  for (var z = 0; z < 15 ; z++){
   defaultimgs.push(loadImage(defaultimg[z]));
   defaultimgs_fullsize.push(loadImage(defaultimg[z]));
   }
  
  rosarybackground = loadImage('rosarybackground.png');
  rosarybackground_mob = loadImage('rosarybackground_mob.png');
  imgarrow = loadImage('arrow.png');
  introimg = loadImage('rosarytp.png');
  fontRegular = loadFont('PfefferMediaeval.otf');
  sumtable = loadTable("../data/summary.csv", "csv");
  detailtable = loadTable("../data/details.csv", "csv",'header');
}

//mobile

var canvas;
//this gets called only once in the very beginning




function setup() {
  // Sets the screen to be x pixels wide and y pixels high

  //mobile
   //canvas = createCanvas(window.innerWidth, window.innerHeight);
  //setSize();
  // barHeight = (height/3) - 20; //dynamic size for height of bar
  // barMax = width-40; // dynamic size for width of bar

  if (window.innerWidth < 400) 
  {
     mobileinitial=true;
     xcanvas = mobilewidth;
     ycanvas = 667;
     createCanvas(xcanvas, ycanvas);
  }
  else
  {
     mobileinitial=false;
     xcanvas = 1400;
     ycanvas = 800;
     createCanvas(xcanvas, ycanvas);
  }

   //canvas = createCanvas(window.innerWidth, window.innerHeight);

  //createCanvas(xcanvas, ycanvas);
  colorMode(HSB, 360, 100, 100);
  textFont(fontRegular);
  text('Font Style Normal', 50, 300);

  var xcanvas = 1200;
  var ycanvas = 800;
  var radius = 312;  
  var h=xcanvas/2;
  var k=ycanvas/2;
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
  var xpos = [m1_x,m2_x,m3_x,m4_x,m5_x,m6_x,m7_x,m8_x,m9_x,m10_x,m11_x,m12_x,m13_x,m14_x,m15_x];
  var ypos = [m1_y,m2_y,m3_y,m4_y,m5_y,m6_y,m7_y,m8_y,m9_y,m10_y,m11_y,m12_y,m13_y,m14_y,m15_y];

  maskImage = makeCircle(200);
  frameRate(fr);
}


function mouseClicked() {
   switch (appstate) {
    case 1:
     print('Made it to mouseclick case 1' + fr);
     print('appstate ' + appstate);
     createMysteries();
     //menu
     createMenus();
     if (mobile==true)
      {
      appstate=2;
      }
     else 
      {
      appstate=2;
      }
     print('c1 appstate ' + appstate);
     break;
    case 2:
     if (mobile==true)
      {
      mobilemystery=0;
      print('c2: mobilemystery  ' + mobilemystery);
      adjxby = mobilewidth/2 - xpos[mobilemystery]
      print('c2: adjxby ' + adjxby);
     adjyby = 100 - ypos[mobilemystery]
      appstate=5;
      }
     else 
      {
      appstate=3;
      }
     print('c2 appstate ' + appstate);
     print('c2 Made it to mouseclick case 2' + fr);
     //createMysteries();
     break;
    case 3:
     print('Made it to mouseclick case 3' + fr);
     if (mobile==true)
      {
      appstate=5;
      }
     else 
      {
      appstate=3;
      }
     print('c3 appstate ' + appstate);
     print('c3 Made it to mouseclick case 3' + fr);
     //createMysteries();
     print('c3 appstate ' + appstate);
     //appstate++;
     break;
    case 4:
     print('Made it to mouseclick case 4' + fr);
     if (mobile==true)
      {
      appstate++;
      }
     else 
      {
      appstate=3;
      }
     frameRate(60);
     //scale(2);
     //adjxby = map(xpos[mobilemystery],0,1400,0,375) - xpos[mobilemystery];
     //adjyby = map(ypos[mobilemystery],0,800,0,mobileheight) - ypos[mobilemystery];
     print('c4: appstate ' + appstate);
     print('c4: mobilemystery  ' + mobilemystery);
     print('c4: mobilewidth/2 ' + mobilewidth/2);
     print('c4: xpos[mobilemystery ' + xpos[mobilemystery]);
     adjxby = mobilewidth/2 - xpos[mobilemystery]
     adjyby = 100 - ypos[mobilemystery]
     break;
     //createMysteries();
    case 5:
     //mobilemystery++;
     print('c5: appstate ' + appstate);
     print('c5: mobilemystery  ' + mobilemystery);
     print('c5: mobilewidth/2 ' + mobilewidth/2);
     print('c5: xpos[mobilemystery ' + xpos[mobilemystery]);
     adjxby = mobilewidth/2 - xpos[mobilemystery]
     print('c5: adjxby ' + adjxby);
     adjyby = 100 - ypos[mobilemystery]
     if (mobile==true)
      {
      //mobilemystery=0;
      appstate++;
      print('c5: appstate ' + appstate);
      }
     else 
      {
      appstate=3;
      }
     //appstate++;
     print('c5: mobilemystery  ' + mobilemystery);
     break;
    case 6:
   //{
     //translate(0,0);

     print('c>5: appstate ' + appstate);
     print('c>5: mobilemystery  ' + mobilemystery);
     print('c>5: mobilewidth/2 ' + mobilewidth/2);
     print('c>5: xpos[mobilemystery ' + xpos[mobilemystery]);
     //adjxby = map(xpos[mobilemystery],0,1400,0,375) - xpos[mobilemystery];
     //adjxby = adjxby+10 
     //adjyby = map(ypos[mobilemystery],0,800,10,mobileheight) - ypos[mobilemystery];
     //adjyby = -1*ypos[mobilemystery] + 80;
     //adjyby = 80;

    //adjyby = adjyby+10;
     //set back to 1 if at end:w!

     if (mobilemystery > 14 || mobilemystery==0) {
      mobilemystery=0;
      appstate=6;
     adjxby = mobilewidth/2 - xpos[mobilemystery]
     adjyby = 100 - ypos[mobilemystery]
       }
     else {
          print('c6: mobilemystery  ' + mobilemystery);
          adjxby = mobilewidth/2 - xpos[mobilemystery];
          print('c6: adjxby ' + adjxby);
          adjyby = 100 - ypos[mobilemystery];
          }
     print('c>5: appstate ' + appstate);
     print('c>5: mobilemystery ' + mobilemystery);
   //}
     mobilemystery++;
     break;
    default:
     print('appstate ' + appstate);
     }
}

//menu
function mouseReleased() {
  for(let i=0 ; i<menuitems.length; i++){
    menuitems[i].setChoice();
  }
  for(let x=0; x<mysteries.length; x++){
    mysteries[x].openLink();
  }
}


//menu
function createMenus(){
for (var m = 1 ; m < 9 ; m++)
  {
  menuitems.push(new Menu(m));
  }
}


function createMysteries() {
//Main circle code for mysteries
//summary table is to get count of all objects for all mysteries
var rowCounter=sumtable.getRowCount();
var rowCounterMax=sumtable.getRowCount();
var objcount = 0;
var maxRow = 20;
var curcount=0;
var curcountmap=0;
//if (sumtable.getRowCount() < 20) maxRow = sumtable.getRowCount();
if (sumtable.getRowCount() < 20) maxRow = 15;
//loop through summary
for (var r = 1; r < 16 ; r++){
curcount = int(sumtable.getString (r,3));
curcountmap = map(curcount, 0, 711,1,80);
intensity_curcountmap = map(curcount, 0, 711,70,90);
//fishies.push(new Fish(x, y, diameter, speed, color,opacity, label, objectID, isHighlight));
mysteries.push(new Mystery(r,intensity_curcountmap,curcountmap,curcount));
}

}

function createTickers(mystery, roll) {
//this is the code to create the century "ticker line"
radius = 40
let ct =  0;

//let rows = detailtable.findRows(1, 'Mystery');
//let rows = detailtable.findRows('Default', 'Category');

let rows = detailtable.findRows(mystery.toString(), 'Mystery');
//print(detailtable);
//print('rows.length=' + rows.length);
//print('mystery=' + mystery);

switch(roll){
   case 1: 
   stroke(0,0,0);
   break;
   default:
   stroke(60,100,100);
   break;
}
strokeWeight(2);

for (let i = 0; i < rows.length; i++) {
    //print(rows[i].getString('name') + ': ' + rows[i].getString('type'));
   objcount = int(rows[i].getString('Count'));
   //objcount = int(detailtable.getString (d,4));
   century  = int(rows[i].getString('Century'));
   //century  = int(detailtable.getString (d,3));
   //mystery  = int(detailtable.getString (d,2));
   ct = map(century,0,2000,0, TWO_PI) - HALF_PI;
   lengthcnt = map(objcount, 1, 204, 8, 75);
   line(xpos[mystery-1] + cos(ct) * radius, ypos[mystery-1] + sin(ct) * radius , xpos[mystery-1] + cos(ct) * lengthcnt, ypos[mystery-1] + sin(ct) * lengthcnt);
  }
strokeWeight(0);
}

function draw() {
//translate(0,0);
//handle shift
//adjxby is the total amount to be shifted
//offsetx is the incremental movement
if (appstate==6)
    {
        //print('D6 appstate=' + appstate);
        //print('D6 Mobilemystery ' + mobilemystery);
 
       fill(46, 67, 64);
       circle(300,600,100);
       textStyle(ITALIC);
       textSize(28);
       fill(0,0,0);
       text ('Back',265,610);
       textStyle(NORMAL);

    if (mobilemystery > 0) 
        { 
        if (appstate==6 && adjxby < 0 && offsetx> adjxby)  
           {
           offsetx--;
           offsetx--;
           offsetx--;
           }

        if (appstate==6 && adjxby < 0 && offsetx< adjxby)  
           {
           offsetx++;
           offsetx++;
           offsetx++;
           }

        if (appstate==6 && adjxby > 0 && offsetx< adjxby)  
           {
           offsetx++;
           offsetx++;
           offsetx++;
           }

        if (appstate==6 && adjxby > 0 && offsetx> adjxby)  
           {
           offsetx--;
           offsetx--;
           offsetx--;
           }
        //handle y
        if (appstate==6 && adjyby < 0 && offsety> adjyby)  
           {
           offsety--;
           offsety--;
           offsety--;
           }

        if (appstate==6 && adjyby < 0 && offsety< adjyby)  
           {
           offsety++;
           offsety++;
           offsety++;
           }

        if (appstate==6 && adjyby > 0 && offsety< adjyby)  
           {
           offsety++;
           offsety++;
           offsety++;
           }
        if (appstate==6 && adjyby > 0 && offsety> adjyby)  
           {
           offsety--;
           offsety--;
           offsety--;
           }
       print("offsetx= " + offsetx + " offsety=" + offsety);
       translate(offsetx, offsety);

           xdiff = adjxby*(-1) + offsetx;
           ydiff = adjyby*(-1) + offsety;
           if (Math.abs(xdiff+ydiff) > 3)
            {
            //zoom = map(Math.abs(xdiff+ydiff),0,200,0.95,1);
            zoom = 1;
            scale(zoom);
            }
            else { scale(1)};
 
       }
       
    }
//if (appstate==5 || appstate==6) 
if (appstate==6 || appstate==5) 
    {
     if (mobilemystery==0)
        {
        //print('D5 Reset to annunciation');
        //print('D5 appstate=' + appstate);
        //print('D5 Mobilemystery ' + mobilemystery);
         offsetx = adjxby;
         offsety = adjyby;
         translate(offsetx, offsety);
        }

    }

//translate(offsetx, offsety);


//if (offsetx < 0) { offsetx++ }
//if (offsety > 0) { offsety-- }
//if (offsety < 0) { offsety++ }

//translate 

var radius = 40;  
background(0,20,20);

switch(appstate){
   case 1:
    tint(40,20,20);
    if (mobileinitial==true || mobile==true)
       {
    image(rosarybackground_mob,1,1,375,667);
       }
    else {
    image(rosarybackground,1,1,1400,800);//1400 800
    noTint();
    image(introimg,150,120,632/1.5,870/1.5);
        }

    textStyle(NORMAL);
    textFont("Perpetua");
    fill(20, 100, 100);

    if (mobile==true) 
       {
       textSize(40);
       text ('Catholic Art at the Met',5,300);
       text ('Through the Lens of',5,330);
       text ('the Holy Rosary',5,360);
       fill(46, 67, 64);
       circle(300,600,100);
       textStyle(ITALIC);
       textSize(28);
       fill(0,0,0);
       text ('Continue',255,610);
       }
       else 
       {
       textSize(60);
       text ('Catholic Art at the Met',40,60);
       text ('Through the Lens of the Holy Rosary',40,110);
    fill(1,0,87);
    textSize(20);
    let xset = 570;
    let yset = 180;
    let ysp = 19;
    text ('The rosary is made up of two things:',xset,yset+ysp*1);
    text ('mental prayer and vocal prayer.  In the',xset,yset+ysp*2);
    text ('Holy Rosary mental prayer is none other than',xset,yset+ysp*3);
    text ('mediation of the chief mysteries of the life',xset,yset+ysp*4);
    text ('death and glory of Jesus Christ and his',xset,yset+ysp*5);
    text ('Blessed Mother.  Vocal prayer consists in',xset,yset+ysp*6);
    text ('saying fifteen decades of the Hail Mary, each',xset,yset+ysp*7);
    text ('decade headed by an Our Father, while at the',xset,yset+ysp*8);
    text ('same  time mediating on and contemplating the',xset,yset+ysp*9);
    text ('fifteen principal virtues which Jesus and Mary',xset,yset+ysp*10);
    text ('practiced in the fifteen mysteries of the Holy Rosary.',xset,yset+ysp*11);
    textStyle(ITALIC);
    text ('St. Louis de Montfort, 1673-1716 ',xset,yset+ysp*13);
    textStyle(NORMAL);
    text ('In this visualization, I chose to use the narrative ',xset,yset+ysp*17);
    text ('structure of the rosary to guide the viewer through',xset,yset+ysp*18);
    text ('the vast array of Christian art available at the',xset,yset+ysp*19);
    text ('Metropolitan Museum of Art in New York City.',xset,yset+ysp*20);
    textStyle(ITALIC);
    text ('Douglas Locke, November, 2019.',xset,yset+ysp*22);
    textStyle(ITALIC);
    textSize(14);
    text ('Click anywhere to continue',xset+600,yset+ysp*26);
    textStyle(NORMAL);
    let xset3 = 30;
    let yset3 = 520;
    let ysp3 = 19;
    text ('The rosary mysteries are represented by the bright',xset3,yset3+ysp3*1);
    text ('large yellow beads.  The most common rosarys are',xset3,yset3+ysp3*2);
    text ('five decades, as it is most common to pray five decades',xset3,yset3+ysp3*3);
    text ('per day.  When saying a full fifteen decade rosary, one',xset3,yset3+ysp3*4);
    text ('simply repeats the cirlce three times. ',xset3+20,yset3+ysp3*5);
     }
    textStyle(NORMAL);
    break;
    case 2:
    if (mobile==true) 
      {
      noTint();
      image(introimg,-19,10,632/1.5,870/1.5);
    fill(1,0,87);
    textSize(13);
    let xset = 70;
    let yset = 80;
    let ysp = 13;
    textStyle(NORMAL);
    text ('The rosary is made up of two things:',xset,yset+ysp*1);
    text ('mental prayer and vocal prayer.  In the',xset,yset+ysp*2);
    text ('Holy Rosary mental prayer is none other than',xset,yset+ysp*3);
    text ('mediation of the chief mysteries of the life',xset,yset+ysp*4);
    text ('death and glory of Jesus Christ and his',xset,yset+ysp*5);
    text ('Blessed Mother.  Vocal prayer consists in',xset,yset+ysp*6);
    text ('saying fifteen decades of the Hail Mary, each',xset,yset+ysp*7);
    text ('decade headed by an Our Father, while at the',xset,yset+ysp*8);
    text ('same  time mediating on and contemplating the',xset,yset+ysp*9);
    text ('fifteen principal virtues which Jesus and Mary',xset,yset+ysp*10);
    text ('practiced in the fifteen mysteries of the Holy Rosary.',xset,yset+ysp*11);
    textStyle(ITALIC);
    text ('St. Louis de Montfort, 1673-1716 ',xset,yset+ysp*13);
    let xset3 = 67;
    let yset3 = 250;
    let ysp3 = 12;
    textStyle(NORMAL);
    text ('The rosary mysteries are represented by the bright',xset3,yset3+ysp3*1);
    text ('large yellow beads.  The most common rosarys are',xset3,yset3+ysp3*2);
    text ('five decades, as it is most common to pray five decades',xset3,yset3+ysp3*3);
    text ('per day.  When saying a full fifteen decade rosary, one',xset3,yset3+ysp3*4);
    text ('simply repeats the cirlce three times. ',xset3,yset3+ysp3*5);
       fill(46, 67, 64);
       circle(300,600,100);
       textStyle(ITALIC);
       textSize(28);
       fill(0,0,0);
       text ('Continue',255,610);
       textStyle(NORMAL);
      }

     else {
    let xset2 = 570;
    let yset2 = 180;
    let ysp2 = 19;
    fill(60,100,100);
    textSize(12);
    textFont("Perpetua");
    text ('START',640,625);
    image(imgarrow, m1_x-15,m1_y-100,30,30);
    //frameRate(1);
    //for (let i = 0; i < mysteries.length; i++) {
       //print('Made it to rest' + fr);
    //Text Legend for Annunciation
    fill(1, 0, 87);
    textSize(10);
    text ('1 A.D.',m1_x-10,m1_y-64);
    text ('500 A.D.',m1_x+65,m1_y);
    text ('1000 A.D.',m1_x-20,m1_y+75);
    text ('1500 A.D.',m1_x-100,m1_y);
    fill(1,0,87);
    textSize(18);
    text ('Below we see the first mystery.  Inside,',xset2,yset2+ysp2*1);
    text ('we see a highlighted object from the Met.',xset2,yset2+ysp2*2);
    text ('Ring width represents the number of objects in',xset2,yset2+ysp2*3);
    text ('the Met collection.  Tick marks identify centuries',xset2,yset2+ysp2*4);
    text ('in which pieces were made.', xset2,yset2+ysp2*5);
    text ('Now let\'s explore the rest of the mysteries.', xset2,yset2+ysp2*9);
    textStyle(ITALIC);
    textSize(18);
    text ('Click anywhere to continue',xset2+600,yset2+ysp2*26);
    textStyle(NORMAL);
    mysteries[0].show();
         }
    break;
   default:
    //frameRate(30);
   //display mysteries
   //scale(0.75);
   for (let i = 0; i < mysteries.length; i++) {
       mysteries[i].show();
       mysteries[i].rollover(mouseX, mouseY);
       //print('Made it to rest' + fr);
   }
   //display menu
   for (let m = 0; m < 8 ; m++) {
       menuitems[m].show();
       menuitems[m].rollover(mouseX, mouseY);
   }

}


//mobile
//fill(60);
fill(60);
//text('Appstate = ' + appstate, 700,20);
//text('Firstdraw = ' + firstdraw, 700,40);
//text('Framerate = ' + fr, 700,60);
//Doug
textSize(10);
if (window.innerWidth < 400) 
{
   mobile=true;
}
else
{
   mobile=false;
}
var debuglx = 350;
var debugly = 500;
/*text('' + window.innerWidth + 'x' + window.innerHeight, debuglx,debugly+20);
text('MobileInitial: ' + mobileinitial, debuglx,debugly+40);
text('Mobile: ' + mobile, debuglx,debugly+60);
text('Appstate: ' + appstate, debuglx,debugly+80);
text('adjxby: ' + adjxby, debuglx,debugly+100);
text('offsetx: ' + offsetx, debuglx,debugly+120);
text('adjyby: ' + adjyby, debuglx,debugly+140);
text('offsety: ' + offsety, debuglx,debugly+160);
text('MobileMystery: ' + mobilemystery, debuglx,debugly+180);
text('Zoom: ' + zoom, debuglx+110,debugly+20);
text('Diff: ' + (Math.abs(xdiff+ydiff)), debuglx+140,debugly+40);
*/
   //canvas = createCanvas(window.innerWidth, window.innerHeight);
// Loop through all mysteries 

//Text Labels for Object counts
/*
textSize(14);
text ('711 Objects',m10_x-180,m10_y+20);
text ('311 Objects',m1_x+45,m1_y+80);
text ('54 Objects',m6_x+100,m6_y+40);
text ('5 Objects',m13_x-140,m13_y+75);
*/

//Text Legend for Annunciation
/*
fill(1, 0, 87);
textSize(10);
text ('1 A.D.',m1_x-10,m1_y-64);
text ('500 A.D.',m1_x+65,m1_y);
text ('1000 A.D.',m1_x-20,m1_y+75);
text ('1500 A.D.',m1_x-80,m1_y);
*/

//Text Titles:  Main Title
/*
fill(36, 76, 82);
textSize(25);
text ('Catholic Art at the Met',450,360);
text ('Through the Lens of the Holy Rosary',400,390);
*/

//this is the code to create the century "ticker line"
/*
var ct =  0
for (var d = 1; d < detailtable.getRowCount() ; d++){
stroke(60,100,100);
strokeWeight(2);
objcount = int(detailtable.getString (d,3));
century  = int(detailtable.getString (d,2));
mystery  = int(detailtable.getString (d,0));
ct = map(century,0,2000,0, TWO_PI) - HALF_PI;
lengthcnt = map(objcount, 1, 204, 8, 75);
line(xpos[mystery-1] + cos(ct) * radius, ypos[mystery-1] + sin(ct) * radius , xpos[mystery-1] + cos(ct) * lengthcnt, ypos[mystery-1] + sin(ct) * lengthcnt);
}
*/

}

class Menu {
     constructor(country){
     this.x=mxpos[country-1];
     this.y=mypos[country-1];
     this.over = false; 
     this.country = country;
     if (country===menuchoice){
     this.menuchoice = true;
      }
     else
        {
     this.menuchoice = false;
        }
     }

     show() {
     //text 
     if(this.over){
     //print('country = ' + this.country + ' and this.over=' +this.over);
     //print('call highlighting menu');
     textStyle(BOLD);
     fill(60, 100, 100);
     textSize(20);
     text (cmenu[this.country-1], mxpos[this.country-1], mypos[this.country-1]);
     textStyle(NORMAL);
      }
     else if (this.menuchoice===false){
     fill(1, 0, 87);
     textSize(20);
     text (cmenu[this.country-1], mxpos[this.country-1], mypos[this.country-1]);
      }

     //current menu choice
     if(this.menuchoice){
     //circle(400,400,50);
     textStyle(BOLD);
     fill(20, 100, 100);
     textSize(20);
     text (cmenu[this.country-1], mxpos[this.country-1], mypos[this.country-1]);
     textStyle(NORMAL);
      }

     }

     rollover(px, py) {
     px=px+adjxby*(-1);
     py=py+adjyby*(-1);
     let d = dist(px, py, this.x, this.y);
     //print('menu country=' + this.country + 'd=' + d);
     this.over = d < 25;
     }

     setChoice(){
     //fill(50,50,50);
     //circle(400,400,950);
     //this.menuchoice=true;
     //menuchoice=this.country;
    if(this.over){
     //circle(400,400,50);
     print("Called setCHoice country=" +this.country);
     fill(60, 100, 87);
     textSize(20);
     text (cmenu[this.country-1], mxpos[this.country-1], mypos[this.country-1]);
     this.menuchoice=true;
      //window.open(base_url + this.objectID, "_blank");
    }
    else {
     this.menuchoice=false;
    }
    }

}//end class Menu

class Mystery {
       //x:0,
       //pass in mystery number. later we will pass in country, material)
       //country = 1 all , 2 italian  , 3 netherlandish
       //material = 1 all , 2 paintings
       //constructor (mystery, country, material)
       constructor(mystery,intensity_curcountmap, curcountmap, objcount_p) {
       //this.x = xpos[mystery+1],
       this.x = xpos[mystery-1],
       this.y = ypos[mystery-1],

       this.intensity_curcountmap = intensity_curcountmap;
       this.curcountmap = curcountmap;
       this.objcount_p = objcount_p;

       this.d = 50; 
       this.mystery=mystery;
       this.state=0;
       this.over = false;
       this.clicked = false;
       }

       show() {
       let radius = 40;
       //image.mask(circle(this.x, this.y, this.d));
       //fill(20);
       //img.mask(circle(this.x, this.y, this.d));
       //stroke(60);
       //image(img, this.x-25,this.y-25,50,50);
       //draw large ring
       //fill(49, this.intensity_curcountmap, this.intensity_curcountmap);
       if (this.over || (this.mystery==mobilemystery)){
       //if (this.over){
          //show text 
          strokeWeight(0);
          fill(20, 100, 100);
          textSize(20);
          textFont("Perpetua");
          //text(mystnames[this.mystery-1], this.x+xadj, this.y+yadj);
          text(mystnames[this.mystery-1], this.x+xadj[this.mystery-1], this.y+yadj[this.mystery-1]);
          textSize(15);
          fill(20, 70, 70);
          text (this.objcount_p + ' Objects', this.x+xadj[this.mystery-1]+10, this.y+yadj[this.mystery-1]+15);
        
          //bright yellow circle
          fill(49, 100, 100);
          circle(this.x,this.y,2*radius+this.curcountmap);
          stroke(0,20,20);
          createTickers(this.mystery,1);
          fill(65, 20, 20);
          circle(this.x,this.y,1.75*radius);
          noTint();
          //createTickers();
          fill(1, 0, 50);
          textSize(10);
          text ('1 A.D.',this.x-10,this.y-1*((2*radius+this.curcountmap)/2)-5);
          text ('500 A.D.',this.x+1*((2*radius+this.curcountmap)/2)+5,this.y);
          text ('1000 A.D.',this.x-20,this.y+1*((2*radius+this.curcountmap)/2)+9);
          //text ('1500 A.D.',this.x-1*(((2*radius+this.curcountmap)/2)-40),this.y);
          text ('1500 A.D.',this.x-1*((2*radius+this.curcountmap)/2)-40,this.y);
          }
          else
          {
          strokeWeight(0);
          fill(20, 50, 50);
          if (appstate < 3) fill(20, 100, 100);
          textSize(20);
          textFont("Perpetua");
          text(mystnames[this.mystery-1], this.x+xadj[this.mystery-1], this.y+yadj[this.mystery-1]);
          fill(49, 100, 50);
          //frameRate(60);
          circle(this.x,this.y,2*radius+this.curcountmap);
          stroke(0,20,20);
          createTickers(this.mystery,0);
          fill(65, 20, 20);
          circle(this.x,this.y,1.75*radius);
          if (appstate > 2) tint(40, 100, 95);
          } 

       defaultimgs[this.mystery-1].mask(maskImage);
       image(defaultimgs[this.mystery-1], this.x-35,this.y-35,70,70);

      if (this.clicked)
         {
         //defaultimgs[this.mystery-1].mask(maskImage);
         //image(defaultimgs[this.mystery-1], this.x-35,this.y-35,70,70);
         noTint();
         image(defaultimgs_fullsize[this.mystery-1], 450,200,300,300);
         if (this.mystery==8)
             {
             textStyle(ITALIC);
             textSize(20);
             text ('Christ Crowned With Thorns, and the Mourning Virgin', 450,530);
             text ('Adriaen Isenbrant', 545,550);
             text ('Netherlandish', 560,570);
             text ('ca. 1530-1540', 560,590);
             textStyle(NORMAL);
             }

         if (this.mystery==11)
             {
             textStyle(ITALIC);
             textSize(20);
             text ('The Nativity with Saints Jerome and Leonard', 450,530);
             text ('Gerard David', 555,550);
             text ('Netherlandish', 550,570);
             text ('ca. 1523', 580,590);
             textStyle(NORMAL);
             }

         if (this.mystery==3)
             {
             textStyle(ITALIC);
             textSize(20);
             text ('The Resurrection with the Pilgrims of Emmaus', 450,530);
             text ('Gerard David', 555,550);
             text ('Netherlandish', 550,570);
             text ('1510', 580,590);
             textStyle(NORMAL);
             }





         }


       }

       //test for rollover
       rollover(px, py) {
       px=px+adjxby*(-1);
       py=py+adjyby*(-1);
       let d = dist(px, py, this.x, this.y);
       this.over = d < this.d;
  }

       openLink(){
       if (this.over) {
       print('Mysteries:' + this.mystery);
       this.clicked = true;
        }
       else {
       this.clicked = false;
         }
       }

       setdefault(){
       }
  }

