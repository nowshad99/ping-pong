// Canvas
const { body } = document;
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

const width = 500;
const height = 700;

// Render everything on Canvas
function renderCanvas() {
    // Canvas Background
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
}

// Create Canvas Element
function createCanvas() {
  canvas.width = width;
  canvas.height = height;
  body.appendChild(canvas);
  renderCanvas();
}

createCanvas();
