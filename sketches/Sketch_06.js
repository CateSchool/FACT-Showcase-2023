

class Sketch_06 extends CTSketch {

    constructor() {
        super("Rosita Power", 6);
    }

    startSketch() {

    }

    display() {
        //sky
        let col1 = color(143, 198, 242);
        let col2 = color(2, 9, 61);
        let col = lerpColor(col1, col2, mouseY / height * 2);
   
        background(col);
        //mountain
        let mntcol1 = color(232, 196, 242);
        let mntcol2 = color(92, 56, 102);
        let mntcol = lerpColor(mntcol1, mntcol2, mouseY / height * 2);
     
        //ground
        let grndcol1 = color(130, 84, 158);
        let grndcol2 = color(60, 12, 89);
        let grndcol = lerpColor(grndcol1, grndcol2, mouseY / height * 2);
     
        //cloud
        let cldcol1 = color('white');
        let cldcol2 = color(78, 78, 78);
        let cldcol = lerpColor(cldcol1, cldcol2, mouseY / height * 2);
        //plane
        let plncol1 = color('white');
        let plncol2 = color('grey');
        let plncol = lerpColor(plncol1, plncol2, mouseY / height * 2);
        //stars
        let strcol1 = color(143, 198, 242);
        let strcol2 = color('white');
        let strcol = lerpColor(strcol1, strcol2, mouseY / height * 2);
        //moon
        fill(245, 240, 225)
        ellipse(width / 2, height - mouseY, 100)
        //sun
        fill(255, 201, 64)
        ellipse(width / 2, mouseY, 100)
        //mountains
        fill(mntcol)
        triangle(50, height / 2, 150, height / 3, 250, height / 2)
        triangle(150, height / 2, 250, height / 4.5, 350, height / 2)
        triangle(250, height / 2, 350, height / 3, 450, height / 2)
        //ground
        fill(grndcol)
        rect(0, height / 2, width, height / 1.5)
        //stars
        fill(strcol)
        textSize(15)
        noStroke()
        text('★', 100, 100)
        text('★', 200, 60)
        //plane
        fill(plncol)
        textSize(100)
        text('✈', mouseY * 2, 200)
        textSize(100)
        text('✈', mouseY * 1.5, 100)
        //clouds
        fill(cldcol)
        stroke('black')
        textSize(100)
        text('☁', 100, 100)
        textSize(150)
        stroke('black')
        text('☁', 150, 110)
    }


}
