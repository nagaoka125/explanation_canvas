const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext("2d");

ctx.biginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(350, 250);
ctx.lineTo(350, 350);
ctx.stroke();
ctx.closePath();
