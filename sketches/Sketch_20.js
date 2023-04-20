

class Sketch_20 extends CTSketch {

    constructor() {
        super("Eve Kaplan", 20);
    }

    startSketch() {
    }

    display() {
        background('#000000');

        square(415, 80, 60)
        ellipse(450, 275, 60)
        square(20, 80, 60)
        ellipse(50, 275, 60)


        let r = random(200);
        noFill();
        stroke(random(200), random(200), random(200), random(200));
        fill(r)
        fill(255)

        noStroke();
        let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);

        let myColor = color(random(255), random(255), random(255));
        noStroke();
        fill(myColor);

        ellipse(mouseX + random(30), mouseY + random(30), mouseSpeed);

        rect(mouseX + random(70), mouseY + random(70), mouseSpeed);

        square(mouseX + random(100), mouseY + random(100), mouseSpeed);


    }


}

