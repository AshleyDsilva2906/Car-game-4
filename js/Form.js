class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("play")
        this.greeting=createElement('h3')
        this.title=createElement('h2')
        this.resetbutton=createButton("Reset")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
        this.title.hide()
    }
    display(){
    
    this.title.html("Car Racing Game")
    this.title.position(displayWidth/2-40,40)
    
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.button.position(displayWidth/2-40,displayHeight/2)
    this.resetbutton.position(displayWidth-200,200)
    this.button.mousePressed( ()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        
        player.updateCount(playerCount)
        this.greeting.html("Hello "+ player.name)
        this.greeting.position(displayWidth/2-40,displayHeight/4-90)
        
        
    })
    this.resetbutton.mousePressed(()=>{
        playerCount=0
        
        player.updateCount(playerCount)
        game.update(0)
        
    }
    

    )
}
}