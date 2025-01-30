'use client';

import React from 'react';
import { CascadedCube } from '@/components/3dAssets/cube1/cascaded_cube';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AiOutlineUser } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { CgGames } from 'react-icons/cg';
import { MdOutlineScoreboard } from 'react-icons/md';
import { CgMinimize } from 'react-icons/cg';

const NavBar = () => {
  return (
    <main className="w-[450px] h-[80px] bg-[#AAADFA] absolute bottom-10 right-1/2 translate-x-1/2 rounded-[50px]">
      <div className="w-full h-full relative flex justify-around gap-10">
        <div className=" flex items-center gap-10">
          <div className="size-[50px] rounded-full flex items-center justify-center bg-main ">
            <AiOutlineUser className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>{' '}
          <div className="size-[50px] rounded-full flex items-center justify-center bg-main ">
            <BsGear className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>
        </div>
        <div className=" flex items-center gap-10">
          <div className="size-[50px] rounded-full flex items-center justify-center bg-main ">
            <CgGames className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>
          <div className="size-[50px] rounded-full flex items-center justify-center bg-main ">
            <MdOutlineScoreboard className="size-[25px] text-[#AAADFA] hover:cursor-pointer hover:scale-125 duration-100" />
          </div>
        </div>
        <div className="size-[100px] -top-9 bg-[#AAADFA] absolute right-1/2 translate-x-1/2 rounded-full">
          <div className="size-[65px] bg-main rounded-full mx-auto translate-y-1/3 flex items-center justify-center">
            <div className="size-24 m-0 hover:cursor-pointer hover:scale-125 duration-100">
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
          onClick={() => console.log('minimize')}
        >
          <CgMinimize />
        </div>
      </div>
      <section></section>
    </main>
  );
};

export default NavBar;
