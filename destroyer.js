class Distroyer{
    constructor(x, y, direction){
        this.name = "Distroyer";
        this.size = 2;
        this.x = x;
        this.y = y;
        this.direction = 25;
    }

    showShip(){
        fill(0);
        ellipse(this.x, this.y, 30, 45*this.size); 
    }
}