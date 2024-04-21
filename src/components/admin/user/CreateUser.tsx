import React, { ChangeEvent } from "react";
import { UserType } from "../../../types/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaCreateUser = yup.object({
  username: yup.string().required(),
  email: yup.string().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
}).required();

const CreateUser = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaCreateUser)
  });
  const [userData, setUserData] = React.useState<UserType>({});
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((userData) => ({ ...userData, [name]: value }));
  };

  return (
    <div className="w-full px-[20px]">
      <div className="text-[20px] flex items-center justify-between">
        <div>Create User</div>
        <div className="mt-[20px] flex justify-center">
          <button className="text-center text-[16px] px-[15px] py-[6px] bg-success text-white rounded-[5px] shadow-md hover:bg-success-dark">
            Create
          </button>
        </div>
      </div>
      <div className="w-full mt-[20px] px-[20px]">
        <form action="">
          <div className="flex items-center gap-x-[20px] mt-[10px]">
            <label htmlFor="" className="flex items-center w-[100px]">
              Username <span className="text-danger">*</span>
            </label>
            <input
              name="username"
              type="text"
              className="w-full h-[40px] rounded-[5px] pl-[10px]"
              value={userData.username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex items-center gap-x-[20px] mt-[10px]">
            <label htmlFor="" className="flex items-center w-[100px]">
              Email <span className="text-danger">*</span>
            </label>
            <input
              name="email"
              type="email"
              className="w-full h-[40px] rounded-[5px] pl-[10px]"
              value={userData.email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex items-center justify-between gap-x-[20px]">
            <div className="flex-1 flex items-center gap-x-[15px] mt-[10px]">
              <label htmlFor="" className="flex items-center w-[120px]">
                First Name <span className="text-danger">*</span>
              </label>
              <input
                name="first_name"
                type="first_name"
                className="w-full h-[40px] rounded-[5px] pl-[10px]"
                value={userData.first_name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex-1 flex items-center gap-x-[15px] mt-[10px]">
              <label htmlFor="" className="flex items-center w-[120px]">
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                name="last_name"
                type="last_name"
                className="w-full h-[40px] rounded-[5px] pl-[10px]"
                value={userData.last_name}
                onChange={handleChangeInput}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
