var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() {
  background("yellow");
  box.shapeColor = "white";

  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("lightblue");
  }
  if(keyIsDown(UP_ARROW)){
    background("lightgreen");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("violet");
  }
  drawSprites()
}
