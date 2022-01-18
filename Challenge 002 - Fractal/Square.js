function Square(x, y, size) {
  this.size = size / 3
  this.x = x;
  this.y = y;

  this.generate = function () {
    var box = [];
    for (x = 0; x < 3; x++) {
      for (y = 0; y < 3; y++) {
        if (!(x == 1 && y == 1)) {
          let b = new Square(this.x + ((x/3) * this.size), this.y + ((y/3) * this.size), this.size);
          box.push(b);
        }
      }
    }
    return box;
  }

  this.show = function () {
    stroke("#000000");
    console.log(this.size);
    rect(x, y, this.size, this.size);
  }

  this.delete = function () {
    clear();
    console.log("deleta");
  }
}