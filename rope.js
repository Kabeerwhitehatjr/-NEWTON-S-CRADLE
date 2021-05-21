class rope{
    constructor(bodyA, pointB)
    {
       
        var options = {
            bodyA : bodyA,
            bodyB : pointB,
            stiffness : 0.04,
            length : 10
                }
      
        this.rope = Constraint.create(options)
        World.add(world, this.rope);
        this.pointB = pointB;


    }

    display()
    {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);

       line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}