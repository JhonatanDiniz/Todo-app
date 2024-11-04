import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { useContext, useEffect } from 'react'
import { TaskContext } from '@/context/TaskContext'

const taskFormSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string()
})

type TaskFormInputs = z.infer<typeof taskFormSchema>

type FormEditTaskProps = {
  task?: TaskFormInputs
}

export default function FormEditTask( {task} : FormEditTaskProps){
  const {editTask} = useContext(TaskContext)

  const{register, handleSubmit, reset} = useForm<TaskFormInputs>({
    resolver: zodResolver(taskFormSchema)
  })

  useEffect(() => {
    if (task) {
      reset(task)
    }
  }, [task, reset])

  async function handleUpdateTask(data: TaskFormInputs){
    if(data.id){
      await editTask(data)
      reset()
    }else{
      console.error("Id da tarefa ausente")
    }
  }

  return(
    <form onSubmit={handleSubmit(handleUpdateTask)}  className='w-full flex flex-col gap-2'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="title">Título</label>
        <input className='border-2 p-1 border-muted-foreground rounded-md' type="text" {...register('title')} placeholder='Título da Tarefa' />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="title">Descrição</label>
        <textarea className='border-2 p-1 border-muted-foreground rounded-md' {...register('description')} placeholder='Descrição da Tarefa' />
      </div>

      <Button>Editar</Button>
    </form>
  )
}