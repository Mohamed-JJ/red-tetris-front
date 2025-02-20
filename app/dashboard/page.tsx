'use client';

import React from 'react';
import WhatSection from '@/components/WhatSection';
import GamePieces from '@/components/GamePieces';
import UpcomingChanges from '@/components/UpcomingChanges';
import GameModes from '@/components/GameModes';


// this page needs to be responsive for all
const Page = () => {
  // add a state variable that is going to change the game piece depending on its index in

  return (
    <main className="w-full h-full scrollable overflow-x-hidden">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 px-4 md:px-20 lg:px-32 py-10 md:py-20">
      {/* <div className="  grid grid-cols-2 gap-x-44 gap-y-10 px-32 py-20"> */}
        <WhatSection />
        <GamePieces />
        <UpcomingChanges />
        <GameModes/>
      </div>
    </main>
  );
};

export default Page;
