let sizeX = 2;
let sizeY = 40;
let rain = [];
let rainTotal = 500;

function setup() {
  createCanvas(800, 600);
  for (i = 0; i < rainTotal; i++) {
    var newRain = new Rain(random(width));
    rain.push(newRain);
  }
}

function draw() {
  background("#E6E6FA");
  for (i = 0; i < rainTotal; i++) {
    rain[i].show();
    rain[i].update();
  }
}