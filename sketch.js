var  database;

var gameState=0;
var form,player,game;

var playerCount;

var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1Img,car2Img,car3Img,car4Img;
var trackImg;
var carSound;

function preload(){
  car1Img=loadImage("images/car1.png");
  car2Img=loadImage("images/car2.png");
  car3Img=loadImage("images/car3.png");
  car4Img=loadImage("images/car4.png");

  trackImg=loadImage("images/track.jpg");

  carSound=loadSound("car sound.mp3")
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
  
  

  
}

function draw(){
  if(playerCount===4){
      game.updateState(1);
  }

  if(gameState===1){
    game.play();
    
  }
 
}

