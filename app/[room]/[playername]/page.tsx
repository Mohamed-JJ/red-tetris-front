'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/state/store'
import { Board } from '@/utils/components/Board'
import { useGameLoop } from '@/utils/hooks/useGameLoop'
import { usePlayerControls } from '@/utils/hooks/usePlayerControls'
import { pauseGame, resetGame, startGame, stopGame, unpauseGame } from '@/store/gameSlice'
import { Button } from '@radix-ui/themes'
import GameOver from '@/utils/components/GameOver'
import GamePause from '@/utils/components/GamePause'
import {useEffect} from 'react';
import { TETRIMINOS } from '../../../utils/tetriminos';
import NextPiece from '@/utils/components/NextPiece'








const Game = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);


  useGameLoop()
  usePlayerControls()

  


  const board = useSelector((state: RootState) => state.game.board)
  const currentPiece = useSelector((state: RootState) => state.game.currentPiece)
  const position = useSelector((state: RootState) => state.game.position)
  const clearedLines = useSelector((state: RootState) => state.game.linesCleared)
  const score = useSelector((state: RootState) => state.game.score)
  const gameOver = useSelector((state: RootState) => state.game.isGameOver)
  const isPaused = useSelector((state: RootState) => state.game.isPaused)
  const nextPieceType = useSelector((state: RootState) => state.game.nextPieceUI)

  const NextPieceDisplay = NextPiece(nextPieceType)

  // console.log(nextPiece)



  return (
    <section className='flex flex-col h-screen bg-slate-200 my-auto items-center min-h-screen'>
      <div className=' flex flex-row justify-center'>
        
          {gameOver && <GameOver />}
        
        <span>
          score {score}
        </span>
      </div>
      <section className='flex flex-row justify-start gap-4 '>
          <div className='border-1 justify-start mx-auto w-full max-h-28 p-2'>next piece is {NextPieceDisplay}</div>
          <Board board={board} currentPiece={currentPiece} position={position} />

          <GamePause />
      </section>

    </section>
  )
}

export default Game
