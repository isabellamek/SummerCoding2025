let note1Array = [];
let note1lastAddTime = 0;
let note1randomInterval = 0;

function setup() {
  createCanvas(400, 400);
  // Initial random interval
  randomInterval = random(500, 2000); // Between 0.5 and 2 seconds
}

function draw() {
  background(220); // Clear the background

  // Check if it's time to add a new element
  //you'll need this for every note

  //Note 1
  if (millis() - note1lastAddTime >= note1randomInterval) {
    // Add a new element to the array (replace with your desired element)
    note1Array.push({
      x: 100,
      y: -50,
      size: 30,
      speed: 3
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
    ellipse(element.x, element.y, element.size, element.size);
    if(element.y > windowHeight){
      note1Array.splice(i, 1)
      print(note1Array)
    }
    if(dist(mouseX, mouseY, element.x, element.y) <15){
      note1Array.splice(i, 1)
    }

  }

  //Note 2
}
