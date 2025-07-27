const canvas_anime = document.getElementById("canvasanime");
const ctx_anime = canvas_anime.getContext("2d");

let animetion;

const square = {
    x: canvas_anime.width / 2,
    y: canvas_anime.height / 2,
    vx: 1,
    vy: 1,
    size: 100,
    color: "#56b4e9",
    draw() {
        ctx_anime.fillStyle = this.color;
        ctx_anime.fillRect(this.x, this.y, this.size, this.size);
    },

};

// アニメーションを開始する関数
function draw() {
    ctx_anime.clearRect(0, 0, canvas_anime.width, canvas_anime.height);
    square.draw();
    square.x += square.vx;
    square.y += square.vy;

    // canvasの端に到達したら反転
    if (square.x + square.size > canvas_anime.width - square.size || square.x < square.size) {
        square.vx = -square.vx; // x方向の速度を反転
    }
    if (square.y + square.size > canvas_anime.height - square.size || square.y < square.size) {
        square.vy = -square.vy; // y方向の速度を反転
    }
    animation = requestAnimationFrame(draw);
}
// canvas内にマウスが乗ったときにアニメーションを開始
canvas_anime.addEventListener("mouseover", () => {
    cancelAnimationFrame(animetion);
    animetion = requestAnimationFrame(draw);
});

// canvas内でクリックしたときに速度を増加
canvas_anime.addEventListener("click", () => {
    square.vx += 1;
    square.vy += 1;
});

// canvasからマウスが離れたときにアニメーションを停止
canvas_anime.addEventListener("mouseout", () => {
    cancelAnimationFrame(animetion);
});

square.draw();