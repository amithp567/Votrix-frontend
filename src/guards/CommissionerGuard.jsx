import { Navigate, Outlet } from "react-router-dom";


const CommissionerGuard = () => {
    const access = localStorage.getItem('access')
    const role = localStorage.getItem('role')

    if (!access || role!="Commissioner"){
        return <Navigate to="/official/login" replace/>
    }

    return <Outlet/>
}

export default CommissionerGuard