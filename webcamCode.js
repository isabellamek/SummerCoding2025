

let capture

function setup(){
createCanvas(windowWidth, windowHeight)
capture = createCapture(VIDEO)
capture.size(680, 480)
capture.hide()
//imageMode(CENTER)
}


function draw(){

	image(capture, 0, 0)
	//filter(INVERT)
	//image(capture, mouseX, mouseY, mouseX, mouseY)
}