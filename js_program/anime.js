const canvas = document.getElementById("canvasanime");
const ctx = canvas.getContext("2d");

let animetion;

const square = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 1,
    vy: 1,
    size: 100,
    color: "#56b4e9",
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    },

};

// アニメーションを開始する関数
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.draw();
    square.x += square.vx;
    square.y += square.vy;

    // canvasの端に到達したら反転
    if (square.x + square.size > canvas.width - square.size || square.x < square.size) {
        square.vx = -square.vx; // x方向の速度を反転
    }
    if (square.y + square.size > canvas.height - square.size || square.y < square.size) {
        square.vy = -square.vy; // y方向の速度を反転
    }
    animation = requestAnimationFrame(draw);
}
// canvas内にマウスが乗ったときにアニメーションを開始
canvas.addEventListener("mouseover", () => {
    cancelAnimationFrame(animetion);
    animetion = requestAnimationFrame(draw);
});

// canvas内でクリックしたときに速度を増加
canvas.addEventListener("click", () => {
    square.vx += 1;
    square.vy += 1;
});

// canvasからマウスが離れたときにアニメーションを停止
canvas.addEventListener("mouseout", () => {
    cancelAnimationFrame(animetion);
});

square.draw();