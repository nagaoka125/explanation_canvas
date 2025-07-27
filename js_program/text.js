const canvas_text = document.getElementById("canvastext");
const ctx_text = canvas_text.getContext("2d");

let x = canvas_text.width / 10;
let y = canvas_text.height / 10;

ctx_text.fillTextStyle = "green";
ctx_text.fillText("canvas", x + 30, y + 30);
ctx_text.font = "30px Arial";
ctx_text.TextAlign = "center";
ctx_text.textBaseline = "middle";

ctx_text.strokeStyle = "red";
ctx_text.strokeText("canvas", x + 130, y + 130);
ctx_text.font = "30px Noto Sans";
ctx_text.textAlign = "right";
ctx_text.textBaseline = "alphabetic";