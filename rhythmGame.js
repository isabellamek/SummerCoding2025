//let yPos

let font

let startBool = true
let gameBool = false
let tutBool = false
let endBool = false

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

let note1Array = [];
let note1lastAddTime = 0;
let note1randomInterval = 0;

let note2Array = [];
let note2lastAddTime = 0;
let note2randomInterval = 0;

let note3Array = [];
let note3lastAddTime = 0;
let note3randomInterval = 0;

let note4Array = [];
let note4lastAddTime = 0;
let note4randomInterval = 0;

let timer = 95

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


	note1randomInterval = random(500, 2000); // Between 0.5 and 2 seconds
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

	if(endBool == true){
		endScreen()
	}
}




function startScreen(){
	//yPos = -50
	timer = 95
	score = 0
	WorldIsMine.stop()
	breakdance.hide()
	start.show()
	tutorial.show()
	back.hide()

	startBool = true
	gameBool = false 
	tutBool = false
	endBool = false


noStroke()
background(163, 41, 94)
image(songCover, 100, 150, 600, 600)
fill(0)
textSize(50)
text('Rhythm Game (its one song)', 800, 200)
fill(26, 13, 14)
rect(800, 250, 500, 400)
}



function gameScreen(){
startBool = false
	gameBool = true 
	tutBool = false
	if (gameBool == true && frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

 if (timer == 0) {
    endBool = true;
    gameBool = false
  }

  print(timer)
  print(gameBool)
	breakdance.hide()
	start.hide()
	tutorial.hide()
	back.show()


//bg
background(0)
tint(180, 180)
image(sekaiide, 0, 0, 2000, 1200)
tint(255, 255)
image(lane, 300, 0, 1000, 1000)

fill(255)
textSize(50)

//gray notes at bottom
fill(90)
   ellipse(note1x, noteY, 80, 80)
   ellipse(note2x, noteY, 80, 80)
   ellipse(note3x, noteY, 80, 80)
   ellipse(note4x, noteY, 80, 80)
   textSize(50)
   text('score: ' + score + '', 200, 300)

//song
if (!WorldIsMine.isPlaying()){
    WorldIsMine.play()
  }

 //buttons
  start.hide()
	tutorial.hide()
	back.show()


//fill(222, 75, 85)
//ellipse(note1x, yPos, 80, 80)
//yPos = yPos + 16

// if(dist(mouseX, mouseY, 625, yPos) < 40){
// 		//fill(255)
		
// 		score = score + 20

// 	}

//if(yPos > windowHeight){
//	yPos = -50
//	score --
//}

//Note 1
  if (millis() - note1lastAddTime >= note1randomInterval) {
    // Add a new element to the array (replace with your desired element)
    note1Array.push({
      x: note1x,
      y: -50,
      size: 80,
      speed: 10
    });



    // Update the last addition time and generate a new random interval
    note1lastAddTime = millis();
    note1randomInterval = random(500, 2000);
  }

  // Iterate over the array and display the elements
  for (let i = 0; i < note1Array.length; i++) {

    let element = note1Array[i];
    element.y = element.y + element.speed


    // Draw the element (replace with your desired drawing code)
    fill(222, 75, 85)
    ellipse(element.x, element.y, element.size, element.size);

    if(element.y > windowHeight){
      note1Array.splice(i, 1)
      score = score - 2
      //print(note1Array)
    }


  }



  //Note 2
if (millis() - note2lastAddTime >= note2randomInterval) {
    // Add a new element to the array (replace with your desired element)
    note2Array.push({
      x: note2x,
      y: -50,
      size: 80,
      speed: 10
    });



    // Update the last addition time and generate a new random interval
    note2lastAddTime = millis();
    note2randomInterval = random(500, 2000);
  }

  // Iterate over the array and display the elements
  for (let i = 0; i < note2Array.length; i++) {

    let element = note2Array[i];
    element.y = element.y + element.speed


    // Draw the element (replace with your desired drawing code)
    fill(75, 141, 222)
    ellipse(element.x, element.y, element.size, element.size);
    
    if(element.y > windowHeight){
      note2Array.splice(i, 1)
      score = score - 2
      //print(note2Array)
    }


  }

   //Note 3
if (millis() - note3lastAddTime >= note3randomInterval) {
    // Add a new element to the array (replace with your desired element)
    note3Array.push({
      x: note3x,
      y: -50,
      size: 80,
      speed: 10
    });



    // Update the last addition time and generate a new random interval
    note3lastAddTime = millis();
    note3randomInterval = random(500, 2000);
  }

  // Iterate over the array and display the elements
  for (let i = 0; i < note3Array.length; i++) {

    let element = note3Array[i];
    element.y = element.y + element.speed


    // Draw the element (replace with your desired drawing code)
    fill(75, 222, 90)
    ellipse(element.x, element.y, element.size, element.size);
    
    if(element.y > windowHeight){
      note3Array.splice(i, 1)
      score = score - 2
      //print(note2Array)
    }


  }

 //Note 4
if (millis() - note4lastAddTime >= note4randomInterval) {
    // Add a new element to the array (replace with your desired element)
    note4Array.push({
      x: note4x,
      y: -50,
      size: 80,
      speed: 10
    });



    // Update the last addition time and generate a new random interval
    note4lastAddTime = millis();
    note4randomInterval = random(500, 2000);
  }

  // Iterate over the array and display the elements
  for (let i = 0; i < note4Array.length; i++) {

    let element = note4Array[i];
    element.y = element.y + element.speed


    // Draw the element (replace with your desired drawing code)
    fill(222, 75, 180)
    ellipse(element.x, element.y, element.size, element.size);
    
    if(element.y > windowHeight){
      note4Array.splice(i, 1)
      score = score - 2
      //print(note2Array)
    }
  }
//are you doing good?
if(0 <= score){
	fill(0)
	rect(350, 450, 220, 100)
	fill(255)
}
if(100 <= score){
	fill(0)
	rect(350, 450, 220, 100)
	fill(255)
	text('COOl', 400, 500)
}
if(score < -1){
	fill(0)
	rect(350, 450, 220, 100)
	fill(255)
	text('BAD', 400, 500)
}
if(score > 501){
	fill(0)
	rect(350, 450, 220, 100)
	fill(255)
	text('SUPERB', 400, 500)
}

}


function keyPressed(){

//key press note 1
	for (let i = 0; i < note1Array.length; i++) {
		 let element = note1Array[i];
		if(key === 'd' && dist(note1x, noteY, element.x, element.y) < 40){
			score = score + 20
			note1Array.splice(i, 1)
		}else{
			score = score - 2
		}

	}

	//key press note 2
	for (let i = 0; i < note2Array.length; i++) {
		 let element = note2Array[i];
		if(key === 'f' && dist(note2x, noteY, element.x, element.y) < 40){
			score = score + 20
			note2Array.splice(i, 1)
		}else{
			score = score - 2
		}

	}


//key press note 3
	for (let i = 0; i < note3Array.length; i++) {
		 let element = note3Array[i];
		if(key === 'j' && dist(note3x, noteY, element.x, element.y) < 40){
			score = score + 20
			note3Array.splice(i, 1)
		}else{
			score = score - 2
		}

	}


//key press note 4
	for (let i = 0; i < note4Array.length; i++) {
		 let element = note4Array[i];
		if(key === 'k' && dist(note4x, noteY, element.x, element.y) < 40){
			score = score + 20
			note4Array.splice(i, 1)
		}else{
			score = score - 2
		}

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
	endBool = false

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



function endScreen(){
	start.hide()
	tutorial.hide()
	back.show()

	startBool = false
	gameBool = false 
	tutBool = false
	endBool = true

background(0)
textSize(70)
text('END', 800, 230)
text('score:  ' + score + '', 680, 350)

if(0 <= score){
	fill(255)
	text('YOU PASSED?', 680, 500)
}
if(100 <= score){
	fill(0)
	rect(650, 400, 500, 200)
	fill(255)
	text('NICE', 800, 500)
}
if(score < -1){
	fill(255)
	text('TERRIBLE...', 700, 500)
}
if(score > 501){
	fill(0)
	rect(650, 400, 400, 200)
	fill(255)
	text('AMAZING!', 730, 500)
}
}




