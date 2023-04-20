

class Sketch_13 extends CTSketch {

    constructor() {
        super("Madeline Losey", 13);
    }

    startSketch() {
        rectMode(CENTER);
    }

    display() {
        noFill();




        // background
        let r = random(40);
        stroke(random(255));
        for (let x = 1; x < 100; x++) {
            for (let y = 1; y < 100; y++) {
                strokeWeight(1);
                ellipse(20 * x, 20 * y, r);


            }
        }
        if (mouseIsPressed) {
            noFill();
            stroke(0);
            let r = random(255);
            strokeWeight(10);
            stroke(random(255), random(255), random(255));
            ellipse(mouseX, mouseY, r);

            noFill();
            stroke(0);
            strokeWeight(5);
            stroke(random(255), random(255), random(255));
            rect(mouseX, mouseY, r);


            strokeWeight(5);
            stroke(random(255), random(255), random(255));
            // line(mouseX, mouseY, width/2, height/2);
            line(width, height, mouseX, mouseY)
            line(width / 2, height, mouseX, mouseY)
            //line(width/2, height/2, mouseX, mouseY)
            line(0, 0, mouseX, mouseY)
            line(width, 0, mouseX, mouseY)
            line(0, height, mouseX, mouseY)
            line(width / 2, 0, mouseX, mouseY)
            line(0, height / 2, mouseX, mouseY)
            line(width, height / 2, mouseX, mouseY)
        }
    }


}


