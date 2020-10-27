function setup() {
  createCanvas(800,400);
  

  movRect=createSprite(200,200,100,50);
  movRect.shapeColor="yellow";
  
  
  fixRect=createSprite(150,350,50,100);
  fixRect.shapeColor="blue";
  fixRect.velocityY=-5;

  Rect=createSprite(150,50,50,100);
  Rect.shapeColor="pink";
  Rect.velocityY=5;

  Rect1=createSprite(770,300,50,100);
  Rect1.shapeColor="black";
  Rect1.velocityX=-5;


  Rect2=createSprite(50,300,50,100);
  Rect2.shapeColor="green";
  Rect2.velocityX=5;

}

function draw() {
  background(0,255,0);  

  movRect.y=World.mouseY;
  movRect.x=World.mouseX;

  if(isTouching(movRect,Rect1)){
    movRect.shapeColor="red";
  }
  else{
    movRect.shapeColor="yellow";
  }
  bounceOff(Rect1,Rect2);
  bounceOff(fixRect,Rect);
  drawSprites();
}