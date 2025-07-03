let ellipseBrushBool = false
let squareBrushBool = false
let imageBrushBool = false
let mikudayo

function preload(){
mikudayo = loadImage('mikudayo.jpeg')

}


function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
}


function draw(){
	if(ellipseBrushBool == true){
	ellipseBrush()
	}

	if(squareBrushBool == true){
	squareBrush()
	}

	if(imageBrushBool == true){
	imageBrush()
	}
}

function keyPressed(){
	//ellipse
	if(key === 'q'){
		ellipseBrushBool = true
		squareBrushBool = false
		imageBrushBool = false
	}
	//square
	if(key === 'w'){
		ellipseBrushBool = false
		squareBrushBool = true
		imageBrushBool = false
	}

	//image
	if(key === 'e'){
		ellipseBrushBool = false
		squareBrushBool = false
		imageBrushBool = true
	}

	if(key === 'o'){
		ellipseBrushBool = false
		squareBrushBool = false
		imageBrushBool = false
	}
}


function ellipseBrush(){
	if(mouseIsPressed == true){
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 20, 20q)
	}
}


function squareBrush(){
	fill(random(255), random(255), random(255))
	rect(mouseX, mouseY, 80, 80)
}


function imageBrush(){
	image(mikudayo, mouseX, mouseY, 40, 40)
}