'use client';

import PlayerInfo from '@/components/PlayerInfo';
import UsageCard from '@/components/UsageCard';
import { User } from '@/lib/types';
import React, { useState } from 'react';
import { AiTwotoneCrown } from 'react-icons/ai';

const Page = () => {
  const [player, setPlayer] = useState<User | null>(null);
  const listOfPlayers = [
    {
        username: 'player1',
        winrate: 55,
        multiplayerMatches: 30,
        singleplayerMatches: 25,
        firstName: 'Alice',
        lastName: 'Smith',
    },
    {
        username: 'player2',
        winrate: 60,
        multiplayerMatches: 20,
        singleplayerMatches: 35,
        firstName: 'Bob',
        lastName: 'Johnson',
    },
    {
        username: 'player3',
        winrate: 45,
        multiplayerMatches: 15,
        singleplayerMatches: 40,
        firstName: 'Charlie',
        lastName: 'Williams',
    },
    {
        username: 'player4',
        winrate: 70,
        multiplayerMatches: 25,
        singleplayerMatches: 30,
        firstName: 'Diana',
        lastName: 'Jones',
    },
    {
        username: 'player5',
        winrate: 65,
        multiplayerMatches: 18,
        singleplayerMatches: 22,
        firstName: 'Ethan',
        lastName: 'Brown',
    },
    {
        username: 'player6',
        winrate: 50,
        multiplayerMatches: 20,
        singleplayerMatches: 30,
        firstName: 'Fiona',
        lastName: 'Davis',
    },
    {
        username: 'player7',
        winrate: 40,
        multiplayerMatches: 10,
        singleplayerMatches: 50,
        firstName: 'George',
        lastName: 'Miller',
    },
    {
        username: 'player8',
        winrate: 75,
        multiplayerMatches: 35,
        singleplayerMatches: 15,
        firstName: 'Hannah',
        lastName: 'Wilson',
    },
    {
        username: 'player9',
        winrate: 80,
        multiplayerMatches: 40,
        singleplayerMatches: 20,
        firstName: 'Ian',
        lastName: 'Moore',
    },
    {
        username: 'player10',
        winrate: 55,
        multiplayerMatches: 28,
        singleplayerMatches: 32,
        firstName: 'Julia',
        lastName: 'Taylor',
    },
];
  return (
    <div className="h-full flex justify-center items-center gap-16 pb-24">
      <div className="w-[708px] h-[600px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
        <p className="font-jockey text-[30px] text-[#AAADFA] mt-2">
          leaderboard
        </p>
        <div className="flex flex-col overflow-x-auto max-h-[475px] gap-3 scrollable">
          {listOfPlayers.map((value, key) => {
            return (
              <div key={key} className="flex gap-5 font-jockey text-white">
                {key === 0 ? (
                  <div className="size-[40px] bg-dark items-center justify-center flex rounded-full">
                    <AiTwotoneCrown className="size-[20px]  bg-dark" />
                  </div>
                ) : (
                  <p className="size-[40px] flex justify-center items-center text-center my-auto bg-dark rounded-full">
                    {key + 1}
                  </p>
                )}
                <p
                  className="flex justify-center items-center w-[400px] h-[40px] text-center my-auto bg-dark rounded-full hover:scale-105 duration-100"
                  onClick={() => setPlayer(value)}
                >
                  {value.username}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {player ? <PlayerInfo player={player} /> : <UsageCard />}
    </div>
  );
};

export default Page;
