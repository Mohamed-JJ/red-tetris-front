export const mergePiece = (board: number[][], piece: number[][], pos: {x: number, y: number}) : number[][] =>{
    const newBoard = board.map(row => [...row])
    for (let i = 0; i <piece.length; i++) {
        for (let j = 0; j < piece[i].length; j++){
            const newX = pos.x + j
            const newY = pos.y + i
            if (piece[i][j] !== 0 && newY >= 0) {
                    newBoard[newY][newX] = piece[i][j] 
            }
        }
    }
    return newBoard
}