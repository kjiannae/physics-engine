const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ball;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
  restitution: 1
  }
  ball = Bodies.circle(200,200,50,ball_options);
  World.add(world,ball);
  var ground_options = {
  isStatic: true
  }
  
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);
  
}