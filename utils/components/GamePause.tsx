import React, { useState } from 'react'
import { Button, Dialog, Flex, IconButton, Text, TextField } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { pauseGame, resetGame, stopGame, unpauseGame } from '@/store/gameSlice';
import { RootState } from '@/app/state/store';

const PauseIcon = () => {
    return (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)
}
const ContinueIcon = () => {
    return (<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>)
}

function GamePause() {
    const dispatch = useDispatch()
    const gameOver = useSelector((state: RootState) => state.game.isGameOver)
    const isPaused = useSelector((state: RootState) => state.game.isPaused)
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog.Root open={open}>

                <Dialog.Trigger onClick={() => setOpen(true)}>
                    <IconButton  color='bronze' size={'4'} onClick={() => dispatch(pauseGame())}>
                        {!open ? <PauseIcon /> : <ContinueIcon />}
                    </IconButton>
                </Dialog.Trigger>

                <Dialog.Content
                    maxWidth="450px"
                    onEscapeKeyDown={(event) => event.preventDefault()}
                    onPointerDownOutside={(event) => event.preventDefault()}
                >
                    <Dialog.Title>Game paused</Dialog.Title>

                    <Flex direction="column" gap="3">
                        <Dialog.Close onClick={() => setOpen(false)}>
                            <Button
                                color='green'
                                variant='soft'
                                className={`w-28 h-10 font-semibold rounded-lg ${gameOver || !isPaused ? 'bg-gray-500' : 'bg-green-500'}`}
                                onClick={() => { dispatch(unpauseGame()) }}
                            >
                                Resume
                            </Button>
                            </Dialog.Close>

                        <Dialog.Close onClick={() => setOpen(false)}>
                        <Button
                            color='orange'
                            variant='soft'
                            className='w-28 h-10 font-semibold rounded-lg bg-blue-500'
                            onClick={() => { dispatch(resetGame()) }}
                            >
                            Restart
                        </Button>
                            </Dialog.Close>

                        <Dialog.Close onClick={() => setOpen(false)}>
                        <Button
                            color='red'
                            variant='soft'
                            className={`w-28 h-10 font-semibold rounded-lg ${gameOver ? 'bg-gray-500' : 'bg-yellow-500'}`}
                            onClick={() => { dispatch(stopGame()) }}
                            >
                            End Game
                        </Button>
                            </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>


        </>
    )
}

export default GamePause