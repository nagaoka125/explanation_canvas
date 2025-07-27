const canvas = document.getElementById("canvastest");
const ctx = canvas.getContext("2d");

// 背景色を青に設定
ctx.fillStyle = "blue";
// fillRectの引数は座標x,yと幅と高さ;
ctx.fillRect(canvas.width / 2, canvas.height / 2, 50, 50);

ctx.arc(100, 100, 50, 0, Math.PI * 2, true);