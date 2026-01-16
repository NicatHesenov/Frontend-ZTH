import axios from "axios";
import type { User } from "./types/user";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<User[]> => {
  const res = await axios.get<User[]>(API_URL);
  return res.data;
};
