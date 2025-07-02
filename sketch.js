let mikudayo
let baldvance
function preload(){
  mikudayo = loadImage('mikudayo.jpeg')
  baldvance = loadImage('baldvance.jpg')
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
  rect(0, 0, 400, 180)
  
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
  image(mikudayo, 200, 350)
  image(baldvance, 600, 400)
}