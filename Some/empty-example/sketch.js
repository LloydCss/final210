var a;
var scl = 20;
var img
var lloydsBugs;
var song
var particles = []

function preload() {
  soundFormats('wav');
  song = loadSound("dirt.wav")
}
 
function setup() {
  createCanvas(600, 600);
  a = new Ant();
  frameRate(10);
 bg = loadImage("images.jpg");
 song.play();
}

function mouseDragged() {
  particles.push(new Particle(mouseX, mouseY));
}


function mousePressed() {
  s.total++;
}

function draw() {
  background(bg);

  for(var i=0; i<particles.length; i++){
particles[i].show();
  particles[i].move();
 }
  
  a.update();
  a.show();


  
}

function Particle(x, y){
  this.x = x;
  this.y = y;
  this.col = color(0, random(0), random(0));
  this.speedX = random(-3,3);
  this.speedY = random(-3,3);
 
 this.show = function(){
  fill(this.col);
  ellipse(this.x, this.y, 10, 10);
}
this.move = function(){
this.x += this.speedX;
this.x += this.speedY;
}
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    a.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    a.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    a.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    a.dir(-1, 0);
  }
}