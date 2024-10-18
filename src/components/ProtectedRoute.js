import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/singin" />;
  }

  return children;
};

export const PublicRoute = ({ children, isLoggedIn }) => {
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};
