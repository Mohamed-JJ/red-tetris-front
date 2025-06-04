'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { CascadedCube } from './3dAssets/cube1/cascaded_cube';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const dimensions = {
    sm: 'size-16',
    md: 'size-24',
    lg: 'size-32'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`${dimensions[size]} animate-pulse`}>
        <Canvas>
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={5}
          />
          <CascadedCube />
        </Canvas>
      </div>
      {text && (
        <p className={`mt-4 text-[#AAADFA] font-bold ${textSizes[size]}`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;