import { Button } from "@/components/ui/button";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const authFormSchema = z.object({
  email: z.string(),
  password: z.string()
})

type AuthFormInputs = z.infer<typeof authFormSchema>

export default function Auth(){


  const{register, handleSubmit, reset} = useForm<AuthFormInputs>({
    resolver: zodResolver(authFormSchema)
  })

  async function handleSignin(data: AuthFormInputs){
    console.log(data)
    reset()
  }
  return(
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit(handleSignin)} className="flex flex-col gap-4 border-2 border-muted-foreground rounded-md p-8 min-w-96">
        <h1 className="text-xl">Login</h1>
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Login</label>
          <input className='text-foreground border-2 p-2 border-muted-foreground rounded-md' type="text" {...register("email")} placeholder='Entre com e-mail' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="title">Senha</label>
          <input className='text-foreground border-2 p-2 border-muted-foreground rounded-md' type="password" {...register("password")} placeholder='Informe sua senha' />
        </div>
        <Button>Entrar</Button>
        <div className="flex items-center justify-end">
          <p className="mr-1 text-xs">Esqueceu sua senha?</p>
          <p className="text-md font-bold text-red-900">Clique aqui!</p>
        </div>
      </form>
    </div>
  )
}