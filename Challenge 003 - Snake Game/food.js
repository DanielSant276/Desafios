function Food(width, height) {
  this.x = Math.ceil(Math.random() * (width/size)) * size;
  this.y = Math.ceil(Math.random() * (height/size)) * size;
  this.size = size;

  this.generate = function() {
    this.x = Math.ceil(Math.random() * (30)) * 30;
    this.y = Math.ceil(Math.random() * (20)) * 30;
  }



  this.show = function () {
    fill("#ff0000");
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}