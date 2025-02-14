'use client';

import { CascadedCube } from '@/components/3dAssets/cube1/cascaded_cube';
import GradientText from '@/components/GradientText';
import ThreeDHero from '@/components/ThreeDHero';
import { checkToken } from '@/utils';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleRouting = () => {
    if (checkToken()) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const tokenCheck = axios.get('/passport-auth/canAccess');
        router.push('/dashboard');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
      } catch (error: any) {
        router.push('/auth');
      }
    } else {
      router.push('/auth');
    }
  };
  return (
    <main className="w-full h-full flex flex-row justify-between">
      <section className="ml-44 flex h-full flex-col justify-center gap-80">
        <div>
          <GradientText
            colors={['#BA7ECF', '#F19ED0', '#948DF2', '#B9C2FF', '#FBCEA5']}
            animationSpeed={3}
            showBorder={false}
            className="text-[110px] font-bold font-sans"
          >
            Red-Tetrix
          </GradientText>
          <h2 className="text-[42px] text-[#AAADFA]">
            Play - Connect - Have Fun
          </h2>
        </div>
        <button
          className="flex text-left text-[30px] font-bold text-white items-center hover:cursor-pointer hover:underline hover:scale-105 duration-300"
          onClick={handleRouting}
        >
          <div className="size-24 m-0 ">
            <Canvas>
              <Environment preset="city" />
              <OrbitControls enableZoom={false} />
              <CascadedCube />
            </Canvas>
          </div>
          <p>Play now</p>
        </button>
      </section>
      <ThreeDHero />
    </main>
  );
}
