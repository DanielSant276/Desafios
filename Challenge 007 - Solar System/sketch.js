let star;
let starDistance = 0;
let starRadius = 50;
let starSize = 150;

function setup() {
  createCanvas(800, 600);
  star = new Planet(starRadius, starDistance, 0, random(TWO_PI));
  star.createMoon(5, 1);
}

function draw() {
  background("#000000");
  translate(width/2, height/2);
  star.show();
  star.orbit();
}