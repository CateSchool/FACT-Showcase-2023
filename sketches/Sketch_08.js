

class Sketch_08 extends CTSketch {

  constructor() {
    super("Claire Ziebart", 8);
  }

  startSketch() {
    rectMode(CENTER);
  }

  display() {
    background(0);
    push();
    let col1 = color(216, 109, 237);
    let col2 = color(175, 181, 237);
    let col3 = color(234, 252, 30)
    let col4 = color(28, 252, 241)
    let col5 = color(33, 44, 252)
    let col6 = color(180, 80, 240)
    let col7 = color(255)
    let col8 = color("purple")
    let col9 = color(139, 227, 247)
    let col10 = color('yellow')
    for (let x = 1; x < 40; x++) {
      stroke(lerpColor(col1, col2, 1 / 20 * x))
      strokeWeight(0.2 * x)
      noFill();
      // rect(mouseX, mouseY, x * 30);
      strokeWeight(0.2 * x)
      noFill();
      stroke(lerpColor(col8, col4, (x * 1 / 40 + frameCount / 90) % 1))
      rect(1 / 4 * width + x * 20, 3 / 4 * height - 10 * x, x * 30 - mouseX);
      stroke(lerpColor(col5, col6, (x * 1 / 40 + frameCount / 90) % 1))
      rect(1 / 4 * width + x * 5, 3 / 4 * height - 20 * x, x * 30 - mouseX)

      if (mouseIsPressed) {
        stroke(lerpColor(col4, col10, (x * 1 / 40 + frameCount / 90) % 1))
        rect(1 / 4 * width + x * 5, 2 / 4 * height - 20 * x, x * 25 + height - mouseY)
        strokeWeight(0.2 * x)
        stroke(lerpColor(col9, col8, 1 / 40 * x))
        noFill();
        rect(255, 0, x * 30);
        noFill();
        stroke(lerpColor(col5, col7, (x * 1 / 40 + frameCount / 90) % 1))
        rect(1 / 4 * width + x * 20, 3 / 4 * height - 10 * x, x * 30 - mouseX);
        stroke(lerpColor(col3, col10, (x * 1 / 40 + frameCount / 90) % 1))
        rect(1 / 4 * width + x * 5, 2 / 4 * height - 20 * x, x * 30 - (3 / 4 * width))
      }
    }
  }


}




