class Chain{
    constructor(any,name){
        var chainer = {
            stiffness:.03,
            length:15,
            bodyA:any,
            bodyB:name
            
        }

        
        this.main = Constraint.create(chainer)
        World.add(world, this.main);
    }
    display(){
    line(this.main.bodyA.position.x,this.main.bodyA.position.y,this.main.bodyB.position.x,this.main.bodyB.position.y)

    }
}
