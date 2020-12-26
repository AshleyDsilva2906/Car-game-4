class Game{
    constructor(){

    }
    getState(){
        var car =database.ref('gameState')
        car.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
    database.ref('/').update({
        gameState:state
    })
    }
  async start(){
        if(gameState===0){
            player=new Player()
            var playercountref=await database.ref('playerCount').once("value")
            if (playercountref.exists()){
                playerCount=playercountref.val()
           
            player.getCount()
        }
            form=new Form()
            form.display()
            
        }
        car1=createSprite(100,200)
        car1.addImage(car1Img)
        car2=createSprite(300,200)
        car2.addImage(car2Img)
        car3=createSprite(500,200)
        car3.addImage(car3Img)
        car4=createSprite(700,200)
        car4.addImage(car4Img)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        player.getcarsatend()

        Player.getPlayerinfo()
        if(allPlayers!==undefined){
            background("blue")
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
            var x=200
            var y=0
            for(var plr in allPlayers){
            index=index+1
            x=x+240
            y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index){
                cars[index-1].shapeColor="red"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
                fill("red")
                circle(cars[index-1].x,cars[index-1].y,65)
            }
            
           
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
        player.distance+=50
        player.update()
    }
    if(player.distance>4200){
        gameState=2
        player.rank=player.rank+1
        Player.updatecarsatend(player.rank)
    }
    drawSprites();
    }
    end(){
        console.log("Game Ended")
    }
    reset(){

    gameState=0
    playerCount=0
    }
}
