class Line {
  constructor(max, min) {
    this.x = Math.floor(Math.random() * (800 - 10)) + 10;
    this.y = Math.floor(Math.random() * (600 - 10)) + 10;
    this.timer = Math.floor(Math.random() * (max - min)) + min;
    this.radius = 10;
  } 
  
  timerValue() {
    return this.timer;
  }

  decreaseTimer() {
    if (frameCount % 60 == 0) {
      if (this.timer >= 0) {
        this.timer--;
      }
      else {
        this.apaga();
      }
    }
  }

  show() {
    fill("#ffffff");
    circle(this.x, this.y, this.radius);
    this.decreaseTimer();
  }

  apaga() {
    fill("#000000");
  }
}

