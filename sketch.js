const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,480,10);

  for(var k = 0; k <= width; k = k + 80){
    division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width-40; j = j + 50){
    plinko.push(new Plinko(j, 75))
  }
  for(var j = 15; j <= width-15; j = j + 50){
    plinko.push(new Plinko(j, 175))
  }  
  for(var j = 40; j <= width-40; j = j + 50){
    plinko.push(new Plinko(j, 275))
  }
  for(var j = 15; j <= width-15; j = j + 50){
    plinko.push(new Plinko(j, 375))
  }

    particle.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
}

function draw() {
  background(0);  
  
  ground.display();

  Engine.update(engine);

  for(var j = 0; j < particle.length; j++){
    
    particle[j].display();
  }

  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for(var p = 0; p < plinko.length; p++){
    plinko[p].display();
  }

  if(frameCount % 60 === 0){
    particle.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }
}