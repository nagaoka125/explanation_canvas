const canvas = document.getElementById("canvasmove");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

ctx.translate(convas.width / 2, canvas.height / 2);
ctx.fillRect(0, 0, 100, 100);

ctx.rotate(Math.PI / 4);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 100, 100);


