const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var ground0;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon1, slingshottt;
var gameState = "unlaunched";


function setup() {
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;   
    
    ground0 = new Ground(600, height, 1200, 0.1);
    
    stand1 = new Ground(540, 250, 240, 10);
    stand2 = new Ground(1000, 440, 250, 10);
    
    block1 = new Box(486, 245, 50, 50);
    block2 = new Box(540, 245, 50, 50);
    block3 = new Box(594, 245, 50, 50);
    block4 = new Box(513, 199, 50, 50);
    block5 = new Box(568, 199, 50, 50);
    block6 = new Box(540, 150, 50, 50);
    
    block7 = new Box(919, 435, 50, 50);
    block8 = new Box(973, 435, 50, 50);
    block9 = new Box(1027, 435, 50, 50);
    block10 = new Box(1081, 435, 50, 50);
    block11 = new Box(946, 360, 50, 50);
    block12 = new Box(1000, 360, 50, 50);
    block13 = new Box(1054, 360, 50, 50);
    block14 = new Box(973, 305, 50, 50);
    block15 = new Box(1027, 305, 50, 50);
    block16 = new Box(1000, 250, 50, 50);

    polygon1 = new Boxxx(100, 200, 45, 45);
    World.add(world, polygon1);

    slingshottt = new Slingshot(polygon1.body, {x:150, y:200});
     
}


function draw() {
    background("lightgrey");
    Engine.update(engine);

    ground0.display();

    stand1.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygon1.display();
}


function mouseDragged(){
    if (gameState!=="launched") {
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshottt.fly();
    gameState = "launched";
}

