const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,390,1200,20);

    box1 = new Box(700, 350, 70, 70);
    box2 = new Box(900, 350, 70, 70);
    pig1 = new Pig(800, 360);
    log1 = new Log(800, 310, 300,PI/2);

    box3 = new Box(700, 260, 70, 70);
    box4 = new Box(900, 260, 70, 70);
    pig2 = new Pig(800, 270);
    log2 = new Log(800, 220, 300,PI/2);

    box5 = new Box(800, 170, 70, 70);
    log3 = new Log(750, 150, 120,PI/7);
    log4 = new Log(850, 150, 120,-PI/7);

    bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
   bird.display();
}