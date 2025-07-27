const canvas_text = document.getElementById("canvastext");
const ctx_text = canvas_text.getContext("2d");

let x_text = canvas_text.width / 5;
let y_text = canvas_text.height / 5;

ctx_text.fillTextStyle = "green";
ctx_text.fillText("canvas", x_text + 30, y_text + 30);
ctx_text.font = "30px Arial";
ctx_text.TextAlign = "center";
ctx_text.textBaseline = "middle";

ctx_text.strokeStyle = "red";
ctx_text.strokeText("canvas", x_text + 130, y_text + 130);
ctx_text.font = "30px Noto Sans";
ctx_text.textAlign = "right";
ctx_text.textBaseline = "alphabetic";