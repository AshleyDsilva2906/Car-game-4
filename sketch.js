var gameState=0
var playerCount=0
var form,game,player
var database
var allPlayers
var car1,car2,car3,car4,cars

function preload(){
    trackImage=loadImage("images/track.jpg")
    car1Img=loadImage("images/car1.png")
    car2Img=loadImage("images/car2.png")
    car3Img=loadImage("images/car3.png")
    car4Img=loadImage("images/car4.png")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-20)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
    background("blue")
if(playerCount===4){
    game.update(1)
}
if (gameState===1){
    game.play()
}
if(gameState===2){
    game.end()
}
}
