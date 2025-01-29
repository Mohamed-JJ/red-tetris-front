"use client";

import { CascadedCube } from "@/components/3dAssets/cube1/cascaded_cube";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-full h-full">
      {" "}
      <Canvas>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
        <CascadedCube />
      </Canvas>
    </div>
  );
}
