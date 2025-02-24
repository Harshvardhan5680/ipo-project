const canvas = document.getElementById("errorCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 150;

let position = 0;
let speed = 0.5;
let direction = 1;

function draw404() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "#007bff";
    ctx.textAlign = "center";
    ctx.fillText("404", canvas.width / 2, 80 + position);

    if (position >= 15 || position <= -15) {
        direction *= -1;
    }
    position += speed * direction;

    requestAnimationFrame(draw404);
}

draw404();
