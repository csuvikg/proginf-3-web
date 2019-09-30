import { BOARD_SIZE, newBlock } from './state.js'

const root = document.querySelector("#board");

export const render = (board) => {
    root.innerHTML = '';

    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] !== 0) {
                const block = document.createElement("div");
                block.innerText = board[i][j];
                block.style.left = `${i * 50}px`;
                block.style.top = `${j * 50}px`;
                root.append(block);
            }
        }
    }

    newBlock();
}