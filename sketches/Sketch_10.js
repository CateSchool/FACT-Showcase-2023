

class Sketch_10 extends CTSketch {

    constructor() {
        super("Elliott Paige", 10);
    }

    startSketch() {
        rectMode(CENTER);
    }

    display() {
        background(255, 255, 255)
        let amp = 100;
      
        for (let x = 1; x < 10; x++) {
          for (let y = 1; y < 10; y++) {
            let alt = amp * sin(millis() / 1000);
            console.log(Math.round(alt))
            if (mouseIsPressed) {
              let alt = random(-5, 5) + amp * sin(millis() / 200 + -y / 5 + x/5);
              //   background(random(200), 0, 0)
              fill(Math.abs(alt) + y, Math.abs(alt) + y*2, Math.abs(alt) + y*3);
              noStroke()
              ellipse(x * 50, y * 50, alt);
            }
            else {
              if (alt < 0) {
                let alt = amp * sin(millis() / 200 - y / 5 - x / 5);
                //fill(2 * y, 40 * y, 30 * y);
                fill(10, Math.abs(alt) + 4*y, Math.abs(alt) + 10*y);
                noStroke()
                ellipse(x * 50, y * 50, alt);
              }
              if (alt > 0) {
                let alt = amp * sin(millis() / 200 + y / 5 + x / 5);
                fill(10, Math.abs(alt) + 4*y, Math.abs(alt) + 10*y);
                noStroke()
                ellipse(x * 50, y * 50, alt);
              }
            }
      
          }
        }
    }




}
