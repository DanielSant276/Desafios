class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    //Validação de cada uma das paredes;
    this.walls = [true, true, true, true];
    //Indica se a célula já foi visitada ou não;
    this.visited = false;
  }

  //Verifica qual será o próximo vizinho a ser escolhido;
  checkNeighbours() {
    let neighbours = [];

    //Gera a posição do próximo vizinho, como utilizamos apenas uma array normal,
    //sem camadas, cada pixel é contado um a um. Sendo assim, this.i é a unidade e this.j é a dezena;
    let top = grid[index(this.i, this.j - 1)];
    let right = grid[index(this.i + 1, this.j)];
    let bottom = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i - 1, this.j)];

    //Verifica se pode selecionar o próximo vizinho
    if (top && !top.visited) {
      neighbours.push(top);
    }

    if (right && !right.visited) {
      neighbours.push(right);
    }

    if (bottom && !bottom.visited) {
      neighbours.push(bottom);
    }

    if (left && !left.visited) {
      neighbours.push(left);
    }

    //Se existir vizinho, seleciona um aleatóriamente entre os possíveis e retorna ele;
    if (neighbours.length > 0) {
      var generateNumber = floor(random(0, neighbours.length));
      return neighbours[generateNumber];;
    }
    else {
      return undefined;
    }
  }

  highlight() {
    var x = this.i * cellSize;
    var y = this.j * cellSize;
    noStroke();
    fill(0, 255, 0, 150);
    rect(x, y, cellSize, cellSize);
  }

  show() {
    var x = this.i * cellSize;
    var y = this.j * cellSize;
    stroke("#ffffff");

    //desenha cada uma das linhas da célula
    if (this.walls[0]) {
      line(x, y, x + cellSize, y);
    }

    if (this.walls[1]) {
      line(x + cellSize, y, x + cellSize, y + cellSize);
    }

    if (this.walls[2]) {
      line(x + cellSize, y + cellSize, x, y + cellSize);
    }

    if (this.walls[3]) {
      line(x, y + cellSize, x, y);
    }

    //Caso a célula já tenha sido visitada ela é pintada de roxo;
    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, cellSize, cellSize);
    }
  }
}