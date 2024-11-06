import { createContext, ReactNode, useEffect} from "react";

interface signinProps {
  email: string
  password: string
}

interface AuthContextType {

}

export const AuthContext = createContext({} as AuthContextType)

interface AuthProviderProps{
  children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps){



  useEffect(()=>{
  }, [])

  return(
    <AuthContext.Provider 
    value={{
    }}>
      {children}
    </AuthContext.Provider>
  )
}