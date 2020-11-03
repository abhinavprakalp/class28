class Slingshot {
    constructor(bodyA,pB){
        var ops = {
            bodyA:bodyA,
            pointB:pB,
            stiffness:0.02,
            length:10
        }
        this.sling=Constraint.create(ops);
        this.pointB=pB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}