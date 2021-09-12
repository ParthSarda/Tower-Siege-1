const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {

    polygon_img=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,900,20);
    platform = new Ground(390, 300, 250, 10);
    platform1 = new Ground(700,200,200,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);

    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);

    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    boxes1 = new Box(640,175,30,40)
    boxes2 = new Box(670,175,30,40)
    boxes3 = new Box(700,175,30,40)
    boxes4 = new Box(730,175,30,40)
    boxes5 = new Box(760,175,30,40)
    boxes6 = new Box(670,135,30,40)
    boxes7 = new Box(700,135,30,40)
    boxes8 = new Box(730,135,30,40)
    boxes9 = new Box(700,95,30,40)

    ball = Bodies.circle(50,200,20)
    World.add(world,ball);
    slingshot=new Chain(this.ball,{x:100,y:200})




}

function draw(){
    background(56,44,44);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box5.display();    
    box3.display();
    box4.display();

    box7.display();
    box6.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes7.display();
  boxes8.display();
  boxes9.display();

    platform.display();
    platform1.display();
    slingshot.display();    
    image(polygon_img,ball.position.x,ball.position.y,40,40);
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    slingshot.fly();
}







