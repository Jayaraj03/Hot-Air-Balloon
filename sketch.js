var balloon;
var database;
var position;


function preload(){

}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
}

function draw() {

  background(255,255,255);  
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    updateHeight(0,10);
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.scale = balloon.scale + 0.01;
    balloon.x = balloon.x+10;
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(0,10);
    balloon.addAnimation("hotAirBalloon",balloonImage3);
    balloon.scale = balloon.scale + 0.01;
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01;
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage4);
    balloon.scale = balloon.scale -0.01;
    balloon.y = balloon.y +10;
  }

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value",readPosition,showError);

  function updateHeight(x,y){
    database.ref('balloon/height').set({
      'x': height.x +x,
      'y' : height.y + y
    })
  }

  function readHeight(data){
    height = data.val()
    balloon.x = height.x;
    balloon.y = height.y;
  }

  function showError(){
    console.log("Error in writing to the database");
  }
}