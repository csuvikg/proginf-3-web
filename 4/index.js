import { board, init, moveUp } from './state.js';
import { render } from './render.js';

init();
render(board);


window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'ArrowDown':
            moveUp();
            break;
        case 'ArrowUp':
            break;
        case 'ArrowLeft':
            break;
        case 'ArrowRight':
            break;
        default:
            return;
    }
    render(board);
});