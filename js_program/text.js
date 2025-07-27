const canvas = document.getElementById("canvastext");
const ctx = canvas.getContext("2d");

ctx.fillTextStyle = "green";
ctx.fillText("canvas", 50, 50);
ctx.font = "20px Arial";
ctx.TextAlign = "center";
ctx.textBaseline = "middle";

ctx.strokeStyle = "red";
ctx.strokeText("canvas", 250, 250);
ctx.font = "20px Noto Sans";
ctx.textAlign = "right";
ctx.textBaseline = "underline";