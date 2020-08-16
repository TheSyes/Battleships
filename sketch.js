let board;

function setup() {
  createCanvas(displayWidth, displayHeight);
  board = new Board(50,50,50);
  board.start();

}

function draw() {
  background(140);
  board.show();
  board.placeShips(); //call function if ship is selected on sidebar
}

function mouseWheel(event){
  return event.delta;
}