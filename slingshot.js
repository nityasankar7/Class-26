class slingshot{
constructor(Abody,Bpoint){
var options={//JSON
    bodyA:Abody,
    pointB:Bpoint,
    stiffness:0.04,
    length:10

}
this.pointB=Bpoint
this.sling=Constraint.create(options)
World.add(world,this.sling)
}
fly(){
 this.sling.bodyA=null;
}
display(){
    if(this.sling.bodyA!=null){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        strokeWeight(5);
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}