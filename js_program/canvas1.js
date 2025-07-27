const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

let x = canvas1.width / 5;
let y = canvas1.height / 5;
let s = 50;

ctx1.fillStyle = "green";
ctx1.fillRect(x + 30, y + 30, s, s);

ctx1.strokeStyle = "red";
ctx1.lineWidth = 5;
ctx1.strokeRect(x + 100, y + 100, s, s);