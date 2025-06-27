import React from 'react'



function NextPiece(piece: number[][]) {
    if (!piece) return; 
    return (
        <div
        className="grid gap-px "
        style={{
          gridTemplateColumns: `repeat(3, 20px)`,
          gap: '1px',
          padding: '5px'
        }}
      >
        {piece.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: cell ? '#0b0827' : undefined
              }}
            />
          ))
        )}
      </div>
    )
}

export default NextPiece