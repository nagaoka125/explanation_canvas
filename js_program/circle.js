const canvas = document.getElementById("canvascircle");
const ctx = canvas.getContext("2d");

const orbitcricle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 100,
    angle: 0,
    v: 0.05,
    color: "#aaf45f",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.angle, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },
}

const orbit = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 100,
    angle: 0,
    color: "#a9a9a9",
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.angle, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    },
}

// アニメーションを開始する関数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    // 軌道の円を描画
    orbit.draw();
    // 軌道上の円の位置を更新
    orbitcricle.x = orbit.x + orbit.radius * Math.cos(orbitcricle.angle);
    orbitcricle.y = orbit.y + orbit.radius * Math.sin(orbitcricle.angle);
    // 軌道上の円を描画
    orbitcricle.draw();
    
    // 角度を更新
    orbitcricle.angle += orbitcricle.v;

    requestAnimationFrame(draw);
}

draw();