// Dùng để khai báo các API mà mình sẽ sử dụng

import axios from "axios";
import { IUser, User } from "../type";
import { request } from "../common/config/request";

export const HomeAPI = {
  getUser: async () => {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response;
  },
  getUserById: async (address: string) => {
    const response = await request.get(`/api/v1/user?address=${address}`);
    return response.data;
  },
  createUser: async (data: User) => {
    const response = await request.post(`/api/v1/user/createUser`, data);
    return response.data;
  },
};
