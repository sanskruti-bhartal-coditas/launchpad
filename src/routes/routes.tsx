import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import MangerDashboard from "../pages/ManagerDashboard/MangerDashboard";
import OnboardHire from "../layouts/ManagerDashboard/OnboardHire/OnboardHire";
import { isUserLoggedIn, hasGrantedAccess } from "../guards/guards";
import type React from "react";
import NewHireStats  from "../layouts/ManagerDashboard/NewHireStats/NewHireStats"

export type Predicate = () => boolean;

const canAccess = (Component: React.FC, guards: Predicate[], to: string = '/'): React.ComponentType => {
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
    path: "/dashboard",
    Component: canAccess(MangerDashboard, [isUserLoggedIn, hasGrantedAccess("MANAGER")]),
    children: [
      {
        path: "/dashboard/onboard-new-hire",
        Component: canAccess(OnboardHire, [isUserLoggedIn, hasGrantedAccess("MANAGER")]),
      },
      {
        path: "/dashboard/new-hire-stats",
        Component: canAccess(NewHireStats, [isUserLoggedIn, hasGrantedAccess("MANAGER")]),
      }
    ],
  },
])