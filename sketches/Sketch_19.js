

class Sketch_19 extends CTSketch {

    constructor() {
        super("Lisa Sun", 19);
        this.xPoint;
        this.pos = 20;
    }

    startSketch() {
        rectMode(CENTER);
        noFill();
    }

    display() {
        translate(-50, -10);
        background(250, 193, 70);
        this.pixartBack();
        this.pixBlack();
        this.pixEyeMouth();
        this.Pink();
        this.Brown();
        this.Gray();
      }
      
       pixartBack() { //background
        this.xPoint = (300 - mouseX)*0.07;
        var x = mouseX;
        fill('white');
        for (let i = 1; i <= 29; i++) { 
          for (let j = 1; j <= 29; j++) {
            ellipse(this.pos * i, this.pos * j, this.xPoint, 20);
          }
        }   
      }
       pixBlack() { //outlines
        fill('black');
        
        ellipse(100, 20, this.xPoint, 20); //first line
        for (let i = 0; i < 3; i++) {
           ellipse((20+i)*this.pos, 20, this.xPoint, 20);
        }
        
        ellipse(4*this.pos, 2*this.pos, this.xPoint, 20); //line 2
        ellipse(6*this.pos, 2*this.pos, this.xPoint, 20);
        ellipse(7*this.pos, 2*this.pos, this.xPoint, 20);
        ellipse(19*this.pos, 2*this.pos, this.xPoint, 20);
      
        ellipse(8*this.pos, 3*this.pos, this.xPoint, 20); //line 3
        ellipse(14*this.pos, 3*this.pos, this.xPoint, 20);
        for (let i = 0; i < 5; i++) {
           ellipse((14+i)*this.pos, 3*this.pos, this.xPoint, 20);
        }
      
        for (let i = 9; i <= 13; i++) { //line4
           ellipse(i*this.pos, 4*this.pos, this.xPoint, 20);
        }
      
        ellipse(4*this.pos, 7*this.pos, this.xPoint, 20); //(4,7)
        ellipse(26*this.pos, 9*this.pos, this.xPoint, 20); //(26,9)
        ellipse(26*this.pos, 10*this.pos, this.xPoint, 20); //(26,10)
        ellipse(26*this.pos, 15*this.pos, this.xPoint, 20); //(26,15)
        ellipse(26*this.pos, 28*this.pos, this.xPoint, 20); //(26,28)
        ellipse(26*this.pos, 29*this.pos, this.xPoint, 20); //(26,29)
        ellipse(25*this.pos, 16*this.pos, this.xPoint, 20); //(25,16)
        ellipse(25*this.pos, 17*this.pos, this.xPoint, 20); //(25,17)
        ellipse(25*this.pos, 8*this.pos, this.xPoint, 20); //(25,8)
        ellipse(24*this.pos, 7*this.pos, this.xPoint, 20); //(24,7)
        ellipse(6*this.pos, 11*this.pos, this.xPoint, 20); //(6,11)
        ellipse(6*this.pos, 12*this.pos, this.xPoint, 20); //(6,12)
        ellipse(6*this.pos, 20*this.pos, this.xPoint, 20); //(6,20)
        ellipse(6*this.pos, 21*this.pos, this.xPoint, 20); //(6,21)
        ellipse(5*this.pos, 22*this.pos, this.xPoint, 20); //(5,22)
        ellipse(5*this.pos, 23*this.pos, this.xPoint, 20); //(5,23)
        ellipse(4*this.pos, 24*this.pos, this.xPoint, 20); //(4,24)
        ellipse(4*this.pos, 25*this.pos, this.xPoint, 20); //(4,25)
        ellipse(3*this.pos, 26*this.pos, this.xPoint, 20); //(3,26)
        ellipse(3*this.pos, 27*this.pos, this.xPoint, 20); //(3,27)
        ellipse(2*this.pos, 28*this.pos, this.xPoint, 20); //(2,28)
        ellipse(1*this.pos, 29*this.pos, this.xPoint, 20); //(1,29)
        
        
        for (let i = 3; i <= 6; i++) { //row 3
           ellipse(3*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 8; i <= 10; i++) { //row 5
           ellipse(5*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 13; i <= 19; i++) { //row 7
           ellipse(7*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 2; i <= 6; i++) { //row 23
           ellipse(23*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 18; i <= 24; i++) { //row 24
           ellipse(24*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 25; i <= 27; i++) { //row 25
           ellipse(25*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 11; i <= 14; i++) { //row 27
           ellipse(27*this.pos, i*this.pos, this.xPoint, 20);
        }
        
      
        
      }
      pixEyeMouth() {
        fill(18, 0, 4);
        ellipse(13*this.pos, 6*this.pos, this.xPoint, 20); //(13,6)
        ellipse(14*this.pos, 6*this.pos, this.xPoint, 20); //(14,6)
        ellipse(12*this.pos, 7*this.pos, this.xPoint, 20); //(12,7)
        ellipse(13*this.pos, 7*this.pos, this.xPoint, 20); //(13,7)
        ellipse(13*this.pos, 11*this.pos, this.xPoint, 20); //(13,11)
        ellipse(14*this.pos, 11*this.pos, this.xPoint, 20); //(14,11)
        ellipse(24*this.pos, 11*this.pos, this.xPoint, 20); //(24,11)
        ellipse(13*this.pos, 12*this.pos, this.xPoint, 20); //(13,12)
      
        for (let i = 19; i <= 21; i++) { //line 5
           ellipse(i*this.pos, 5*this.pos, this.xPoint, 20);
        }
        for (let i = 16; i <= 21; i++) { //line 8
           ellipse(i*this.pos, 8*this.pos, this.xPoint, 20);
        }
        for (let i = 15; i <= 22; i++) { //line 9
           ellipse(i*this.pos, 9*this.pos, this.xPoint, 20);
        }
        for (let i = 14; i <= 23; i++) { //line 10
           ellipse(i*this.pos, 10*this.pos, this.xPoint, 20);
        }
        
        fill(120, 4, 25);
        for (let i = 15; i <= 23; i++) { //line 11
           ellipse(i*this.pos, 11*this.pos, this.xPoint, 20);
        }
        for (let i = 13; i <= 24; i++) { //line 12
           ellipse(i*this.pos, 12*this.pos, this.xPoint, 20);
        }
        for (let i = 13; i <= 24; i++) { //line 13
           ellipse(i*this.pos, 13*this.pos, this.xPoint, 20);
        }
        ellipse(24*this.pos, 14*this.pos, this.xPoint, 20); //(24,14)
        
        fill(171, 5, 36);
        for (let i = 13; i <= 23; i++) { //line 14
           ellipse(i*this.pos, 14*this.pos, this.xPoint, 20);
        }
        for (let i = 14; i <= 24; i++) { //line 15
           ellipse(i*this.pos, 15*this.pos, this.xPoint, 20);
        }
        for (let i = 14; i <= 23; i++) { //line 16
           ellipse(i*this.pos, 16*this.pos, this.xPoint, 20);
        }
        for (let i = 15; i <= 22; i++) { //line 17
           ellipse(i*this.pos, 17*this.pos, this.xPoint, 20);
        }
        for (let i = 17; i <= 21; i++) { //line 18
           ellipse(i*this.pos, 18*this.pos, this.xPoint, 20);
        }
      }
      Pink(){
        fill(245, 103, 134);
        ellipse(4*this.pos, 3*this.pos, this.xPoint, 20); // (4,3)
        ellipse(4*this.pos, 4*this.pos, this.xPoint, 20); // (4,4)
        ellipse(5*this.pos, 4*this.pos, this.xPoint, 20); // (5,4)
        ellipse(6*this.pos, 8*this.pos, this.xPoint, 20); // (6,8)
        ellipse(7*this.pos, 8*this.pos, this.xPoint, 20); // (7,8)
        ellipse(6*this.pos, 9*this.pos, this.xPoint, 20); // (6,9)
        ellipse(7*this.pos, 9*this.pos, this.xPoint, 20); // (7,9)
        ellipse(6*this.pos, 10*this.pos, this.xPoint, 20); // (6,10)
        ellipse(19*this.pos, 7*this.pos, this.xPoint, 20); // (19,7)
        ellipse(21*this.pos, 3*this.pos, this.xPoint, 20); // (21,3)
        ellipse(21*this.pos, 4*this.pos, this.xPoint, 20); // (21,4)
        
        for (let i = 4; i <= 6; i++) {
           ellipse(i*this.pos, 5*this.pos, this.xPoint, 20);
        }
        for (let i = 4; i <= 7; i++) {
           ellipse(i*this.pos, 6*this.pos, this.xPoint, 20);
        }
        for (let i = 5; i <= 7; i++) {
           ellipse(i*this.pos, 7*this.pos, this.xPoint, 20);
        }
        for (let i = 17; i <= 20; i++) {
           ellipse(i*this.pos, 6*this.pos, this.xPoint, 20);
        }
        for (let i = 2; i <= 5; i++) {
           ellipse(22*this.pos, i*this.pos, this.xPoint, 20);
        }
      
        fill(230, 39, 81);
        ellipse(5*this.pos, 3*this.pos, this.xPoint, 20); // (5,3)
        ellipse(6*this.pos, 4*this.pos, this.xPoint, 20); // (6,4)
        ellipse(7*this.pos, 4*this.pos, this.xPoint, 20); // (7,4)
        ellipse(7*this.pos, 5*this.pos, this.xPoint, 20); // (7,5)
        ellipse(8*this.pos, 5*this.pos, this.xPoint, 20); // (8,5)
        ellipse(8*this.pos, 6*this.pos, this.xPoint, 20); // (8,6)
        ellipse(8*this.pos, 7*this.pos, this.xPoint, 20); // (8,7)
        ellipse(9*this.pos, 7*this.pos, this.xPoint, 20); // (9,7)
        ellipse(8*this.pos, 8*this.pos, this.xPoint, 20); // (8,8)
        ellipse(9*this.pos, 8*this.pos, this.xPoint, 20); // (9,8)
        ellipse(8*this.pos, 9*this.pos, this.xPoint, 20); // (8,9)
        ellipse(7*this.pos, 10*this.pos, this.xPoint, 20); // (7,10)
        ellipse(8*this.pos, 10*this.pos, this.xPoint, 20); // (8,10)
        ellipse(8*this.pos, 11*this.pos, this.xPoint, 20); // (8,11)
        ellipse(21*this.pos, 2*this.pos, this.xPoint, 20); // (21,2)
        ellipse(20*this.pos, 3*this.pos, this.xPoint, 20); // (20,3)
        ellipse(20*this.pos, 4*this.pos, this.xPoint, 20); // (20,4)
      }
      Brown(){
        fill(163, 76, 36);
        ellipse(5*this.pos, 2*this.pos, this.xPoint, 20); // (5,2)
        ellipse(6*this.pos, 3*this.pos, this.xPoint, 20); // (6,3)
        ellipse(7*this.pos, 3*this.pos, this.xPoint, 20); // (7,3)
        ellipse(8*this.pos, 4*this.pos, this.xPoint, 20); // (8,4)
        ellipse(9*this.pos, 9*this.pos, this.xPoint, 20); // (9,9)
        ellipse(9*this.pos, 10*this.pos, this.xPoint, 20); // (9,10)
        ellipse(10*this.pos, 7*this.pos, this.xPoint, 20); // (10,7)
        ellipse(10*this.pos, 8*this.pos, this.xPoint, 20); // (10,8)
        ellipse(11*this.pos, 7*this.pos, this.xPoint, 20); // (11,7)
        ellipse(14*this.pos, 4*this.pos, this.xPoint, 20); // (14,4)
        ellipse(18*this.pos, 4*this.pos, this.xPoint, 20); // (18,4)
        ellipse(19*this.pos, 3*this.pos, this.xPoint, 20); // (19,3)
        ellipse(19*this.pos, 4*this.pos, this.xPoint, 20); // (19,4)
        ellipse(20*this.pos, 2*this.pos, this.xPoint, 20); // (20,2)
        
        for (let i = 9; i <= 13; i++) {
           ellipse(i*this.pos, 5*this.pos, this.xPoint, 20);
        }
        for (let i = 9; i <= 11; i++) {
           ellipse(i*this.pos, 6*this.pos, this.xPoint, 20);
        }
      
        fill(105, 43, 15);
        ellipse(7*this.pos, 11*this.pos, this.xPoint, 20); 
        ellipse(7*this.pos, 12*this.pos, this.xPoint, 20); 
        ellipse(10*this.pos, 9*this.pos, this.xPoint, 20); 
        ellipse(10*this.pos, 10*this.pos, this.xPoint, 20); 
        for (let i = 12; i <= 15; i++) {
           ellipse(8*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 11; i <= 16; i++) {
           ellipse(9*this.pos, i*this.pos, this.xPoint, 20);
        }
      }
      Gray(){
        fill(163, 163, 163);
        for (let i = 10; i <= 23; i++) {
          for (let j = 21; j <= 29; j++){
            ellipse(i*this.pos, j*this.pos, this.xPoint, 20);
          }
        }
        
        fill(219, 219, 219);
        ellipse(12*this.pos, 11*this.pos, this.xPoint, 20); // (12,11)
      
        for (let i = 26; i <= 29; i++) {
           ellipse(6*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 25; i <= 28; i++) {
           ellipse(7*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 21; i <= 29; i++) {
           ellipse(8*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 18; i <= 29; i++) {
           ellipse(9*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 17; i <= 28; i++) {
           ellipse(10*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 13; i <= 24; i++) {
           ellipse(11*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 14; i <= 22; i++) {
           ellipse(12*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 16; i <= 22; i++) {
           ellipse(13*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 17; i <= 20; i++) {
           ellipse(i*this.pos, 20*this.pos, this.xPoint, 20);
        }
        for (let i = 18; i <= 21; i++) {
           ellipse(14*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 19; i <= 21; i++) {
           ellipse(15*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 19; i <= 21; i++) {
           ellipse(16*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 20; i <= 22; i++) {
           ellipse(21*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 19; i <= 23; i++) {
           ellipse(22*this.pos, i*this.pos, this.xPoint, 20);
        }
        for (let i = 18; i <= 25; i++) {
           ellipse(23*this.pos, i*this.pos, this.xPoint, 20);
        }
      
        fill(255);
        ellipse(7*this.pos, 26*this.pos, this.xPoint, 20);
        ellipse(8*this.pos, 24*this.pos, this.xPoint, 20);
        ellipse(9*this.pos, 22*this.pos, this.xPoint, 20);
        ellipse(10*this.pos, 19*this.pos, this.xPoint, 20);
      }

}
