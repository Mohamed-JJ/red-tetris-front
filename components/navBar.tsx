'use client';

import React from 'react';
import { CascadedCube } from '@/components/3dAssets/cube1/cascaded_cube';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
const NavBar = () => {
  
  return (
    <main className="w-[500px] h-[80px] bg-[#AAADFA] absolute bottom-10 right-1/2 translate-x-1/2 rounded-[50px]">
      <div className="w-full h-full relative flex justify-between">
        <div className='border-white border-2'>
          
        </div>
        <div className='border-white border-2'></div>
        <div className="size-[100px] -top-9 bg-[#AAADFA] absolute right-1/2 translate-x-1/2 rounded-full">
          <div className="size-[65px] bg-main rounded-full mx-auto translate-y-1/3 flex items-center justify-center">
            <div className="size-24 m-0 ">
              <Canvas>
                <Environment preset="city" />
                <OrbitControls enableZoom={false} />
                <CascadedCube />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      <section></section>
    </main>
  );
};

export default NavBar;
