import React from "react";
import { ThreeDGame } from "./3dAssets/ThreeDGame";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Accordion, AccordionItem } from "@heroui/accordion";

const UpcomingChanges = () => {
  return (
    <div className="bg-lighterblue h-[475px] flex items-center justify-center rounded-[16px] flex-col gap-2">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-9">
        Upcoming changes
      </p>
      <div className="h-[90%] flex w-full px-14 justify-start text-[#A7A7A7] sm:text-[12px] lg:text-[16px]">
        <div>
          <br />
          <p className="font-jockey text-[#AAADFA] text-[30px] w-[300px]">
            3D game play
          </p>
          <p>
            The next step is the integration of 3D gameplay. Enhancements
            include:
          </p>
          <Accordion className="overflow-y-scroll max-h-36 scrollable mb-5 mt-4">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              subtitle="Press to expand"
              title={<p className="text-white">Interactivity</p>}
              
            >
              Interactivity of the Game Plane: We are focusing on improving the
              interactive elements.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 1"
              subtitle="Press to expand"
              title={<p className="text-white">3D</p>}
            >
              3D Effects for Game Pieces: Game pieces will be given a
              three-dimensional appearance.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 1"
              subtitle="Press to expand"
              title={<p className="text-white">Realism</p>}
            >
                            Realistic Backgrounds: We will incorporate immersive backgrounds
              to further enhance the overall realism of the game.
            </AccordionItem>
            {/* <li>
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
            </li> */}
          </Accordion>
          <p className="">
            The changes aim to elevate the player&apos;s experience and bring
            the game to life.
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
