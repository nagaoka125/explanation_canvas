const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

let x3 = canvas3.width / 5;
let y3 = canvas3.height / 5;

ctx3.beginPath();
ctx3.fillStyle = "magenta";
ctx3.arc(x3 + 50, y3 + 50, 30, 0, Math.PI*2);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan"
ctx3.arc(x3 + 150, y3 + 150, 40, 0, Math.PI);
ctx3.fill();
ctx3.closePath();