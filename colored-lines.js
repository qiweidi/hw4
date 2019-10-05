

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 400, 400, 100);
}


function draw() {
  background(255);

 

  for (var x = 50; x < width-50; x = x + 30) {
   

    line(x, height/2, mouseX, mouseY);
    stroke(x, 360, 278, 456);
  }
}
