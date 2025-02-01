import Image from 'next/image';
import React, { useState } from 'react';
import {
  BiSolidLeftArrowCircle,
  BiSolidRightArrowCircle,
} from 'react-icons/bi';
const getGamePiecesNames = () => {
  const gamePieces = [];

  for (let i = 1; i <= 15; i++) {
    gamePieces.push(`/red-tetrix/Group ${i}.png`);
  }
  return gamePieces;
};
const GamePieces = () => {
  const gamePieces = getGamePiecesNames();

  const [gamePiece, setGamePiece] = useState<number>(0);

  const increaseGamePieceIndex = () => {
    setGamePiece((prev) => (prev + 1) % gamePieces.length);
  };

  const decreaseGamePieceIndex = () => {
    setGamePiece((prev) => (prev - 1 + gamePieces.length) % gamePieces.length);
  };
  return (
    <div className="bg-lighterblue h-[475px] flex items-center justify-center rounded-[16px] flex-col gap-5 relative">
      <p className="font-jockey text-[#AAADFA] text-[30px] -translate-y-[75px] absolute top-[100px]">
        Game pieces
      </p>
      <div className="w-full flex justify-around items-center max-h-[225px]">
        <div
          className="size-[50px] bg-[#AAADFA] flex items-center justify-center rounded-full hover:cursor-pointer"
          onClick={decreaseGamePieceIndex}
        >
          <BiSolidLeftArrowCircle className="text-[#666666] size-[30px]" />
        </div>
        <div className="max-w-[150px] max-h-[225px] flex">
          <Image
            className="w-full h-full object-cover"
            src={gamePieces[gamePiece]}
            alt="game piece"
            width={150}
            height={200}
          />
        </div>
        <div
          className="size-[50px] bg-[#AAADFA] flex items-center justify-center rounded-full hover:cursor-pointer"
          onClick={increaseGamePieceIndex}
        >
          <BiSolidRightArrowCircle className="text-[#666666] size-[30px] " />
        </div>
      </div>
    </div>
  );
};

export default GamePieces;
