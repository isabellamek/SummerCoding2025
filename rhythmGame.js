let yPos

let font

let startBool = true
let gameBool = false
let tutBool = false

let canvas

let start
let tutorial
let back

let noteY = 750
let note1x = 625
let note2x = 740
let note3x = 860
let note4x = 975

let score = 0

function preload(){
	sekaiide = loadImage('sekaiide.png')
	lane = loadImage('lane.png')
	songCover = loadImage('songCover.jpg')
	WorldIsMine = loadSound('Worldismine.mp3')
	font = loadFont('rimouski.otf')
	breakdance = createImg('breakdance.gif', '')

}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0,0)

	yPos = -50
	background(255)
	textFont(font)
	breakdance.hide()

	start = createButton("Start")
	start.position(955, 320)
	start.mousePressed(gameScreen)

	tutorial = createButton("Tutorial")
	tutorial.position(930, 450)
	tutorial.mousePressed(tutorialScreen)

	back = createButton("Return")
	back.mousePressed(startScreen)
}




function draw(){

	if(startBool == true){
		startScreen()
	}

	if(gameBool == true){
		gameScreen()
		
	}

	if(tutBool == true){
		tutorialScreen()
	}

}






function startScreen(){
	yPos = -50
	score = 0
	WorldIsMine.stop()
	breakdance.hide()
	start.show()
	tutorial.show()
	back.hide()

	startBool = true
	gameBool = false 
	tutBool = false

noStroke()
background(163, 41, 94)
image(songCover, 100, 150, 600, 600)
fill(0)
textSize(50)
text('Sekaiiiiiide', 930, 200)
fill(26, 13, 14)
rect(800, 250, 500, 400)
}






function gameScreen(){
	
	breakdance.hide()
	start.hide()
	tutorial.hide()
	back.show()

	startBool = false
	gameBool = true 
	tutBool = false

background(0)
tint(180, 180)
image(sekaiide, 0, 0, 2000, 1200)
tint(255, 255)
image(lane, 300, 0, 1000, 1000)

fill(255)
textSize(50)


fill(90)
   ellipse(note1x, noteY, 80, 80)
   ellipse(note2x, noteY, 80, 80)
   ellipse(note3x, noteY, 80, 80)
   ellipse(note4x, noteY, 80, 80)
   textSize(50)
   text('score: ' + score + '', 200, 300)

if (!WorldIsMine.isPlaying()){
    WorldIsMine.play()
  }
  start.hide()
	tutorial.hide()
	back.show()

fill(222, 75, 85)
ellipse(note1x, yPos, 80, 80)
yPos = yPos + 16

// if(dist(mouseX, mouseY, 625, yPos) < 40){
// 		//fill(255)
		
// 		score = score + 20

// 	}

if(yPos > windowHeight){
	yPos = -50
	score --
}

}






function keyPressed(){
	if(key === 'd' && dist(note1x, noteY, note1x, yPos) < 40){
		//fill(255)
		
		score = score + 20

	}


}








function tutorialScreen(){
	WorldIsMine.stop()
	start.hide()
	tutorial.hide()
	back.show()

	startBool = false
	gameBool = false 
	tutBool = true

background(0)
breakdance.show()
breakdance.position(300, 100)
fill(255)
textSize(70)
text('HOW TO PLAY', 700, 250)
textSize(40)
text('Notes will begin to fall from above. Try to accurately hit the notes once they align with the gray circles below!!!', 400, 400, 800)
	fill(222, 75, 85)
	ellipse(625, 650, 80, 80)
	fill(75, 141, 222)
   ellipse(740, 650, 80, 80)
   fill(75, 222, 90)
   ellipse(860, 650, 80, 80)
   fill(222, 75, 180)
   ellipse(975, 650, 80, 80)
   fill(255)
   text('d', 610, 670)
   text('f', 735, 670)
   text('j', 855, 670)
   text('k', 965, 670)
   text('(the keys)', 710, 750)
}




