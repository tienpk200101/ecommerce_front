import React from "react";
import UserBase from ".";
import CreateUser from "../../../components/admin/user/CreateUser";

const CreateUserPage = () => {
  return (
    <UserBase>
      <CreateUser />
    </UserBase>
  );
};

export default CreateUserPage;
