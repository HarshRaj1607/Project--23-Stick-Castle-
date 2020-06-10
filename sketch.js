const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var ground;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,810,1200,20, {isStatic:true});
  
  box1 = new Shape(300,700,90,250);
  box2 = new Shape(400,700,90,250);
  box3 = new Shape(500,700,90,250);
  box4 = new Shape(600,700,90,250);
  box5 = new Shape(700,700,90,250);
  box6 = new Shape(800,700,90,250);
  box7 = new Shape(900,700,90,250);
  box8 = new Shape(600,550,900,90);
  box9 = new Shape(300,350,100,350);
  box10 = new Shape(400,350,90,250);
  box11 = new Shape(500,350,90,250);
  box12 = new Shape(700,350,90,250);
  box13 = new Shape(800,350,90,250);
  box14 = new Shape(900,350,90,350);
  box15 = new Shape(600,350,70,175);
  box16 = new Shape(200,350,90,400);
  box17 = new Shape(1000,350,90,400);


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  drawSprites();
}