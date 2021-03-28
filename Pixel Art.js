var w = 20;
var cols;
var rows;
var strokeColor = 0;
let rSlider, gSlider, bSlider;

function setup() {
  createCanvas(600,600);
  background(255);
  
  //Create color control sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}
 
function draw() {
    
  // Create the grid
  
  cols = floor(width / w);
  rows = floor(height / w);
   
  for (var i = 0; i< cols; i++){
    for (var j = 0; j< rows; j++){
      noFill();
      rect(i*w,j*w ,w,w);
    }
  } 
  
  //Display the color controler
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  push();
  fill(255);
  stroke(0);
  rect(0,0,12*w,6*w)
  pop();
  push();
  fill(r,g,b);
  noStroke();
  text('red '+ r, rSlider.x * 2 + rSlider.width, 35);
  text('green '+ g, gSlider.x * 2 + gSlider.width, 65);
  text('blue '+ b, bSlider.x * 2 + bSlider.width, 95);
  pop();
  
  //Drawing
  if (mouseIsPressed) {
    x = floor(mouseX/w);
    y = floor(mouseY/w);
       
    //Color the cell
    if (mouseButton == LEFT){
      if (x <= 11 && y <= 5){
        push();
        fill(255);
        noStroke();
        rect(x*w,y*w ,w,w);
        pop();
      }
      else {
        push();
        fill(r,g,b);
        rect(x*w,y*w ,w,w);
        pop();
      }
    }
  
    //Undo coloring
    else if (mouseButton == RIGHT){
      fill(255);
      rect(x*w,y*w ,w,w);
    }
  }
}

//Grid display option
function keyPressed(){ 
  if(keyCode == BACKSPACE){
    strokeColor = 255 - strokeColor;
    stroke(strokeColor);
  }
}