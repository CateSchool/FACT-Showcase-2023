

class Sketch_21 extends CTSketch {

    constructor() {
        super("Salar Ghumman", 21);
        this.mode == 0;
    }

    startSketch() {
        colorMode(HSB)
    }

    display() {
        if (frameCount % 60 == 0) {
            this.mode++;
        }
        background(0, 0, 0);
        for (let x = 1; x < 12; x++) {
            for (let y = 1; y < 12; y++) {
                fill('lightgrey')
                rect(40 * x, 40 * y, 23);
            }
        }

        for (let x = 1; x < 300; x++) {
            for (let y = 1; y < 18; y++) {


                if (this.mode %2 < 1) {
                    let h = (255 / 11 * x - frameCount)
                    fill(h % 300, 255, 200)
                    rect(h % 20000, 0, 5, height)
                }
                if (this.mode %3 < 2) {
                    let h = (-255 / 11 * x + frameCount)
                    fill(h % 300, 255, 200)
                    rect(h % 20000, 0, 5, height)
                }
                if (this.mode % 4 < 3) {
                    let h = (-255 / 11 * x + frameCount)
                    fill(h % 300, 255, 200)
                    rect(0, h % 20000, width, 5)
                }
                if (this.mode % 5 < 4) {
                    let h = (255 / 11 * x - frameCount)
                    fill(h % 300, 255, 200)
                    rect(0, h % 20000, width, 5)
                }
            }
        }
    }


}

