import { useSelector, useDispatch } from 'react-redux'
import { tick } from '../../store/gameSlice'
import { useEffect } from 'react'
import { RootState } from '@/app/state/store'

export const useGameLoop = () => {
  const running = useSelector((state: RootState) => state.game.isRunning)
  const gameOver = useSelector((state: RootState) => state.game.isGameOver)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('running', running, 'gameOver', gameOver)

    if (running && !gameOver) {
      const interval = setInterval(() => {
        dispatch(tick())
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [running, gameOver, dispatch])
}
