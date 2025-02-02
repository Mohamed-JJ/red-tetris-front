import React from 'react';

const ModifyInfoValue = ({
  name,
  toggleActiveness,
  isModActive,
  registerProps,
}: {
  name: string;
  toggleActiveness: (target: string) => void;
  isModActive: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerProps: any;
}) => {
  return (
    <div className="flex gap-5 font-jockey text-white">
      {isModActive ? (
        <input
          className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]"
          placeholder={name}
          {...registerProps}
        />
      ) : (
        <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">
          {name}
        </p>
      )}

      <div
        onClick={() => toggleActiveness(name)}
        className="hover:cursor-pointer transition-transform duration-100"
      >
        <p className="w-[125px] text-center my-auto py-3 bg-dark rounded-[10px]">
          {isModActive ? 'cancel' : 'modify'}
        </p>
      </div>
    </div>
  );
};

export default ModifyInfoValue;
