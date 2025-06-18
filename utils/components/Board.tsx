'use client'
import React from 'react'

type Props = {
  board: number[][]
  currentPiece: number[][]
  position: { x: number; y: number }
}

export const Board: React.FC<Props> = ({ board, currentPiece, position }) => {
  const displayBoard = board.map(row => [...row]) 

  for (let i = 0; i < currentPiece.length; i++) {
    for (let j = 0; j < currentPiece[i].length; j++) {
      if (currentPiece[i][j] !== 0) {
        const y = position.y + i
        const x = position.x + j
        if (y >= 0 && y < displayBoard.length && x >= 0 && x < displayBoard[0].length) {
          displayBoard[y][x] = 1
        }
      }
    }
  }

  return (
    <div
      className="grid gap-px bg-slate-800 p-[5px]"
      style={{
        gridTemplateColumns: `repeat(${board[0].length}, 40px)`,
        gap: '1px',
        backgroundColor: '#1e293b',
        padding: '5px'
      }}
    >
      {displayBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: cell ? '#090E18' : '#e2e8f0'
            }}
          />
        ))
      )}
    </div>
  )
}
