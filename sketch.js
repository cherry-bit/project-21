var bullet,wall; 
var speed,weight,thickness;

function setup() {
  createCanvas (1900,600);

speed=random(223,322);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
bullet.velocityX=speed;
}

function draw(){
  background(0);
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage<10){
wall.shapeColor= "green";
}
if(damage<=10){
wall.shapeColor="red";
}
}
}
drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=bullet.x;
  if(bulletRightEdge>=wallLeftEde){
    return true;
  }
  return false;
}














