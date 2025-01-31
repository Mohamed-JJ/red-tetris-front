import React from 'react';

const page = () => {
  return (
    <main className="w-full h-full scrollable overflow-x-hidden">
      <div className="grid grid-cols-2 gap-x-44 gap-y-10 px-32 py-20">
        <div className="bg-blue-500 h-[500px] flex items-center justify-center">
          1
        </div>
        <div className="bg-green-500 h-[500px] flex items-center justify-center">
          2
        </div>
        <div className="bg-red-500 h-[500px] flex items-center justify-center">
          3
        </div>
        <div className="bg-yellow-500 h-[500px] flex items-center justify-center">
          4
        </div>
      </div>
    </main>
  );
};

export default page;
