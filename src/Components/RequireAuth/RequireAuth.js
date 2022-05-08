import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <LoadingScreen></LoadingScreen>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
