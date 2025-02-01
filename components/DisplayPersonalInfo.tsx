import React from 'react';
import ViewInfoPlaceHolder from './ViewInfoPlaceHolder';

const DisplayPersonalInfo = () => {
  return (
    <div className="w-[708px] h-[450px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-5">
        Personal Information
      </p>
      <div className="flex flex-col gap-5">
        <ViewInfoPlaceHolder name="First name" value="some first name" />
        <ViewInfoPlaceHolder name="Last name" value="some last name" />
        <ViewInfoPlaceHolder name="User-name" value="some_username" />
        <ViewInfoPlaceHolder name="Email" value="some-email@some.domain.com" />
        <ViewInfoPlaceHolder name="password active" value="true" />
      </div>
    </div>
  );
};

export default DisplayPersonalInfo;
