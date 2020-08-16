class Cruser{
    constructor(x, y, direction){
        this.name = "Cruser";
        this.size = 3;
        this.x = x;
        this.y = y;
        this.direction = 25;
    }

    showShip(){
        angleMode(DEGREES);
        rotate(90);
        fill(0);
        ellipse(this.x, this.y, 30, 45*this.size);    
    }
}