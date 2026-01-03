import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ children, allowedRole }) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/" />;
    }

    if (allowedRole && user.role !== allowedRole) {
        return <Navigate to={user.role === 'admin' ? '/admin/dashboard' : 'customer/dashboard'} />;
    }

    return children;
};

export default PrivateRoute;