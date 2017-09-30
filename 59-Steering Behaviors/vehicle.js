
function Vehicle() {
	this.pos = createVector(x,y);
	this.target = createVector(x,y);
	this.vel = createVector();
	this.acc = createVector();
	this.r = 9;
}


Vehicle.prototype.behaviors = function() {
	var seek = this.seek(this.target);
	this.applyForce(seek);
}

Vehicle.prototype.update = function () {
	this.pos.add(this.vel);
	this.vel.add(this.acc);
}

Vehicle.prototype.show = function () {
	stroke(255);
	strokeWeight(8);
	point(pt.x, pt.y);
}