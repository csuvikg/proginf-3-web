import { Actor } from "../actor.js"
import { randomBetween } from "../utils.js"

export class Enemy extends Actor {
    constructor(canvas) {
        const radius = 25;
        const side = randomBetween(1, 4);
        let x, y;
        switch (side) {
            case 1: //top
                y = -radius;
                x = randomBetween(0, canvas.width);
                break;
            case 2: //top
                x = canvas.width + radius;
                y = randomBetween(0, canvas.height);
                break;
            case 3: //top
                y = canvas.height + radius;
                x = randomBetween(0, canvas.width);
                break;
            case 4: //top
                x = -radius;
                y = randomBetween(0, canvas.height);
                break;
        }

        super(x, y);
        this.radius = radius;
    }

    next(dt, player) {
        const speed = 150;
        const distanceFromPlayer =
            Math.sqrt((player.x - this.x) ** 2 + (player.y - this.y) ** 2);
        this.vx = (player.x - this.x) / distanceFromPlayer * speed;
        this.vy = (player.y - this.y) / distanceFromPlayer * speed;

        super.next(dt);
    }

    render(ctx) {
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}
