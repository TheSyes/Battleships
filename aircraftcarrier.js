class AircraftCarrier{
    constructor(x, y, direction){
        this.name = "Aircraft Carrier";
        this.size = 5;
        this.x = x;
        this.y = y;
        this.direction = 25;
    }

    showShip(){
        fill(0);
        ellipse(this.x, this.y, 30, 45*this.size); 
    }
}