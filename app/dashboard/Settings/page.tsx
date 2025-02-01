'use client';

import DisplayPersonalInfo from '@/components/DisplayPersonalInfo';
import Switcher from '@/components/Switcher';
import React, { useState } from 'react';

const Page = () => {
  const [isMod, setIsMod] = useState(false);
  const ToggleViewMod = (arg: boolean) => {
    setIsMod(arg);
    console.log('called with argument', arg);
  };
  return (
    <div className="w-full h-full flex flex-col items-center pt-16 overflow-x-hidden gap-10">
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
      {!isMod ? (
        <DisplayPersonalInfo />
      ) : (
        <div className="text-white">nothing</div>
      )}
    </div>
  );
};

export default Page;
