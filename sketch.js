var bullet, speed, weight;
var wall, thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  
  bullet= createSprite(50, 200, 30, 10);
  bullet.shapeColor="white"

  thickness= random(22, 83);

  wall=createSprite(1200, 200, thickness, height/2)
  wall.shapeColor="white"

  bullet.depth=wall.depth;
  bullet.depth+=1;

  speed= random(223,321);
  bullet.velocityX = speed;

  weight=random(30,52);

  damage= (0.5*weight*speed*speed)/(thickness* thickness* thickness)
}

function draw() {
  background("black");

  drawSprites();

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10){
      wall.shapeColor="green"
    }
  }
}

function hasCollided(bulletSprite, wallSprite){
  bulletRightEdge = bulletSprite.x + bulletSprite.width;
  wallLeftEdge = wallSprite.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}