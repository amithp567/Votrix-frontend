import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = () => {
  const access = localStorage.getItem("access");
  const role = localStorage.getItem("role");

  if (access && role === "Commissioner") {
    return <Navigate to="/official/dashboard" replace />;
  }

  if (access && role === "Agent") {
    return <Navigate to="/agent/dashboard" replace />;
  }

  return <Outlet />;
};

export default GuestGuard;