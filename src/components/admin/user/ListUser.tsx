import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Pagination from "./common/components/Pagination";
import { UserType } from "../../../types/admin/user";
import axios from "axios";
import dayjs from "dayjs";

type FetchListUserType = {
  users: UserType[];
  lastPage: number;
};
const ListUser = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admin/user/get-list-user")
      .then((res) => {
        const data: FetchListUserType = res.data.result.data;
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-[10px]">
        <div className="relative flex items-center">
          <IoSearch size={24} className="absolute left-[5px]" color="#7A7A7A" />
          <input
            type="text"
            className="w-[300px] h-[30px] rounded-[5px] placeholder:pr-[10px] placeholder:truncate pl-[35px] pr-[10px] text-[14px]"
            placeholder="Tìm kiếm..."
          />
        </div>
        <div>
          <button className="px-[20px] py-[5px] bg-success-light text-white text-center text-[16px] rounded-[5px]">
            Tạo mới
          </button>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="text-center">
              <input type="checkbox" className="cursor-pointer" />
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Last login at
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.length > 0 &&
            users.map((user) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="text-center">
                    <input type="checkbox" className="cursor-pointer" />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">Verified</td>
                  <td className="px-6 py-4">{user.last_login_at ? dayjs(user.last_login_at).format("YYYY-MM-DD HH:mm") : ""}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ListUser;
