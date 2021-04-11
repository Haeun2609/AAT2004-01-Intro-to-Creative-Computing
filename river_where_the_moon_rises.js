let xspacing = 8; // Distance between each horizontal location
let w;
let period = 450.0; // How many pixels before the wave repeats
let dx; 
let yvalues; 
let waves = [];
let d;
let xmoon = 300;
let ymoon = 130;
let overmoon = false;
let locked = false;
let xOffset = 0;
let yOffset = 0;
let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Create an array to store height values for the wave.
  w = width +8; // width of entire wave
  dx = (TWO_PI / period) * xspacing; // Value for incrementing x
  yvalues = new Array(floor(w/ xspacing));
  
  //Create an array to store waves.
  for (let i = 0; i <= 25 ; i++){
    waves[i] = new Wave(random(1,2) * 20, i + random(-5,5), random(0,200))
  }
  
  //Create an array to store stars.
  for (let i = 0; i <= 100 ; i++){
    stars[i] = new Star(random(width), random(2 * height/3 - 40),random(2,10))
  }
}

function draw() {
  background(16,68,115);
  push();
  fill(249,243,207);
  noStroke();
  
  //Draw stars
  for (let i = 0; i < stars.length; i++){
    stars[i].show();
  }
  
  //Draw moon
  let d = dist(mouseX, mouseY, xmoon, ymoon)
  if (d <= 50){
   overmoon = true;
  }
  if (ymoon <= height/2){
    circle(xmoon,ymoon,100);
  } else {
    circle(xmoon,height/2,100);
  }
  pop();
  
  //Draw waves
  for (let i = 0; i<waves.length; i++){
    waves[i].calcWave();
    waves[i].renderWave();
  }
}

//Define class Wave
class Wave{
  constructor(amp, theta,del) {
    this.amplitude = amp;
    this.theta = theta;
    this.del = del
  }
  
  calcWave(){
    this.theta += 0.02;

    // For every x value, calculate a y value with sine function
    let x = this.theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = (sin(x) * this.amplitude) + this.del ;
      x += dx;
    }
  }
  
  renderWave() {
    noStroke();
    // Draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues.length; x++) {
      d = dist(x * xspacing, (height / 2) + yvalues[x], xmoon, height - ymoon)
      if (d<=100 || (abs(x * xspacing - xmoon) <100) && (height / 2 + yvalues[x]  < (height - ymoon))){
        fill (240,228,168);
      } else {
        fill(8,41,95);
      }
      ellipse(x * xspacing, height / 2 + yvalues[x]+50, 2, 2);
    }
  }  
}

function mousePressed() {
  if (overmoon) {
  locked = true;
  xOffset = mouseX - xmoon;
  yOffset = mouseY - ymoon;
  }
}

function mouseDragged() {
  if (locked && mouseY < 2*height/3 - 50) {
    xmoon = mouseX - xOffset;
    ymoon = mouseY - yOffset;
  }
}

//Define class Star
class Star{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  show(){
    circle(this.x,this.y,this.size);
  }
}