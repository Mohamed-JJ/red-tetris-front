import React, { useState } from 'react';
import { ModInformation } from '@/lib/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import ModifyInfoValue from './ModifyInfoValue';
import { BiTrash } from 'react-icons/bi';
const ModifyPersonalInfo = () => {
  const [isActive, setIsActive] = useState<{
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
  }>({ password: false, firstName: false, lastName: false });
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<ModInformation>();
  const toggleActiveness = (target: string) => {
    switch (target) {
      case 'firstName':
        setIsActive({
          firstName: !isActive.firstName,
          lastName: isActive.lastName,
          password: isActive.password,
        });
        break;
      case 'lastName':
        setIsActive({
          lastName: !isActive.lastName,
          firstName: isActive.firstName,
          password: isActive.password,
        });
        break;
      case 'password':
        setIsActive({
          password: !isActive.password,
          firstName: isActive.firstName,
          lastName: isActive.lastName,
        });
        break;
      default:
        setIsActive({
          password: false,
          firstName: false,
          lastName: false,
        });
    }
  };
  const clearFields = () => {
    reset();
  };
  const onSubmit: SubmitHandler<ModInformation> = (data) => {
    console.log('the submitted data', data);
    // reset()
  };
  return (
    <div className="w-[708px] h-[500px] bg-lighterblue rounded-[14px] flex flex-col items-center gap-6">
      <p className="font-jockey text-[#AAADFA] text-[30px] mt-5">
        Personal Information
      </p>
      <form
        className="flex flex-col gap-5"
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ModifyInfoValue
          name="firstName"
          toggleActiveness={toggleActiveness}
          isModActive={isActive.firstName!}
          registerProps={{ ...register('firstName') }}
        />
        <ModifyInfoValue
          name="lastName"
          toggleActiveness={toggleActiveness}
          isModActive={isActive.lastName!}
          registerProps={{ ...register('lastName') }}
        />
        <ModifyInfoValue
          name="password"
          toggleActiveness={toggleActiveness}
          isModActive={isActive.password!}
          registerProps={{ ...register('password') }}
        />
        <div className="flex gap-5 font-jockey text-white">
          <p className="w-[400px] py-3 text-center my-auto bg-dark rounded-[10px]">
            delete account
          </p>

          <div
            className="hover:cursor-pointer transition-transform duration-100 flex h-full items-center ml-11"
            onClick={() => console.log('will delete the account')}
          >
            <BiTrash className="w-[40px] h-[40px] hover:cursor-pointer hover:scale-125 duration-100 text-red-600" />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            className="py-3 w-[150px] rounded-[16px] font-jockey text-white bg-[#787878]"
            onClick={clearFields}
          >
            cancel
          </button>
          <button
            className="py-3 w-[150px] rounded-[16px] font-jockey text-white bg-dark"
            onSubmit={handleSubmit(onSubmit)}
            onClick={handleSubmit(onSubmit)}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModifyPersonalInfo;
