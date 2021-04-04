var umbrella;
var rain = [];
var c = 255;
var font;
var d;
var a = 0;


function preload(){
  font = loadFont('UVF Legendaria.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0;i <=600; i++){
    rain[i]= new Rain();
  }
}
function draw(){
  background(0);
  for (var i = 0;i <= 600; i++){
    rain[i].show();
    rain[i].fall();
  }
  if (c===0){
    umbrella = new Umbrella(mouseX,mouseY);
    umbrella.show();
  } 
  if (c===255){
    umbrella = new Umbrella(width/2, height/2);
    umbrella.show();
    push();
    fill(0);
    noStroke();
    rect(width/2 -150,height/2,300,height);
    pop();
  }
  
  push();
  textAlign(CENTER,CENTER);
  textFont(font);
  textSize(240);
  fill(255,255,c);
  noStroke();
  text('han', width/2-20, height/2);
  pop();
}
function mouseClicked(){
  d = dist(mouseX,mouseY,width/2,height/2);
  if (d <=10 ){
    c = 0;
  }
}

function keyPressed(){
  switch(keyCode){
    case(RIGHT_ARROW):
      a = 5;
      break;
    case(LEFT_ARROW):
      a = -5;
      break;
    default:
      a = 0;
  }
  
}

class Rain{
  constructor(){
  this.x = random(width);
  this.y = random(height);
  var z = random(20);
  this.yspeed = map(z,0,20,4,10);
  this.len = map(z,0,20, 10,20);
  this.thick = map(z,0,20,1,3);
  } 
  
  show(){
    push();
    stroke(255);
    strokeWeight(this.thick);
    line(this.x,this.y,this.x+a,this.y+this.len);
    pop();
  }
  
  fall(){
    this.y += this.yspeed;
    if ( this.y>= height){
      this.y = random(100);
      this.x = random(width);
    }
  }
}

class Umbrella{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  
  show(){
    push();
    fill(0);
    noStroke();
    quad(this.x-150,this.y,this.x+150,this.y,this.x+150+2*a,this.y+height,this.x-150+2*a,this.y+height);
    pop();
    
    push();
    fill(255,255,c);
    stroke(0);
    rect((this.x-2), (this.y-154), 4, 280);
    arc(this.x, this.y, 300, 280, PI, TWO_PI, OPEN);
    arc(this.x, this.y, 150, 280, PI, TWO_PI, OPEN);
    line(this.x, this.y, this.x, (this.y-140));
    arc((this.x-8), (this.y+125), 20, 24, 0, PI, OPEN);
    pop();
    
    push();
    fill(0); 
    noStroke();
    arc((this.x-(75*3/2)), this.y, 75, 30, PI, TWO_PI, OPEN);
    arc((this.x-(75*1/2)), this.y, 75, 30, PI, TWO_PI, OPEN);
    arc((this.x+(75*1/2)), this.y, 75, 30, PI, TWO_PI, OPEN);
    arc((this.x+(75*3/2)), this.y, 75, 30, PI, TWO_PI, OPEN)
    arc((this.x-8), (this.y+125), 12, 16, 0, PI, OPEN);
    pop();
  }
}

