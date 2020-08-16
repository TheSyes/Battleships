class Rectangle {
    constructor(x, y, w = 50, h = 50, brightness = 255) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.brightness = brightness;
        this.containsShipPart = false;
    }

    // containsShip(){
    //     if(){

    //     }
    // }

    intersects() {
        if (mouseX > this.x && mouseX < this.x + this.w) {
            if (mouseY > this.y && mouseY < this.y + this.h) {
                return true;
            } else {
                return false;
            }
        }
    }


    show() {
        stroke(0);
        fill(this.brightness);
        rect(this.x, this.y, this.w, this.h);
    }

}