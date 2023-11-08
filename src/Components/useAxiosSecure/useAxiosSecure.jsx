import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAuth from "../Hooks/useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const useAxiosSecure = () => {
    // const {signOutUser}=useAuth()
    // const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('error tracked in the interceptor', error.response)
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                console.log('logout the User')
                // signOutUser()
            }
        })
    },[])
    return axiosSecure;
};

export default useAxiosSecure;
