export const BOARD_SIZE = 4;

export let board;

export const init = () => {
    board = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        board.push([]);
        for (let j = 0; j < BOARD_SIZE; j++) {
            board[i].push(0);
        }
    }

    newBlock();
    newBlock();
}

export const newBlock = () => {
    let x, y;
    do {
        x = Math.floor(Math.random() * BOARD_SIZE);
        y = Math.floor(Math.random() * BOARD_SIZE);
    } while (board[x][y] !== 0);

    board[x][y] = 2;
}

export const moveUp = () => {
    for (let y = 1; y < BOARD_SIZE; y++) {
        for (let x = 0; x < BOARD_SIZE; x++) {
            if (board[x][y] !== 0) {
                let hasClosestBlock = false;
                for (let y2 = y - 1; y2 >= 0; y--) {
                    if (board[x][y2] !== 0) {
                        if (board[x][y] === board[x][y2]) {
                            board[x][y2] *= 2;
                            hasClosestBlock = true;
                        } else {
                            board[x][y2 + 1] = board[x][y];
                        }
                        board[x][y] = 0;
                    }
                }
                if (!hasClosestBlock) {
                    board[x][0] = board[x][y];
                    board[x][y] = 0;
                }
            }
        }
    }
}
