

class Sketch_20 extends CTSketch {

    constructor() {
        super("Perrin Veltman", 20);
    }

    startSketch() {
        rectMode(CENTER);
    }

    display() {
        background(255);

        // grid
      
        strokeWeight(1);
        for (let x = 0; x < 50; x++) {
          for (let y = 0; y < 50; y++) {
            fill(130, 83, 7);
            rect(50 * x, 50 * y, (45));
          }
        }
      
        fill(245, 218, 174);
        ellipse(275, 300, 300);
      
        fill('white');
        stroke('black');
        strokeWeight(1);
        ellipse(275, 215, 60);
        noFill();
        stroke(250, 186, 82);
        strokeWeight(13);
        ellipse(275, 215, 30);
        noFill();
        stroke(252, 204, 236);
        strokeWeight(6);
        ellipse(275, 215, 30);
      
        fill('white');
        stroke('black');
        strokeWeight(1);
        ellipse(350, 300, 60);
        noFill();
        stroke(250, 186, 82);
        strokeWeight(13);
        ellipse(350, 300, 30);
        noFill();
        stroke(252, 204, 236);
        strokeWeight(6);
        ellipse(350, 300, 30);
      
        fill('white');
        stroke('black');
        strokeWeight(1);
        ellipse(200, 300, 60);
        noFill();
        stroke(250, 186, 82);
        strokeWeight(13);
        ellipse(200, 300, 30);
        noFill();
        stroke(195, 240, 250);
        strokeWeight(6);
        ellipse(200, 300, 30);
      
        fill('white');
        stroke('black');
        strokeWeight(1);
        ellipse(275, 375, 60);
        noFill();
        stroke(250, 186, 82);
        strokeWeight(13);
        ellipse(275, 375, 30);
        noFill();
        stroke(195, 240, 250);
        strokeWeight(6);
        ellipse(275, 375, 30);
      
        textSize(125);
          text('🌵', 50, 150);
      
        if (mouseIsPressed) {
          textSize(45);
          text('🍴', 205, 390);
          textSize(40);
          text('☕', 290, 350);
      
          textSize(45);
          this.drawUtensils(180, 235, 90);
          textSize(40);
          this.drawCoffee(325, 285, -90)
      
          textSize(45);
          this.drawUtensils(370, 365, -90);
          textSize(40);
          this.drawCoffee(265, 245, 180)
      
          textSize(40);
          this.drawUtensils(340, 205, 180);
          textSize(40);
          this.drawCoffee(230, 300, 90);
      
      
        }
      
      
      }
      
      
      drawUtensils(x, y, deg) {
        push();
        translate(x, y);
        rotate(radians(deg));
        textSize(40);
        text('🍴', 0, 0);
        pop();
      }
      
     drawCoffee(x, y, deg) {
        push();
        translate(x, y);
        rotate(radians(deg));
        textSize(40);
        text('☕', 0, 0);
        pop();
      }
      
      
      
}

