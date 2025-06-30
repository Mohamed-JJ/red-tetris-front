'use client';
import React from 'react';
import ViewInfoPlaceHolder from './ViewInfoPlaceHolder';
import { User } from '@/lib/types';

const DisplayPersonalInfo = ({ user }: { user: User }) => {
  return (
    <div className="w-full h-[450px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-5">
        Personal Information
      </p>
      <div className="flex flex-col gap-5">
        <ViewInfoPlaceHolder name="First name" value={user.firstName!} />
        <ViewInfoPlaceHolder name="Last name" value={user.lastName!} />
        <ViewInfoPlaceHolder name="User-name" value={user.userName!} />
        <ViewInfoPlaceHolder name="Email" value={user.email!} />
        <ViewInfoPlaceHolder
          name="password active"
          value={String(user.passWordActive!)}
        />
      </div>
    </div>
  );
};

export default DisplayPersonalInfo;
