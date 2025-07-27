const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");

ctx1.fillStyle = "green";
ctx1.fillRect(50, 50, 100, 100);

ctx1.strokeStyle = "red";
ctx1.lineWidth = 5;
ctx1.strokeRect(250, 250, 100, 100)