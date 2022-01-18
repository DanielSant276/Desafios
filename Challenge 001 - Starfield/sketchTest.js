let dot = new Line(10, 5); 

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#000000");
  dot.show();
  console.log(dot.timerValue());
}