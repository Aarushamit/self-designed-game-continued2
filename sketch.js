var enemy1_img, enemy2_img, enemy3_img, background_img;

var bg;
var bullet, bullet_img;
var bomb, bombimg;

var player, player_img;


var score = 0;




function preload() {
enemy1_img = loadImage("spaceship1.jpg");
enemy2_img = loadImage("spaceship2.jpg");
enemy3_img = loadImage("spaceship3.jpg");
background_img = loadImage("space.jpg");
player_img = loadImage("player.png");
bullet_img = loadImage("star_edited.jpg");
bombimg = loadImage("bomb.png");



}

function setup() {
  createCanvas(1200, 600);
  
  bg = createSprite(600, 300, 1200, 800);
  bg.addImage("bg", background_img);
  bg.scale = 10;

  bullet = createSprite(mouseX,200);
  bullet.addImage("bullet", bullet_img);
  bullet.scale = 0.5;


  player = createSprite(600, 550);
  player.addImage("p1", player_img);
  player.scale = 0.4;
  //bomb = createSprite(300, 300);
  //bomb.addImage("bomb", bombimg);
  //bomb.scale = 0.15;
  

  


 

}

function draw() {

player.x = mouseX;
 player.y = 550;

 //bomb.x = player.x;
 //bomb.y = 540;

 bullet.x = mouseX;
 bullet.y = 540;

 
 
 //bomb.visible = false;
 //bullet.visibble = true;

  bg.velocityY = 7;

  if(bg.y>800) {
    bg.y = bg.height/2;
  }

 // player.depth = bg.depth+2;
//enemy1.depth = enemy1.depth+2;
//enemy2.depth = enemy2.depth+2;
//enemy3.depth = enemy3.depth+2;
  //bg.depth = bg.depth-1;

bullet.depth = player.depth+1;
player.depth = player.depth;
  
 

  
spawnEnemies();

 
 
 
drawSprites();

}

function spawnEnemies(){
  
  if(World.frameCount%60===0) {
      var rand = Math.round(random(1,3));
      var randX = Math.round(random(50, 1100));
      var randY = Math.round(random(0, 10));
      var enemy = createSprite(randX, randY);
      enemy.scale = 0.1;
      enemy.velocityY = 3;
    
      switch(rand) {
        case 1: enemy.addImage("e1", enemy1_img);
        break;
        case 2: enemy.addImage("e2", enemy2_img);
        break; 
        case 3: enemy.addImage("e3", enemy3_img);
        break;
        default: break;
      }
      
      
  }


}

