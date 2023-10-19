const Engine=Matter.Engine; var bola; var chao; var pedra; var solo1; var solo2; var solo3;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
let engine;
let world;

function setup() {
createCanvas(600,600);
engine=Engine.create();
world=engine.world;

var bola_caracteristica={
  restitution:0.95,
  
}
bola=Bodies.circle(150,30,50,bola_caracteristica);
World.add(world,bola);
var chao_caracteristica={
  isStatic:true,
}
chao=Bodies.rectangle(300,590,600,10,chao_caracteristica);
World.add(world,chao);
var pedra_caracteristica={
  restitution:0.95,
}
pedra=Bodies.circle(100,30,20,pedra_caracteristica);
World.add(world,pedra);
solo1=new Ground(10,300,10,600);
solo2=new Ground(595,300,10,600);
solo3=new Ground(300,5,600,10);

rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() {
 background("White");
 Engine.update(engine);
 ellipse(bola.position.x,bola.position.y,50);
  
  ellipse(pedra.position.x,pedra.position.y,20);
  solo1.show();
  solo2.show();
  solo3.show();
  push();
  strokeWeight(3);
  stroke("Green");
  fill("Yellow");
  rect(chao.position.x,chao.position.y,600,10);
  pop();
}
function gravidade(){
  Matter.body.applyForce(bola,{x:0,y:0},{x:0.05,y:0});
}
