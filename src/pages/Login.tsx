import dayjs from "dayjs";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginRequest } from "../requests/auth/LoginRequest";

type LoginType = {
  username: string;
  password: string;
  remember_me?: boolean | null;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginRequest),
  });
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="flex-1 h-screen bg-blue-300"></div>
      <div className="w-[40%] h-screen bg-white">
        <div className="p-6 mt-[20%]">
          <div className="text-center text-[24px]">Sign in</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full p-4 text-[16px] placeholder:text-slate-300 rounded-[5px] border border-slate-300 mt-[20px]"
              placeholder="Username or Email *"
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
            <div className="flex items-center gap-x-[10px] mt-[20px]">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-[20px] h-[20px] cursor-pointer"
                {...register('remember_me')}
              />
              <label
                htmlFor="rememberMe"
                className="text-[16px] cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <button className="w-full h-[40px] mt-[30px] bg-blue-500 text-white font-bold text-[16px] text-center py-[8px] rounded-[5px] shadow-lg hover:bg-blue-600">
              SIGN IN
            </button>
          </form>
          <div className="flex items-center justify-between mt-[20px]">
            <span className="text-[14px] text-blue-400 underline cursor-pointer">
              Forgor password?
            </span>
            <Link
              to={"/register"}
              className="text-[14px] text-blue-400 underline cursor-pointer"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
          <div className="mt-[20px] text-center text-[14px] text-slate-400">
            Copyright © Your Website {dayjs().year()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
