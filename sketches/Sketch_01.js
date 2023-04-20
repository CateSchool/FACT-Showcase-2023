
class Sketch_01 extends CTSketch {

  constructor() {
    super("Alex Gallegos", 1);
  }

  startSketch() {
  }

  display() {
    background(random(25), random(75), random(150 - 255));
    if (keyIsDown(8)) {
      background(random(75, 100), 50, random(75))
    }
    if (keyIsDown(9)) {
      background(25, random(25, 50), random(75, 100))
    }

    for (let x = 0; x < 10; x++) {
      ellipse(mouseX + random(100), mouseY + random(100), 7)
      ellipse(mouseX - random(100), mouseY + random(100), 7)
      ellipse(mouseX + random(100), mouseY - random(100), 7)
      ellipse(mouseX - random(100), mouseY - random(100), 7)
      for (let y = 0; y < 10; y++) {
        // let r = random(255);
        // let amplitude = 100;
        // let period = millis() / 500;
        // let maxVal = 255;
        // let sinAmt = (amplitude / 2 + amplitude * sin(period)) % maxVal;
        // fill(x*40,sinAmt, 400);
        // ellipse(40*x+50,40*y+50, 30+24/3*x);
        stroke(random(255), random(255), 255);
        line(55 * x, 55 * y, mouseX, mouseY);

        if (keyIsDown(8)) {
          stroke(255, random(255), random(255));
          line(55 * x, 55 * y, mouseX, mouseY)
        }
        if (keyIsDown(9)) {
          stroke(random(255), random(255), 255)
          line(55 * x, 55 * y, mouseX, mouseY)
        }
      }
    }
  }
}