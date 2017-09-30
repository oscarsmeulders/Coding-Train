
var attractor;
var particle;

function setup() {
  createCanvas(800, 800);
  attractor = createVector(200, 200);
  particle = new Particle (200, 100);
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(4);
  point(attractor.x, attractor.y);

  particle.show()
  particle.attracted(attractor);
}