const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var engine,world;

var divisionHeight=300;
//var score = 0;


function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 15; j <=width; j=j+50){
     plinkos.push(new Plinko(j,75));
   }

   for (var j = 40; j <=width-10; j=j+50){
     plinkos.push(new Plinko(j,175));
   }

   for (var j = 15; j <=width; j=j+50){
     plinkos.push(new Plinko(j,275));
   }

   for (var j = 40; j <=width-10; j=j+50){
     plinkos.push(new Plinko(j,375));
   }   
}
 


function draw() {

  background("black");

  //textSize(20);
  //text("Score : "+score,770,30);

  Engine.update(engine);
 
   for (var j = 0; j < plinkos.length; i++) {
     plinkos[j].display();  
   }

   if(frameCount % 60 === 0){
     particles.push(new Particle(random(width/2-30,width/2+30),10,10));
     //score++;
   }
 
  for (var i = 0; i < particles.length; j++) {  
     particles[i].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   ground.display();

   drawSprites();
}