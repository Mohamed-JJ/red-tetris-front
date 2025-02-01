import Image from 'next/image';
import React from 'react';
import { ThreeDGame } from './3dAssets/ThreeDGame';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

const UpcomingChanges = () => {
  return (
    <div className="bg-lighterblue h-[475px] flex items-center justify-center rounded-[16px] flex-col gap-2">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-9">
        Upcoming changes
      </p>
      <div className="h-[90%] flex w-full px-14 justify-start text-[#A7A7A7]">
        <div>
          <br />
          <p className="font-jockey text-[#AAADFA] text-[30px] w-[300px]">
            3D game play
          </p>
          <p>
            The next step is the integration of 3D gameplay. Enhancements
            include:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Interactivity of the Game Plane: We are focusing on improving the
              interactive elements.
            </li>
            <li>
              3D Effects for Game Pieces: Game pieces will be given a
              three-dimensional appearance.
            </li>
            <li>
              Realistic Backgrounds: We will incorporate immersive backgrounds
              to further enhance the overall realism of the game.
            </li>
          </ul>
          <p className="">
            The changes aim to elevate the player's experience and bring the
            game to life.
          </p>
        </div>

        <Canvas className="ml-16 mt-9">
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
          <ThreeDGame scale={[10, 10, 10]} />
        </Canvas>
      </div>
    </div>
  );
};

export default UpcomingChanges;
