import { Outlet } from "react-router-dom";

export default function AuthLayout(){
  return(
    <div className="bg-zinc-900 text-zinc-200 min-h-screen w-full">
      <div className="container mx-auto bg-zinc-800 min-h-screen">

      <Outlet/>
      </div>
    </div>
  )
}