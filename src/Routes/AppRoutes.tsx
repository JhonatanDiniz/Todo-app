import Tasks from "@/pages/app/Tasks";
import Auth from "@/pages/auth/Auth";
import AppLayout from "@/pages/layout/AppLayout";
import AuthLayout from "@/pages/layout/AuthLayout";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes(){
  return(
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/signin" element={<Auth/>}/> { /*Aqui vai a rota pública */}
      </Route>
      <Route path="/" element={<PrivateRoute/>}> {/* Incluir validacao para rotas privadas */}      
        <Route element={<AppLayout/>}> {/* Incluir o componente Layout */}
          <Route path="/tasks" element={<Tasks/>} /> {/* Rotas privadas */}
        </Route>
      </Route>
    </Routes>
  )
}