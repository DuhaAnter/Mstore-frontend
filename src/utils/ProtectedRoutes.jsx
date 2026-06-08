import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const user = useSelector((state) => state.user.userLoggedIn);
  return user ? <Outlet /> : <Navigate to="/login" />;
}
