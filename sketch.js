function setup() {
  createCanvas(300, 200);

  background(100);

  // Start drawing the shape.
  // Draw a series of triangles.
  beginShape(TRIANGLES);

  // Left triangle.
  vertex(20, 75);
  vertex(40, 30);
  vertex(50, 75);

  // Right triangle.
  vertex(40, 20);
  vertex(70, 55);
  vertex(80, 20);

  // Stop drawing the shape.
  endShape();

  describe('Two white triangles drawn on a gray background.');
}