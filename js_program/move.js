const canvas_move = document.getElementById("canvasmove");
const ctx_move = canvas_move.getContext("2d");

let x_move = canvas_move.width / 5 + 20;
let y_move = canvas_move.height / 5 + 20;

ctx_move.fillStyle = "blue";
ctx_move.translate(canvas_move.width / 2, canvas_move.height / 2);
ctx_move.fillRect(-x_move / 2, -y_move /2, x_move, x_move);

ctx_move.save();
ctx_move.rotate(Math.PI / 4);
ctx_move.fillStyle = "green";
ctx_move.fillRect(-x_move / 2, -y_move /2, x_move, x_move);


