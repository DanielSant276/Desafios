let spaceWidth = 40;
let spaceHeight = 40;
let speed = 5;
let ship;

let bulletArr = [];
let bullet;

let invaderStartX = 50;
let invaderStartY = 100;
let invaderSize = 50;
let invaderMovement = 1;
let invaderArr = [];
let invader;

function setup() {
  createCanvas(800, 600);
  ship = new Ship(spaceWidth, spaceHeight);
  let nextPosition = 0;
  for (i = 0; i < 6; i++) {
    invader = new Invader(invaderStartX + nextPosition, invaderStartY, invaderSize);
    invaderArr.push(invader);
    nextPosition += 110;
  }
}

function draw() {
  background("#000000");

  for (i = 0; i < bulletArr.length; i++) {
    bulletArr[i].show();
    bulletArr[i].update();
    if (bulletArr[i].delete()) {
      bulletArr.splice(i, 1);
    }
  }

  for (i = 0; i < invaderArr.length; i++) {
    invaderArr[i].show();
    invaderArr[i].update();

    if ((invaderArr[i].x + invaderArr[i].speedX < 5) || (invaderArr[i].x + invaderArr[i].speedX + invaderArr[i].size > width - 5)) {
      for (j = 0; i < invaderArr.length; j++) {
        invaderArr[j].direction = -1;
      }
    }
  }

  ship.draw();
  ship.update();

  invader.show();
}

function keyReleased() {
  if (key != ' ') {
    ship.direction(0);
  }
}

function keyPressed() {
  if (key == ' ') {
    let newBullet = new Bullet(ship.x + (ship.spaceWidth / 2));
    bulletArr.push(newBullet);
  }

  if (keyCode == LEFT_ARROW) {
    ship.direction(-speed);
  }
  else if (keyCode == RIGHT_ARROW) {
    ship.direction(speed);
  }
}