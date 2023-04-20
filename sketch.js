const NUM_SKETCHES = 22;
const sketches = [];
let frameR = 60;
let currentSketch;
let currentSketchIndex = 17;
let lastChanged = 0;

let scaleNum = 1;

function setup() {

    let canvas = createCanvas(500 * scaleNum, 500 * scaleNum);
    canvas.parent('sketch-holder');


    setSketch();

}

function draw() {
    frameRate(frameR);

    if (currentSketch) {
        currentSketch.display();
    }
    changeSketch();
}

function changeSketch() {

    if (millis() - lastChanged > 14 * 1000) {
        sketchForward();
    }
}



function setSketch() {
    switch (currentSketchIndex) {
        case 0:
            currentSketch = new Sketch_00();
            break;
        case 1:
            currentSketch = new Sketch_01();
            break;
        case 2:
            currentSketch = new Sketch_02();
            break;
        case 3:
            currentSketch = new Sketch_03();
            break;
        case 4:
            currentSketch = new Sketch_04();
            break;
        case 5:
            currentSketch = new Sketch_05();
            break;
        case 6:
            currentSketch = new Sketch_06();
            break;
        case 7:
            currentSketch = new Sketch_07();
            break;
        case 8:
            currentSketch = new Sketch_08();
            break;
        case 9:
            currentSketch = new Sketch_09();
            break;
        case 10:
            currentSketch = new Sketch_10();
            break;
        case 11:
            currentSketch = new Sketch_11();
            break;
        case 12:
            currentSketch = new Sketch_12();
            break;
        case 13:
            currentSketch = new Sketch_13();
            break;
        case 14:
            currentSketch = new Sketch_14();
            break;
        case 15:
            currentSketch = new Sketch_15();
            break;
        case 16:
            currentSketch = new Sketch_16();
            break;
        case 17:
            currentSketch = new Sketch_17();
            break;
        case 18:
            currentSketch = new Sketch_18();
            break;
        case 19:
            currentSketch = new Sketch_19();
            break;
        case 20:
            currentSketch = new Sketch_20();
            break;
        case 21:
            currentSketch = new Sketch_21();
            break;
        default:
            currentSketch = new Sketch_00();
            break;
    }

    if (currentSketch) {
        currentSketch.init();
    }
}

function mousePressed() {
    if (currentSketch) {
        currentSketch.mouse();
    }
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        sketchForward();
    }
    else if (keyCode == LEFT_ARROW) {
        sketchBackward();
    }
}

function sketchForward() {
    lastChanged = millis();
    currentSketchIndex++;
    currentSketchIndex %= NUM_SKETCHES;
    setSketch();
}

function sketchBackward() {
    lastChanged = millis();
    currentSketchIndex--;
    if (currentSketchIndex < 0) {
        currentSketchIndex = NUM_SKETCHES - 1;
    }
    setSketch();
}