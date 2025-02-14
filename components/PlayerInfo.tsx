import React from 'react';
import ViewInfoPlaceHolder from './ViewInfoPlaceHolder';
import { User } from '@/lib/types';

const PlayerInfo = ({ player }: { player: User }) => {
  return (
    <div className="w-[708px] h-[600px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
      <p className="font-jockey text-[30px] text-[#AAADFA] mt-2">how to use</p>
      <ViewInfoPlaceHolder
        name="name"
        value={`${player.firstName} ${player.lastName}`}
      />
      <ViewInfoPlaceHolder name="username" value={`${player.userName}`} />
      <ViewInfoPlaceHolder
        name="matches played"
        value={`${player.multiplayerMatches + player.singleplayerMatches}`}
      />
      <ViewInfoPlaceHolder
        name="single player"
        value={`${player.singleplayerMatches}`}
      />
      <ViewInfoPlaceHolder
        name="multi player"
        value={`${player.multiplayerMatches}`}
      />
      <ViewInfoPlaceHolder name="win rate" value={`${player.winrate}`} />
    </div>
  );
};

export default PlayerInfo;
