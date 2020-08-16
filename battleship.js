class Battleship{
    constructor(x, y, direction){
        this.name = "Batlleship";
        this.size = 4;
        this.x = x;
        this.y = y;
        this.direction = 25;
    }

    showShip(){
        fill(0);
        ellipse(this.x, this.y, 30, 45*this.size); 
    }
}