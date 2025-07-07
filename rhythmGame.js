
let yPos

let font

let startBool = true
let gameBool = false
let tutBool = false

function preload(){
	lane = loadImage('lane.png')
	songCover = loadImage('songCover.jpg')
	WorldIsMine = loadSound('Worldismine.mp3')
	font = loadFont('rimouski.otf')
	breakdance = createImg('breakdance.gif')
	

}


function setup(){
	createCanvas(windowWidth, windowHeight)
	yPos = -5
	background(255)
	textFont(font)
	textSize(50)
	
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
noStroke()
background(163, 41, 94)
image(songCover, 50, 150, 600, 600)
fill(0)
text('Sekaiiiiiide', 930, 200)
fill(26, 13, 14)
rect(800, 250, 500, 400)
fill(255)
text('Play', 1000, 370)
text('Tutorial', 960, 520)

if(mouseIsPressed && mouseX > 1000 && mouseX < 1090 && mouseY > 340 && mouseY < 370 == true){
	startBool = false
	gameBool = true 
	tutBool = false
}

if(mouseIsPressed && mouseX > 970 && mouseX < 1130 && mouseY < 485 && mouseY > 520  == true){
	startBool = false
	gameBool = false 
	tutBool = true
}

}


function gameScreen(){
background(0)
image(lane, 300, 0, 1000, 1000)
}


function tutorialScreen(){
background(0)
breakdance.position(50, 350)
}