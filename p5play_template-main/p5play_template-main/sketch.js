var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (50,100,25,25);
}



function draw() 
{
  background("purple");
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 10;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 10;
  }
  
  drawSprites();

}




