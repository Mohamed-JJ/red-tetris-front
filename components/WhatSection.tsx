import Image from 'next/image';
import React from 'react';

const WhatSection = () => {
  return (
    <div className="bg-lighterblue h-[475px] flex flex-col gap-8 items-center justify-center rounded-[16px] ">
      <p className="font-jockey text-[#AAADFA] text-[30px] -translate-y-3">
        what is tetris and how did it come to be?
      </p>
      <div className="flex flex-row px-16 gap-16">
        <p className="text-[#A9A9A9] font-roboto text-[16px]">
          Tetris is a classic tile-matching puzzle video game where players
          manipulate falling tetrominoes—shapes made of four squares—to create
          complete horizontal lines. When a line is formed, it disappears,
          earning points for the player. <br />
          <br />
          Created in June 1984 by Russian programmer Alexey Pajitnov, Tetris
          quickly gained popularity across various platforms. Beyond
          entertainment, it enhances cognitive skills like spatial awareness and
          problem-solving. Its rhythmic gameplay also serves as a stress
          reliever, making it a timeless favorite in gaming culture.
        </p>
        <Image
          src="/tetris_game_picture.png"
          alt="tetris picture"
          width={200}
          height={300}
        />
      </div>
    </div>
  );
};

export default WhatSection;
