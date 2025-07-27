const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

ctx3.beginPath();
ctx3.fillStyle = "magenta";
ctx3.arc(100,100,50,0,Math.PI*2,true);
ctx3.fill();

ctx3.fillStyle = "cyan"
ctx3.arc(200,100,50,0,Math.PI,true);
ctx3.fill();

ctx3.fillStyle = "yellow";
ctx3.arcTo(150, 150, 200, 200, 90);
ctx3.fill();