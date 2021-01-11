var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(110, 575, 180,25);
    surface2 = createSprite(300,575,180,25);
    surface3 = createSprite(495,575,180,25);
    surface4 = createSprite(690,575,180,25);
    //create box sprite and give velocity
    box = createSprite(random(20,500));
    box.velocityX = 5;
    box.velocityY = 5;

    createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   //box.shapeColor = "white";

    surface1.shapeColor = "orange";
    surface2.shapeColor = "purple";
    surface3.shapeColor = "red";
    surface4.shapeColor = "blue";
    createEdgeSprites();
   
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue";
    }

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "orange";
    }
    
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "purple";

    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red";
    }

    if (box.x + 50 > width || box.x - 50 < 0){
        box.velocityX = box.velocityX *-1;
    }

    if(box.y + 50 > height || box.y < 0){
        box.velocityY = box.velocityY *-1;
    }

drawSprites();
    //add condition to check if box touching surface and make it box
}
