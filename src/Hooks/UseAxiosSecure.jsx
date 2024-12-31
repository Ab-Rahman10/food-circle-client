import axios from "axios";
import { useEffect } from "react";
import useAuth from "./Context";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log("Caught from interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          // Logout from website
          logoutUser();
          navigate("/login");
        }
      }
    );
  }, [logoutUser, navigate]);
  return axiosSecure;
};

export default UseAxiosSecure;
