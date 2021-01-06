const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2, side3;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,660,width,20);
	
	paper = new Paper(100,600,50);
	
	side1 = new Dustbin(600,640,150,20);
	side2 = new Dustbin(523,605,20,90);
	side3 = new Dustbin(673,605,20,90);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
 
paper.display();
ground.display();
side1.display();
side2.display();
side3.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
  }




