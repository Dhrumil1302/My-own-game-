var database
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var Corona ;
var CoronaGroup;
var Corona1_img, Corona2_img, Corona3_img, Corona4_img, Corona5_img;
var player_img;

function preload(){
  back_img = loadImage("Hospital.jpg");
  player_img = loadImage("Injection.png");
  Corona1_img = loadImage("CoronaImg.jpg");
  Corona2_img = loadImage("CoronaImg2.png");
  Corona3_img = loadImage("CoronaImg3.png");
  Corona4_img = loadImage("CoronaImg4.jpg");
  Corona5_img = loadImage("CoronaImg5.jpg");
  CoronaGroup = new Group();
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
