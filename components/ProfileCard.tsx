'use client';

import React, { useEffect } from 'react';
import ViewInfoPlaceHolder from './ViewInfoPlaceHolder';
import {RootState} from '@/app/state/store';
import { useSelector } from 'react-redux';

const ProfileCard = () => {
  const user = {
    firstName: 'mohamed',
    lastName: 'sonbol',
    username: 'the first',
    email: 'mohamed.sonbol@elgato.com',
    passwordActive: true,
    multiplayerMatches: 50,
    singleplayerMatches: 23,
    winrate: 15,
  };
  const usere = useSelector((state: RootState) => state.user);
  console.log("the user is :", usere)
  useEffect(()=>{
  }, [])

  return (
    <div className="w-[708px] h-[550px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-5">
        Personal Information
      </p>
      <div className="flex flex-col gap-5 overflow-x-auto scrollable pb-5">
        <ViewInfoPlaceHolder name="First name" value={user.firstName} />
        <ViewInfoPlaceHolder name="Last name" value={user.lastName} />
        <ViewInfoPlaceHolder name="User-name" value={user.username} />
        <ViewInfoPlaceHolder name="Email" value={user.email} />
        <ViewInfoPlaceHolder
          name="password active"
          value={String(user.passwordActive)}
        />
        <ViewInfoPlaceHolder
          name="single matches"
          value={user.singleplayerMatches.toString()}
        />
        <ViewInfoPlaceHolder
          name="PvP matches"
          value={user.multiplayerMatches.toString()}
        />
        <ViewInfoPlaceHolder name="winrate" value={user.winrate.toString()} />
        <div className="hover:cursor-pointer transition-transform duration-100 w-full flex justify-end">
          <button
            className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px] text-red-500 justify-start text-[20px] font-jockey font-bold"
            onClick={() => console.log('loging out')}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
