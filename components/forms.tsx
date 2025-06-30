"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Si42 } from "react-icons/si";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginInput, SignUpInput } from "@/lib/types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootState } from "@/app/state/store";
import { setUser } from "@/app/state/user/userSlice";
import { useRouter } from "next/navigation";
import { api } from "@/utils";
import { setToken } from "@/utils";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const SignUpForm = ({ toggle }: { toggle: (arg: boolean) => void }) => {
  const { register, handleSubmit, reset } = useForm<SignUpInput>();
  const [showPassWord, setShowPassword] = useState<boolean>(false);
  const notify = (arg: string) => toast(arg);
  const forwardToLink = async (link: string) => {
    try {
      window.location.href = link;
    } catch (error: unknown) {
      console.log("error in google auth:", error);
    }
  };
  const ToggleShowPassWord = () => {
    setShowPassword(!showPassWord);
  };
  const onSubmit: SubmitHandler<SignUpInput> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      console.log("user object", data);
      const createdUser = await api.post("/user", data);
      console.log(createdUser);
      notify("please go to the login page to login");

      reset();
      toggle(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      notify("error in creating an account");
    }
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[60%]"
      >
        <div className="w-full flex gap-5">
          <Input
            type="text"
            className="placeholder:text-white text-white h-[50px]"
            placeholder="first name"
            {...register("firstName", { required: true })}
          />
          <Input
            type="text"
            className="placeholder:text-white text-white h-[50px]"
            placeholder="last name"
            {...register("lastName", { required: true })}
          />
        </div>
        <Input
          type="text"
          className="placeholder:text-white text-white h-[50px]"
          placeholder="username"
          {...register("userName", { required: true })}
        />
        <Input
          type="email"
          className="placeholder:text-white text-white h-[50px]"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <div className="relative">
          <Input
            type={!showPassWord ? "password" : "text"}
            className="placeholder:text-white text-white h-[50px]" // Add padding-right to make space for the icon
            placeholder="password"
            {...register("passWord", {
              required: true,
              maxLength: 20,
              minLength: 4,
            })}
          />
          {!showPassWord ? (
            <FaEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] cursor-pointer text-white"
              onClick={ToggleShowPassWord}
            />
          ) : (
            <FaEyeSlash
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] cursor-pointer text-white"
              onClick={ToggleShowPassWord}
            />
          )}
        </div>
        <Button
          type="submit"
          className="w-full h-[50px] rounded-[14px] bg-main hover:bg-main mx-auto hover:text-primary-foreground"
        >
          <p className="text-[#AAADFA] font-semibold text-[14px] ">sign up</p>
        </Button>
      </form>
      <Separator className=" bg-[#A59999] max-w-[80%] mt-5" />
      <div className="flex flex-col gap-7 mt-5 w-[60%]">
        <Button
          className="h-[50px] bg-white rounded-[10px] hover:bg-white hover:text-black text-black"
          onClick={() =>
            forwardToLink(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/login`
            )
          }
        >
          <div className="flex justify-center items-center gap-3">
            <FcGoogle className="h-[30px] w-[30px]" />
            <p className="text-authPlaceHolderColor font-semibold text-[14px]">
              sign up with google
            </p>
          </div>
        </Button>
        <Button
          className="h-[50px] bg-[#201E1E] rounded-[10px] hover:bg-[#201E1E]"
          onClick={() =>
            forwardToLink(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/42/login`
            )
          }
        >
          <div className="flex justify-center items-center gap-3">
            <Si42 className="h-[30px] w-[30px] text-white" />
            <p className="text-white font-semibold text-[14px]">
              sign up with 42
            </p>
          </div>
        </Button>
      </div>
    </>
  );
};

export const LoginForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const router = useRouter();
  const notify = (arg: string) => toast(arg);
  const forwardToLink = async (link: string) => {
    try {
      window.location.href = link;
    } catch (error: unknown) {
      console.log("error in google auth:", error);
    }
  };
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
      const getLoggedUser = async () => {
        const res = await api.post(
          "/auth/login",
          {
            userName: data.userName,
            passWord: data.password,
          },
          {
            withCredentials: true, // <- this is required for cookies to work
          }
        );
        return res;
      };
      const ret = await getLoggedUser();
      console.log("Data In here");
      setToken(ret.data.accessToken);
      localStorage.setItem("userId", ret.data.id);
      localStorage.setItem("userName", ret.data.userName);
      dispatch(
        setUser({ id: ret.data.id, signIn: true, userName: data.userName })
      );
      router.push(ret.data.redirectUrl);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      notify("error in signing in");
    }
  };
  return (
    <>
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-7 mt-3 w-[60%] "
      >
        <Input
          type="text"
          className="placeholder:text-white text-white h-[50px] "
          color="white"
          placeholder="Username"
          {...register("userName", { required: true })}
        />
        <div className="relative">
          <Input
            type={!showPassWord ? "password" : "text"}
            className="h-[50px] text-white placeholder:text-white" // Add padding-right to make space for the icon
            placeholder="password"
            required
            // color="black"
            {...register("password", { required: true })}
          />
          {!showPassWord ? (
            <FaEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[24px] h-[24px] cursor-pointer text-authPlaceHolderColor text-white"
              onClick={ToggleShowPassWord}
            />
          ) : (
            <FaEyeSlash
              className="absolute right-3 top-1/2 transform text-white -translate-y-1/2 w-[24px] h-[24px] cursor-pointer text-authPlaceHolderColor"
              onClick={ToggleShowPassWord}
            />
          )}
        </div>
        <div className="w-full">
          <Button type="submit" className="w-full h-[50px] text-[#AAADFA] rounded-[14px] bg-main hover:bg-main mx-auto">
            Login
          </Button>
        </div>
        <p className="text-[#AAADFA] hover:text-[#787ab3] duration-300 transition font-semibold text-[14px] hover:cursor-pointer underline">
          forgot password ?
        </p>
      </form>
      <Separator className=" bg-[#A59999] max-w-[80%]" />
      <div className="w-[60%] flex flex-col gap-7 pt-8">
        <Button
          className="h-[50px] bg-white text-black hover:bg-white hover:text-black"
          onClick={() =>
            forwardToLink(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/login`
            )
          }
        >
          <div className="flex justify-center items-center gap-3 w-full h-full">
            <FcGoogle className="h-[30px] w-[30px]" />
            <p className="text-authPlaceHolderColor font-semibold text-[14px]">
              login with google
            </p>
          </div>
        </Button>
        <Button className="h-[50px]  bg-[#201E1E] rounded-[10px] hover:bg-bg-[#201E1E] hover:text-primary-foreground">
          <div
            className="flex justify-center items-center gap-3"
            onClick={() =>
              forwardToLink(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/42/login`
              )
            }
          >
            <Si42 className="h-[30px] w-[30px] text-white" />
            <p className="text-white font-semibold text-[14px]">
              login with 42
            </p>
          </div>
        </Button>
      </div>
    </>
  );
};
