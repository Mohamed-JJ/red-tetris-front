import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createMatrix } from '@/utils/createMatrix';
import { getRandomTetrimino, TetriminoType } from '@/utils/tetriminos';
import { checkCollision } from '@/utils/checkCollision';
import { mergePiece } from '@/utils/mergePiece';
import { clearFullLines } from '@/utils/clearFullLines';
import { rotate } from '@/utils/rotate';

type GameState = {
  board: number[][];
  currentPiece: number[][];
  position: { x: number; y: number };
  isRunning: boolean;
  isPaused?: boolean;
  isGameOver: boolean;
  score?: number;
  level?: number;
  linesCleared?: number;
};

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const inistialPiece = getRandomTetrimino();

const initialState: GameState = {
  board: createMatrix(BOARD_WIDTH, BOARD_HEIGHT),
  currentPiece: inistialPiece.shape,
  position: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 },
  isRunning: true,
  isGameOver: false,
  score: 0,
  level: 0,
  linesCleared: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    tick(state) {
        console.log("tick")
        const nextPos = { x: state.position.x, y: state.position.y + 1 }

        if (!checkCollision(state.board, state.currentPiece, nextPos)) {
            state.position = nextPos
            return
        }

        const merged = mergePiece(state.board, state.currentPiece, state.position)
        const { newBoard, clearedLines } = clearFullLines(merged)
        state.board = newBoard
        state.linesCleared += clearedLines
        state.score += clearedLines * 100

        const nextPiece = getRandomTetrimino()
        const nextPosition = { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 }

        if (checkCollision(state.board, nextPiece.shape, nextPosition)) {
            state.isGameOver = true
            state.isRunning = false
            return
        }
        state.currentPiece = nextPiece.shape
        state.position = nextPosition
    },
    moveLeft(state) {
        const nextPos = {x: state.position.x - 1, y: state.position.y}
        if (!checkCollision(state.board, state.currentPiece, nextPos)) {
            state.position = nextPos
        }
    },
    moveRight(state) {
        const nextPos = {x: state.position.x + 1, y: state.position.y}
        if (!checkCollision(state.board, state.currentPiece, nextPos)) {
            state.position = nextPos
        }
    },
    rotatePiece(state){
        const rotated = rotate(state.currentPiece)
        if (!checkCollision(state.board, rotated, state.position)) {
            state.currentPiece = rotated
        }
    },
    softDrop(state) {
        const nextPos = { x: state.position.x, y: state.position.y + 3 }
        if (!checkCollision(state.board, state.currentPiece, nextPos)) {
          state.position = nextPos
        }
      },
    startGame: (state) => {
        state.isRunning = true;
    },
    pauseGame: (state) => {
        state.isRunning = false;
        // state.isPaused = !state.isPaused;
    },
    unpauseGame: (state) => {
        state.isRunning = true;
        state.isPaused = false;
    },
    stopGame: (state) => {
        state.isRunning = false;
        state.isGameOver = true;
    },
    resetGame: (state) => {
        state.board = createMatrix(BOARD_WIDTH, BOARD_HEIGHT);
        state.currentPiece = inistialPiece.shape;
        state.position = { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 };
        state.isRunning = true;
        state.isGameOver = false;
        state.score = 0;
        state.level = 0;
        state.linesCleared = 0;
    },
  },
});

export const { tick, startGame, pauseGame, unpauseGame, stopGame, moveLeft, moveRight, rotatePiece, softDrop ,resetGame } =
  gameSlice.actions;
export default gameSlice.reducer;
