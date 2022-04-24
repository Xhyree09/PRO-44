var bg
var ig
var girl

function preload(){
bg = loadImage("images/forest.jpg");
girl = loadAnimation("images/girl/title00.png","images/girl/title01.png","images/girl/title02.png","images/girl/title03.png","images/girl/title04.png","images/girl/title05.png","images/girl/title06.png","images/girl/title07.png")

}

function setup(){
createCanvas(1200,800);
ig = createSprite(600,800,1200,100);
ig.visible = false;

runninggirl = createSprite(500,700,50,100);
runninggirl.addAnimation("running",girl)
}

function draw(){
background(bg);

drawSprites();
}