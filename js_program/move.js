const canvas_move = document.getElementById("canvasmove");
const ctx_move = canvas_move.getContext("2d");

ctx_move.fillStyle = "blue";

ctx_move.translate(canvas_move.width / 2, canvas_move.height / 2);
ctx_move.fillRect(0, 0, 100, 100);

ctx_move.rotate(Math.PI / 4);
ctx_move.fillStyle = "red";
ctx_move.fillRect(0, 0, 100, 100);


