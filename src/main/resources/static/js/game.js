document.addEventListener("DOMContentLoaded", function () {
    const targetColorBox = document.getElementById("targetColor");
    const colorOptions = document.getElementById("colorOptions");
    const startGameBtn = document.getElementById("startGame");
    const timerDisplay = document.getElementById("time");
    const scoreDisplay = document.getElementById("scoreValue");

    let correctColor = "";
    let score = 0;
    let timeLeft = 30;
    let timer;

    function getRandomColor() {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    function generateColors() {
        colorOptions.innerHTML = "";
        correctColor = getRandomColor();
        targetColorBox.style.backgroundColor = correctColor;

        let correctPosition = Math.floor(Math.random() * 4);

        for (let i = 0; i < 4; i++) {
            let colorBox = document.createElement("div");
            colorBox.classList.add("color-box");
            colorBox.style.backgroundColor = i === correctPosition ? correctColor : getRandomColor();
            colorBox.addEventListener("click", function () {
                if (this.style.backgroundColor === correctColor) {
                    score += 10;
                } else {
                    score -= 5;
                }
                scoreDisplay.textContent = score;
                generateColors();
            });
            colorOptions.appendChild(colorBox);
        }
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        scoreDisplay.textContent = score;
        timerDisplay.textContent = timeLeft;

        generateColors();

        timer = setInterval(function () {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(`게임 종료! 최종 점수: ${score}`);
            }
        }, 1000);
    }

    startGameBtn.addEventListener("click", startGame);
});
