const canvas_anime = document.getElementById("canvasanime");
const ctx_anime = canvas_anime.getContext("2d");

let animetion;

const square_anime = {
    x: canvas_anime.width / 2,
    y: canvas_anime.height / 2,
    vx: 1,
    vy: 1,
    size: canvas_anime.width / 10,
    color: "#56b4e9",
    draw() {
        ctx_anime.fillStyle = this.color;
        ctx_anime.fillRect(this.x, this.y, this.size, this.size);
    },

};

// アニメーションを開始する関数
function draw() {
    ctx_anime.clearRect(0, 0, canvas_anime.width, canvas_anime.height);
    square_anime.draw();
    square_anime.x += square_anime.vx;
    square_anime.y += square_anime.vy;

    // canvasの端に到達したら反転
    if (square_anime.x + square_anime.size > canvas_anime.width - square_anime.size || square_anime.x < square_anime.size) {
        square_anime.vx = -square_anime.vx; // x方向の速度を反転
    }
    if (square_anime.y + square_anime.size > canvas_anime.height - square_anime.size || square_anime.y < square_anime.size) {
        square_anime.vy = -square_anime.vy; // y方向の速度を反転
    }
    animation = requestAnimationFrame(draw);
}
// canvas内にマウスが乗ったときにアニメーションを開始
canvas_anime.addEventListener("mouseenter", () => {
    animetion = requestAnimationFrame(draw);
});

// canvas内で左クリックしたときに速度を増加
canvas_anime.addEventListener("click", (event) => {
    square_anime.vx += 1;
    square_anime.vy += 1;
});

// canvas内で右クリックしたときに速度を減少
canvas_anime.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // 右クリックのデフォルトアクションを防ぐ
    if (square_anime.vx > 1 && square_anime.vy > 1) {
        square_anime.vx -= 1;
        square_anime.vy -= 1;
    }
});

// canvasからマウスが離れたときにアニメーションを停止
canvas_anime.addEventListener("mouseout", () => {
    if (animetion) {
        cancelAnimationFrame(animetion);
        animetion = null;
    }
});

square_anime.draw();