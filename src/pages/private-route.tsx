import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const [isLoggedIn] = useState(false)
    if (!isLoggedIn) {
        return <Navigate to={'/login'} />
    }
    return (
        <Outlet />
    )
}
