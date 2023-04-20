

class Sketch_22 {

    constructor() {
        this.student = "Johnny Foster";
        this.id = 22;
        this.frameR = 60;

        this.setupF = (p) => {
            p.rectMode(CENTER);
            p.frameRate(60);
            p.normalMaterial();
        }

        this.drawF = (p) => {
            p.background(0);
            p.orbitControl();
            p.rotateY(3000000);
            p.noFill()
            p.box(p.width / 2, p.height / 2,)
            p.stroke(p.random(255), p.random(255), p.random(255));
            p.rotateX(p.frameCount * 0.01);
            p.rotateY(p.frameCount * 0.01);
            p.torus(30, 15);
            p.torus(40, 25);
            p.torus(50, 35);
            p.torus(60, 45);
            p.torus(70, 55);
            p.rotateY(p.frameCount * 0.01);

            p.noStroke();
            p.fill(50);
            p.push();
            p.translate(-275, 175);
            p.rotateY(1.25);
            p.rotateX(-0.9);
            p.box(100);
            p.pop();

            p.noFill();
            p.stroke(255);
            p.push();
            p.translate(500, p.height * 0.35, -200);
            p.sphere(300);
            p.pop();



            for (let j = 0; j < 5; j++) {
                p.push();
                for (let i = 0; i < 80; i++) {
                    p.translate(
                        p.sin(p.frameCount * 0.1 + j) * 100,
                        p.sin(p.frameCount * 0.1 + j) * 100,
                        i * 0.1
                    );
                    p.rotateZ(frameCount * 110.002);
                    p.push();
                    p.sphere(6, 6, 6);
                    p.pop();
                }
                p.pop();
            }
        }
    }

}

