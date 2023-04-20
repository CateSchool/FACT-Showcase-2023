

class Sketch_04 extends CTSketch {

  constructor() {
    super("Jen Won", 4);
  }

  startSketch() {

  }

  display() {
    background('white');

    noFill();
    strokeWeight(8);


    for (let i = 0; i < 50; i++) {
      line(i * 100, 1, i * 100, 650)
    }

    for (let i = 0; i < 50; i++) {
      line(1, i * 100, 500, i * 100)
    }

    noFill();
    strokeWeight(3);
    for (let i = 0; i < 50; i++) {
      line(i * 170, 1, i * 170, 700)
    }

    for (let i = 0; i < 50; i++) {
      line(1, i * 170, 700, i * 170)
    }

    fill('red');
    ellipse(30, 30, 40);
    fill('orange');
    ellipse(180, 50, 15);
    fill('yellow');
    ellipse(250, 30, 30);
    fill('green');
    ellipse(360, 70, 20);
    fill('blue');
    ellipse(450, 20, 15);
    fill('purple');
    ellipse(30, 120, 15);
    fill('pink');
    ellipse(160, 170, 40);
    fill('red');
    ellipse(230, 160, 30);
    fill('orange');
    ellipse(350, 140, 20);
    fill('yellow');
    ellipse(450, 130, 15);
    fill('green');
    ellipse(70, 220, 15);
    fill('blue');
    ellipse(150, 270, 45);
    fill('purple');
    ellipse(250, 250, 30);
    fill('pink');
    ellipse(330, 240, 15);
    fill('red');
    ellipse(450, 270, 30);
    fill('orange');
    ellipse(60, 380, 20);
    fill('yellow');
    ellipse(160, 350, 40);
    fill('green');
    ellipse(220, 360, 15);
    fill('blue');
    ellipse(350, 340, 30);
    fill('purple');
    ellipse(480, 380, 15);
    fill('pink');
    ellipse(60, 430, 40);
    fill('red');
    ellipse(160, 480, 15);
    fill('orange');
    ellipse(230, 450, 30);
    fill('green');
    ellipse(360, 470, 10);
    fill('blue');
    ellipse(470, 480, 20);
    fill('purple');
    ellipse(30, 530, 15);
    fill('pink');
    ellipse(150, 570, 30);
    fill('red');
    ellipse(250, 550, 20);
    fill('orange');
    ellipse(340, 570, 30);
    fill('green');
    ellipse(450, 520, 15);

  }


}
