const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

let ballArray = []
let gravity = 0.2
let friction = 0.98
let balls = 100

let colors = [
	'#2185C5',
	'#7ECEFD',
	'#FFF6E5',
	'#FF7F66'
];

// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

// Ball Class
class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    // Draw ball
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    // Update ball position
    update() {
        this.y = this.y + this.dy
        this.x = this.x + this.dx

        if (this.y + this.dy + this.radius >= canvas.height) {
            this.dy = -this.dy * friction
        }
        else {
            this.dy += gravity
        }

        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.dx = -this.dx * friction
        }

    }
}

// Initialise Loop
function init() {
    for (let i = 0; i < balls; i++) {
        let radius = randomIntFromRange(8, 20);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(0, canvas.height - (4*radius));
        let dx = randomIntFromRange(-3, 3)
        let dy = randomIntFromRange(-2, 2)
        ballArray.push(new Ball(x, y, dx, dy, radius, randomColor(colors)));
    }

}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls; i++) {
        ballArray[i].draw()
        ballArray[i].update()
    }
}

init()
animate();
