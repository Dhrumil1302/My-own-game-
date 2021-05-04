class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                        fill("blue");
                        textSize(25);
                        text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    strokeWeight(3)
                    stroke("red")
                    fill("blue")
                    textSize(15)
                     text("player1 : " + allPlayers.player1.score,50,50)
                    text("player2 : " + allPlayers.player2.score,50,80)   
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     Corona = createSprite(random(10, 1000), 0, 80, 80);
                     Corona.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: Corona.addImage("Corona",Corona1_img);
                         break;
                         case 2: Corona.addImage("Corona", Corona2_img);
                         break;
                         case 3: Corona.addImage("Corona", Corona3_img);
                         break;
                         case 4: Corona.addImage("Corona", Corona4_img);
                         break;
                         case 5: Corona.addImage("Corona", Corona5_img);
                         break;
                     }
                     CoronaGroup.add(Corona);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < CoronaGroup.length; i++) {
                        if (CoronaGroup.get(i).isTouching(players)) {
                            CoronaGroup.get(i).destroy();
                            player.score =player.score+1;
                            player.update()
                        }
                        
                    }
                     
                  }
                
                  

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}