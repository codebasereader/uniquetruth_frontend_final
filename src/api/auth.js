import axios from "axios";
import { API_URL } from "../../config";

const authClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async ({ email, password }) => {
  const response = await authClient.post("/auth/login", {
    email,
    password,
  });
  return response.data;
};
