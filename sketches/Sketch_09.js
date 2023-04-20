

class Sketch_09 extends CTSketch  {

    constructor() {
        super("Aidan Free", 9);
    }

    startSketch() {
        
    }

    display() {
        background(0);
        strokeWeight(10);
      
        //original rectangles and circles
        fill(mouseY/4+mouseX/4);
        rect(0, 0, mouseX, mouseY);
        fill(mouseY/2, mouseX/2, 50);
        rect(mouseX, 0, width-mouseX, mouseY)
        fill(50, mouseY/2, mouseX/2);
        rect(0, mouseY, mouseX, height-mouseY)
        fill(mouseX/2, 50, mouseY/2);
        rect(mouseX, mouseY, width-mouseX, height)
        fill(mouseX/2, mouseY/2, mouseY) 
        ellipse(mouseX, mouseY, (mouseX+mouseY)/5+50)
        if (mouseIsPressed) {
          for (let i = 0; i < 10; i++) {
            for (let i = 0; i < 10; i++) {
              //changing colors for rectangle
              fill(mouseX/random(5), mouseY/random(5), 0);
              rect(0, 0, mouseX, mouseY);
              fill(mouseY/random(5), mouseX/random(5), 50);
              rect(mouseX, 0, width-mouseX, mouseY)
              fill(50, mouseY/random(5), mouseX/random(5));
              rect(0, mouseY, mouseX, height-mouseY)
              fill(mouseX/random(5), 50, mouseY/random(5));
              rect(mouseX, mouseY, width-mouseX, height)
              //middle rectangle
              fill(mouseX/random(5), mouseY/random(5), mouseY) 
              rect(mouseX-60, mouseY-75, 100+mouseX/10, 100+mouseY/5)
              //top left to bottom right
              line(0, 0, width, height-mouseY)
              line(0, 0, width, height+mouseY)
              line(0, 0, width-mouseX, height)
              line(0, 0, width+mouseX, height)
              line(0, 0, width+mouseX, height+mouseY)
              //top left to bottom right
              line(width, 0, 0, height-mouseY)
              line(width, 0, 0, height+mouseY)
              line(width, 0, 0-mouseX, height)
              line(width, 0, 0+mouseX, height)
              line(width, 0, 0+mouseX, height+mouseY)
              //bottom left to top right
              line(0, height, width, 0-mouseY)
              line(0, height, width, 0+mouseY)
              line(0, height, width-mouseX, 0)
              line(0, height, width+mouseX, 0)
              line(0, height, width+mouseX, 0+mouseY)
              //bottom right to top left
              line(width, height, 0, 0-mouseY)
              line(width, height, 0, 0+mouseY)
              line(width, height, 0-mouseX, 0)
              line(width, height, 0+mouseX, 0)
              //THESE DONT LOOK AS GOOD
              //bottom right to top left
              //line(width, height, 0, 0)
              //top right to bottom left
              //line(width, 0, 0, height)
      
      
      
              //middle left -> top right
              line(0, height/2, width, 0-mouseY)
              line(0, height/2, width, 0+mouseY)
              line(0, height/2, width-mouseX, 0)
              line(0, height/2, width+mouseX, 0)
              line(0, height/2, width+mouseX, 0+mouseY)
              //middle left -> bottom right
              line(0, height/2, width-mouseY, height)
              line(0, height/2, width-mouseY, height)
              line(0, height/2, width-mouseX, height)
              line(0, height/2, width+mouseX, height)
              line(0, height/2, width+mouseX, height+mouseY)
              //middle right -> bottom left
              line(width, height/2, width-mouseY, height)
              line(width, height/2, width-mouseY, height)
              line(width, height/2, width-mouseX, height)
              line(width, height/2, width+mouseX, height)
              line(width, height/2, width+mouseX, height+mouseY)
              //middle right -> top left
              line(width, height/2, 0, 0-mouseY)
              line(width, height/2, 0, 0+mouseY)
              line(width, height/2, 0-mouseX, 0)
              line(width, height/2, 0+mouseX, 0)
              line(width, height/2, 0, 0)
            }
          }
        }
    }
}
