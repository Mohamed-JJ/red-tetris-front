import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createMatrix } from "@/utils/createMatrix";
import { getRandomTetrimino, TetriminoType } from "@/utils/tetriminos";
import { checkCollision } from "@/utils/checkCollision";
import { mergePiece } from "@/utils/mergePiece";
import { clearFullLines } from "@/utils/clearFullLines";
import { rotate } from "@/utils/rotate";

type GameState = {
  board: number[][];
  currentPiece: number[][];
  position: { x: number; y: number };
  isRunning: boolean;
  isPaused?: boolean;
  isGameOver: boolean;
  score: number;
  level: number;
  linesCleared: number;
  nextPieceUI: number[][];
};

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const inistialPiece = getRandomTetrimino();

// const initialState: GameState = {
//   board: createMatrix(BOARD_WIDTH, BOARD_HEIGHT),
//   currentPiece: inistialPiece.shape,
//   position: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 },
//   isRunning: true,
//   isGameOver: false,
//   score: 0,
//   level: 0,
//   linesCleared: 0,
// };

const initialState: GameState = {
  board: createMatrix(BOARD_WIDTH, BOARD_HEIGHT),
  currentPiece: [],
  nextPieceUI: [],
  position: { x: 0, y: 0 },
  isRunning: false,
  isGameOver: false,
  score: 0,
  level: 0,
  linesCleared: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    tick(state) {
      const nextPos = { x: state.position.x, y: state.position.y + 1 };

      if (!checkCollision(state.board, state.currentPiece, nextPos)) {
        state.position = nextPos;
        return;
      }

      // Lock piece into board
      const merged = mergePiece(
        state.board,
        state.currentPiece,
        state.position
      );
      const { newBoard, clearedLines } = clearFullLines(merged);
      state.board = newBoard;
      state.linesCleared += clearedLines;
      state.score += clearedLines * 100;

      // Use the piece we previewed earlier
      state.currentPiece = state.nextPieceUI;
      const nextPosInit = { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 };
      state.position = nextPosInit;

      // Generate next preview piece
      const nextPiece = getRandomTetrimino();
      state.nextPieceUI = nextPiece.shape;

      // Game over check
      if (checkCollision(state.board, state.currentPiece, state.position)) {
        state.isGameOver = true;
        state.isRunning = false;
      }
    },

    moveLeft(state) {
      const nextPos = { x: state.position.x - 1, y: state.position.y };
      if (!checkCollision(state.board, state.currentPiece, nextPos)) {
        state.position = nextPos;
      }
    },
    moveRight(state) {
      const nextPos = { x: state.position.x + 1, y: state.position.y };
      if (!checkCollision(state.board, state.currentPiece, nextPos)) {
        state.position = nextPos;
      }
    },
    rotatePiece(state) {
      const rotated = rotate(state.currentPiece);
      if (!checkCollision(state.board, rotated, state.position)) {
        state.currentPiece = rotated;
      }
    },
    softDrop(state) {
      const nextPos = { x: state.position.x, y: state.position.y + 3 };
      if (!checkCollision(state.board, state.currentPiece, nextPos)) {
        state.position = nextPos;
      }
    },
    startGame: (state) => {
      state.isRunning = true;
      state.isPaused = false;
      state.isGameOver = false;
      state.board = createMatrix(BOARD_WIDTH, BOARD_HEIGHT);
      const piece = getRandomTetrimino();
      const next = getRandomTetrimino();
      state.currentPiece = piece.shape;
      state.nextPieceUI = next.shape;
      state.position = { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 };
      state.score = 0;
      state.level = 0;
      state.linesCleared = 0;
    },
    pauseGame: (state) => {
      state.isRunning = false;
      state.isPaused = true;
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
      const piece = getRandomTetrimino();
      state.currentPiece = piece.shape;
      state.position = { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 };
      state.isRunning = true;
      state.isGameOver = false;
      state.score = 0;
      state.level = 0;
      state.linesCleared = 0;
    },
    hardDrop(state) {
      let y = state.position.y;
      const x = state.position.x;

      while (
        !checkCollision(state.board, state.currentPiece, { x, y: y + 1 })
      ) {
        y++;
      }

      state.position.y = y;

      const merged = mergePiece(
        state.board,
        state.currentPiece,
        state.position
      );
      const { newBoard, clearedLines } = clearFullLines(merged);
      state.board = newBoard;
      state.linesCleared += clearedLines;
      state.score += clearedLines * 100;

      state.currentPiece = state.nextPieceUI;
      state.position = { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 };

      const nextPiece = getRandomTetrimino();
      state.nextPieceUI = nextPiece.shape;

      if (checkCollision(state.board, state.currentPiece, state.position)) {
        state.isGameOver = true;
        state.isRunning = false;
      }
    },
  },
});

export const {
  tick,
  startGame,
  pauseGame,
  unpauseGame,
  stopGame,
  moveLeft,
  moveRight,
  rotatePiece,
  softDrop,
  resetGame,
  hardDrop,
} = gameSlice.actions;
export default gameSlice.reducer;
