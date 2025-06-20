'use client';

import { CascadedCube } from '@/components/3dAssets/cube1/cascaded_cube';
import GradientText from '@/components/GradientText';
import ThreeDHero from '@/components/ThreeDHero';
import { api, checkToken } from '@/utils';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/navigation';
import '@/utils';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();
  const handleRouting = async () => {
    if (checkToken()) {
      try {
        const data = Cookies.get('data');
        // console.log(data)
        if (!data) {
          router.push('/auth');
          console.log("here")
          return; // Add this return statement
        } else {
          const res = await api.get('/auth/canAccess')
          router.push('/dashboard');
        }
      } catch (error: any) {
        router.push('/auth');
      }
    } else {
      router.push('/auth');
    }
  };
  return (
    <main className="w-full h-full flex flex-row justify-between bg-main">
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
