const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

function drawLine(x1, y1, x2, y2, hue) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function hypnoticRadialPattern(time) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const numLines = 50;
  const outerRadius = Math.min(canvas.width, canvas.height) / 2 - 20;
  const innerRadius = outerRadius / 2;

  for (let i = 0; i < numLines; i++) {
    const angle = (Math.PI * 2 * i) / numLines + time;
    const x1 = centerX + Math.cos(angle) * innerRadius;
    const y1 = centerY + Math.sin(angle) * innerRadius;
    const x2 = centerX + Math.cos(angle) * outerRadius;
    const y2 = centerY + Math.sin(angle) * outerRadius;

    const hue = (i * 360) / numLines + (time * 180) / Math.PI;
    drawLine(x1, y1, x2, y2, hue);
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hypnoticRadialPattern(time);

  time += 0.01;

  requestAnimationFrame(animate);
}

animate();
