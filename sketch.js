var tutorialMap, bg, playerImage, player, W, A, S, D, WE, AE, DE;
var gameState = "tutorialState";
var textState = 1;
var dungeonMap, dungeonTransition, cavemenTransition;
var time = 30;
var time2=30
var level = 1;
var cavemenMapGround;

function preload() {

  tutorialMap = loadImage("Tutorial.png");
  dungeonMap = loadImage("Dungeon.png");
  cavemenMapGround = loadImage("CavemenGround.png");
  
  playerImage = loadImage("Player.png");
  W = loadAnimation("W1.png", "W2.png");
  A = loadAnimation("A1.png", "A2.png");
  S = loadAnimation("S1.png", "S2.png");
  D = loadAnimation("D1.png", "D2.png");

  WE = loadImage("WE.png");
  AE = loadImage("AE.png");
  DE = loadImage("DE.png");

  dungeonTransition = loadAnimation("DungeonT2.png", "DungeonT1.png");
  cavemenTransition = loadAnimation("CavemenT1.png", "CavemenT2.png");

}

function setup() {

  createCanvas(400, 400);

  bg = createSprite(200, 200, 400, 400);
  bg.addImage("cross_buns", tutorialMap);
  bg.addImage("lmao", dungeonMap);
  bg.addImage("boom", cavemenMapGround);
  bg.scale = 8.0;

  player = createSprite(200, 200, 50, 50);
  player.addImage("hot_dogs", playerImage);
  player.addAnimation("pichu", A);
  player.addAnimation("pikachu", D);
  player.addAnimation("hi", S);
  player.addAnimation("pika", W);
  player.addImage("salamance", WE);
  player.addImage("raichu", AE);
  player.addImage("live", DE);
  player.scale = 1.75;
  
  transition = createSprite(200, 200, 400, 400);
  transition.addAnimation("pidgeot", dungeonTransition);
  transition.addAnimation("charizard", cavemenTransition);
 transition.visible = false;
  transition.scale = 12.5;

}

