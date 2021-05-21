class roof {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("Black");
      fill("grey");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  