class Game{
    constructor(){

    }

    

    getState(){
        var getstateRef=database.ref("gameState");
        getstateRef.on("value", function(data){
            gameState=data.val();
        })

    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            
            player=new Player();
            var playercountRef=await database.ref("playerCount").once("value");
          
          if(playercountRef.exists){
              playerCount=playercountRef.val();
              player.getCount();
          }
          form=new Form();
            form.display();
        }

        car1=createSprite(100,200);
        car1.addImage(car1Img);
        car2=createSprite(300,200);
        car2.addImage(car2Img);
        car3=createSprite(500,200);
        car3.addImage(car3Img);
        car4=createSprite(700,200);
        car4.addImage(car4Img);

        cars=[car1,car2,car3,car4];
       
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getRank();

        if(allPlayers!==undefined){
            background("yellow");
            image(trackImg,0,-windowHeight*4,windowWidth,windowHeight*5);
            var index=0;
            var x=200;
            var y;

            for(var plr in allPlayers){
              index=index+1;

              x=x+200;
              y=displayHeight-allPlayers[plr].distance;
              cars[index-1].x=x;
              cars[index-1].y=y;

              if(index===player.index){
                  cars[index-1].shapeColor="green";

                  camera.position.x=windowWidth/2;
                  camera.position.y=cars[index-1].y;
                  }
            }

        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
             player.distance=player.distance+10;
             player.update();
             carSound.play();
        }

        if(player.distance>3300){
            carSound.stop();
          gameState=2;
          player.rank=player.rank+1
          Player.updateRank(player.rank);
          text("Your Rank is:"+player.rank,windowWidth/2,y-200);
         
        }

        console.log(player.distance);

        drawSprites();
    }
}

