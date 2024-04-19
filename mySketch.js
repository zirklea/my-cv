// Modified from Daniel Shifman - codingtra.in
// Starter Option One: Particles
//Things to try:
// - Change the words - try phrases for more narrative / poetics!
// - Change the colors - try the background, and the words!
// - Change the font and size of the words
// - Change the particle system - try changing the starting points
// - Change the movement - try playing with the alpha and direction
let backgroundImage;

function preload() {
  // Load your image in the preload function
  backgroundImage = loadImage('https://i.imgur.com/luE1w8C.jpeg');
}

function setup() {
  // Set canvas size
  createCanvas(800, 600);
  
  // Display the background image
  background(backgroundImage);
}

particles = [];
//Just like with Tracery, put anything you want in the ""s
words = ["ding","dong","hark","how","the","bells","sweet","silver",".", "*"]
function setup() {
	//This creates a canvas the size of the screen
  createCanvas(windowWidth, windowHeight);
}
function draw() {
	//Replace this with any background color you choose
	//Or you could load an image or try a gradient!
  background(backgroundImage);
	//This creates the particles
  for (let i = 0; i < 3; i++) {
    let p = new Particle();
    particles.push(p);
  }
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
		//This sets the x value to anywhere - try using a static value
    this.x = random (0, windowWidth);
		//This keeps the y fixed - try reversing it using windowHeight
    this.y = (0);
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try reversing it
    this.vy = random(5, 1);
		//This sets the range of color - this is what keeps us in yellows
		//Try using it for all three to create a broader range of color
		//Or try changing the scale to use the full 0-255
		this.color = "white";
		//This sets the starting alpha so it starts bright and fades 
		//Try reversing it! you can start at 0, add 1, and stop at 255
    this.alpha = 255;
		//This picks a random word for each particle
		this.text = random(words);
		this.fontSize = "100px";
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
		//Change this to +1 if you reverse the fade
    this.alpha -= 1;
  }

  show() {
    noStroke();
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill(255,255,this.color, this.alpha);
		//This positions the text
    text(this.text, this.x, this.y);
		
  }
}