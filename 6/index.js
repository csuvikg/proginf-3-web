import { ctx, canvas } from './canvas.js'
import { Player } from './actors/player.js';
import { Enemy } from './actors/enemy.js';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lastRender = Date.now();
const player = new Player(100, 100);
const enemies = [];
const bullets = [];

const next = () => {
    const dt = (Date.now() - lastRender) / 1000; // 1 sec

    const spawnRate = 0.5;
    const chanceOfNewEnemy = spawnRate * dt;
    if (Math.random() < chanceOfNewEnemy) {
        enemies.push(new Enemy(canvas));
    }

    player.next(dt);
    for (const enemy of enemies) {
        enemy.next(dt, player);
    }
    for (const bullet of bullets) {
        bullet.next(dt);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render(ctx);
    for (const enemy of enemies) {
        enemy.render(ctx);
    }
    for (const bullet of bullets) {
        bullet.render(ctx);
    }

    for (const enemy of enemies) {
        let isDead = false;
        for (const bullet of bullets) {
            if (enemy.collidesWith(bullet)) {
                const bulletIndex = bullets.indexOf(bullet);
                const enemyIndex = enemies.indexOf(enemy);

                bullets.splice(bulletIndex, 1);
                enemies.splice(enemyIndex, 1);
                isDead = true;
                break;
            }
        }

        if (isDead) {
            continue;
        }

        if (enemy.collidesWith(player)) {
            ctx.font = "40px Consolas";
            ctx.fillText("Game Over", 100, 100);
            return;
        }
    }

    lastRender = Date.now();

    requestAnimationFrame(next);
}

next();

window.addEventListener("keydown", (event) => {
    switch(event.code) {
        case 'KeyW': player.vy = -200; break;
        case 'KeyS': player.vy = 200; break;
        case 'KeyA': player.vx = -200; break;
        case 'KeyD': player.vx = 200; break;
    }
});

window.addEventListener("keyup", (event) => {
    switch(event.code) {
        case 'KeyW': if (player.vy < 0) player.vy = 0; break;
        case 'KeyS': if (player.vy > 0) player.vy = 0; break;
        case 'KeyA': if (player.vx < 0) player.vx = 0; break;
        case 'KeyD': if (player.vx > 0) player.vx = 0; break;
    }
});

window.addEventListener("click", (event) => {
    const x = event.pageX;
    const y = event.pageY;


})