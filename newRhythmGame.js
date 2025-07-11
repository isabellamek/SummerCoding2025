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

circleY1 = [-70, -2300, -3200, -3500, -5200, -11300, -15600, -16600, -18000, -19400, -20800, -22200, -23600, -23900, -24300, -25700, -26800, -32700, -33200, -34900, -35200, -35500, -38200, -44400, -46400, -47200, -47800, -49100, -49500, -50500, -51000, -52000, -54800, -55300, -56400, -56800, -57500, -62900, -65400, -66400, -66700, -68400, -70300, -70800, -71500]
circleY2 = [-1600, -2500, -2800, -3800, -5600, -6900, -8600, -15750, -19000, -22700, -24500, -25500, -25900, -26400, -27700, -28400, -32300, -33900, -34200, -34500, -35500, -36100, -37300, -37600, -39000, -39600, -40200, -40500, -44400, -45200, -52900, -58300, -60400, -60700, -61100, -62200, -62600, -64400, -65600, -65900, -67000, -68600, -71500, -72200]
circleY3 = [-1400, -4200, -5900, -7300, -8000, -9500, -16000, -17300, -18300, -18800, -19900, -21000, -21500, -23100, -24700, -25300, -26400, -28800, -29800, -30200, -31900, -36100, -36700, -39300, -39900, -41300, -41700, -42300, -43600, -45200, -45800, -53500, -59000, -60700, -61100, -61600, -62200, -62600, -64200, -67200, -68800, -72200, -73000]
circleY4 = [-400, -4600, -7600, -10450, -11300, -16600, -18000, -19400, -20800, -22200, -23600, -24900, -25100, -27130, -29100, -29500, -31000, -31400, -33400, -36700, -38400, -43000, -45800, -48500, -49100, -49500, -50500, -51000, -54300, -54800, -55300, -56400, -56800, -59700, -63200, -67500, -70100, -70600, -73000]

textY = -1800

let score = 0

let timer = 78

function preload(){
	alright = loadImage('alright.png')
	AMAZING = loadImage('AMAZING.jpg')
	cryingMiku = loadImage('cryingMiku.jpg')
	notGreat = loadImage('slightDisappointment.jpeg')
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

	yPos = -55
	background(255)
	textFont(font)
	breakdance.hide()

	start = createButton("START")
	start.position(1050, 320)
	start.mousePressed(gameScreen)

	tutorial = createButton("TUTORIAL")
	tutorial.position(1010, 450)
	tutorial.mousePressed(tutorialScreen)

	back = createButton("RETURN")
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

	if(endBool == true){
		endScreen()
	}
}

function startScreen(){
	//redoing stuff
	circleY1 = [-70, -2300, -3200, -3500, -5200, -11300, -15600, -16600, -18000, -19400, -20800, -22200, -23600, -23900, -24300, -25700, -26800, -32700, -33200, -34900, -35200, -35500, -38200, -44400, -46400, -47200, -47800, -49100, -49500, -50500, -51000, -52000, -54800, -55300, -56400, -56800, -57500, -62900, -65400, -66400, -66700, -68400, -70300, -70800, -71500]
	circleY2 = [-1600, -2500, -2800, -3800, -5600, -6900, -8600, -15750, -19000, -22700, -24500, -25500, -25900, -26400, -27700, -28400, -32300, -33900, -34200, -34500, -35500, -36100, -37300, -37600, -39000, -39600, -40200, -40500, -44400, -45200, -52900, -58300, -60400, -60700, -61100, -62200, -62600, -64400, -65600, -65900, -67000, -68600, -71500, -72200]
	circleY3 = [-1400, -4200, -5900, -7300, -8000, -9500, -16000, -17300, -18300, -18800, -19900, -21000, -21500, -23100, -24700, -25300, -26400, -28800, -29800, -30200, -31900, -36100, -36700, -39300, -39900, -41300, -41700, -42300, -43600, -45200, -45800, -53500, -59000, -60700, -61100, -61600, -62200, -62600, -64200, -67200, -68800, -72200, -73000]
	circleY4 = [-400, -4600, -7600, -10450, -11300, -16600, -18000, -19400, -20800, -22200, -23600, -24900, -25100, -27130, -29100, -29500, -31000, -31400, -33400, -36700, -38400, -43000, -45800, -48500, -49100, -49500, -50500, -51000, -54300, -54800, -55300, -56400, -56800, -59700, -63200, -67500, -70100, -70600, -73000]

	textY = -1800
	timer = 78
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
	background(115, 20, 61)
	image(songCover, 150, 150, 600, 600)
	stroke(135, 30, 74)
	strokeWeight(20)
	fill(26, 13, 14)
	rect(900, 250, 500, 400)
}

