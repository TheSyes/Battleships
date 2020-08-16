let ships = [];
let obj;

class Board {
    constructor(cellSize = 50, boardXOffset = 50, boardYOffset = 50) {
        this.cellSize = cellSize;
        this.boardXOffset = boardXOffset;
        this.boardYOffset = boardYOffset;
        this.rectArray = new Map();
    }

    start() {
        for (var x = 0; x < 10; x = x + 1) {
            for (var y = 0; y < 10; y = y + 1) {
                this.rectArray.set(x+","+y,new Rectangle(this.boardXOffset + this.cellSize*x, this.boardYOffset + this.cellSize*y, this.cellSize, this.cellSize));
            }
        }
    }

    show() {
        for (var element of this.rectArray.values()){
            if(element.intersects()){
                element.brightness = (0, 125);
            }else{
                element.brightness = (255);
            }
            element.show();
        }
    }

    placeShips(){
        for (var element of this.rectArray.values()){
            if(element.intersects()){
                var x = element.x;
                var y = element.y;
            }

            ships.push(new Cruser("Aircraft Carrier", 5, 600, 300,0));

            ships[0].x = x+25;
            ships[0].y = y+25;
            ships[0].showShip();
            
        }
    }


}