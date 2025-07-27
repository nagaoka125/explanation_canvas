const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

let x2 = canvas2.width / 5;
let y2 = canvas2.height / 5;

ctx2.beginPath();
ctx2.moveTo(x2, y2);
ctx2.lineTo(x2 + 30, y2 + 30);
ctx2.lineTo(x2 + 30, y2+ 60);
ctx2.lineTo(x2, y2);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(x2 + 100, y2 + 100);
ctx2.lineTo(x2 + 130, y2 + 130);
ctx2.lineTo(x2 + 130, y2 + 160);
ctx2.lineTo(x2 + 100, y2 + 100);
ctx2.stroke();
ctx2.closePath();
