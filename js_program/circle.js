const canvas_circle = document.getElementById("canvascircle");
const ctx_circle = canvas_circle.getContext("2d");

let circle = null;

const orbitcricle = {
    x: canvas_circle.width / 2,
    y: canvas_circle.height / 2,
    radius: 15,
    angle: 0,
    v: 0.05,
    color: "#aaf45f",
    draw() {
        ctx_circle.beginPath();
        ctx_circle.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx_circle.fillStyle = this.color;
        ctx_circle.fill();
        ctx_circle.closePath();
    },
}

const orbit = {
    x: canvas_circle.width / 2,
    y: canvas_circle.height / 2,
    radius: 50,
    color: "#a9a9a9",
    draw() {
        ctx_circle.beginPath();
        ctx_circle.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx_circle.strokeStyle = this.color;
        ctx_circle.lineWidth = 1;
        ctx_circle.stroke();
        ctx_circle.closePath();
    },
}

// アニメーションを開始する関数
function draw() {
    ctx_circle.clearRect(0, 0, canvas_circle.width, canvas_circle.height); 
    // 軌道の円を描画
    orbit.draw();
    // 軌道上の円の位置を更新
    orbitcricle.x = orbit.x + orbit.radius * Math.cos(orbitcricle.angle);
    orbitcricle.y = orbit.y + orbit.radius * Math.sin(orbitcricle.angle);
    // 軌道上の円を描画
    orbitcricle.draw();
    
    // 角度を更新
    if (orbitcricle.v !== 0){// アニメーションが停止している場合は何もしない
    orbitcricle.angle += orbitcricle.v;
    }

    circle = requestAnimationFrame(draw);
}

// アニメーションを開始する関数
function start() {
    if (!circle) {
        requestAnimationFrame(draw);
    }
}

// canvas内でクリックしたときにアニメーションを開始
canvas_circle.addEventListener("click", () => {
    if (orbitcricle.v !== 0) {
        orbitcricle.v = 0; // アニメーションを停止
    } 
    else {
        orbitcricle.v = 0.05; // アニメーションを開始
        start();
    }
});

// canvasからマウスが離れたときにアニメーションを停止
canvas_circle.addEventListener("mouseout", () => {
    orbitcricle.v = 0; // アニメーションを停止
    if (circle === null) {
        ctx_circle.clearRect(0, 0, canvas_circle.width, canvas_circle.height); // canvasをクリア
        orbit.draw(); // 軌道の円を再描画
        orbitcricle.draw(); // 軌道上の円を再描画
    }
});


orbit.draw(); // 軌道の円を初期描画
orbitcricle.draw(); // 軌道上の円を初期描画 