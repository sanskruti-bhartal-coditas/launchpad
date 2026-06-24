export interface LoginInterface {
  email: string,
  password: string
}


export interface LoginResponse {
  error:{
    message:string
  }
}