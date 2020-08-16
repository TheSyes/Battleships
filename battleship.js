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
        if(this.direction< 0){
            arc(this.x, this.y, 30, 45 * this.size, 0, PI*2);
        } else {
            arc(this.x, this.y, 45* this.size, 30, 0, PI*2);
        }
    }
}