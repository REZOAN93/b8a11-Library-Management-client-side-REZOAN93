import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
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
        return children;
    }

    return <Navigate to={"/signin"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;