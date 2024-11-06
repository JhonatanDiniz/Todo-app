import { Navigate, Outlet } from "react-router-dom"

export function PrivateRoute(){
  const Token = sessionStorage.getItem('Token')
  if(!Token){
    return <Navigate to="/signin"/>
  }
  return <Outlet/>
}