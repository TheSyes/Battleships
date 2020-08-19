let highX;
let highY;

class Boardcell {
    constructor(x, y, w, h, brightness = 255) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.brightness = brightness;
        this.occupied = false;
        this.shippart;
    }

    mHovers() {
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
            highX= this.x + (this.w/2);
            highY= this.y+ (this.h/2);
            return true;
        }else{
            return false; 
        }
    }

    draw() {
        if (this.mHovers())
            this.brightness = (0, 125);
        else
            this.brightness = (255);

        if(this.occupied)
            this.brightness = (65);
        
        fill(this.brightness);
        stroke(0);
        rect(this.x, this.y, this.w, this.h);

        textSize(10);
        fill(0);
        text(this.x + "," + this.y , this.x+2, this.y+11);
        text(this.brightness , this.x+2, this.y+47);   
    }    
}
