
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var groundObj;
var leftSide;
var rightSide;

function setup() {
	createCanvas(1350, 600);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	ground =new Ground(650,550,1400,20);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,500,20,120);
	rightSide = new Ground(900,500,20,120);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  ellipse(ball.position.x,ball.position.y,30);

  ground.display();
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:75,y:-75});
	}
}
