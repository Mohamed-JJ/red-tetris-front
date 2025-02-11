'use client';

import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Si42 } from 'react-icons/si';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginInput, SignUpInput } from '@/lib/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootState } from '@/app/state/store';
import { setUser } from '@/app/state/user/userSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '@/utils';
import { setToken } from '@/utils';
import { toast } from 'react-toastify';

export const SignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpInput>();
  const [showPassWord, setShowPassword] = useState<boolean>(false);

  const ToggleShowPassWord = () => {
    setShowPassword(!showPassWord);
  };
  const onSubmit: SubmitHandler<SignUpInput> = (data) =>
    console.log('the submitted data', data);
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <div className="w-full flex gap-5">
          <input
            type="text"
            className="pl-3 bg-authInputBg text-white w-[199px] h-[62px] border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor text-[18px] font-bold"
            placeholder="first name"
            {...register('firstName', { required: true })}
          />
          <input
            type="text"
            className="pl-3 bg-authInputBg text-white w-[199px] h-[62px] border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor text-[18px] font-bold"
            placeholder="last name"
            {...register('lastName', { required: true })}
          />
        </div>
        <input
          type="text"
          className="pl-3 bg-authInputBg text-white h-[62px] border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor text-[18px] font-bold"
          placeholder="username"
          {...register('userName', { required: true })}
        />
        <input
          type="email"
          className="pl-3 bg-authInputBg text-white h-[62px] border-2 border-authInputBorder rounded-[14px] text-[18px] placeholder:text-authPlaceHolderColor font-bold"
          placeholder="email"
          {...register('email', { required: true })}
        />
        <div className="relative">
          <input
            type={!showPassWord ? 'password' : 'text'}
            className="pl-3 bg-authInputBg w-full h-[62px] text-white border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor font-bold text-[18px] pr-[50px]" // Add padding-right to make space for the icon
            placeholder="password"
            {...register('password', {
              required: true,
              maxLength: 20,
              minLength: 4,
            })}
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
          <p className="text-[#AAADFA] font-bold text-[18px]">sign up</p>
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

export const LoginForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const router = useRouter();
  const notify = (arg: string) => toast(arg);

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<LoginInput>();
  const [showPassWord, setShowPassword] = useState<boolean>(false);

  const ToggleShowPassWord = () => {
    setShowPassword(!showPassWord);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      console.log('the env is', process.env.NEXT_PUBLIC_BACKEND_URL);

      const getLoggedUser = async () => {
        return await axios.post('/passport-auth/login', {
          userName: data.userName,
          passWord: data.password,
        });
      };
      const ret = await getLoggedUser();
      setToken(ret.data.accessToken);
      dispatch(
        setUser({ id: ret.data.id, signIn: true, userName: data.userName })
      );
      if (ret.status === 200) {
        router.push('/dashboard');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      notify('error in signing in');
    }
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 mt-3"
      >
        <input
          type="text"
          className="pl-3 w-[400px] bg-authInputBg text-white h-[62px] border-2 border-authInputBorder rounded-[14px] text-[18px] placeholder:text-authPlaceHolderColor font-bold"
          placeholder="userName"
          {...register('userName', { required: true })}
        />
        <div className="relative">
          <input
            type={!showPassWord ? 'password' : 'text'}
            className="pl-3 bg-authInputBg w-full h-[62px] text-white border-2 border-authInputBorder rounded-[14px] placeholder:text-authPlaceHolderColor font-bold text-[18px] pr-[50px]" // Add padding-right to make space for the icon
            placeholder="password"
            required
            {...register('password', { required: true })}
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
        <p className="text-[#AAADFA] font-bold text-[18px] hover:cursor-pointer">
          forgot password ?
        </p>
        <button
          type="submit"
          className="w-[224px] h-[52px] rounded-[14px] bg-main mx-auto"
        >
          <p className="text-[#AAADFA] font-bold text-[18px] hover:scale-105 duration-100">
            login
          </p>
        </button>
      </form>
      <div className="h-[2px] w-[507px] mx-auto bg-[#A59999] my-6"></div>
      <div className="w-[420px] flex flex-col gap-7">
        <button className="h-[54px]  bg-white rounded-[10px]">
          <div className="flex justify-center items-center gap-3">
            <FcGoogle className="h-[30px] w-[30px]" />
            <p className="text-authPlaceHolderColor font-bold text-[18px]">
              login with google
            </p>
          </div>
        </button>
        <button className="h-[54px]  bg-[#201E1E] rounded-[10px]">
          <div className="flex justify-center items-center gap-3">
            <Si42 className="h-[30px] w-[30px] text-white" />
            <p className="text-white font-bold text-[18px]">login with 42</p>
          </div>
        </button>
      </div>
    </>
  );
};
