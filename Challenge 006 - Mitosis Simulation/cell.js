function Cell(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.generateMove = function () {
    return random(-1.5, 1.5);
  }

  this.update = function () {
    this.x += this.generateMove();
    this.y += this.generateMove();
  }

  this.show = function () {
    fill(255, 0, 0, 80);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  this.divide = function () {
    console.log("divide");
    let newCell = new Cell (this.x, this.y, (3 * (this.size/4)));
    cellArr.push(newCell);
    this.size = (3 * (this.size/4));
  }
}