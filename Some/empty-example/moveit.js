function Ant() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.lloydsArmy = [];

 

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.lloydsArmy.length; i++) {
      var pos = this.lloydsArmy[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('eat lloyds ants next time');
        this.total = 0;
        this.lloydsArmy = [];
      }
    }
  }

  this.update = function() {
    for (var i = 0; i < this.lloydsArmy.length - 1; i++) {
      this.lloydsArmy[i] = this.lloydsArmy[i + 1];
    }
    if (this.total >= 1) {
      this.lloydsArmy[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(0);
    for (var i = 0; i < this.lloydsArmy.length; i++) {
      rect(this.lloydsArmy[i].x, this.lloydsArmy[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }
}