var inicio, inicioimg;
var fundo, fundoimg;
var nave, naveimg
var gameState = "start";

function preload(){
inicioimg=loadImage("inicio.png");
naveimg=loadImage("nave.png");
}

function setup() {
 canvas = createCanvas(400, 400);

 

 inicio = createSprite (200, 200, 400, 400)
 inicio.addImage(inicioimg);
 nave = createSprite (200, 350)
 nave.addImage(naveimg);
}

function draw() {
    background(0);

    

    if (mousePressedOver(inicio)){
        inicio.visible = false;
       
        gameState="start";
    }
 if (gameState=="start"){
   
 }
    drawSprites();
}