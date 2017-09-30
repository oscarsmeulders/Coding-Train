
function Particle (x, y) {
	this.pos = createVector (x, y);
	this.vel = createVector (0,0);
	this.acc = createVector ();

	this.show = function () {
		stroke (255);
		strokeWeight(4);
		point(this.pos.x, this.pos.y);
	}

	this.attracted = function (target) {

	}

}