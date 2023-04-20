
class Sketch_00 extends CTSketch {

    constructor() {
        super("Jae Wykoff", 0);
    }

    startSketch() {
        
    }

    display() {
        for (let x = 0; x < (mouseX + mouseY) / 50; x++) {
            fill('white');
            noStroke();
            ellipse(mouseX, mouseY, 200);
        
            fill('black');
            strokeWeight(10);
            stroke((mouseX / 2), (mouseY / 2), 255 - random(100));
            rect(random(width), random(height), 50, 50);
            line(mouseX, mouseY, 0, 0);
            line(mouseX, mouseY, width, 0);
            line(mouseX, mouseY, 0, height);
            line(mouseX, mouseY, width, height);
            ellipse(mouseX, mouseY, 50)
            if (mouseIsPressed === true) {
              ellipse(mouseX, mouseY, 2000)
              ellipse(mouseX, mouseY, 50)
            }
          }
    }
}