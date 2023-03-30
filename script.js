// Canvas
const { body } = document;
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const width = 500;
const height = 700;

// Paddle
const paddleHeight = 10;
const paddleWidth = 50;
let paddleBottomX = 225;
let paddleTopX = 225;

// Ball
let ballX = 250;
let ballY = 350;
const ballRadius = 5;

// Render everything on Canvas
function renderCanvas() {
  // Canvas Background
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);

  // Paddle Colour
  context.fillStyle = "white";

  // Player Paddle (Bottom)
  context.fillRect(paddleBottomX, height - 20, paddleWidth, paddleHeight);

  // Computer Paddle (Top)
  context.fillRect(paddleTopX, 10, paddleWidth, paddleHeight);

  // Dashed Center Line
  context.beginPath();
  context.setLineDash([4]);
  context.moveTo(0, 350);
  context.lineTo(500, 350);
  context.strokeStyle = 'grey';
  context.stroke();

  // Ball
  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();
}

// Create Canvas Element
function createCanvas() {
  canvas.width = width;
  canvas.height = height;
  body.appendChild(canvas);
  renderCanvas();
}

createCanvas();
