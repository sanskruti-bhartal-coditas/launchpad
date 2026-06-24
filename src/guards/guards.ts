import type { Predicate } from "../routes/routes";

export const isUserLoggedIn:Predicate = () =>{
// if token exists return true, else false
}

type Roles = "HIRE" | "MANAGER" | "HR-COORDINATOR";

export const hasGrantedAccess = (role:Roles) =>{
  
  return ()=>{
    const userRole = JSON.parse(localStorage.getItem('role') ?? '""');
    if(role.includes(userRole)) {
      return true;
    }
    return false;
  }
}