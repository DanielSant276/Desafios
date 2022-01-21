function Invader(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size; 
  this.speedX = 4;
  this.direction = 1
  
  this.update = function () {
    this.x += this.speedX * this.direction;
  }

  this.show = function () {
    fill('#ffffff');
    square(this.x, this.y, this.size);
  }
}