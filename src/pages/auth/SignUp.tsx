import { Button } from "@/components/ui/button";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string()
})

type SignUpFormInputs = z.infer<typeof signUpFormSchema>

export default function SignUp(){
  const {signup} = useContext(AuthContext)

  const{register, handleSubmit, reset} = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpFormSchema)
  })

  async function handleSignin(data: SignUpFormInputs){
    signup(data)
    reset()
  }
  return(
      <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col gap-4 border-2 border-muted-foreground rounded-md p-8 min-w-96">
        <h1 className="text-xl">Inscrever-se</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Nome</label>
          <input className='text-foreground border-2 p-2 border-muted-foreground rounded-md' type="text" {...register("name")} placeholder='Informe seu nome' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">E-mail</label>
          <input className='text-foreground border-2 p-2 border-muted-foreground rounded-md' type="text" {...register("email")} placeholder='Informe seu e-mail' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="senha">Senha</label>
          <input className='text-foreground border-2 p-2 border-muted-foreground rounded-md' type="password" {...register("password")} placeholder='Escolha sua senha' />
        </div>
        <Button>Cadastrar</Button>
      </form>
  )
}