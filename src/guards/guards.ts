import type { Predicate } from "../routes/routes";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const isUserLoggedIn: Predicate = () => {
  const token = JSON.parse(localStorage.getItem('accessToken') ?? "null");
  if (!token) return false

  return true;
}

type Roles = "NEW_HIRE" | "MANAGER" | "HR";

export const hasGrantedAccess = (role: Roles) => {
  return () => {
    // const userRole = JSON.parse(localStorage.getItem('role') ?? "null");
    const currentUser = useSelector((state: RootState) => state.auth.user);
    const userRole = currentUser?.role

    if (role.includes(userRole)) {
      return true;
    }
    return false;
  }
}