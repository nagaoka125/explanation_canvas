const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

let x = canvas3.width / 10;
let y = canvas3.height / 10;

ctx3.beginPath();
ctx3.fillStyle = "magenta";
ctx3.arc(x + 30, y + 30, 20, 0, Math.PI*2);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan"
ctx3.arc(x + 60, y + 60, 20, 0, Math.PI);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "yellow";
ctx3.arcTo(x + 90, y + 90, x + 70, y + 70, 30);
ctx3.stroke;
ctx3.closePath();