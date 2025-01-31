import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <main className="w-full h-full scrollable overflow-x-hidden">
      <div className="grid grid-cols-2 gap-x-44 gap-y-10 px-32 py-20">
        <div className="bg-lighterblue h-[475px] flex flex-col gap-8 items-center justify-center rounded-[16px] ">
          <p className="font-jockey text-[#AAADFA] text-[30px] -translate-y-3">
            what is tetris and how did it come to be?
          </p>
          <div className="flex flex-row px-16 gap-16">
            <p className="text-[#A9A9A9] font-roboto text-[16px]">
              Tetris is a classic tile-matching puzzle video game where players
              manipulate falling tetrominoes—shapes made of four squares—to
              create complete horizontal lines. When a line is formed, it
              disappears, earning points for the player. <br />
              <br />
              Created in June 1984 by Russian programmer Alexey Pajitnov, Tetris
              quickly gained popularity across various platforms. Beyond
              entertainment, it enhances cognitive skills like spatial awareness
              and problem-solving. Its rhythmic gameplay also serves as a stress
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
        <div className="bg-lighterblue h-[475px] flex items-center justify-center rounded-[16px]">
          <p className="font-jockey text-[#AAADFA] text-[30px]">
            what is tetris and how did it come to be?
          </p>
        </div>
        <div className="bg-lighterblue h-[475px] flex items-center justify-center rounded-[16px]">
          <p className="font-jockey text-[#AAADFA] text-[30px]">
            what is tetris and how did it come to be?
          </p>
        </div>
        <div className="bg-lighterblue h-[475px] flex items-center justify-center rounded-[16px]">
          <p className="font-jockey text-[#AAADFA] text-[30px]">
            what is tetris and how did it come to be?
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
