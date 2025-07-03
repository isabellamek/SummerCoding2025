let mikudayo
let baldvance
let fire
let xPos = 1000
let mikuEscape = false
let normalMiku = true

function preload(){
  mikudayo = loadImage('mikudayo.jpeg')
  baldvance = loadImage('baldvance.jpg')
  fire = loadImage('fire.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}
function draw() {
  background(218, 225, 237)
  
//shadow 1
  noStroke()
  fill(147, 151, 173) 
  ellipse(180, 250, 90, 90)
  
//shadow 2
  fill(158, 163, 186)
  ellipse(155, 250, 100, 95)
  
//shadow 3
  fill(195, 200, 219)
  ellipse(110, 270, 120, 120)
  
//clean up
  fill(218, 225, 237)
  triangle(250, 230, 30, 390, 250, 390)
  triangle(220, 220, 30, 300, 30, 100)
  
//more space
  fill(152, 158, 181)
  rect(0, 0, windowWidth, 180)
  
  fill(134, 140, 163)
  triangle(0, 70, 0, 180, 200, 180)
  
//bottom of cup
  stroke(70)
  strokeWeight(5)
  fill(112, 132, 184)
  ellipse(200, 230, 70, 40)
  
//cup
  noStroke()
  rect(167.5, 130, 65, 100)
  
//top
  stroke(112, 132, 184)
  fill(79, 96, 143)
  ellipse(200, 130, 65, 40)
  
//straw
  stroke(70)
  line(180, 140, 150, 90)
  
//straw shadow
  stroke(195, 200, 219)
  line(70, 300, 10, 320)
  //images
  image(baldvance, 600, 0, 400, 300)

  fill(0)
  textSize(30)
  text('click on jd vance for a surprise', windowWidth/2 - 100, windowHeight/2)
  text('tap "e" for miku to leave', windowWidth/2 - 100, windowHeight/2 + 100)

//mouse interact
 if(mouseIsPressed && mouseX > 600 && mouseX < 1000 && mouseY < 180 == true){
    image(fire, 600, 130, 400, 50)
  }


  //miku escape
  if(mikuEscape == true){
    xPos = xPos + 5
    image(mikudayo, xPos, -20, 250, 350)
    noStroke()
    fill(218, 225, 237)
    rect(500, 180, windowWidth, 200)
  }

  //miku at table
  if(normalMiku == true){
    image(mikudayo, xPos, -20, 250, 350)
    noStroke()
fill(218, 225, 237)
rect(500, 180, windowWidth, 200)
  }

//making miku return to her seat
if(xPos >= windowWidth){
 mikuEscape = false
 normalMiku = true
 xPos = 1000
  }


  }

// key interaction
function keyPressed(){
if (key === 'e'){
mikuEscape = true
normalMiku = false
}else{
  mikuEscape = false
  normalMiku = true
}
}







