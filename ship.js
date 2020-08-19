let newX;
let newY;
let direction = 0;
let increment = 0;

class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.x = 0;
        this.y = 0;
        this.kek = 0;

        this.shipParts = [];
        this.createBody();
    }

    setPos()
    {
        this.x = newX;
        this.y = newY;
    }

    drawBody(){
        this.setPos(); // weiß nicht ob das hier sinn macht

        push();
        translate(this.x,this.y);
        ellipseMode(CORNER);
        angleMode(DEGREES);
        rotate(direction);
        ellipse(-15, -15, 30, 45*this.size);
        pop();
    }

    createBody() {
        for (var i = 0; i < this.size; i++) {
            this.shipParts.push(new Shippart(this, i, 0));
        }
    }

    rotate() {
        if (this.kek == 0) {
            this.kek = 1;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = i;
                this.shipParts[i].relY = 0;
            }
        }else {
            this.kek = 0;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = 0;
                this.shipParts[i].relY = i;
            }
        }
    }
}

function mouseClicked(event) {
    newX=highX;
    newY=highY;
}

function mouseWheel(event) {
    if(event.delta < 0){
        increment = increment +1;
    } else if (event.delta > 0){
        increment = increment -1;
    }

    //this shit gay yo
    if(increment > 3){
        increment = 0;
    }
    if(increment < 0){
        increment = 3;
    }

    switch(increment){
        case 0:
            direction = 0;
            break;
        case 1:
            direction = 90;
            break;
        case 2:
            direction = 180;
            break;
        case 3:
            direction = 270;
            break;
    }
}