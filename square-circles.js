unction setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i +=10) {
   square( x[i]-25+(i/2) , y[i]-25+(i/2), 1+(x.length-i));
  }

  x = x.slice(-50); // remove all but the last 50 x values
  y = y.slice(-50); // remove all but the last 50 y values
}
