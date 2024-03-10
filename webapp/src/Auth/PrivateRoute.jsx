import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import UserContext from "../context/User/UserContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);
  
    return user ? (
      children
    ) : (
        <Navigate to="/auth" replace />
    );
  }

export default PrivateRoute;