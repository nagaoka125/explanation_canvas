const canvas = document.getElementById("canvastest");
const ctx = canvas.getContext("2d");

// 背景色を青に設定
ctx.fillStyle = "blue";
// fillRectの引数は座標x,yと幅と高さ;
ctx.fillRect(canvas.width / 2 - 25, canvas.height / 2 - 25, 50, 50);