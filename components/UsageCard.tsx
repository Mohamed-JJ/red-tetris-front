import React from 'react';

interface UsageStep {
  id: string;
  text: string;
}

const USAGE_STEPS: UsageStep[] = [
  { id: 'select-player', text: 'click on a player on the leader board' },
  { id: 'view-pvp', text: 'view how many matches they played in PvP' },
  { id: 'view-single', text: 'view how many matches they played in single mode' },
  { id: 'view-winrate', text: 'view their win rate' },
];

const UsageCard: React.FC = () => {
  return (
    <section 
      className="w-full max-w-[708px] h-[600px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6 p-6"
      aria-labelledby="usage-title"
    >
      <header>
        <h2 
          id="usage-title"
          className="font-jockey text-[30px] text-[#AAADFA] mt-2 capitalize"
        >
          how to use
        </h2>
      </header>
      
      <main className="flex-1 flex items-center justify-center w-full">
        <ol 
          className="list-disc font-jockey text-[30px] text-white space-y-4 max-w-md"
          role="list"
        >
          {USAGE_STEPS.map((step) => (
            <li key={step.id} className="capitalize leading-relaxed">
              {step.text}
            </li>
          ))}
        </ol>
      </main>
    </section>
  );
};

export default UsageCard;