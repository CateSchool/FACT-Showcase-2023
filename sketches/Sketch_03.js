

class Sketch_03 extends CTSketch {

  constructor() {
    super("Emerson Evans", 3);
  }

  startSketch() {
    colorMode(HSB, 255);
  }

  display() {
    noFill();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        fill(random(255));
        noFill();
        stroke((frameCount + x * 40 + y * 10) % 255, 255, 255);
        ellipse(80 * x + 90, 80 * y + 40, random(200));
        // stroke(random(255), random(255), random(255));
        ellipse(mouseX, mouseY, random(175));

        // text("merry xmas", mouseX, mouseY);
      }
    }
  }


}
