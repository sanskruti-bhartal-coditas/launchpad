export interface LoginInterface {
  email: string,
  password: string
}


export interface LoginResponse {
  accessToken?:string,
  refreshToken?:string,
  error?:{
    message:string
  }
}