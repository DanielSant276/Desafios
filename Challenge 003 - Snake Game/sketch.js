let startPositionX = 90;
let startPositionY = 90;
let size = 30;
let speed = 3;
let lastKey;
let grid = 30;
let snake = new Snake(startPositionX, startPositionY, size);
let food;
var points = 0;

function setup() {
  createCanvas(900, 600);
  food = new Food(width, height);
  frameRate(5);
}

function draw() {
  background("#000000");
  snake.death();
  food.show();
  if (snake.x == food.x && snake.y == food.y) {
    points++;
    food.generate();
  }
  snake.show();
  snake.update();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.direction(0, -1);
  }
  else if (keyCode == DOWN_ARROW) {
    snake.direction(0, 1);
  } 
  else if (keyCode == LEFT_ARROW) {
    snake.direction(-1, 0);
  } 
  else if (keyCode == RIGHT_ARROW) {
    snake.direction(1, 0);
  }
}

