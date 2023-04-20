

class Sketch_05 extends CTSketch {

    constructor() {
        super("Noah Casbarro", 5);
    }

    startSketch() {
        rectMode(CENTER);
    }

    display() {
        background(0);


        for (let i = 0; i < 50; i++) {
            strokeWeight(2);
            noFill()
            stroke('orange')
            rect(width / 2, i * height / 20, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 40; i++) {
            strokeWeight(2);
            noFill()
            stroke('yellow')
            rect(width / 2, i * height / 17, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 30; i++) {
            strokeWeight(2);
            noFill()
            stroke('green')
            rect(width / 2, i * height / 14, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 20; i++) {
            strokeWeight(2);
            noFill()
            stroke('blue')
            rect(width / 2, i * height / 11, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 10; i++) {
            strokeWeight(2);
            noFill()
            stroke('purple')
            rect(width / 2, i * height / 5, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 70; i++) {
            strokeWeight(2);
            noFill()
            stroke('red')
            rect(width / 2, i * height / 22, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 80; i++) {
            strokeWeight(2);
            noFill()
            stroke('purple')
            rect(width / 2, i * height / 24, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 90; i++) {
            strokeWeight(2);
            noFill()
            stroke('blue')
            rect(width / 2, i * height / 26, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 100; i++) {
            strokeWeight(2);
            noFill()
            stroke('green')
            rect(width / 2, i * height / 28, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 90; i++) {
            strokeWeight(2);
            noFill()
            stroke('yellow')
            rect(width / 2, i * height / 29, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 80; i++) {
            strokeWeight(2);
            noFill()
            stroke('orange')
            rect(width / 2, i * height / 31, i * mouseX, i * mouseY);

        }
        for (let i = 0; i < 70; i++) {
            strokeWeight(2);
            noFill()
            stroke('red')
            rect(width / 2, i * height / 34, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 60; i++) {
            strokeWeight(2);
            noFill()
            stroke('purple')
            rect(width / 2, i * height / 38, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 50; i++) {
            strokeWeight(2);
            noFill()
            stroke('blue')
            rect(width / 2, i * height / 40, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 40; i++) {
            strokeWeight(2);
            noFill()
            stroke('green')
            rect(width / 2, i * height / 42, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 30; i++) {
            strokeWeight(2);
            noFill()
            stroke('yellow')
            rect(width / 2, i * height / 44, i * mouseX, i * mouseY);
        }
        for (let i = 0; i < 20; i++) {
            strokeWeight(2);
            noFill()
            stroke('orange')
            rect(width / 2, i * height / 46, i * mouseX, i * mouseY);

        }
        for (let i = 0; i < 10; i++) {
            strokeWeight(2);
            noFill()
            stroke('red')
            rect(width / 2, i * height / 48, i * mouseX, i * mouseY);
        }

    }


}
