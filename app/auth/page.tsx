'use client';
import { SignUpForm } from '@/components/forms';
import Switcher from '@/components/Switcher';
import ThreeDHero from '@/components/ThreeDHero';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const ToggleAuth = (arg: boolean) => {
    setIsLogin(arg);
    console.log('called with argument', arg);
  };

  return (
    <main className="w-full h-full flex flex-row">
      <section className="w-1/2 h-full flex justify-center items-center">
        <div className="w-[608px] h-[666px] bg-lighterblue rounded-[14px] flex flex-col gap-5 items-center py-6">
          <Switcher
            textStyles="font-roboto text-[18px] font-semibold text-[#AAADFA] leading-5 hover:scale-105 duration-300  z-10"
            placeHolders={['sign in', 'login']}
            Child1Styles={`w-[140px] h-10 rounded-[14px] flex justify-center items-center hover:cursor-pointer`}
            Child2Styles={`ml-3 w-[140px] h-10 rounded-[14px] flex justify-center items-center hover:cursor-pointer`}
            ContainerStyles="w-[300px] h-12 bg-main rounded-[14px] flex items-center pl-1"
            onClick={ToggleAuth}
          />
          <SignUpForm />
        </div>
      </section>
      <ThreeDHero />
    </main>
  );
}
