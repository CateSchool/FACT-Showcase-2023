

class Sketch_18 extends CTSketch {

    constructor() {
        super("Samuel Young", 18);
    }

    startSketch() {

    }

    display() {
        background(random(100,) + 155, random(100) + 155, 0);

        for (let x = 0; x < width / 10; x++) {
            for (let y = 0; y < height / 10; y++) {

                let start = color(0, 255, 255)
                let end = color(255, 0, 255)
                let d = dist(mouseX, mouseY, x * 50, y * 50);
                fill(lerpColor(start, end, d / 500))
                strokeWeight(1)
                stroke(0);
                rect(40 * x, 40 * y, 30);
                stroke(0)
                noFill()
                rect(mouseX + 20, mouseY + 20, 0)
                line(10 * x, 0, 10 * x, height)
                line(0, 10 * y, width, 10 * y)


            }
        }
    }

}
