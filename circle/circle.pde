
ArrayList<Circle> circles;

void setup() {
	size(360, 360);
	circles = ArrayList<Circle>();
	circles.push (new Circle(200, 200));
}

void draw() {

	for (Circle c : circles) {
		background(0);
		c.show();
	}
	
}