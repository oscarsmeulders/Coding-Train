
var k = 5 / 8;
var slider;

function setup() {
  createCanvas(600,600)
  slider = createSlider(1, 10, 4, 0.1);
}

function draw() {
  k = slider.value();
  background(51);
	translate(width/2, height/2);

beginShape();
	for (var a = 0; a < TWO_PI * 8; a += 0.02) {
		var r = 200 * cos(k * a);
		var x = r * cos(a);
		var y = r * sin(a);
		stroke(255);
		strokeWeight(1);
		noFill();
		vertex(x, y);	
	}
endShape(CLOSE);
}