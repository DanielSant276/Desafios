function Invader(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size; 
  this.speedX = 1.5;
  this.direction = 1;
  
  this.deleteInvader = function () {
    this.speedX = 0;
    this.y = -5000;
  }

  this.nextRow = function () {
    this.y += 30;
  }

  this.update = function () {
    this.x += this.speedX * this.direction;
  }

  this.show = function () {
    fill('#ffffff');
    square(this.x, this.y, this.size);
  }
}