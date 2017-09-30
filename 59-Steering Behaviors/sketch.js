var font;
var vehicles = []

function preload() {
  font = loadFont('AvenirNextRoundedStd-Demi.otf');

}

function setup() {
  createCanvas(600,300);
  textFont(font);
  background(51);
  text('font test');
  textSize(128);
  fill(255);
  noStroke();
  text('train', 10, 200);


  var points = font.textToPoints('train', 100, 200, 192);
  // console.log(points);

  for (var i=0; i < points.length) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255, 255, 255);
    // strokeWeight(4);
    // point(this.pt.x, this.pt.y);

  }

}

function draw() {
  background(51);

  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.update();
    v.show();
  };

}