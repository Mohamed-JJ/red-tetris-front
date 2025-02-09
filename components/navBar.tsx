'use client';

import React, { useState } from 'react';
import { CascadedCube } from '@/components/3dAssets/cube1/cascaded_cube';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { CgGames } from 'react-icons/cg';
import { MdOutlineScoreboard } from 'react-icons/md';
import { CgMinimize } from 'react-icons/cg';
import MinimizedNavBar from './SignIn/minimizedNavBar';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const router = useRouter();

  const toggleIsMinimized = () => {
    setIsMinimized(!isMinimized);
  };
  console.log('here in the navbar');

  if (isMinimized) {
    return (
      <div
        className="absolute bottom-24 right-1/2 translate-x-1/2"
        onClick={toggleIsMinimized}
      >
        <MinimizedNavBar />;
      </div>
    );
  }
  return (
    <main className="w-[450px] h-[80px] bg-[#AAADFA] absolute bottom-10 right-1/2 translate-x-1/2 rounded-[50px] z-10">
      <div className="w-full h-full relative flex justify-around gap-10">
        <div className=" flex items-center gap-10">
          <div
            className="size-[50px] rounded-full flex items-center justify-center bg-main "
            onClick={() => router.push('/dashboard/Profile')}
          >
            <AiOutlineUser className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>{' '}
          <div
            className="size-[50px] rounded-full flex items-center justify-center bg-main "
            onClick={() => router.push('/dashboard/Settings')}
          >
            <BsGear className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>
        </div>
        <div className=" flex items-center gap-10">
          <div
            className="size-[50px] rounded-full flex items-center justify-center bg-main "
            onClick={() => router.push('/dashboard/Game')}
          >
            <CgGames className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>
          <div
            className="size-[50px] rounded-full flex items-center justify-center bg-main "
            onClick={() => router.push('/dashboard/LeaderBoard')}
          >
            <MdOutlineScoreboard className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>
        </div>
        <div className="size-[100px] -top-9 bg-[#AAADFA] absolute flex items-center justify-center right-1/2 translate-x-1/2 rounded-full">
          <div className="size-[65px] bg-main rounded-full  flex items-center justify-center">
            <div
              className="size-24  hover:cursor-pointer hover:scale-105 duration-100"
              onClick={() => router.push('/dashboard')}
            >
              <Canvas>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <CascadedCube />
              </Canvas>
            </div>
          </div>
        </div>
        <div
          className="bottom-1 bg-[#AAADFA] absolute right-1/2 translate-x-1/2 rounded-full hover:cursor-pointer hover:scale-125 duration-100"
          onClick={toggleIsMinimized}
        >
          <CgMinimize />
        </div>
      </div>
    </main>
  );
};

export default NavBar;
