import axios from "axios";
import { useEffect } from "react";


const axiosSecure = axios.create({
    baseURL: "https://assignment11-zeta.vercel.app",
    withCredentials: true,
});

const useAxiosSecure = () => {
    useEffect(() => {
        // axiosSecure.interceptors.response.use(res => {
        //     return res;
        // }, error => {
        //     // console.log('error tracked in the interceptor', error.response)
        //     if (error?.response?.status === 401 || error?.response?.status === 403) {
        //         console.log('logout the User')
        //         // signOutUser()
        //     }
        // })
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;
