const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

let x = canvas2.width / 10;
let y = canvas2.height / 10;

ctx2.beginPath();
ctx2.moveTo(x, y);
ctx2.lineTo(x + 30, y + 30);
ctx2.lineTo(x + 30, y + 60);
ctx2.lineTo(x, y);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(x + 50, y + 50);
ctx2.lineTo(x + 80, y + 80);
ctx2.lineTo(x + 80, y + 110);
ctx2.lineTo(x + 50, y + 50);
ctx2.stroke();
ctx2.closePath();
