'use client';

import DisplayPersonalInfo from '@/components/DisplayPersonalInfo';
import ModifyPersonalInfo from '@/components/ModifyPersonalInfo';
import Switcher from '@/components/Switcher';
import { User } from '@/lib/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '@/utils';
import ReactLoading from 'react-loading';
import {RootState} from '@/app/state/store';
import { useSelector } from 'react-redux';

const Page = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isMod, setIsMod] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const ToggleViewMod = (arg: boolean) => {
    setIsMod(arg);
  };
  const notify = (message: string) => toast(message);

  const usere = useSelector((state: RootState) => state.user);
  console.log("the user is in settings:", usere)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // fetch the user from the backend
        const response = await axios.get(`user/${1}`);
        console.log(response.data); // Access the data from the response
        setUser(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      } catch (error: any) {
        notify('Error in fetching the user');
      }
    };
    fetchUser(); // Call the function to fetch user data
  }, []);

  useEffect(() => {
    if (!isClient) setIsClient(true);
  }, [isClient]);
  if (!isClient) return null;
  if (!user) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <ReactLoading color="#fff" type="spin" height={100} width={100} />;
      </div>
    );
  }
  return (
    <div className="w-full h-full flex flex-col items-center pt-16 overflow-x-hidden gap-10">
      <div className="w-[608px] h-[70px] bg-lighterblue rounded-[14px] flex  gap-5 items-center justify-center">
        <Switcher
          textStyles="font-roboto text-[18px] font-semibold text-[#AAADFA] leading-5 hover:scale-105 duration-300  z-10"
          placeHolders={['view personal info', 'modify personal info']}
          Child1Styles={`w-[190px] h-10 rounded-[14px] flex justify-center items-center hover:cursor-pointer`}
          Child2Styles={`ml-3 w-[190px] my-5 h-10 rounded-[14px] flex justify-center items-center hover:cursor-pointer`}
          ContainerStyles="w-[403px] h-12 bg-main rounded-[14px] flex items-center pl-1"
          onClick={ToggleViewMod}
          customWidth="w-[190px]"
        />
      </div>
      {!isMod ? <DisplayPersonalInfo user={user!} /> : <ModifyPersonalInfo />}
    </div>
  );
};

export default Page;
