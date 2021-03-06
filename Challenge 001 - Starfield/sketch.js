var stars = [];

let speed;

function setup() {
  createCanvas(800, 800);
  for(i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background("#000000");
  translate(width/2, height/2);
  for(i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}