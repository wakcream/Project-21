var bullet;
var thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness = random (22,83);

  bullet = createSprite(50,200,15,3);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

}
  
function draw() {
  background(255,255,255);  

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;

  var damage = 0.5 * weight * speed* speed / (thickness * thickness * thickness);

  if(damage > 10){
    wall.shapeColor = "red";
  }

  if(damage < 10){
    wall.shapeColor = "green";
  }
}
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}