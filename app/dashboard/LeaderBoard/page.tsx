'use client';

import React, { useState } from 'react';
import { AiTwotoneCrown } from 'react-icons/ai';

const Page = () => {
  const [player, setPlayer] = useState(null);
  const listOfPlayers = [
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
    {
      username: 'something',
      winrate: 50,
      multiplayerMatches: 23,
      singleplayerMatches: 30,
      firstName: 'hmad',
      lastName: 'l3afta',
    },
  ];
  return (
    <div className="h-full flex justify-center items-center gap-16">
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
                <p className="flex justify-center items-center w-[400px] h-[40px] text-center my-auto bg-dark rounded-full hover:scale-105 duration-100" onClick={()=>setPlayer(value)}>
                  {value.username}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[708px] h-[600px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
        <p className="font-jockey text-[30px] text-[#AAADFA] mt-2">
          how to use
        </p>
        <div>
          <ul className="list-disc font-jockey text-[30px] text-white pt-28">
            <li>click on a player on the leader board</li>
            <li>view how many matches they played in PvP</li>
            <li>view how many matches they played in single mode</li>
            <li>view their win rate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
