import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout(){
  return(
    <div className="bg-zinc-900 text-zinc-200 min-h-screen w-full">
    <Header/>
    <div className="container mx-auto mt-12">
      <Outlet/>
    </div>
  </div>

  )
}