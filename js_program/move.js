const canvas_move = document.getElementById("canvasmove");
const ctx_move = canvas_move.getContext("2d");

let x = canvas_move.width / 10;
let y = canvas_move.height / 10;

ctx_move.fillStyle = "blue";
ctx_move.translate(canvas_move.width / 2, canvas_move.height / 2);
ctx_move.fillRect(0, 0, x + 20, y + 20);

ctx_move.rotate(Math.PI / 4);
ctx_move.translate(canvas_move.width / 2, canvas_move.height / 2);
ctx_move.fillStyle = "green";
ctx_move.fillRect(0, 0, x + 20, y + 20);


