import { api } from "@/lib/axios";
import { Task } from "@/types/Task";
import { createContext, ReactNode, useEffect, useState } from "react";

interface newTask {
  title: string
  description: string
}

interface TaskContextType {
  tasks: Task[]
  finishedTask: (id: number) => void
  createTask: (data: newTask) => void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskProviderProps{
  children: ReactNode
}

export function TaskProvider({children}: TaskProviderProps){
  const [tasks, setTasks] = useState<Task[] | []>([])

  async function getTasks() {
    try {
      const response = await api.get("/task")
      setTasks(response.data)
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
      getTasks()
    } catch (error) {
      console.error('Falha ao finalizar tarefa!', error)
    }    
  }

  useEffect(()=>{
    getTasks()
  }, [])

  return(
    <TaskContext.Provider 
    value={{
      tasks,
      finishedTask,
      createTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}