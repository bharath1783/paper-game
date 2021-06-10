class Paper{
  constructor(x,y,radius) {
  var options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2,
  }
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.image = loadImage("paper.png");
  this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
  World.add(World,this.body);
  
}

display() {
  var pos = this.body.position;
  Push();
  translate (pos.x,pos.y);
  rectMode(CENTER);
  fill("brown");
  imageMode (CENTER);
  image(this.image,0,0,this.radius,this.radius);
  Pop();

}
}
 


