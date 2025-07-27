const canvas_color = document.getElementById("canvascolor");
const ctx_color = canvas_color.getContext("2d");

let change;

const square = {
    x: canvas_color.width / 2 - 25,
    y: canvas_color.height / 2 - 25,
    size: 50,
    color: "#000000",
    strokeColor: "#ffffff",
    draw() {
        ctx_color.fillStyle = this.color;
        ctx_color.fillRect(this.x, this.y, this.size, this.size);
        ctx_color.strokeStyle = this.strokeColor;
        ctx_color.lineWidth = 2;
        ctx_color.strokeRect(this.x, this.y, this.size, this.size);
    },
}

// 色を変更する関数
function changeColor() {
    // ランダムな色を生成
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    square.color = randomColor;
    square.draw();

    change = setInterval(changeColor, 1000); // 1秒ごとに色を変更
}

// canvas内をクリックしたときに色の変更を開始
canvas_color.addEventListener("click", () => {
    if (change) {
        clearInterval(change);
        change = null;
    } else {
        changeColor();
    }
});

// canvasからマウスが離れたときに色の変更を停止
canvas_color.addEventListener("mouseout", () => {
    clearInterval(change);
});

square.draw();