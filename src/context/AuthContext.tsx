import { api } from "@/lib/axios";
import { createContext, ReactNode, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

interface signinProps {
  email: string
  password: string
}

interface AuthContextType {
  isAuthenticated: boolean
  signin: (data: signinProps) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps{
  children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps){
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate()

  async function signin(data: signinProps) {
    try {
      const response = await api.post('auth/user', data);
      const token: string = response.data.token
      sessionStorage.setItem('Token', token)
      setIsAuthenticated(true)
      navigate('/tasks')
    } catch (error) {
      console.error('Erro ao efetuar login:', error)
    }
  }

  useEffect(()=>{
    const token = sessionStorage.getItem('Token')
    if(token){
      setIsAuthenticated(true)
    }
  }, [])

  return(
    <AuthContext.Provider 
    value={{
      isAuthenticated,
      signin
    }}>
      {children}
    </AuthContext.Provider>
  )
}