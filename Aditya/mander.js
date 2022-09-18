function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
  noLoop();
}

function draw() {
  background(0);

  // Make sure we can write to the pixels[] array.
  // Only need to do this once since we don't do any other drawing.
  loadPixels();

  // Maximum number of iterations for each point on the complex plane
  const maxiterations = 100;
  // Range of values for complex plane
  xmin=-2;
  xmax=2;
  ymin=-2;
  ymax=2;


  // Increment amount in both axes
  const dx = (xmax - xmin) / (width);
  const dy = (ymax - ymin) / (height);

  // Start y
  let y = ymin;
  for (let j = 0; j < height; j++) {
    // Start x
    let x = xmin;
    for (let i = 0; i < width; i++) {

      // Iterate z = z^2 + c 
      let a = x;
      let b = y;
      let n = 0;
      while (n < maxiterations) {
        const aa = a * a;
        const bb = b * b;
        const twoab = 2.0 * a * b;
        a = aa - bb + x;
        b = twoab + y;
        // Lo0p breaks when greater than 16
        if (dist(aa, bb, 0, 0) > 16) {
          break;  // Bail
        }
        n++;
      }

      
      const pix = (i+j*width)*4;
      let bright = map(n, 0, maxIterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      if (n == maxiterations) {
        bright = 0;
      } else {
        
        pixels[pix + 0] = bright;
        pixels[pix + 1] = bright;
        pixels[pix + 2] = bright;
        pixels[pix + 3] = 255;
      }
      x += dx;
    }
    y += dy;
  }
  updatePixels();
}
