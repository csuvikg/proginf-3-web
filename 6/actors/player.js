import { Actor } from "../actor.js";

export class Player extends Actor {
    constructor(x, y) {
        super(x, y);
        this.radius = 30;
    }

    render(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}
