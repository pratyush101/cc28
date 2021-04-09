
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree,treeimg;
var boy,boyimg;

function preload()
{
	treeimg=loadImage("tree.png");

	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(9000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(500,625,9000,20);
	stones = new Stone(100,460,30);
	mango1 = new Mango(600,290,27);
	mango2 = new Mango(855,325,27);
	mango3 = new Mango(670,260,27);
	mango4 = new Mango(730,200,27);
	mango5 = new Mango(710,320,27);
	mango6 = new Mango(780,250,27);
	mango7 = new Mango(825,170,27);
	mango8 = new Mango(880,260,27);
	mango9 = new Mango(940,220,27);
	mango10 = new Mango(980,205,27);


	//attach = new Elastic(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);
	
	drawSprites();

	stones.display();
	ground1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

}



function mouseDragged()

{

Matter.Body.setPosition(stones.body, {x:mouseX, y:mouseY});

}

function mouseReleased()

{

attach.fly();

}

function keyPressed()

{

if(keyCode === 32)

{

Matter.Body.setPosition(stones.body, {x:100,y:465});
attach.Launch(stones.body);

}

}


function detectCollision(lstones,lmango)

{



if(lstones.body.position.x - lmango.body.position.x < lmango.diametre + lstones.diametre
	&& lmango.body.position.x - lstones.body.position.x < lmango.diametre + lstones.diametre
	&& lstones.body.position.y - lmango.body.position.y < lmango.diametre + lstones.diametre
	&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
	Matter.Body.setStatic(lmango.body, false);	




}


}


























