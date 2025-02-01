'use client';

import Switcher from '@/components/Switcher';
import React, { useState } from 'react';
import { div } from 'three/tsl';

const Page = () => {
  const [isView, setIsView] = useState(false);
  const ToggleViewMod = (arg: boolean) => {
    setIsView(arg);
    console.log('called with argument', arg);
  };
  return (
    <div className="w-full h-full flex flex-col items-center border-2 pt-16 overflow-x-hidden gap-10">
      <div className="w-[608px] h-[70px] bg-lighterblue rounded-[14px] flex  gap-5 items-center justify-center">
        <Switcher
          textStyles="font-roboto text-[18px] font-semibold text-[#AAADFA] leading-5 hover:scale-105 duration-300  z-10"
          placeHolders={['view personal info', 'modify personal info']}
          Child1Styles={`w-[190px] h-10 rounded-[14px] flex justify-center items-center hover:cursor-pointer`}
          Child2Styles={`ml-3 w-[190px] my-5 h-10 rounded-[14px] flex justify-center items-center hover:cursor-pointer`}
          ContainerStyles="w-[403px] h-12 bg-main rounded-[14px] flex items-center pl-1"
          onClick={ToggleViewMod}
          customWidth="w-[190px]"
        />
      </div>
      <div className="w-[708px] h-[450px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
        <p className="font-jockey text-[#AAADFA] text-[30px] mt-5">
          Personal Information
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 font-jockey text-white">
            <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">First name</p>
            <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">some first name</p>
          </div>
          <div className="flex gap-5 font-jockey text-white">
            <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">Last name</p>
            <p className="w-[400px] py-3 text-center my-auto  bg-dark rounded-[10px]">some last name</p>
          </div>
          <div className="flex gap-5 font-jockey text-white">
            <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">User-name</p>
            <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">some username</p>
          </div>
          <div className="flex gap-5 font-jockey text-white">
            <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">Email</p>
            <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">some email</p>
          </div>
          <div className="flex gap-5 font-jockey text-white">
            <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">password active</p>
            <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">true/false</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
