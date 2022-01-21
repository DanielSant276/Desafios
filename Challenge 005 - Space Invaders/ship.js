function Ship(spaceWidth, spaceHeight) {
  this.spaceWidth = spaceWidth;
  this.spaceHeight = spaceHeight;
  this.x = (width / 2) - (this.spaceWidth / 2);
  this.y = 585;
  this.speedX = 0;

  this.direction = function (direction) {
    this.speedX = direction;
  }

  this.update = function () {
    if ((this.x + this.speedX > 5) && (this.x + this.speedX + this.spaceWidth < width - 5)) {
      this.x += this.speedX;
    }
  }

  this.draw = function () {
    fill("#ffffff");
    triangle(this.x, this.y, (this.x + this.spaceWidth), this.y, (this.x + (this.spaceWidth / 2)), (this.y - this.spaceHeight));
  }
}