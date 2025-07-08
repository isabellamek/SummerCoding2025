
let canvas

let playbutton

let t1000

let airstrikeFont

let playing = false

function preload(){
	t1000 = createVideo(['T1000Reforming.mp4'])
	airstrikeFont = loadFont('airstrike.ttf')
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index', '-1')
	canvas.position(0, 0)

	t1000.position(200, 600)
	//hiding html object
	t1000.hide()

	playButton = createButton('Play Audio')
	playButton.position(100, 100)
	playButton.mousePressed(playVideo)
}

function playVideo(){
	if(playing){
		t1000.hide()
		t1000.pause()
		playButton.html('Play Video')
	}else{
		t1000.show()
		t1000.loop()
		playButton.html('Pause Video')
	}

	playing = !playing
}

function draw(){

	background(255)
	textFont(airstrikeFont)
	textSize(60)
	text('T1000!!!!', 30, 100)
}