'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../state/store'
import { Board } from '@/utils/components/Board'
import { useGameLoop } from '@/utils/hooks/useGameLoop'
import { usePlayerControls } from '@/utils/hooks/usePlayerControls'
import { pauseGame, resetGame, stopGame, unpauseGame } from '@/store/gameSlice'
import { Button } from '@radix-ui/themes'
import GameOver from '@/utils/components/GameOver'
import GamePause from '@/utils/components/GamePause'

const Game = () => {
  useGameLoop()
  usePlayerControls()

  const dispatch = useDispatch()

  const board = useSelector((state: RootState) => state.game.board)
  const currentPiece = useSelector((state: RootState) => state.game.currentPiece)
  const position = useSelector((state: RootState) => state.game.position)
  const clearedLines = useSelector((state: RootState) => state.game.linesCleared)
  const score = useSelector((state: RootState) => state.game.score)
  const gameOver = useSelector((state: RootState) => state.game.isGameOver)
  const isPaused = useSelector((state: RootState) => state.game.isPaused)
  const nextPiece = useSelector((state: RootState) => state.game.isPaused)

  console.log(nextPiece)

  return (
    <section className='flex flex-col min-h-screen bg-slate-200'>
      <div className=' flex flex-row justify-center'>
        
          {gameOver && <GameOver />}
        
        <span>
          score {score}
        </span>
      </div>
      <section className='flex flex-row justify-center gap-4'>
          <div className='border border-1'>next piece is {nextPiece}</div>
          <Board board={board} currentPiece={currentPiece} position={position} />
          <GamePause />
      </section>

    </section>
  )
}

export default Game
