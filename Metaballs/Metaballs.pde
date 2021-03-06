
Blob[] blobs = new Blob[10];

void setup() {
	size(640, 360);	
}

void draw() {
	background(51);
	
	loadPixels();
	for (int x = 0; x < width; x++) {
		for (int y = 0; y < height; y++) {
			int index = x + y * width;
			float d = dist(x, y, b.pos.x, b.pos.y);
			float col = 1000 * b.r / d;
			pixels[index] = color (col);		
	}
}
updatePixels();
}

b.show();