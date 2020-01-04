function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  wolf = loadModel("assets/wolf.obj", true);
  angleMode(DEGREES);
}

function draw() {
  background(10);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(0, 10, 50);
  directionalLight(255, 0, 10, 0, 1, 0);
  pointLight(0, 255, 255, locX, locY, 0);

  noStroke();

  rotateZ(180);
  rotateY(frameCount * 0.9);

  model(wolf);
}
