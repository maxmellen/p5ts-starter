/// <reference types="p5/global" />

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  fill(0);
  background(0);
}

function draw() {
  circle(mouseX, mouseY, 64);
}

function mousePressed() {
  background(0);
}
