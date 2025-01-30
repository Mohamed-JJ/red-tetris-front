import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { CascadedCube } from '../3dAssets/cube1/cascaded_cube';

const MinimizedNavBar = () => {
  return (
    <div className="size-[100px] -top-9 bg-[#AAADFA] absolute flex items-center justify-center right-1/2 translate-x-1/2 rounded-full">
      <div className="size-[65px] bg-main rounded-full flex items-center justify-center">
        <div className="size-24 m-0 hover:cursor-pointer hover:scale-125 duration-100">
          <Canvas>
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <CascadedCube />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default MinimizedNavBar;
