class BaseClass {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0,
          density:1.2,
         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);


      function keyPressed(){
        if (keyCode === UP_ARROW);
        Matter.Body.applyForce(paper.Body,paper.Body.position,{x:130,y:-145});
    }




    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };

