let size = 1500;

var boxContent = [];


function setup() {
  createCanvas(800, 800);
  var rectX = (width-(size/3))/2;
  var rectY = (height-(size/3))/2;
  let a = new Square(rectX, rectY, size, size);
  boxContent.push(a);
}

function draw() {
  background(200);
  for (var i = 0; i < boxContent.length; i++) {
    boxContent[i].show();
  }
}

function mousePressed() {
  var aux = [];
  for (i = 0; i < boxContent.length; i++) {
    var b  = boxContent[i];
    var newBox = b.generate();
    aux = aux.concat(newBox);
  }
  boxContent = aux;
}



// function mouseDragged() {
//   mouseClickedX = pmouseX;
//   mouseClickedY = pmouseY;
// }

