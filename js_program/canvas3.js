const canvas = document.getElementById("canvas3");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "magenta";
ctx.arc(100,100,50,0,Math.PI*2,true);

ctx.fillStyle = "cyan"
ctx.arc(200,100,50,0,Math.PI,true);

ctx.fillStyle = "yellow";
ctx.arcTo(150, 150, 200, 200, 90);