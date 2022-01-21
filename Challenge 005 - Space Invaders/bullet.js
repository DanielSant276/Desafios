function Bullet (x) {
  this.x = x;
  this.y = 550;
  this.speedY = -5;

  this.delete = function () {
    if (this.y < 0) {
      return true;
    }
    return false;
  }

  this.update = function () {
    this.y += this.speedY;
  }

  this.show = function () {
    fill("#777777");
    circle(this.x, this.y, 15);
  }
}