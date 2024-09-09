
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img;
let firstRun = true

let y = 120;


var sizegrow = 90; //disco ball size
var waveheight = 200; //movemet of waves up and down 
var waveheighttwo = 150 // second set of waves movement
var waveheightthree = 100 // third set of waves movement

let fishX = 275
let fishY = 275


function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(0, 107, 165)


////////////////////////////////////////////////////////////////////////////////////////////////

//wave base 3
fill(85, 226, 233) // base of sound wave colour
noStroke(); 
rect(0,0,550,100);//base of sound wave


//waves circles  middle blue circles 
fill(4, 186, 222) // colour of hidden wave circles (must match background)
noStroke ();
ellipse(565, waveheightthree, 90, 70);//wave far right
ellipse(475, waveheightthree, 90, 70);//wave three right
ellipse(385, waveheightthree, 90, 70);//wave two right
ellipse(295, waveheightthree, 90, 70);//wave one right
ellipse(205, waveheightthree, 90, 70);//wave middle
ellipse(115, waveheightthree, 90, 70);//wave one left
ellipse(25, waveheightthree, 90, 70);//wave two left 
ellipse(-65, waveheightthree, 90, 70);//far left
waveheightthree = waveheightthree + 0.4; //speed of height growth
if(waveheightthree > 100){
waveheightthree = 90;
}


//wave base 2
fill(4, 186, 222) // base of sound wave colour
noStroke(); 
rect(0,98,550,100);//base of sound wave

//wave set two
//waves circles light blue circles
fill(4, 150, 199) // colour of hidden wave circles (must match background)
noStroke ();
ellipse(520, waveheighttwo, 90, 70);//wave far right
ellipse(430, waveheighttwo, 90, 70);//wave two right
ellipse(340, waveheighttwo, 90, 70);//wave one right
ellipse(250, waveheighttwo, 90, 70);//wave middle
ellipse(160, waveheighttwo, 90, 70);//wave one left
ellipse(70, waveheighttwo, 90, 70);//wave two left 
ellipse(-20, waveheighttwo, 90, 70);//far left
waveheighttwo = waveheighttwo + 0.4; //speed of height growth
if(waveheighttwo > 150){
waveheighttwo = 140;
}

//wave base 1
fill(4, 150, 199) // base of sound wave colour
noStroke(); 
rect(0,150,550,50);//base of sound wave
//wave set one background blue circles
//waves circles 
fill(0, 107, 165) // colour of hidden wave circles (must match background)
noStroke ();
ellipse(565, waveheight, 90, 70);//wave far right
ellipse(475, waveheight, 90, 70);//wave three right
ellipse(385, waveheight, 90, 70);//wave two right
ellipse(295, waveheight, 90, 70);//wave one right
ellipse(205, waveheight, 90, 70);//wave middle
ellipse(115, waveheight, 90, 70);//wave one left
ellipse(25, waveheight, 90, 70);//wave two left 
ellipse(-65, waveheight, 90, 70);//far left
waveheight = waveheight + 0.4; //speed of height growth
if(waveheight > 200){
waveheight = 190;
}
////////////////////////////////////////////////////////////////////////////////////
DrawFish(fishX,fishY);

fishX = fishX + 0.4; //speed of height growth
if(fishX > 100){
fishX = 500;
}

function DrawFish (fishX, fishY) {

  fill(255)
  noStroke();
  triangle(fishX-45, fishY-75, fishX-85, fishY-35, fishX-85, fishY-115) ///fish body
  triangle(fishX-85, fishY-75, fishX-100, fishY-60, fishX-100, fishY-90) //fish tail 

  fill(0)
ellipse(fishX-55, fishY-75, 5, 5,)

}

//////////////////////////////////////////////////////////////////////////////////////

//bubbles

fill(230, 238, 242, 50)
ellipse(275,300,10,10)
ellipse(200,370,10,10)
ellipse(100,200,10,10)
ellipse(400,400,10,10)
ellipse(500,380,10,10)
ellipse(50,400,10,10)
ellipse(80,500,10,10)
ellipse(275,580,10,10)


////////////////////////////////////////////////////////////////////////////////

//rocks

fill(150)
ellipse(230, 650,150,120)//left middle small
ellipse(50, 650,230,200)//left far
ellipse(500, 650,230,200)//right far
ellipse(380, 650,130,100) //right middle small



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