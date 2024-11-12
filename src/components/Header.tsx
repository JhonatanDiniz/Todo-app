import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

export default function Header(){
  const navigate = useNavigate()
  async function sair() {
    sessionStorage.removeItem('Token')
    navigate('/signin') 
  }

  return(
    <header className="bg-zinc-800 flex items-center justify-between p-4">
      <div>
        <h1 className="text-xl font-semibold">Todo-App</h1>
      </div>
      <div>
        <Button onClick={sair}>Sair</Button>
      </div>
    </header>
  )
}