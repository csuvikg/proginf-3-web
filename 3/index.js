import { getCoordinates } from './utils.js';
import { player1, player2, ball } from './elements.js';
import { ballSpeed } from './state.js';

window.onkeydown = event => {
    if (event.key === "ArrowLeft") {
        const { x } = getCoordinates(player1);
        player1.style.left = `${x - 1}%`;
    } else if (event.key === "ArrowRight") {
        const { x } = getCoordinates(player1);
        player1.style.left = `${x + 3}%`;
    } else if (event.key === 'a') {
        const { x } = getCoordinates(player2);
        player2.style.left = `${x - 3}%`;
    } else if (event.key === 'd') {
        const { x } = getCoordinates(player2);
        player2.style.left = `${x + 3}%`;
    }
}

const timer = window.setInterval(() => {
    const { x: x1, y: y1 } = getCoordinates(ball);
    ball.style.left = `${x1 + ballSpeed.x}%`
    ball.style.top = `${y1 + ballSpeed.y}%`

    const { x: x2, y: y2 } = getCoordinates(ball);
    if (x2 >= 100) {
        ballSpeed.x *= -1;
        ball.style.left = "100%";
    } else if (x2 <= 0) {
        ballSpeed.x *= -1;
        ball.style.left = "0%";

    }

    if (y2 >= 100) {
        ballSpeed.y *= -1;
        ball.style.top = "100%";
        const { x: player1x } = getCoordinates(player1);
        if (player1x - 3 <= x2 && player1x + 20 >= x2) {
            ballSpeed.y *= -1;
        } else {
            clearInterval(timer);
            console.log("Player 1 wins!");
        }
    } else if (y2 <= 0) {
        ballSpeed.y *= -1;
        ball.style.top = "0%";
        const { x: player2x } = getCoordinates(player2);
        if (player2x - 3 <= x2 && player2x + 20 >= x2) {
            ballSpeed.y *= -1;
        } else {
            clearInterval(timer);
            console.log("Player 2 wins!");
        }
    }
}, 100);
