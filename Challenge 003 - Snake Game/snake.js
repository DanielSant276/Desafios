function Snake(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speedX = 1;
  this.speedY = 0;
  this.tail = [];

  this.show = function() {
    fill(255);
    stroke("#000000")
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, this.size, this.size);
    }
    rect(this.x, this.y, this.size, this.size);
  };
  
  this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        points = 0;
        this.tail = [];
      }
    }
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    
    if (points >= 1) {
      this.tail[points - 1] = createVector(this.x, this.y);
    }

    if ((this.x + this.speedX * grid >= width) || (this.x + this.speedX * grid < 0)) {
      this.speedX = 0;
    }
    else if ((this.y + this.speedY * grid >= height) || (this.y + this.speedY * grid < 0)) {
      this.speedY = 0;
    }
    else {
      this.x = this.x + this.speedX * grid;
      this.y = this.y + this.speedY * grid;
    }

    this.lastX = this.x;
    this.lastY = this.y;
  }

  this.position = function (posX, posY) {
    this.x = posX;
    this.y = posY;
  }

  this.direction = function (speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
  }
}