
var n = 0;
var c = 2;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  colorMode(HSB);
  background (0);
}

function draw() {

  var a = n * 137.3;
  var r = c * sqrt(n);

  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;

  fill(a % 256, 255, 256);
  //fill((a-r) % 180, 255, 256);
  //fill(n % 256, 255, 256);
  noStroke();
  ellipse(x, y, 2, 2);

  n++;



}
