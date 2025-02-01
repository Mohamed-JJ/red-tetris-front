import React from 'react';

const ViewInfoPlaceHolder = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  return (
    <div className="flex gap-5 font-jockey text-white">
      <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">
        {name}
      </p>
      <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">
        {value}
      </p>
    </div>
  );
};

export default ViewInfoPlaceHolder;
