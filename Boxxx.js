class Boxxx{
    constructor(x, y, width, height) {
      var options = {
        'restitution':0.01,
        'friction':1.0,
        'density':1.0
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1);
      stroke("lightblue");
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }