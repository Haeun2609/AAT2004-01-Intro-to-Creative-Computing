let img;
let font;
let cnv;
let greet;
let inp;
let msg = [];
let s;
let paint = false;

function preload() {
  img = loadImage("IMG_1077.jpg");
  font = loadFont("RobotoMono-Bold.ttf");
}

function setup() {
  img.resize(0, windowHeight);
  cnv = createCanvas(img.width, img.height);
  s = height / 30;

  inp = createInput("");
  inp.position(
    windowWidth / 2 - inp.width / 2,
    windowHeight / 2 - inp.height / 2
  );

  greet = createDiv("Your words of love");
  greet.style("font-size", "40px");
  greet.style("color", "#ff0000");
  greet.position(inp.x - 65, inp.y - 75);
}
function draw() {
  msg = split(inp.value(), " ");
  if (keyCode === ENTER) {
    greet.hide();
    inp.hide();
    paint = true;
  }
  if (paint == true) {
    fill(img.get(mouseX, mouseY));
    noStroke();
    textFont(font);
    textSize(s);
    if (mouseIsPressed) {
      if (key === "h" || key === "H") {
        heart(mouseX, mouseY - s / 4, s);
      } else if (key === "m" || key === "M") {
        let txt = msg[floor(random(msg.length - 1))];
        text(txt, mouseX - textWidth(txt) / 2, mouseY + s / 2);
      }
    }
    if (key === "a" || key === "A") {
      let ix = random(width);
      let iy = random(height);
      fill(img.get(ix, iy));
      heart(ix, iy - s / 4, s);
    }
    if (key ==='s' || key === 'S'){
      let name = 'paintmylove' + '_' + hour() + '_' + minute() + '.png';
    save(cnv, name);
      noLoop();
    }
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
 