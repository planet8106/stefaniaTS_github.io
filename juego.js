const ball = document.getElementById("ball");
const timerDisplay = document.getElementById("timer");
let ballSpeed = 5;
let clickCount = 0;
let timeLeft = 30;

// Mueve la bolita de lado a lado y de arriba hacia abajo
function moveBall() {
    const maxX = window.innerWidth - ball.clientWidth;
    const maxY = window.innerHeight - ball.clientHeight;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    ball.style.left = x + "px";
    ball.style.top = y + "px";
}

// Incrementa la velocidad al hacer clic en la bolita
ball.addEventListener("click", () => {
    ballSpeed += 1;
    clickCount += 1;
    moveBall();
    // Actualiza el recuento de clics en la pantalla
    clickCountDisplay.textContent = `Recuento de Clics: ${clickCount}`;
});

// Muestra el recuento de clics
const clickCountDisplay = document.createElement("div");
clickCountDisplay.textContent = `Recuento de Clics: ${clickCount}`;
document.body.appendChild(clickCountDisplay); 

// Mueve la bolita automáticamente
const intervalId = setInterval(moveBall, 10000 / ballSpeed);

// Temporizador de 30 segundos
const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Tiempo restante: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(intervalId); // Detiene el movimiento de la bolita
        clearInterval(countdown); // Detiene el temporizador
        timerDisplay.textContent = "¡Tiempo agotado!";
    }
}, 1000);