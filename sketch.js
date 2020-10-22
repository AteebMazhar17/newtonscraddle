
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	roof1 = new roof(340,200,340,20);

	bob1=new bob(200,500,30);
	bob2=new bob(270,500,30);
	bob3=new bob(340,500,30);
	bob4=new bob(410,500,30);
	bob5=new bob(480,500,30);

	rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
 
}



