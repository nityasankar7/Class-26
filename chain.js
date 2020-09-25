class chain{
constructor(Abody,Bbody){
var options={//JSON
    bodyA:Abody,
    bodyB:Bbody,
    stiffness:0.04,
    length:10

}
this.chain=Constraint.create(options)
World.add(world,this.chain)
}
display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
strokeWeight(5);
line (pointA.x,pointA.y,pointB.x,pointB.y)

}
}