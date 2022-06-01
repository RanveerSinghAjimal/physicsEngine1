const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(10,10,20,25);
  console.log(ground);
}

function draw() {
  Engine.update(engine);
  background("lightblue");
  console.log(ground.position);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,20,25);
}