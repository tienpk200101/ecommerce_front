import axios from "axios";
import { UserType } from "../types/user";

const UserModel = {
  getUsers: async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/user/get-list-user"
      );

      return response.data.result.data;
    } catch (error) {
      // Xử lý lỗi ở đây (ví dụ: throw error hoặc trả về một giá trị mặc định)
      console.error("Error fetching user data:", error);
      throw error; // hoặc return [];
    }
  },
  createUser: async (data: UserType) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/user/create-user",
        data
      );

      return  response.data.result.data;
    } catch (error) {
      console.error("Error creating user data:", error);
      throw error; // hoặc return [];
    }
  },
};

export { UserModel };
