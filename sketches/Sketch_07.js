

class Sketch_07 extends CTSketch {

    constructor() {
        super("Lawrence Zhang", 7);
        this.backgroundcolor;
    }

    startSketch() {
    }

    //code source: Christopher Reyes
    display() {
        let col2 = color('#8A2BE2');
        let col1 = color('#FFA07A');

        let percent = abs(sin(millis() / 4000 + PI / 2));
        this.backgroundcolor = lerpColor(col1, col2, percent)
        background(this.backgroundcolor);

        this.mountains();
        this.moon();
        this.sun();

    }
    moon() {
        push();
        translate(350 * -sin(millis() / 2000), 350 * -cos(millis() / 2000));
        if (mouseX < width / 4) {
            noStroke()
            fill(254, 252, 215)
            arc(250, 450, 160, 160, 0.5 * PI, 1.5 * PI)
            fill(backgroundcolor)
            arc(250, 450, -160 + mouseX / width * 640, 160, 0.5 * PI, 1.5 * PI);
        }
        // moon getting bigger from middle
        else if (width / 4 < mouseX && mouseX < width / 2) {
            console.log("1/4-1/2")
            noStroke()
            fill(254, 252, 215)
            arc(250, 450, 160, 160, 0.5 * PI, 1.5 * PI)
            fill(backgroundcolor)
            arc(250, 450, 160, 160, 1.5 * PI, 0.5 * PI);
            fill(254, 252, 215)
            arc(250, 450, -160 + mouseX / width * 640, 160, 1.5 * PI, 0.5 * PI)
        }
        // moon getting smaller from left
        else if (width / 2 < mouseX && mouseX < width * 3 / 4) {
            console.log("1/2-3/4")
            noStroke()
            fill(254, 252, 215)
            arc(250, 450, 160, 160, 1.5 * PI, 0.5 * PI);
            fill(254, 252, 215)
            arc(250, 450, -160 + (mouseX - width / 2) / width * 640, 160, 0.5 * PI, 1.5 * PI);
        }
        else if (width * 3 / 4 < mouseX && mouseX < width) {
            noStroke()
            fill(254, 252, 215)
            arc(250, 450, 160, 160, 1.5 * PI, 0.5 * PI)
            fill(backgroundcolor)
            arc(250, 450, 160 * 4 * (-width * 3 / 4 + mouseX) / width, 160, 1.5 * PI, 0.5 * PI)
        }
        for (let y = -80; y < 80; y += 9.41175) {
            let x = sqrt(6400 - y ** 2)
            strokeWeight(3)
            stroke('black')
            line(250 - x, 450 - y, 250 + x, 450 - y)
        }
        pop();
    }

    sun() {
        push();
        translate(350 * sin(millis() / 2000), 350 * cos(millis() / 2000));
        for (let y = 0; y < 360; y += 10) {
            push();
            translate(250, 460);
            rotate(radians(y));
            stroke('orange');
            strokeWeight(3)
            line(35, 35, 100, 0);
            pop();
            noStroke()
            fill(this.backgroundcolor)
            ellipse(250, 460, 160)
            fill('#FFCC33')
            ellipse(250, 460, 150)
        }
        pop();
    }

    mountains() {
        for (let x = 0; x < 40; x++) {
            stroke('#97d7fc')
            strokeWeight(2)
            line(300 - x * 5, 200 + x * 5, 300 + x * 5, 200 + x * 5)
        }

        for (let x = 0; x < 40; x++) {
            stroke('#0484e4')
            strokeWeight(2)
            line(100 - x * 3, 250 + x * 5, 100 + x * 3, 250 + x * 5)
        }

        for (let x = 0; x < 40; x++) {
            stroke('#0484e4')
            strokeWeight(2)
            line(400 - x * 3, 225 + x * 5, 400 + x * 3, 225 + x * 5)
        }

        for (let x = 0; x < 40; x++) {
            stroke('#0544a1')
            strokeWeight(2)
            line(350 - x * 3, 275 + x * 5, 350 + x * 3, 275 + x * 5)
        }

        for (let x = 0; x < 40; x++) {
            stroke('#052c7e')
            strokeWeight(2)
            line(200 - x * 3, 300 + x * 5, 200 + x * 3, 300 + x * 5)
        }
    }


}

