let newX;
let newY;

class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.x = 0;
        this.y = 0;
        this.direction = 0;

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
        ellipseMode(CORNER);
        noFill();
        rect(this.x-15, this.y-15, 30, 45*this.size);
        fill(0);
        ellipse(this.x-15, this.y-15, 30, 45*this.size); 
    }

    createBody() {
        for (var i = 0; i < this.size; i++) {
            this.shipParts.push(new Shippart(this, i, 0));
        }
    }

    rotate() {
        if (this.direction == 0) {
            this.direction = 1;
            for (var i = 0; i < this.size; i++) {
                this.shipParts[i].relX = i;
                this.shipParts[i].relY = 0;
            }
        }else {
            this.direction = 0;
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
    //print(newX + " " +newY);
}

function mouseWheel(event) {
    print(event.delta);
    return event.delta;
}