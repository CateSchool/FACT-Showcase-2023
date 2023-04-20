

class Sketch_12 extends CTSketch {

    constructor() {
        super("Elise Tsai", 12);
    }

    startSketch() {
        colorMode(HSB, windowWidth);
        rectMode(CENTER);
    }

    display() {
        background('black');
        noFill();

        for (let x = 1; x < 100; x++) {
            for (let y = 1; y < 100; y++) {
                rect(50 * x, 50 * y, random(255) / 5);
            }
        }

        for (let x = 1; x < 11; x++) {
            for (let y = 1; y < 11; y++) {
                for (let z = 0; z < 10; z++) {
                    if (mouseIsPressed) {
                        stroke(mouseX, windowWidth, windowWidth)
                    }
                    else {
                        stroke(random(windowWidth), windowWidth, windowWidth);
                    }

                    rect(140 * x - 50, 140 * y - 50, 160 / 15 * z * sz);

                }
            }
        }

        this.changeSz();
    }

    changeSz() {
        sz = 10 + 10 * sin(millis() / 5000);
        sz = constrain(sz, 0.5, 20);
    }



}
