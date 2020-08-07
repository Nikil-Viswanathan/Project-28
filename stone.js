class Stone{
    constructor(x , y){
var options = {
isStatic : false,
restitution : 0,
friction : 1,
density : 1.2
}
this.image = loadImage("stone.png")
this.body = Bodies.rectangle(x , y , 50 , 50 ,  options );
this.width =  10;
this.height = 10; 
World.add (world , this.body)

    }
    display(){
    push();
    imageMode(CENTER)
    image(this.image , this.body.position.x , this.body.position.y ,50 , 50 )
    pop()
    }
}
