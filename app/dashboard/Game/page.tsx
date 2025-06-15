'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { Board } from '@/utils/components/Board'
import { useGameLoop } from '@/utils/hooks/useGameLoop'
import { usePlayerControls } from '@/utils/hooks/usePlayerControls'
import { pauseGame, resetGame, stopGame, unpauseGame } from '@/store/gameSlice'
import GameButtons from '@/utils/components/GameButtons'

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

  return (
    <section className='flex flex-col min-h-screen bg-slate-200'>
      <div className=' flex flex-row justify-between'>
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
    <div className="bg-slate-50 flex flex-col justify-center items-center">
      <Board board={board} currentPiece={currentPiece} position={position} />
      <div className='flex flex-row gap-4 my-4'>
      <GameButtons />
        <button className={`w-28 h-10 font-semibold  rounded-lg ${gameOver || isPaused ? 'bg-gray-500' : 'bg-red-500'}`} onClick={() => { dispatch(pauseGame())}}>pause</button>
        <button className={`w-28 h-10 font-semibold  rounded-lg ${gameOver || !isPaused? 'bg-gray-500' : 'bg-green-500'}`} onClick={() => { dispatch(unpauseGame())}}>resume</button>
        <button className=' w-28 h-10 font-semibold  rounded-lg  bg-blue-500' onClick={() => { dispatch(resetGame())}}>restart</button>
        <button className={`w-28 h-10 font-semibold  rounded-lg ${gameOver ? 'bg-gray-500' : 'bg-yellow-500'}`} onClick={() => { dispatch(stopGame())}}>end game</button>
      </div>
    </div>

    </section>
  )
}

export default Game
