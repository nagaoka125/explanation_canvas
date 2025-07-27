const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

let x = canvas1.width / 10;
let y = canvas1.height / 10;

ctx1.fillStyle = "green";
ctx1.fillRect(x + 30, y + 30, x, y);

ctx1.strokeStyle = "red";
ctx1.lineWidth = 5;
ctx1.strokeRect(x + 50, y + 50, x, y)