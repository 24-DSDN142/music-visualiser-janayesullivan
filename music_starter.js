
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let img;
let firstRun = true

let y = 120;


let sizegrow = 90; //size
let waveheight = 200; //movemet of waves up and down 
let waveheighttwo = 150 // second set of waves movement
let waveheightthree = 100 // third set of waves movement
let rockheight = 650
let rockwidth = 200

let fishX = 275
let fishY = 275

let bubbleX = 200
let bubbleY = 200

let rockX = 0
let rockY = 0

let crownX = 100
let crownY = 100

let bubblesizeW = 10
let bubblesizeL = 10



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  let color1 = color(140, 207, 230); // Dark Blue
  let color2 = color(4, 150, 199); // Light Blue
  let color3 = color(134, 203, 217); // Aqua Blue

  function getBackgroundColor(vocal) {
    let color;
    if (vocal < 33) {
      color = lerpColor(color1, color2, vocal / 33); // Blend between color1 and color2
    } else if (vocal < 66) {
      color = lerpColor(color2, color3, (vocal - 33) / 33); // Blend between color2 and color3
    } else {
      color = lerpColor(color3, color1, (vocal - 66) / 34); // Blend between color3 and color1
    }
    return color;
  }

  let bgColor = getBackgroundColor(vocal);
  let circleColor = getBackgroundColor(vocal); // This will be used for wave circles

  background(bgColor);
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

waveheightthree =map(drum, 0, 100, 90, 120);



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

waveheighttwo =map(drum, 0, 100, 140, 170);

  
//wave base 1



fill(4,150,199)// Base of sound wave color
noStroke(); 
rect(0,150,550,50);//base of sound wave
//wave set one background blue circles
//waves circles 
fill(circleColor) // colour of hidden wave circles (must match background)
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

waveheight =map(drum, 0, 100, 190, 220);


////////////////////////////////////////////////////////////////////////////////////



  fill(255)
  noStroke();
  triangle(fishX, fishY, fishX-40, fishY+40, fishX-40, fishY-40) ///fish body
  triangle(fishX - 40, fishY, fishX-55, fishY+15, fishX-55, fishY-15) //fish tail 

  fill(0)
ellipse(fishX-10, fishY, 5, 5,)



fishX = fishX + 0.6; //movement 
if(fishX > 600){
fishX = 0;
}




//////////////////////////////////////////////////////////////////////////////////////

//bubbles

fill(230, 238, 242, 80)
ellipse(bubbleX+75,bubbleY+100,bubblesizeW,bubblesizeL)
ellipse(bubbleX,bubbleY+170,bubblesizeW,bubblesizeL)
ellipse(bubbleX-100,bubbleY,bubblesizeW,bubblesizeL)
ellipse(bubbleX+200,bubbleY+200,bubblesizeW,bubblesizeL)
ellipse(bubbleX+300,bubbleY+180,bubblesizeW,bubblesizeL)
ellipse(bubbleX-150,bubbleY+200,bubblesizeW,bubblesizeL)
ellipse(bubbleX+180,bubbleY+300,bubblesizeW,bubblesizeL)
ellipse(bubbleX+75,bubbleY+380,bubblesizeW,bubblesizeL)


bubbleX = bubbleX + 0.2; //movement of bubbles
if(bubbleX > 550){
bubbleX = -100;
}



ellipse(bubbleX-480,100,bubblesizeW,bubblesizeL)
ellipse(bubbleX-300,310,bubblesizeW,bubblesizeL)
ellipse(bubbleX-100,200,bubblesizeW,bubblesizeL)
ellipse(bubbleX-180,460,bubblesizeW,bubblesizeL)
ellipse(bubbleX-230,400,bubblesizeW,bubblesizeL)
ellipse(bubbleX-290,390,bubblesizeW,bubblesizeL)
ellipse(bubbleX-500,500,bubblesizeW,bubblesizeL)
ellipse(bubbleX-310,580,bubblesizeW,bubblesizeL)

bubbleX = bubbleX + 0.5; //movement of bubbles
if(bubbleX > 800){
bubbleX = -500;
}

bubblesizeW =map(bass, 50, 100, 10, 30);
bubblesizeL =map(bass, 50, 100, 10, 30);

//crown
DrawCrown(crownX,crownY);

crownY = crownY + 0.15; //movement of bubbles
if(crownY > 600){
crownY = -40;
}


function DrawCrown (crownX,crownY){

//crown
fill(235, 207, 33)
rect(100,crownY, 50, 20)//base

triangle(crownX, crownY, crownX+10, crownY-10, crownX+20, crownY);//left
triangle(crownX+15, crownY, crownX+25, crownY-10, crownX+35, crownY);//middle
triangle(crownX+30, crownY, crownX+40, crownY-10, crownX+50, crownY);//right


crownY =map(words, 0, 50, 10, 30);

////////////////////////////////////////////////////////////////////////////////

//rocks

fill(150)
ellipse(rockX-30, rockheight,rockwidth-50,120)//left middle small
ellipse(rockX-150, rockheight,rockwidth+30,200)//left far
ellipse(rockX+300, rockheight,rockwidth+30,200)//right far
ellipse(rockX+180, rockheight,rockwidth-70,100) //right middle small

rockX = rockX + 0.3; //movement of bubbles
if(rockX > 800){
rockX = -rockwidth;
}

rockheight =map(drum, 0, 100, 540, 550);
rockwidth =map(counter, 0, 100, 250, 300);



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