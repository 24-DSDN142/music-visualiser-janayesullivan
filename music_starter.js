
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img;
let firstRun = true

let y = 120;


var sizegrow = 90; //disco ball size
var waveheight = 440; //movemet of waves up and down 
var waveheighttwo = 540 // second set of waves movement
var waveheightthree = 640 // third set of waves movement

let fishSize = 40
let fishX = 200
let fishY = 200


function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(186, 210, 232)

//lights
fill(235, 240, 242, 80)
noStroke();
triangle (50, 50, 50, 50, 50, 50);


//fish 
DrawFish(fishX, fishY)


function DrawFish (fishX, fishY) {
fill(255)
noStroke();
triangle(fishX+45, fishY+75, fishX+85, fishY+35, fishX+85, fishY+115)
triangle(fishX+85, fishY+75, fishX+100, fishX+60, fishX+100, fishY+90)

}



//wave set one 

//wave base
fill(218, 235, 245) // base of sound wave colour
noStroke(); 
rect(0,450,550,100);//base of sound wave


//waves circles 
fill(186, 210, 232) // colour of hidden wave circles (must match background)
noStroke ();
ellipse(565, waveheight, 90, 70);//wave far right
ellipse(475, waveheight, 90, 70);//wave three right
ellipse(385, waveheight, 90, 70);//wave two right
ellipse(295, waveheight, 90, 70);//wave one right
ellipse(205, waveheight, 90, 70);//wave middle
ellipse(115, waveheight, 90, 70);//wave one left
ellipse(25, waveheight, 90, 70);//wave two left 
ellipse(-65, waveheight, 90, 70);//far left

waveheight = waveheight + 0.42; //speed of height growth

if(waveheight > 450){
waveheight = 440;

}

//wave set two

//wave base
fill(174, 209, 230) // base of sound wave colour
noStroke(); 
rect(0,520,550,100);//base of sound wave

//waves circles 
fill(218, 235, 245) // colour of hidden wave circles (must match background)
noStroke ();
ellipse(520, waveheighttwo, 90, 70);//wave far right
ellipse(430, waveheighttwo, 90, 70);//wave two right
ellipse(340, waveheighttwo, 90, 70);//wave one right
ellipse(250, waveheighttwo, 90, 70);//wave middle
ellipse(160, waveheighttwo, 90, 70);//wave one left
ellipse(70, waveheighttwo, 90, 70);//wave two left 
ellipse(-20, waveheighttwo, 90, 70);//far left

waveheighttwo = waveheighttwo + 0.28; //speed of height growth

if(waveheighttwo > 520){
waveheighttwo = 510;


}

//wave set there

//wave base
fill(114, 156, 181) // base of sound wave colour
noStroke(); 
rect(0,590,550,100);//base of sound wave

//waves circles 
fill(174, 209, 230) // colour of hidden wave circles (must match background)
noStroke ();
ellipse(565, waveheightthree, 90, 70);//wave far right
ellipse(475, waveheightthree, 90, 70);//wave three right
ellipse(385, waveheightthree, 90, 70);//wave two right
ellipse(295, waveheightthree, 90, 70);//wave one right
ellipse(205, waveheightthree, 90, 70);//wave middle
ellipse(115, waveheightthree, 90, 70);//wave one left
ellipse(25, waveheightthree, 90, 70);//wave two left 
ellipse(-65, waveheightthree, 90, 70);//far left

waveheightthree = waveheightthree + 0.14; //speed of height growth

if(waveheightthree > 590){
waveheightthree = 580;

}

//flowers 
fill(275)
ellipse(120, 110, sizegrow, sizegrow); // ball
ellipse(420, 110, sizegrow, sizegrow);


sizegrow = sizegrow + 0.3; //speed of movement

if(sizegrow > 100){ //loop (no bigger than ())
sizegrow = 90; //loop restarts at ())

}






}














//function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(100)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  


   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
//}