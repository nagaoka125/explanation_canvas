const canvas_text = document.getElementById("canvastext");
const ctx_text = canvas_text.getContext("2d");

ctx_text.fillTextStyle = "green";
ctx_text.fillText("canvas", 50, 50);
ctx_text.font = "20px Arial";
ctx_text.TextAlign = "center";
ctx_text.textBaseline = "middle";

ctx_text.strokeStyle = "red";
ctx_text.strokeText("canvas", 250, 250);
ctx_text.font = "20px Noto Sans";
ctx_text.textAlign = "right";
ctx_text.textBaseline = "underline";