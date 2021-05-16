function setup() {
  createCanvas(600, 400);
  background(0);
  
  brushcolor = createSpan('Color: ')
  brushcolor.position(0,height + 25)
  bcolor = createColorPicker('#edebeb');
  bcolor.position(brushcolor.width + 5, brushcolor.y + 2)
  bcolor.size(100,10);
  
  brushsize = createSpan('Brush size: ')
  brushsize.position(bcolor.x + bcolor.width+5, brushcolor.y)
  bsize = createSlider(0,50,50)
  bsize.position(brushsize.x + brushsize.width + 5, bcolor.y - 2 )
}

function draw(){
  if (mouseIsPressed){
    brush(mouseX,mouseY,bsize.value())
  }
}

function brush(x, y, r){
  translate(x,y);
  let currentX = 0; 
  let currentY = 2.2;
  noFill();
  stroke(bcolor.color());
  strokeWeight(1);
  for (let d = 0; d <= 2500; d ++){
    if (dist(currentX, currentY, 0,0) < r/2){
      point(currentX, currentY);
    }
      currentX += random(-1,1);
      currentY += random(-1,1);
    
  }
}