function gameScreen(){
	startBool = false
	gameBool = true 
	tutBool = false

	//timer
	if (gameBool == true && frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
		timer --;
	}
	if (timer == 0) {
		endBool = true;
		gameBool = false
	}
//buttons + get rid of gif
	breakdance.hide()
	start.hide()
	tutorial.hide()
	back.show()

//NO STROKE
	noStroke()

//bg
	background(0)
	tint(180, 180)
	image(sekaiide, 0, 0, 2000, 1200)
	tint(255, 255)
	image(lane, 300, 0, 1000, 1000)

	fill(255)
	textSize(50)

//gray notes at bottom + score
	fill(90)
	ellipse(note1x, noteY, 80, 80)
	ellipse(note2x, noteY, 80, 80)
	ellipse(note3x, noteY, 80, 80)
	ellipse(note4x, noteY, 80, 80)
	fill(150)
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


//note 1
	for(let i = 0; i < circleY1.length; i++){

		fill(222, 75, 85)
		circle(note1x, circleY1[i], 80);
		circleY1[i] = circleY1[i] + 16

		if(circleY1[i] > height){
			circleY1.splice(i, 1)
			score = score - 10
		}
	}

//note 2
	for(let i = 0; i < circleY2.length; i++){

		fill(75, 141, 222)
		circle(note2x, circleY2[i], 80);
		circleY2[i] = circleY2[i] + 16

		if(circleY2[i] > height){
			circleY2.splice(i, 1)
			score = score - 10
		}
	}

//note 3
	for(let i = 0; i < circleY3.length; i++){

		fill(75, 222, 90)
		circle(note3x, circleY3[i], 80);
		circleY3[i] = circleY3[i] + 16

		if(circleY3[i] > height){
			circleY3.splice(i, 1)
			score = score - 10
		}
	}

//note 4
	for(let i = 0; i < circleY4.length; i++){

		fill(222, 75, 180)
		circle(note4x, circleY4[i], 80);
		circleY4[i] = circleY4[i] + 16

		if(circleY4[i] > height){
			circleY4.splice(i, 1)
			score = score - 10
		}
	}

//are you doing good?
	if(0 <= score){
		fill(0)
		rect(350, 450, 220, 100)
		fill(255)
	}
	if(200 <= score){
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
	if(score > 1000){
		fill(0)
		rect(350, 450, 220, 100)
		fill(255)
		text('SUPERB', 400, 500)
	}

//lyrics
	textSize(30)
	text('keeping me waiting is out of the question!! \n\nnotice me! hey, heeeey!! \n\n\nim the number one princess in the world \n\nthat im adorable\nfrom the bottom of your heart \n\ni just want you to believe\n\n\nits not like its selfish or anything... \n\n\ndo something about my right hand\n\n if you understand,\ngot it???\n\nreply with three\nnumber three: for every one word i say, \n\noutfit, all the way to the shoes \nnumber two: take a good look at my\n\n\n\nmy hair \nnumber one: notice when i change\n\n\n\n\n\n\ngot it??? \n\n\n\n\ntreat me, \n\nso make sure you know by heart how to \n\n\nim the number one princess in the world', 1100, textY)
	textY= textY +0.4
}

function keyPressed(){

//note 1 press
	if(key === 'd'){
		
		for (let i = 0; i < circleY1.length; i++) {
			if(circleY1[i] <= noteY+70 && circleY1[i] >= noteY - 70){
				
				score = score + 10
				circleY1.splice(i, 1)
			}
			if(circleY1[i] >= 0 && circleY1[i] <= noteY - 70){
				score = score -5
			}
			if(circleY1[i] >= noteY + 70){
				score = score -5
			}
		}
	}

//note 2 press
	if(key === 'f'){
		
		for (let i = 0; i < circleY2.length; i++) {
			if(circleY2[i] <= noteY+70 && circleY2[i] >= noteY - 70){
				
				score = score + 10
				circleY2.splice(i, 1)
			}
			if(circleY2[i] >= 0 && circleY2[i] <= noteY - 70){
				score = score -5
			}
			if(circleY2[i] >= noteY + 70){
				score = score -5
			}
		}
	}

//note 3 press
	if(key === 'j'){
		
		for (let i = 0; i < circleY3.length; i++) {
			if(circleY3[i] <= noteY+70 && circleY3[i] >= noteY - 70 && i == 0){
				
				score = score + 10
				circleY3.splice(i, 1)
			}
			if(circleY3[i] >= 0 && circleY3[i] <= noteY - 70 && i == 0){
				score = score -5
			}
			if(circleY3[i] >= noteY + 70 && i == 0){
				score = score -5
			}
		}
	}

//note 4 press
	if(key === 'k'){
		
		for (let i = 0; i < circleY4.length; i++) {
			if(circleY4[i] <= noteY+70 && circleY4[i] >= noteY - 70 && i == 0){
				
				score = score + 10
				circleY4.splice(i, 1)
			}
			if(circleY4[i] >= 0 && circleY4[i] <= noteY - 70 && i == 0){
				score = score -5
			}
			if(circleY4[i] >= noteY + 70 && i == 0){
				score = score -5
			}
		}
	}
}

function tutorialScreen(){
//stop music
	WorldIsMine.stop()
	
//buttons
	start.hide()
	tutorial.hide()
	back.show()

	startBool = false
	gameBool = false 
	tutBool = true
	endBool = false

	noStroke()
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
//buttons
	start.hide()
	tutorial.hide()
	back.show()

	startBool = false
	gameBool = false 
	tutBool = false
	endBool = true

	background(0)
	textSize(70)
	text('END', 500, 230)
	text('score:  ' + score + '', 380, 350)

//score evaluation
	if(201 <= score){
		fill(0)
		rect(350, 400, 500, 200)
		fill(255)
		text('YOU PASSED?', 380, 500)
		image(notGreat, 900, 250, 300, 300)
	}
	if(700 <= score ){
		fill(0)
		rect(350, 400, 500, 200)
		fill(255)
		text('ALRIGHT', 440, 500)
		image(alright, 850, 250, 400, 300)
	}
	if(score <= 200){
		fill(0)
		rect(350, 400, 400, 200)
		fill(255)
		text('TERRIBLE...', 430, 500)
		image(cryingMiku, 800, 200)
	}
	if(score >= 1000){
		fill(0)
		rect(350, 400, 400, 200)
		fill(255)
		text('AMAZING!', 425, 500)
		image(AMAZING, 830, 200, 550, 400)
	}
}