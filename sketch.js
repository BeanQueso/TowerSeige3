const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var score = 0;
function preload(){
  
getBackgroundImg();
}
function setup() {
  
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
  ground  = new Ground(400, 380, 800, 30);
  block1 = new Box(120,350,30,40);
  block2 = new Box(150,350,30,40);
  block3 = new Box(180,350,30,40);
  block4 = new Box(210,350,30,40);
  block5 = new Box(240,350,30,40);
  block6 = new Box(270,350,30,40);
  block7 = new Box(300,350,30,40);

  block8 = new Box(150,310,30,40);
  block9 = new Box(180,310,30,40);
  block10 = new Box(210, 310, 30, 40);
  block11 = new Box(240,310,30,40);
  block12 = new Box(270,310,30, 40);

  block13 = new Box(180,280,30,40);
  block14 = new Box(210,280,30,40);
  block15 = new Box (240, 280,30,40);

  block16 = new Box(210,240,30,40);

  polygon = new Polygon(700,300,50,50);

  sling = new SlingShot(polygon.body, {x:600,y:200});
  
  

}

function draw() {

  Engine.update(engine);
  if(backgroundImg)
  background(backgroundImg);
  text("SCORE:" +score,700, 40);
  ground.display();
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
  polygon.display();
  sling.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();


}
function mouseDragged(){
    
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
sling.fly();

}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x:500, y: 380});
     sling.attach(polygon.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Africa/Maputo");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}