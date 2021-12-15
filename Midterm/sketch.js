var Hunter;
var Rath;
var GreatIzu;
var Izu;
var Chameleos;
var Fireball;
var platform;
var direction = 90;

var JUMP = 15;
var GRAVITY = 1;

let x = 100;
let y = 100;

let hunterSpeed = 0;
let pageNum = 1;
let numPages = 5;
let timer = 3;

function preload(){
  img = loadImage('Rathalos.png');
  img2 = loadImage('Great Izuchi.png')
  img3 = loadImage('Izuchi.png')
  img5 = loadImage('Chameleos.png')
  img6 = loadImage('QC.png')
  img7 = loadImage('Felyne.png')
  img8 = loadImage('Felynerun.png')
  img9 = loadImage('Platform.png')
  img10 = loadImage('MHL.png')
  
}

function setup() {
  console.log(pageNum);
  createCanvas(600,400);
  
  Rath = createSprite(500, 100);
  Rath.addImage(img);
  img.resize(200,200);
  
  Hunter = createSprite(100, 270);
  Hunter.scale = 0.5;
  Hunter.addAnimation('normal', 'Felyne.png');
  Hunter.addAnimation('running', 'Felynerun.png')
  img7.resize(100,100);
  img8.resize(200,200);
  Hunter.setCollider('rectangle', 0, 26, 75, 75);
  
  GreatIzu = createSprite(470,255);
  GreatIzu.addImage(img2);
  img2.resize(170,170)
  
  Izu = createSprite(560,290);
  Izu.addImage(img3);
  img3.resize(120,120)
  
  Chameleos = createSprite(500,265);
  Chameleos.addImage(img5);
  img5.resize(400,220);
  
  platform = createSprite(200, 320, 50, 100);
  platform.addImage(img9);
  platform.setCollider('rectangle', 50, 120, 800, 200);
  
}

function draw() {
  background(0,0,0);
  if (pageNum == 1) {
    background(img10, 0, 0);
  }
  if (pageNum == 2) {
    background(155,225,255);
    Hunter.setSpeed(hunterSpeed, 0);
  direction += 2;
  Rath.setSpeed(4, direction);
  // Hunter.setSpeed(hunterSpeed, direction);
    GreatIzu.visible = false;
    Izu.visible = false;
    Chameleos.visible = false;
  drawSprites();
  }
  if (pageNum == 3) {
    background(29, 22, 61);
    Rath.visible = false;
    GreatIzu.visible = true;
    Izu.visible = true;
    Chameleos.visible = false;
    
    Hunter.setSpeed(hunterSpeed, 0);
    if (GreatIzu.position.x < 0){
      GreatIzu.setSpeed(1,0);
    }
    if (GreatIzu.position.x > width){
      GreatIzu.setSpeed(1,180);
    }
     if (Izu.position.x < 0){
       Izu.setSpeed(2,0);
     }
     if (Izu.position.x > width){
       Izu.setSpeed(2,180);
     }
    drawSprites();
  }
  if (pageNum == 4) {
    background(27, 63, 69);
    Hunter.setSpeed(hunterSpeed, 0);
    GreatIzu.visible = false;
    Izu.visible = false;
    Chameleos.visible = true;
    
    if (frameCount % 60 == 0 && timer > 0) {
      timer --;
    }
    if (timer == 0) {
      Chameleos.visible = false;
    }
    
    
    drawSprites();
  }
  if (pageNum == 5) {
  background(img6, 0, 0);
  }
  
  // Hunter.collide(platform)
  
 //  Hunter.debug = mouseIsPressed;
 // platform.debug = mouseIsPressed;
  
}

function keyPressed() {
  if (keyCode === 32 && pageNum < numPages) {
    pageNum++;
    if (pageNum == 3){
      GreatIzu.setSpeed(1,180);
      Izu.setSpeed(2,180);
    }
  }
    if (keyCode === LEFT_ARROW) {
    hunterSpeed -= 1;
    Hunter.changeAnimation('running');
  } if (keyCode === RIGHT_ARROW) {
    hunterSpeed += 1;
    Hunter.changeAnimation('running');
  } 
  else {
      Hunter.changeAnimation('normal')
  }

  }


