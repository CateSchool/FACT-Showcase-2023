

class Sketch_17 extends CTSketch {

    constructor() {
        super("Nika Iverson", 17);
        this.mode = -1;
    }

    startSketch() {

    }

    display() {
        if (frameCount % 180 == 0) {
            // this.mode++;
        }
        background(255, 200, 200);
        let col1 = color('blue')
        let col2 = color('salmon')
        let col3 = color('lavendar')
        let col4 = color('yellow')
        let col5 = color('orange')
        let col6 = color('green')

        for (let w = 0; w < 10; w++) {
            fill(lerpColor(col1, col2, 0.9 * w / 9))
            let ww = width / 2 * (1 - w / 10);
            let hh = height / 2 * (1 - w / 10);
            rect(width / 2, height / 2, ww, hh);
            stroke(random(255), random(255), random(255))
        }

        for (let w = 0; w < 10; w++) {
            fill(lerpColor(col1, col3, 0.9 * w / 9))
            let ww = width / 2 * (1 - w / 10);
            let hh = height / 2 * (1 - w / 10);
            rect(width / 2 - ww, height / 2, ww, hh);
            stroke(random(255), random(255), random(255))
        }

        for (let w = 0; w < 10; w++) {
            fill(lerpColor(col1, col4, 0.9 * w / 9))
            let ww = width / 2 * (1 - w / 10);
            let hh = height / 2 * (1 - w / 10);
            rect(width / 2 - ww, height / 2 - hh, ww, hh);
            stroke(random(255), random(255), random(255))
        }

        for (let w = 0; w < 10; w++) {
            fill(lerpColor(col1, col5, 0.9 * w / 9))
            let ww = width / 2 * (1 - w / 10);
            let hh = height / 2 * (1 - w / 10);
            rect(width / 2, height / 2 - hh, ww, hh);
            stroke(random(255), random(255), random(255))

            //everything under this is credits to Lauren Hubbs 🫶 

            if (this.mode == 0)
                for (let w = 0; w < 10; w++) {
                    fill(lerpColor(col6, col5, 0.9 * w / 9))
                    let ww = width / 2 * (1 - w / 10);
                    let hh = height / 2 * (1 - w / 10);
                    rect(width / 2, height / 2 - hh, ww, hh);
                    stroke(random(255), random(255), random(255))
                }

            if (this.mode == 1)
                for (let w = 0; w < 10; w++) {
                    fill(lerpColor(col6, col3, 0.9 * w / 9))
                    let ww = width / 2 * (1 - w / 10);
                    let hh = height / 2 * (1 - w / 10);
                    rect(width / 2 - ww, height / 2, ww, hh);
                    stroke(random(255), random(255), random(255))
                }

            if (this.mode == 2)
                for (let w = 0; w < 10; w++) {
                    fill(lerpColor(col6, col2, 0.9 * w / 9))
                    let ww = width / 2 * (1 - w / 10);
                    let hh = height / 2 * (1 - w / 10);
                    rect(width / 2, height / 2, ww, hh);
                    stroke(random(255), random(255), random(255))
                }

            if (this.mode == 3)
                for (let w = 0; w < 10; w++) {
                    fill(lerpColor(col6, col4, 0.9 * w / 9))
                    let ww = width / 2 * (1 - w / 10);
                    let hh = height / 2 * (1 - w / 10);
                    rect(width / 2 - ww, height / 2 - hh, ww, hh);
                    stroke(random(255), random(255), random(255))
                }
        }
    }

}
