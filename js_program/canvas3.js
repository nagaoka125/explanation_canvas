const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

let x3 = canvas3.width / 5;
let y3 = canvas3.height / 5;

ctx3.beginPath();
ctx3.fillStyle = "magenta";
ctx3.arc(x3 + 30, y3 + 30, 20, 0, Math.PI*2);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan"
ctx3.arc(x3 + 60, y3 + 60, 20, 0, Math.PI);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "yellow";
ctx3.arcTo(x3 + 90, y3 + 90, x3 + 70, y3 + 70, 30);
ctx3.stroke;
ctx3.closePath();