const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground2 = new Ground(480,700,18,width+950);
  ground3 = new Ground(3,700,15,width+950);
  ground4 = new Ground(230,5,width+25,15);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new plinko(j,75));
    }

    for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new plinko(j,175));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new plinko(j,275));
    }

     for (var j = 15; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particles(random(width/2-10, width/2+10), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}