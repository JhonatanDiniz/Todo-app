import { api } from "@/lib/axios";
import { Task } from "@/types/Task";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TaskContextType {
  tasks: Task[]
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

  useEffect(()=>{
    getTasks()
  }, [])

  return(
    <TaskContext.Provider 
    value={{
      tasks
    }}>
      {children}
    </TaskContext.Provider>
  )
}