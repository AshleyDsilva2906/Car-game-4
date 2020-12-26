class Player{
    constructor(){
this.index=null
this.distance=0
this.name=null 
this.rank=0
}
    getCount(){
        var gameref=database.ref('playerCount')
        gameref.on("value",function(data){
            playerCount=data.val();
        })
        }
        updateCount(count){
            database.ref('/').update({
                playerCount:count
        }
            )
            
    }
    update(){
        var playerIndex="players/player"+ this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
            rank:this.rank
        })
    }
    static getPlayerinfo(){
        var playerReference=database.ref('players')
        playerReference.on("value",(data)=>
        {
            allPlayers=data.val()
        })
    }
    getcarsatend(){
    var rankReference=database.ref('carsatend')
    rankReference.on("value",(data)=>{
        this.rank=data.val()
    
    })
}
static updatecarsatend(rank){
database.ref('/').update({
    carsatend:rank
    
})
}
}

