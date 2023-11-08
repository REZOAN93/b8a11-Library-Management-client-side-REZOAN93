import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";


const PrivateRouteAdmin = ({ children }) => {
    const location = useLocation();
    const { user, loading, isAdmin } = useAuth();

    if (loading) {
        return (
            <div className="py-32 w-full flex justify-center">
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    if (user) {
        if (isAdmin) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "This is Librarian Id, You can Add the Book",
                showConfirmButton: false,
                timer: 1500,
            });
            return children;
        } else {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Please Login as an Admin",
                showConfirmButton: false,
                timer: 1500,
            });
            // return <Navigate to={"/"} state={location.pathname}></Navigate>;
            
        }
    } else if (!user) {
        return <Navigate to={"/login"} state={location.pathname}></Navigate>;
    }
};

export default PrivateRouteAdmin;