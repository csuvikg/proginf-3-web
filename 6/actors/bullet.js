import { Actor } from "../actor.js"

export class Buller extends Actor {
    constructor(player, targetX, targetY) {
        super(player.x, player.y);
        this.radius = 25;
        const speed = 500;
        const distanceFromTarget =
            Math.sqrt((targetX - this.x) ** 2 + (targetY - this.y) ** 2);
        this.vx = (targetX - this.x) / distanceFromTarget * speed;
        this.vy = (targetY - this.y) / distanceFromTarget * speed;
    }

    render(ctx) {
        ctx.fillStyle = "darkgray";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    next(dt) {
        const speed = 500;
        this.vx = dt * speed;
        this.vy = dt * speed;
        super.next(dt);
    }
}