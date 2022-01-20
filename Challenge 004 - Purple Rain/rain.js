function Rain (x) {
  this.x = x;
  this.y = random(height);
  
  this.generateSpeed = function () {
    return random(20, 30);
  }
  
  this.speedY = this.generateSpeed();
  
  this.opacityGenerate = function () {
    return Math.floor(random(255));
  }

  this.opacity = this.opacityGenerate();

  this.generateX = function () {
    return random(width);
  }

  this.show = function () {
    fill(138, 43, 226, this.opacity);
    noStroke();
    rect(this.x, this.y, sizeX, sizeY);
  }

  this.update = function () {
    this.y += this.speedY;

    if (this.y > height) {
      this.x = this.generateX();
      this.speedY = this.generateSpeed();
      this.y = - sizeY;
      this.opacity = this.opacityGenerate();
    }
  }
}