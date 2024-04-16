import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterRequest } from "../requests/auth/RegisterRequest";

type RegisterType = {
  username: string;
  password: string;
  password_confirm: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterRequest),
  });
  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="flex-1 h-screen bg-blue-300"></div>
      <div className="w-[40%] h-screen bg-white">
        <div className="p-6 mt-[20%]">
          <div className="text-center text-[24px]">Sign up</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="w-full p-4 text-[16px] placeholder:text-slate-300 rounded-[5px] border border-slate-300 mt-[20px]"
              placeholder="Email Address *"
              {...register("username")}
            />
            <p className="text-red-600">{errors.username?.message}</p>
            <input
              type="password"
              className="w-full p-4 text-[16px] placeholder:text-slate-300 rounded-[5px] border border-slate-300 mt-[20px]"
              placeholder="Password *"
              {...register("password")}
            />
            <p className="text-red-600">{errors.password?.message}</p>
            <input
              type="password"
              className="w-full p-4 text-[16px] placeholder:text-slate-300 rounded-[5px] border border-slate-300 mt-[20px]"
              placeholder="Password confirm *"
              {...register("password_confirm")}
            />
            <p className="text-red-600">{errors.password_confirm?.message}</p>
            <button className="w-full h-[40px] mt-[30px] bg-blue-500 text-white font-bold text-[16px] text-center py-[8px] rounded-[5px] shadow-lg hover:bg-blue-600">
              SIGN UP
            </button>
          </form>
          <div className="flex items-center justify-end mt-[20px]">
            <Link
              to={"/login"}
              className="text-[14px] text-blue-400 underline cursor-pointer"
            >
              I have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
