import type { Predicate } from "../routes/routes";

export const isUserLoggedIn:Predicate = () =>{
  const token = JSON.parse(localStorage.getItem('accessToken')?? " ") ;
  if(!token) return false

  return true;
}

type Roles = "HIRE" | "MANAGER" | "HR";

export const hasGrantedAccess = (role:Roles) =>{
  // return true
  return ()=>{
    const userRole = JSON.parse(localStorage.getItem('role') ?? '');

    if(role.includes(userRole)) {
      return true;
    }
    return false;
  }
}