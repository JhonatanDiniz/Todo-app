import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { useContext } from 'react'
import { TaskContext } from '@/context/TaskContext'

const taskFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  dueDate: z.string()
})

type TaskFormInputs = z.infer<typeof taskFormSchema>

export default function FormNewTask(){
  const {createTask} = useContext(TaskContext)

  const{register, handleSubmit, reset} = useForm<TaskFormInputs>({
    resolver: zodResolver(taskFormSchema)
  })

  async function handleCreateTask(data: TaskFormInputs){
    console.log(data)
    createTask(data)
    reset()
  }

  return(
    <form onSubmit={handleSubmit(handleCreateTask)} className='w-full flex flex-col gap-2'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="title">Título</label>
        <input className='border-2 p-1 border-muted-foreground rounded-md' type="text" {...register('title')} placeholder='Título da Tarefa' />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="title">Descrição</label>
        <textarea className='border-2 p-1 border-muted-foreground rounded-md' {...register('description')} placeholder='Descrição da Tarefa' />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="title">Vencimento</label>
        <input className='border-2 p-1 border-muted-foreground rounded-md' type="date" {...register('dueDate')}/>
      </div>

      <Button>Cadastrar</Button>
    </form>
  )
}