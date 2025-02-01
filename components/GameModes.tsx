import Image from 'next/image';
import React from 'react';

const GameModes = () => {
  return (
    <div className="bg-lighterblue h-[475px] flex items-center justify-between rounded-[16px] flex-col">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-5">Game mode</p>
      <div className="flex mb-10 gap-28">
        <Image
          className=""
          src="/single player.png"
          width={240}
          height={300}
          alt="single player description"
        />
        <Image
          className=""
          src="/multiplayer.png"
          width={240}
          height={300}
          alt="multiplayer description"
        />
      </div>
    </div>
  );
};

export default GameModes;
