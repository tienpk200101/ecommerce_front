import React, { useState } from "react";
import { WithChildren } from "../../types/global";
import { GoHome } from "react-icons/go";
import { ADMIN_SIDEBAR_DATA } from "../../constants/admin/sidebar";
import { Link } from "react-router-dom";

type LayoutProps = {} & WithChildren;

const AdminLayout = ({ children }: LayoutProps) => {
  const [isShowSetting, setIsShowSetting] = useState<boolean>(false);

  return (
    <div className="w-full h-[100vh] flex items-center rounded-[10px] bg-slate-100 box-content text-secondary-dark">
      {/* Sidebar */}
      <div className="w-[15%] min-w-[250px] max-w-full overflow-y-auto h-full border border-blue-500 scrollbar-hide">
        <div className="w-full h-[60px] border border-secondary-lesslight">
          Logo
        </div>
        <div className="pl-[20px]">
          <div>Overview</div>
          {ADMIN_SIDEBAR_DATA.map((data) => {
            const { label, href, childs, icon: IconComponent } = data;
            return (
              <Link to={href} className="flex items-center gap-x-[10px] w-full h-[50px] text-[16px] text-secondary cursor-pointer py-[10px] px-[15px] hover:bg-secondary-light">
                <IconComponent size={24} /> {label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-full mx-[30px]">
        <div className="h-[60px] w-full flex items-center justify-end gap-x-[20px] border-b border-b-secondary-light">
          <div className="flex items-center w-full h-full">
            {/* <input type="text" className="w-full h-[40px] rounded-[10px]" /> */}
          </div>
          <div className="flex items-center gap-x-[15px]">
            <div className="w-[40px] h-[40px] rounded-full bg-secondary-light cursor-pointer"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-secondary-light cursor-pointer"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-secondary-light cursor-pointer"></div>
            <div
              className="w-[40px] h-[40px] rounded-full bg-secondary-light cursor-pointer"
              onClick={() => setIsShowSetting(!isShowSetting)}
            ></div>
          </div>
          {isShowSetting && (
            <div className="fixed top-[10px] right-[30px] bg-primary-light w-[150px] mt-[50px] rounded-[5px] shadow-md">
              <div className="px-[10px] py-[6px] hover:bg-primary-synch cursor-pointer">
                Profile
              </div>
              <div className="px-[10px] py-[6px] hover:bg-primary-synch cursor-pointer">
                Setting
              </div>
              <div className="px-[10px] py-[6px] hover:bg-primary-synch cursor-pointer">
                Logout
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-[calc(100%-120px)] my-[30px] border border-secondary-light rounded-[10px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
