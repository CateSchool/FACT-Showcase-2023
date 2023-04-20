

class Sketch_14 extends CTSketch {

    constructor() {
        super("Tree Payne", 14);
        this.quotes = [
            'do you think god stays in heaven because he fears what he created?',
            "holding onto anger is like drinking poison and expecting the other person to die.",
            "a mistake repeated more than once is a descision",
            "the unexamined life is not worth living for a human being",
            "let each thing you would do, say, or intend be like that of a dying person.",
            "the truth will set you free, but not until it is done with you.",
            "it is better to be feared than loved, if you can't have both.",
            "the only true wisdom is knowing you know nothing.",
            "i'm not payed enough for this."
        ];
        this.quote = quotes[0];
    }

    startSketch() {

    }

    display() {
        if (frameCount % 180 == 0) {
            this.quote = random(this.quotes);
        }
        
        background(255, 200, 200);

        translate(0, 30 * sin(frameCount / 10))
        /// circles + rectangles in corners

        fill(255, 0, 100)
        ellipse(40, 40, 40)
        fill(random(255), random(255), random(255));
        rect(30, 35, 20, 10)

        fill(255, 0, 100)
        ellipse(40, 460, 40)
        fill(random(255), random(255), random(255));
        rect(30, 455, 20, 10)

        fill(255, 0, 100)
        ellipse(460, 40, 40)
        fill(random(255), random(255), random(255));
        rect(450, 35, 20, 10)

        fill(255, 0, 100)
        ellipse(460, 460, 40)
        fill(random(255), random(255), random(255));
        rect(450, 455, 20, 10)

        /// body

        fill(255, 255, 255);
        ellipse(250, 300, 300);

        fill(255, 255, 255);
        ellipse(250, 200, 200);

        fill(255, 255, 255);
        ellipse(300, 100, 100);

        /// nose + buttons

        fill(255, 150, 0);
        ellipse(300, 130, 20);

        fill(0, 0, 0);
        ellipse(300, 200, 20);

        fill(0, 0, 0);
        ellipse(300, 225, 20);

        fill(0, 0, 0);
        ellipse(300, 250, 20);

        /// eyes

        fill(0, 0, 0);
        ellipse(250, 100, 20);

        fill(0, 0, 0);
        ellipse(350, 100, 20);

        fill(random(255), random(255), random(255));
        ellipse(350, 100, 10);

        fill(random(255), random(255), random(255));
        ellipse(250, 100, 10);

        fill(0, 0, 0);
        ellipse(250, 100, 5);

        fill(0, 0, 0);
        ellipse(350, 100, 5);

        fill(255, 255, 255);
        ellipse(250, 100, 3);

        fill(255, 255, 255);
        ellipse(350, 100, 3);

        /// arms

        fill(200, 75, 0);
        rect(200, 200, 75, 10)

        fill(200, 75, 0);
        rect(275, 200, 10, 70)

        fill(200, 75, 0);
        rect(350, 190, 75, 10)

        fill(200, 75, 0);
        rect(420, 190, 10, 70)

        /// title

        fill(255, 0, 150);
        textSize(17, 600, 300);
        text("Philosophy Snowman: Solves all your problems!*", 67, 470);

        /// key required text

        if (keyIsDown(8)) {

            fill(random(255), random(255), random(255));
            textSize(14, 400, 30);
            text(quote, 10, 320);
        }
        if (keyIsDown(56)) {
            fill(0, 0, 0);
            textSize(14, 400, 30);
            text("*maybe? kinda? ...not really? please don't sue, we have no money :(", 10, 495);
        }
    }


}
