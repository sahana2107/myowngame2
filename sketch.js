var backImage,backgr;
var sanna, sanna_running;
var ground,ground_img;
function preload(){
  backImage=loadImage("background.png");
  sanna_running = loadAnimation("girl_01.PNG","girl_02.PNG","girl_03.PNG","girl_04.PNG","girl_05.PNG");
 
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  sanna  = createSprite(100,100,20,50);
  sanna.addAnimation("Running",sanna_running);
  sanna.scale = 0.9;
  sanna.y = 100;
  
  
  ground = createSprite(400,450,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      sanna.velocityY = -12;
    }
    sanna .velocityY = sanna.velocityY + 0.8;
  
    sanna .collide(ground);
    console.log(sanna.y);
  

  drawSprites();
  }
