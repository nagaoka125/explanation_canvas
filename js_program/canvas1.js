const canvas1 = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(50, 50, 100, 100);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(250, 250, 100, 100)