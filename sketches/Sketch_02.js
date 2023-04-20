

class Sketch_02 extends CTSketch {

    constructor() {
        super("Chase Meyer", 2);
    }

    startSketch() {
    }

    display() {
        background(255, 200, 200);

        let col1 = color(76, 137, 194);
        let col2 = color(194, 94, 76);

        for (let i = 0; i < 10; i++) {
            fill(lerpColor(col1, col2, i / 9))
            strokeWeight(0);
            rect(0, i * 50, width, 65);
        }

        //sun
        fill(228, 210, 66);
        ellipse(mouseX + 75, 75, 80, 80);

        fill(230, 201, 67);
        ellipse(mouseX + 75, 75, 70, 70);

        fill(235, 186, 67);
        ellipse(mouseX + 75, 75, 60, 60);

        fill(240, 171, 68);
        ellipse(mouseX + 75, 75, 50, 50);

        fill(245, 156, 69);
        ellipse(mouseX + 75, 75, 40, 40);

        fill(250, 141, 70);
        ellipse(mouseX + 75, 75, 30, 30);

        fill(255, 126, 71);
        ellipse(mouseX + 75, 75, 20, 20);




        //snowy mountains
        let darkSide = color(227 - mouseX / 10, 219 - mouseX / 10, 216 - mouseX / 10);
        // darkSide = 

        fill(255);
        triangle(75, 200, -50, height, 300, height);
        fill(darkSide);
        triangle(75, 200, -50, height, 50, height);

        fill(255);
        triangle(250, 100, 150, height, 500, height);
        fill(darkSide);
        triangle(250, 100, 190, 425, 240, 510);

        fill(255);
        triangle(400, 225, 300, height, 700, height);
        fill(darkSide);
        triangle(400, 225, 368, 355, 390, 400);

        //tree

        fill(102, 70, 0)//brown
        rect(106.5, 314, 7, 20)//trunk


        fill(6, 99, 31)//dark green
        triangle(110, 285, 105, 300, 115, 300)// top tree	


        fill(6, 99, 31)//dark green
        triangle(110, 291, 103, 313, 117, 313)//middle tree


        fill(6, 99, 31)//dark green
        triangle(110, 305, 100, 323, 120, 323)//bottom tree

        //tree
        fill(102, 70, 0)//brown
        rect(55, 350, 7, 20)//trunk


        fill(6, 99, 31)//dark green
        triangle(59, 321, 54, 336, 64, 336)// top tree	


        fill(6, 99, 31)//dark green
        triangle(59, 327, 52, 349, 66, 349)//middle tree


        fill(6, 99, 31)//dark green
        triangle(59, 341, 49, 359, 69, 359)//bottom tree

        //tree
        fill(102, 70, 0)//brown
        rect(75, 500, 7, 20)//trunk


        fill(6, 99, 31)//dark green
        triangle(79, 471, 74, 486, 84, 486)// top tree	


        fill(6, 99, 31)//dark green
        triangle(79, 477, 72, 499, 86, 499)//middle tree


        fill(6, 99, 31)//dark green
        triangle(79, 491, 69, 509, 89, 509)//bottom tree

        //tree
        fill(102, 70, 0)//brown
        rect(175, 550, 7, 20)//trunk


        fill(6, 99, 31)//dark green
        triangle(179, 521, 174, 536, 184, 536)// top tree	


        fill(6, 99, 31)//dark green
        triangle(179, 527, 172, 549, 186, 549)//middle tree


        fill(6, 99, 31)//dark green
        triangle(179, 541, 169, 559, 189, 559)//bottom tree

        //tree
        fill(102, 70, 0)//brown
        rect(375, 350, 7, 20)//trunk


        fill(6, 99, 31)//dark green
        triangle(379, 321, 374, 336, 384, 336)// top tree	


        fill(6, 99, 31)//dark green
        triangle(379, 327, 372, 349, 386, 349)//middle tree


        fill(6, 99, 31)//dark green
        triangle(379, 341, 369, 359, 389, 359)//bottom tree

    }

}



