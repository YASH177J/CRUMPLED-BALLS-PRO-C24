var ground,paperObject,paperBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground1=new Ground(800,400,2000,20)
	dustbin1=new Dustbin(740,330,20,100)
	dustbin2=new Dustbin(840,380,180,20)
	dustbin3=new Dustbin(940,330,20,100)
	paper=new Paper(50,380,20,20)
	

}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground1.display()
  paper.display()
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
	 }
   }
