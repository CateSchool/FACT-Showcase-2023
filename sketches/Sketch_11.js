

class Sketch_11 extends CTSketch {

    constructor() {
        super("Eric Jin", 11);
    }

    startSketch() {
        rectMode(CENTER);
    }

    display() {
        let a;
        let s;
        if (mouseIsPressed) {
            a = 200;
            s = 10;
        }
        else {
            a = random(0, 400);
            s = random(5, 10);
        }
        if (keyIsDown(66)) {
            background(0, 0, 0, 50);
            stroke('white');
        }
        else {
            background(255, 255, 255, 50)
            stroke('black');
        }
        noFill();
        strokeWeight(s);
        rect(mouseX, mouseY, a, a);
        stroke(random(255), random(255), random(255),);
        rect(mouseX, mouseY, random(a), random(a));
        for (let i = 0; i < 40; i++) {
            if (mouseIsPressed) {
                line(mouseX, mouseY, width, height);
                line(mouseX, mouseY, 0, 0);
                line(mouseX, mouseY, 0, height);
                line(mouseX, mouseY, width, 0);
                line(mouseX, mouseY, width / 2, 0);
                line(mouseX, mouseY, width, height / 2);
                line(mouseX, mouseY, width / 2, height);
                line(mouseX, mouseY, 0, height / 2);
            }
            else {
                line(mouseX, mouseY, random(width), random(height));
            }
        }
    }


}




