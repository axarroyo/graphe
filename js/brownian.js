var num = 2000;
var aRange = 13;
var bRange = 8;
var cRange = 18;

var ax = [];
var ay = [];
var bx = [];
var by = [];
var cx = [];
var cy = [];


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('drawing');
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 4;
    ay[i] = height / 2.3;
    bx[i] = 3 * width / 4;
    by[i] = height / 1.3;
    cx[i] = width / 2;
    cy[i] = height / 2;
  }
  frameRate(60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
    bx[i - 1] = bx[i];
    by[i - 1] = by[i];
    cx[i - 1] = cx[i];
    cy[i - 1] = cy[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-aRange, aRange);
  ay[num - 1] += random(-aRange, aRange);
  bx[num - 1] += random(-bRange, bRange);
  by[num - 1] += random(-bRange, bRange);
  cx[num - 1] += random(-cRange, cRange);
  cy[num - 1] += random(-cRange, cRange);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);
  bx[num - 1] = constrain(bx[num - 1], 0, width);
  by[num - 1] = constrain(by[num - 1], 0, height);
  cx[num - 1] = constrain(cx[num - 1], 0, width);
  cy[num - 1] = constrain(cy[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    var rVal = j / num * 155;
    var gVal = j / num * 200;
    var bVal = j / num * 120;
    stroke(rVal, 150, gVal, 75, bVal, 150);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    // stroke(bVal, 0, 0);
    line(bx[j - 1], by[j - 1], bx[j], by[j]);
    // stroke(cVal, 0, 0);
    line(cx[j - 1], cy[j - 1], cx[j], cy[j]);
  }
}
