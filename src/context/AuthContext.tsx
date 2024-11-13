import { api } from "@/lib/axios";
import { createContext, ReactNode, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

interface signinProps {
  email: string
  password: string
}

interface signupProps {
  name: string
  email: string
  password: string
}

interface AuthContextType {
  isAuthenticated: boolean
  signin: (data: signinProps) => Promise<void>
  signup: (data: signupProps) => Promise<void>
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

  async function signup(data: signupProps) {
    try {
      await api.post('user', data)
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
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
      signin,
      signup
    }}>
      {children}
    </AuthContext.Provider>
  )
}