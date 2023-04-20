

class Sketch_16 extends CTSketch {

    constructor() {
        super("Ian Sheshunoff", 16);
    }

    startSketch() {

    }

    display() {
        frameRate(15)

        background(0, 0, 0, random(5, 10));
        stroke(50, 255, 50)
        let a = mouseX + 51.9615174;
        let b = mouseY + 30.00001
        let c = mouseX
        let d = mouseY - 60
        let e = mouseX - 51.9615174
        let f = b + 60
        let g = a + 51.9615174
        let h = mouseY - 30.00001
        let i = c - 2 * 51.9615174
        let j = c + 2 * 51.9615174
        let k = c + 3 * 51.9615174
        let l = c - 3 * 51.9615174
        let m = c + 4 * 51.9615174
        let n = c - 4 * 51.9615174
        if (random(0, 3) < 1) {
            line(mouseX, mouseY, a, b)
            //1,2
            if (random() < 0.5) {
                line(a, b, a, f)
                //2,3
                if (random() < 0.5) {
                    line(a, f, g, mouseY + 120.00001)
                    //3,5
                    if (random() < 0.5) {
                        line(g, mouseY + 120.00001, k, mouseY + 90.00001)
                        //4,7
                    }
                    else {
                        line(g, mouseY + 120.00001, g, mouseY + 180.00002)
                        //4,8
                    }
                }
                else {
                    line(a, f, c, mouseY + 120.00001)
                    //3,6
                    if (random() < 0.5) {
                        line(c, mouseY + 120.00001, c, mouseY + 180.00002)
                        //4,9
                    }
                    else {
                        line(c, mouseY + 120.00001, c, mouseY + 180.00002)
                        //4,10
                    }
                }
            }
            else {
                line(a, b, g, mouseY)
                //2,2
                if (random() < 0.5) {
                    line(j, mouseY, j, d)
                    //3,3
                }
                else {
                    line(j, mouseY, c + 3 * 51.9615174, b)
                    //3,4
                    if (random() < 0.5) {
                        line(k, b, m, mouseY)
                        //4,5
                    }
                    else {
                        line(k, b, k, mouseY + 90.00001)
                        //4,6
                    }
                }

            }
        }
        else {
            if (random() < 0.5) {
                line(mouseX, mouseY, c, d)
                //1,1
                if (random() < 0.5) {
                    line(c, d, a, d - 30.0001)
                    //2,1
                    if (random() < 0.5) {
                        line(a, d - 30.0001, a, mouseY - 150.00001)
                        //3,1
                        if (random() < 0.5) {
                            line(a, mouseY - 150.00001, c, mouseY - 180.00004)
                            //4,1
                        }
                        else {
                            line(a, mouseY - 150.00001, j, mouseY - 180.00004)
                            //4,2
                        }
                    }
                    else {
                        line(a, d - 30.0001, c + 2 * 51.9615174, d)
                        //3,2
                        if (random() < 0.5) {

                            line(c + 2 * 51.9615174, d, c + 3 * 51.9615174, mouseY - 90.00001)
                            //4,3
                        }
                        else {
                            line(c + 2 * 51.9615174, d, c + 3 * 51.9615174, mouseY - 90.00001)
                            //4,4
                        }
                    }
                }
                else {
                    line(c, d, e, d - 30.0001)
                    //2,6
                    if (random() < 0.5) {
                        line(e, d - 30.0001, i, d)
                        //3,11
                        if (random() < 0.5) {
                            line(i, d, l, mouseY - 90.00001)
                            //4,19
                        }
                        else {
                            line(i, d, l, mouseY - 90.00001)
                            //4,20
                        }
                    }
                    else {
                        line(e, d - 30.0001, e, mouseY - 150.00001)
                        //3,12
                        if (random() < 0.5) {
                            line(e, mouseY - 150.00001, i, mouseY - 180.00002)
                            //4,21
                        }
                        else {
                            line(e, mouseY - 150.00001, c, mouseY - 180.00002)
                            //4,22
                        }
                    }
                }
            }
            else {
                line(mouseX, mouseY, e, b)
                if (random() < 0.5) {
                    line(e, b, e, f)
                    //2,4
                    if (random() < 0.5) {
                        line(e, b + 60, c, mouseY + 120.00002)
                        //3,7
                        if (random() < 0.5) {
                            line(c, mouseY + 120.00001, c, mouseY + 180.00002)
                            //4,11
                        }
                        else {
                            line(c, mouseY + 120.00001, c, mouseY + 180.00002)
                            //4,12
                        }
                    }
                    else {
                        line(e, b + 60, i, mouseY + 120.00002)
                        //3,8
                        if (random() < 0.5) {
                            line(i, mouseY + 120.00002, i, mouseY + 180.00002)
                            //4,13
                        }
                        else {
                            line(i, mouseY + 120.00002, l, mouseY + 90.00001)
                            //4,14
                        }
                    }
                }
                else {
                    line(e, b, i, mouseY)
                    //2,5
                    if (random() < 0.5) {
                        line(i, mouseY, i - 51.9615174, b)
                        //3,9
                        if (random() < 0.5) {
                            line(l, b, l, mouseY + 90.00001)
                            //4,15
                        }
                        else {
                            line(l, b, n, mouseY)
                            //4,16
                        }
                    }
                    else {
                        line(i, mouseY, i, d)
                        //3,10
                        if (random() < 0.5) {
                            line(i, d, l, mouseY - 90.00001)
                            //4,17
                        }
                        else {
                            line(i, d, l, mouseY - 90.00001)
                            //4,18
                        }
                    }
                }
            }
        }
        noFill()

        if (keyIsDown(13)) {
            ellipse(mouseX, mouseY, 120)
            ellipse(mouseX, mouseY, 210)
            ellipse(mouseX, mouseY, 240)
            ellipse(mouseX, mouseY, 315)
            ellipse(mouseX, mouseY, 360)
            ellipse(mouseX, mouseY, 415)
        }
    }



}

