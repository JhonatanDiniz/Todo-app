import Tasks from "@/pages/app/Tasks";
import AppLayout from "@/pages/layout/AppLayout";
import AuthLayout from "@/pages/layout/AuthLayout";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import AuthContainer from "@/pages/auth/AuthContainter";

export function AppRoutes(){
  return(
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/signin" element={<AuthContainer/>}/> { /*Aqui vai a rota pública */}
      </Route>
      <Route path="/" element={<PrivateRoute/>}> {/* Incluir validacao para rotas privadas */}      
        <Route element={<AppLayout/>}> {/* Incluir o componente Layout */}
          <Route path="/tasks" element={<Tasks/>} /> {/* Rotas privadas */}
        </Route>
      </Route>
    </Routes>
  )
}