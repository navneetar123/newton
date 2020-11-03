
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter=20
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofObject=new Roof(300,100,600,20);
bobObject1=new Bob(350,300,10);
bobObject2=new Bob(350,350,10);
bobObject3=new Bob(350,400,10);
bobObject4=new Bob(350,450,10);
rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
rope3=new Rope(bobObject3.body,roofObject.body,bobDiameter*2,0)
rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  
  drawSprites();
 
}



