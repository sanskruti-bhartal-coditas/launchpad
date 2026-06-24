import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import MangerDashboard from "../pages/ManagerDashboard/MangerDashboard";

export type Predicate = () => boolean;

const canAccess = (Component: React.ComponentType, guards: Predicate[], to: string = '/'): React.ComponentType => {
  return () => {

    if (!guards.every(guard => guard())) {
      return <Navigate to={to} />;
    }

    return <Component />;
  }

}

export const router = createBrowserRouter([
  {
    path:"/",
    Component: Login
  },
  {
    path: "/manager",
    Component: MangerDashboard
  }
])