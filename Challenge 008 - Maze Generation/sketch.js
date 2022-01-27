let columns;
let rows;
let cellSize = 40;
let grid = [];

//Qual célula está no momento;
let current;

//Cria uma pilha para salvar o caminho feito; 
let stack = [];

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  columns = floor(width / cellSize);
  rows = floor(height / cellSize);

  //Cria as células e coloca cada uma na array
  for (j = 0; j < rows; j++) {
    for (i = 0; i < columns; i++) {
      let cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  //Inicia na primeira célula
  current = grid[0];
}

function draw() {
  background("#000000");

  //Mostra cada uma das células
  for (i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();

  //Primeiro passo, pegar o primeiro vizinho
  let next = current.checkNeighbours();

  if (next) {
    next.visited = true;

    //Segundo passo, adicionar a célula na pilha
    stack.push(current);;

    //Terceiro passo, remover a parede entre as células;
    removeWalls(current, next);

    //Quarto passo, visitar a próxima célula;
    current = next;
  }
  else if (stack.length > 0) {
    //Se não tiver mais para onde ir, volta uma casa;
    current = stack.pop();
  }
}

function index(i, j) {
  if (i < 0 || i > columns - 1 || j < 0 || j > rows - 1) {
    return -1;
  }
  return i + j * columns;
}

//Remove a parede entre a atual célula e a próxima célula;
function removeWalls(a, b) {
  let x = a.i - b.i;

  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  }
  else if (x === -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  }
  else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}