function draw() {

  background("brown");

  if(keyDown("W")) {
    player.y = player.y-10
    player.changeAnimation("pika", W);
  }

  if(keyWentUp("W")) {
    player.changeImage("salamance", WE);
  }

  if(keyDown("A")) {
    player.x = player.x-10
    player.changeAnimation("pichu", A);
  }

  if(keyWentUp("A")) {
    player.changeImage("raichu", AE);
  }

  if(keyDown("S")) {
    player.y = player.y+10
    player.changeAnimation("hi", S);
  }

  if(keyWentUp("S")) {
    player.changeImage("hot_dogs", playerImage);
  }

  if(keyDown("D")) {
    player.x = player.x+10
    player.changeAnimation("pikachu", D);
  }

  if(keyWentUp("D")) {
    player.changeImage("live", DE);
  }

  if(gameState === "tutorialState") {

    var block1 = createSprite(200, 38, 400, 25);
    block1.visible = false;
    player.bounceOff(block1);

    var block2 = createSprite(392, 200, 25, 350);
    block2.visible = false;
    player.bounceOff(block2);

    var block3 = createSprite(200, 362, 400, 25);
    block3.visible = false;
    player.bounceOff(block3);

    var block4 = createSprite(8, 200, 25, 350);
    block4.visible = false;
    player.bounceOff(block4);
      
  }
  
  if(frameCount%5 === 0&& textState>=9) {
    time = time - 1;
  }

 else if(time<=30 && time>29 && textState>=9) {
  transition.visible = true;
    transition.addAnimation("pidgeot", dungeonTransition);
    
  }
  if(time<20 && textState>=9){
 transition.visible = false;
    gameState="dungeonState";
  }
  if(gameState === "dungeonState") {

   
    

   bg.changeImage("lmao", dungeonMap);
    bg.scale = 3.25;

    var block5 = createSprite(200, 60, 400, 25);
     block5.visible = false;

    var block6 = createSprite(392, 200, 25, 275);
    block6.visible = false;

    var block7 = createSprite(200, 325, 400, 25);
    block7.visible = false;

    var block8 = createSprite(8, 200, 25, 275);
block8.visible = false;

    if(level === 1) {

      var block9 = createSprite(285, 200, 250, 260);
      block9.visible = false;
  
      var block10 = createSprite(80, 265, 160, 130);
     block10.visible = false
  
      }
      if(player.x<125 && player.y<50 ) {
        // time = 3;
         gameState = "trans";
       }
  }
 
    if(gameState==="trans"){

      
    if(frameCount%5 === 0) {
      time2 = time2 - 1;
    }

    if(time2>25 && time2<30 ) {
      bg.visible=false;
      transition.changeAnimation("charizard", cavemenTransition);
      transition.visible = true;
    }
       if(time2<=25 && gameState==="trans"){
         gameState="cavemen"
       }
    }

  if(gameState === "cavemen") {
camera.x=player.x;
camera.y=player.y;
   
  transition.visible = false;
  bg.visible=true;
  bg.scale=5

    bg.changeImage("boom", cavemenMapGround);

  }

  console.log(gameState);

  drawSprites();



  textSize(20);
  fill("red");

  if(textState === 1) {
    text("Hi! Press Enter to keep reading.", 60, 300);
    if(keyWentDown(ENTER)) {
     textState = 2;
    } 
  } else if(textState === 2) {
    text("Now, do you remember your name?", 50, 300);
    if(keyWentDown(ENTER)) {
      textState = 3;
    } 
  } else if(textState === 3) {
    text("I suppose not.", 140, 300);
    if(keyWentDown(ENTER)) {
      textState = 4;
    } 
  } else if(textState === 4) {
    text("What, you don't remember your gender?", 25, 300);
    if(keyWentDown(ENTER)) {
      textState = 5;
    } 
  } else if(textState === 5) {
    text("Well, do you remember how to move?", 35, 300);
    if(keyWentDown(ENTER)) {
      textState = 6;
    } 
  } else if(textState === 6) {
    text("NO?! THOMPSON, WHAT'D I SAY ABOUT ", 10, 300);
    text("EXPERIMENTING... *COUGH-COUGH*", 20, 325);
    if(keyWentDown(ENTER)) {
      textState = 7;
    } 
  } else if(textState === 7) {
    text("Experiment, dear?", 120, 300);
    text(" Pretty sure you READ that wrong.", 45, 325);
    if(keyWentDown(ENTER)) {
      textState = 8;
    } 
  } else if(textState === 8) {
    text("Oh, um, try to move using the WASD keys", 10, 300);
    text("and press enter when you've learned how to", 10, 325);
    text("move.", 180, 350);
    if(keyWentDown(ENTER)) {
      textState = 9;
      player.x = 50;
      player.y = 150;
    }
  } else if(textState === 9) {
    gameState = "dungeonState";
    text("Alright, welcome to the dungeon!", 50, 300);
    if(keyWentDown(ENTER)) {
      textState = 10;
    } 
  } else if(textState === 10) {
    text("This is from where you can travel in time.", 25, 300);
    if(keyWentDown(ENTER)) {
      textState = 11;
    } 
  } else if(textState === 11) {
    text("You'll notice 5 doors. Inside all of them", 25, 300);
    text("is a different time period.", 100, 325);
    if(keyWentDown(ENTER)) {
      textState = 12;
    } 
  } else if(textState === 12) {
    text("Now, only 1 is open right now, for you must", 10, 300);
    text(" complete it to access the rest.", 65, 325);
    if(keyWentDown(ENTER)) {
      textState = 13;
    } 
  } else if(textState === 13) {
    text("Why don't you try walking through the open", 10, 300);
    text("one right now?", 135, 325);
    if(keyWentDown(ENTER)) {
      textState = 14;
    } 
  }

}

