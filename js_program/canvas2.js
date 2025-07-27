const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

ctx2.biginPath();
ctx2.moveTo(50, 50);
ctx2.lineTo(150, 50);
ctx2.lineTo(150, 150);
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.moveTo(250, 250);
ctx2.lineTo(350, 250);
ctx2.lineTo(350, 350);
ctx2.stroke();
ctx2.closePath();
