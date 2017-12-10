
// https://github.com/CodingTrain/Rainbow-Code/tree/master/challenges/CC_06_Mitosis_p5.js

var cell;

function setup() {
  createCanvas(700, 700);
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
  background(20);
  for (var i =0; i < cells.length; i++) {
  cells[i].move();
  cells[i].show();
  }
}

function mousePressed() {
  for (var i = cells.length-1; i >= 0; i--) {

    if (cells[i].clicked(mouseX, mouseY)) {
      console.log("CLICKED");
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}