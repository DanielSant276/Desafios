let cell;
let cellArr = [];
let initialX;
let initialY;
let cellInitialQuantity = 5;
let cellInicialSize = 50;
let timer = 0;

function setup() {
  createCanvas(800, 600);
  frameRate(60);

  for (i = 0; i < cellInitialQuantity; i++) {
    initialX = random(100, 600);
    initialY = random(50, 400);
    cell = new Cell(initialX, initialY, cellInicialSize)
    cellArr.push(cell);
  }
}

function draw() {
  background("#ffffff");
  for (i = 0; i < cellArr.length; i++) {
    cellArr[i].show();
    cellArr[i].update();
  }

  if (frameCount % 60 == 0) {
    timer++;

    if (timer == 5) {
      timer = 0;
      let length = cellArr.length
      for (i = 0; i < length; i++) {
        cellArr[i].divide();
      }
    }
  }
}

function mouseClicked() {
  let length = cellArr.length
  for (i = 0; i < length; i++) {
    cellArr[i].divide();
  }
}