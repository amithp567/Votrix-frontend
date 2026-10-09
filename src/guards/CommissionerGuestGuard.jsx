import { Navigate, Outlet } from "react-router-dom";

const CommissionerGuestGuard = () => {
  const access = localStorage.getItem("access");
  const role = localStorage.getItem("role");

  if (access && role === "Commissioner") {
    return <Navigate to="/official/dashboard" replace />;
  }

  return <Outlet />;
};

export default CommissionerGuestGuard;