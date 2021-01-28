class Box{
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
    if (this.body.speed < 3) {
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    } else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
    
  }
}