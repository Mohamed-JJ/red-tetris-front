export const checkCollision = (board: number[][], piece: number[][], pos: { x: number; y: number }): boolean => {
    for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[i].length; j++) {
        if (piece[i][j] !== 0) {
            const newX = pos.x + j;
            const newY = pos.y + i;
        if (newX < 0 || newX >= board[0].length || newY >= board.length) {
            console.log('collision detected: out of bounds');
            return true;
        }
        if (newY >= 0 && board[newY][newX] !== 0) {
            console.log('collision detected: overlap');
            return true;
        }
        console.log('no collision detected');
    }
    }
}
return false;
};
