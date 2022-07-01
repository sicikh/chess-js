class Figure {
  constructor(color, type, x, y, image) {
    this.color = color;
    this.type = type;
    this.x = x;
    this.y = y;
    this.image = image;
  }

  getPosition() {
    const position = {};

    position.x = this.x;
    position.y = this.y;

    return position;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}

const whiteQueen = new Figure('white', 'queen', 0, 0, 'https://chess.com/whitequeen.image');

console.table(whiteQueen);
console.log(whiteQueen.getPosition());
whiteQueen.setPosition(1, 1);
console.log(whiteQueen.getPosition());
// try 3
