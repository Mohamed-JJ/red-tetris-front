import React from 'react';

const UsageCard = () => {
  return (
    <div className="w-[708px] h-[600px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
      <p className="font-jockey text-[30px] text-[#AAADFA] mt-2">how to use</p>
      <div>
        <ul className="list-disc font-jockey text-[30px] text-white pt-28">
          <li>click on a player on the leader board</li>
          <li>view how many matches they played in PvP</li>
          <li>view how many matches they played in single mode</li>
          <li>view their win rate</li>
        </ul>
      </div>
    </div>
  );
};

export default UsageCard;
