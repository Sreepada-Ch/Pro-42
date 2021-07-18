var hasDocked = false

function preload(){

  bg = loadImage("spacebg.jpg")
  issimg = loadImage("iss.png")
  img = loadImage("spacecraft1.png")
  img1 = loadImage("spacecraft2.png")
  img2 = loadImage("spacecraft3.png")
  img3 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(img)
  spaceCraft.scale = 0.5

  iss = createSprite(330,130);
  iss.addImage(issimg)
  spaceCraft.scale = 0.25
}

function draw() {
  background(bg); 
  
  spaceCraft.addImage(img)
  if(!hasDocked){

    spaceCraft.x = spaceCraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){

      spaceCraft.y = spaceCraft.y-2
    }

    if(keyDown("DOWN_ARROW")){

      spaceCraft.y = spaceCraft.y+2
    }

    if(keyDown("LEFT_ARROW")){

      spaceCraft.x = spaceCraft.x-2
      spaceCraft.addImage(img3)
    }

    if(keyDown("RIGHT_ARROW")){

      spaceCraft.x = spaceCraft.x+2
      spaceCraft.addImage(img2)
    }


  }
  if(spaceCraft.y<=(iss.y+70) && spaceCraft.x<=(iss.x-10)){

hasDocked = true
textSize(30)
fill("lightblue")
text("Docking Succesfull",200,300)




}
  drawSprites();

}