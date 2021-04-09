class Dustbin {
    constructor(x, y,width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y,width, 0, options);
      this.width =width;
      this.height = height;
      
      World.add(world, this.body);
      this.image=loadImage("dustbingreen (1).png")
    }
    display(){
      var pos =this.body.position;
     //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };