import React, { FormEvent, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Si42 } from 'react-icons/si';
export const SignUpForm = () => {
  const [showPassWord, setShowPassword] = useState<boolean>(false);

  const ToggleShowPassWord = () => {
    setShowPassword(!showPassWord);
  };
  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={HandleSubmit}
        className="flex flex-col gap-3"
      >
        <div className="w-full flex gap-5">
          <input
            type="text"
            className="pl-3 bg-authInputBg text-white w-[199px] h-[62px] border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor text-[18px] font-bold"
            placeholder="first name"
            required
          />
          <input
            type="text"
            className="pl-3 bg-authInputBg text-white w-[199px] h-[62px] border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor text-[18px] font-bold"
            placeholder="last name"
            required
          />
        </div>
        <input
          type="text"
          className="pl-3 bg-authInputBg text-white h-[62px] border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor text-[18px] font-bold"
          placeholder="username"
          required
        />
        <input
          type="email"
          className="pl-3 bg-authInputBg text-white h-[62px] border-2 border-authInputBorder rounded-[14px] text-[18px] placeholder:text-authPlaceHolderColor font-bold"
          placeholder="emails"
          required
        />
        <div className="relative">
          <input
            type={!showPassWord ? 'password' : 'text'}
            className="pl-3 bg-authInputBg w-full h-[62px] text-white border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor font-bold text-[18px] pr-[50px]" // Add padding-right to make space for the icon
            placeholder="password"
            required
          />
          {!showPassWord ? (
            <FaEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] cursor-pointer text-authPlaceHolderColor"
              onClick={ToggleShowPassWord}
            />
          ) : (
            <FaEyeSlash
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] cursor-pointer text-authPlaceHolderColor"
              onClick={ToggleShowPassWord}
            />
          )}
        </div>
        <button
          type="submit"
          className="w-[224px] h-[52px] rounded-[14px] bg-main mx-auto"
        >
          <p className="text-[#AAADFA]">sign up</p>
        </button>
      </form>
      <div className="h-[2px] w-[507px] mx-auto bg-[#A59999]"></div>
      <div className="w-[420px] flex flex-col gap-7">
        <button className="h-[54px]  bg-white rounded-[10px]">
          <div className="flex justify-center items-center gap-3">
            <FcGoogle className="h-[30px] w-[30px]" />
            <p className="text-authPlaceHolderColor font-bold text-[18px]">
              sign up with google
            </p>
          </div>
        </button>
        <button className="h-[54px]  bg-[#201E1E] rounded-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Si42 className="h-[30px] w-[30px] text-white" />
            <p className="text-white font-bold text-[18px]">sign up with 42</p>
          </div>
        </button>
      </div>
    </>
  );
};
