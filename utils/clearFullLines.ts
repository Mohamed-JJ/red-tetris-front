
export const clearFullLines = (board: number[][]): { newBoard: number[][], clearedLines: number } =>{
  const width = board[0].length

  const rows = board.filter(row => row.some(cell => cell === 0))
  const clearedLines = board.length - rows.length

  const newBoard = Array.from({ length: clearedLines }, () =>
      Array(width).fill(0)
    ).concat(rows)

  console.log(clearedLines)
  return {newBoard, clearedLines}
}