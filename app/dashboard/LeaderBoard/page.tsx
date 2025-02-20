'use client';

import PlayerInfo from '@/components/PlayerInfo';
import UsageCard from '@/components/UsageCard';
import { User } from '@/lib/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiTwotoneCrown } from 'react-icons/ai';
import { toast } from 'react-toastify';
import "@/utils"

const Page = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [player, setPlayer] = useState<any>();
  const notify = (args: string) => toast(args);
  const [leaderBoardList, setLeaderBoardList] = useState<User[]>([]);

  useEffect(() => {
    const fetchLeaderBoard = async () => {
      try {
        const res = await axios.get('user/leaderBoard');
        console.log(res.data);
        setLeaderBoardList(res.data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error: unknown) {
        notify("error in fetching leaderBoard")
      }
    };
    fetchLeaderBoard();
  }, []);
  return (
    <div className="h-full flex justify-center items-center gap-16 pb-24">
      <div className="w-[708px] h-[600px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
        <p className="font-jockey text-[30px] text-[#AAADFA] mt-2">
          leaderboard
        </p>
        <div className="flex flex-col max-h-[475px] gap-3 scrollable">
          {leaderBoardList.map((value, key) => {
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
                  {value.userName}
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
