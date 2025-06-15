'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { Board } from '@/utils/components/Board'
import { useGameLoop } from '@/utils/hooks/useGameLoop'
import { usePlayerControls } from '@/utils/hooks/usePlayerControls'
import { pauseGame, unpauseGame } from '@/store/gameSlice'

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

  return (
    <section className='flex flex-col'>
      <div className='bg-white flex flex-row justify-between'>
        <span>
        lines cleared {clearedLines}
        </span>
        <span>
          {gameOver && 'game over'}
        </span>
        <span>
          score {score}
        </span>
      </div>
    <div className="bg-slate-50">
      <Board board={board} currentPiece={currentPiece} position={position} />
      <button className=' w-28 bg-red-500' onClick={() => { dispatch(pauseGame())}}>pause</button>
      <button className=' w-28 bg-green-500' onClick={() => { dispatch(unpauseGame())}}>resume</button>
    </div>

    </section>
  )
}

export default Game
