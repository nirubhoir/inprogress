var space, obstacles, ship, obstaclesGroup
var battery, score=0;


function preload(){

ship=loadImage("assets/Innocent.png")
space=loadImage("assets/redspace.jpg")
obstacle1=loadImage("assets/asteroid1.png")
obstacle2=loadImage("assets/asteroid2.png")
obstacle3=loadImage("assets/asteroid3.png")
obstacle4=loadImage("assets/asteroid4.png")
obstacle5=loadImage("assets/asteroid5.png")
powerImage=loadImage("assets/battery.png")
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-100);

  spaceship = createSprite(600, 500, 50, 10)
  spaceship.addImage(ship)
  spaceship.scale=0.3

  obstaclesGroup = createGroup()

  batteryGroup = new Group()
 
  
  
}



function draw() {
  background(space); 
 fill("white")
 textAlign("center")
 textSize(40)
  text("Let's Get Started"+score,width-1000,100);

  spawnObstacles()
  spawnBatteries()
  fuelBar()

  if(batteryGroup.isTouching(spaceship)){
  console.log("working")
  energy.velocityY=0


  }
  if(obstaclesGroup.isTouching(spaceship)){
console.log("working")
 spaceship.x=width/2
 spaceship.x=height/2


 fill("white")
 textSize(40)
text("GameOver",width-300,100)



  }

 spaceship.x=mouseX

  
  drawSprites();
}

function fuelBar(){
  
  
  
    push();
    
    fill("white");
    rect(width / 2 - 200, height - 600, 185, 20);
    fill("red");
    rect(width / 2 - 200, height - 600, 185, 20);
   //Stroke(1);
    pop();
   
  
  
}
function spawnBatteries(){

if(frameCount% 250 === 0){

var energy = createSprite(200, 100, 50, 10)
energy.velocityY = +7;

energy.x = Math.round(random(10,width-200))

energy.addImage(powerImage)
energy.scale=0.2

energy.lifetime= 300;

batterGroup.add(energy)


}


}


function spawnObstacles(){

  if(frameCount% 90 === 0){

    var obstacle = createSprite(200,100,40,10);
    obstacle.velocityY = +7;

    obstacle.x = Math.round(random(10,width-200))

    var rand = Math.round(random(1,5))
    switch(rand){

    case 1:obstacle.addImage(obstacle1);
    obstacle.scale = 0.6;
      break;
    case 2:obstacle.addImage(obstacle2);
    obstacle.scale = 0.5;
           break;       
    case 3:obstacle.addImage(obstacle3);
    obstacle.scale = 0.3;
           break;
    case 4:obstacle.addImage(obstacle4);
    obstacle.scale = 0.4;
           break;
    case 5:obstacle.addImage(obstacle5);
    obstacle.scale = 0.3;
           break;
      default:break;
    
      
      obstacle.lifetime = 300;

      obstaclesGroup.add(obstacle);




    }
  }



}