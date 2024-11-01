import { api } from "@/lib/axios";
import { Task } from "@/types/Task";
import { createContext, ReactNode, useEffect, useState } from "react";

interface newTask {
  title: string
  description: string
}

interface TaskContextType {
  tasks: Task[]
  totalPages: number
  page: number
  setPage: (page: number) => void
  finishedTask: (id: number) => void
  createTask: (data: newTask) => void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskProviderProps{
  children: ReactNode
}

export function TaskProvider({children}: TaskProviderProps){
  const [tasks, setTasks] = useState<Task[] | []>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  async function getTasks(page: number) {
    try {
      const response = await api.get(`/task?page=${page - 1}`)
      setTasks(response.data.content)
      setTotalPages(response.data.totalPages)
    } catch (error) {
      console.error('Falha ao buscar tasks', error)
    }
  }

  async function createTask(data: newTask) {
    try {
      const response = await api.post('/task', data)
      setTasks((state) => [response.data, ...state])
    } catch (error) {
      console.error('Falha ao buscar tasks', error)
    }
  }

  async function finishedTask(id: number) {
    try {
      await api.post(`/task/${id}`)
      getTasks(page)
    } catch (error) {
      console.error('Falha ao finalizar tarefa!', error)
    }    
  }

  useEffect(()=>{
    getTasks(page)
  }, [page])

  return(
    <TaskContext.Provider 
    value={{
      tasks,
      page,
      setPage,
      totalPages,
      finishedTask,
      createTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}