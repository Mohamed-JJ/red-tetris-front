import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {hardDrop, moveLeft, moveRight, rotatePiece, softDrop} from '../../store/gameSlice'

export const usePlayerControls =() =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent)=>{
            switch (e.key){
                case 'ArrowLeft':
                    dispatch(moveLeft())
                    break
                case 'ArrowRight':
                    dispatch(moveRight())
                    break
                case 'ArrowUp':
                    dispatch(rotatePiece())
                    break
                case 'ArrowDown':
                    dispatch(softDrop())
                    break
                case ' ':
                    dispatch(hardDrop())
                    break
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [dispatch])
}