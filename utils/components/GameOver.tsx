import React, { useState } from 'react'
import { Button, Dialog, Flex, IconButton, Text, TextField } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { pauseGame, resetGame, stopGame, unpauseGame } from '@/store/gameSlice';
import { RootState } from '@/app/state/store';
import { useRouter } from 'next/navigation';



function GameOver() {
    const dispatch = useDispatch()
    const gameOver = useSelector((state: RootState) => state.game.isGameOver)
    const isPaused = useSelector((state: RootState) => state.game.isPaused)
    const score = useSelector((state: RootState) => state.game.score)
    const [open, setOpen] = useState(true);
    const router = useRouter()

    return (
        <>
            <Dialog.Root open={open}>
                <Dialog.Content
                    maxWidth="450px"
                    onEscapeKeyDown={(event) => event.preventDefault()}
                    onPointerDownOutside={(event) => event.preventDefault()}
                >
                    <Dialog.Title>Game Over</Dialog.Title>
                    <div>
                        you scored {score}
                    </div>
                    <Flex direction="column" gap="3">
                            

                        <Dialog.Close onClick={() => setOpen(false)}>
                        <Button
                            color='orange'
                            variant='soft'
                            className='w-28 h-10 font-semibold rounded-lg bg-blue-500'
                            onClick={() => { dispatch(resetGame()) }}
                            >
                            Restarts
                        </Button>
                            </Dialog.Close>
                        
                        <Dialog.Close onClick={() => setOpen(false)}>
                        <Button
                            color='blue'
                            variant='soft'
                            onClick={() => { router.push('/dashboard') }}
                            >
                            go to dashboard
                        </Button>
                            </Dialog.Close>

                    </Flex>
                </Dialog.Content>
            </Dialog.Root>


        </>
    )
}

export default GameOver