
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone , ground;
var boy , img;
var tree , img2 , slingshot ;
function preload()
{
	img = loadImage("boy.png");
	img2 = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400 , 680 , 800 , 10);
stone = new Stone(115 , 570 , 10 , 10);

	boy = Bodies.rectangle(150 , 620 , 80 , 100 , {isStatic:true})
	tree = Bodies.rectangle(500, 600 , 50, 50);
	mango1 = new Mango(444 , 463 ,50 , 50);
	mango2 = new Mango( 544 , 559 , 50 , 50);
	mango3 = new Mango(356 ,578 , 50 , 50 );
	sling = new SlingShot(stone.body,{x:102, y:570});
  World.add(world , boy);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  ground.display();
  

 imageMode(CENTER);
 image(img , boy.position.x , boy.position.y , 150 , 200);
 image(img2 , tree.position.x , boy.position.y , 500 , 500);
 sling.display();
 mango1.display();
 mango2.display();
mango3.display();
stone.display();

 //console.log(mouseX);
 //console.log(mouseY);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	sling.fly();
}
function detectCollision(stone1 , mango1){
	mangoBodyPosition = mango1.body.position;
	stoneBodyPosition = stone1.body.position;
	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
	if (distance<=mango1.r + stone1.r)
	{
		Matter.Body.setStatic(mango1.body,false);
	}
}