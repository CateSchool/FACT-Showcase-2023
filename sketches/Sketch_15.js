

class Sketch_15 extends CTSketch {

    constructor() {
        super("Luke Ashiku", 15);

        this.points = [];
        for (let i = 0; i < 550; i++) {
            this.points.push({ x: random(width), y: random(height) })
        }
    }

    startSketch() {
    }

    display() {

        if (mouseIsPressed) {
            background(0);
            randomSeed(0);
            for (let i = 0; i < this.points.length - 1; i++) {
                let p = this.points[i];
                let nextP = random(this.points);
                stroke(255)
                ellipse(p.x, p.y, 3);
                line(p.x, p.y, nextP.x, nextP.y);
                line(p.x, p.y, mouseX, mouseY);
            }

        }
        else {
            background(255);
            for (const p of this.points) {
                stroke(0);
                ellipse(p.x, p.y, 1);
                line(p.x, p.y, mouseX, mouseY);
            }
        }
        if (keyIsDown(77)) {
            background(255, 80, 10);
            randomSeed(0);
            for (let i = 0; i < this.points.length - 1; i++) {
                let p = this.points[i];
                let nextP = random(this.points);
                stroke(50, 0, 25)
                ellipse(p.x, p.y, 1);
                line(p.x, p.y, nextP.x, nextP.y);
                line(p.x, p.y, mouseX, mouseY);
            }
        }
        if (keyIsDown(78)) {
            background(0);
            randomSeed(0);
            for (let i = 0; i < this.points.length - 1; i++) {
                let p = this.points[i];
                let nextP = random(this.points);
                stroke(20, 9, 138,)
                ellipse(p.x, p.y, 1);
                line(p.x, p.y, nextP.x, nextP.y);
                line(p.x, p.y, mouseX, mouseY);
            }
        }
        if (keyIsDown(66)) {
            background('red');
            randomSeed(0);
            for (let i = 0; i < this.points.length - 1; i++) {
                let p = this.points[i];
                let nextP = random(this.points);
                stroke(21, 130, 12,)
                ellipse(p.x, p.y, 1);
                line(p.x, p.y, nextP.x, nextP.y);
                line(p.x, p.y, mouseX, mouseY);
            }
        }
        if (keyIsDown(32)) {
            this.randomBackground();
            randomSeed(0);
            for (let i = 0; i < this.points.length - 1; i++) {
                let p = this.points[i];
                let nextP = random(this.points);
                this.randomStroke();
                ellipse(p.x, p.y, 1);
                line(p.x, p.y, nextP.x, nextP.y);
                line(p.x, p.y, mouseX, mouseY);
            }
        }

    }

    randomBackground() {
        randomSeed(millis());
        background(random(255), random(255), random(255));
      }
      
     randomStroke() {
        randomSeed(millis());
        stroke(random(255), random(255), random(255));
      }
      
}
