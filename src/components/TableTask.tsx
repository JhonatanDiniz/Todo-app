import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TaskContext } from "@/context/TaskContext"
import { CircleCheck, Pencil, Trash } from "lucide-react"
import { useContext } from "react"

export default function TableTask() {
  const { tasks, finishedTask } = useContext(TaskContext)

  const getStatusClass = (status: string)=>{
    switch(status){
      case 'Em Andamento':
        return 'bg-yellow-700'
      case 'Concluído':
        return 'bg-green-700'
      case 'Atrasado':
        return 'bg-red-800'
    }
  }

  async function handleFinishedTask(id: number) {
    return finishedTask(id)
  }

  return (
    <Table className="border-2 border-muted-foreground">
      <TableCaption>Essa é sua lista de tarefas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Criado em</TableHead>
          <TableHead>Vencimento em</TableHead>
          <TableHead>Finalizado em</TableHead>
          <TableHead className="text-center">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) =>(
          <TableRow key={task.id}>
            <TableCell className="font-medium">{task.id}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>
              <div className={`${getStatusClass(task.status)} w-1/2 flex items-center justify-center p-1 rounded-md`}>
              {task.status}
              </div>
            </TableCell>
            <TableCell>{new Date(task.createdAt).toLocaleDateString('pt-BR')}</TableCell>
            <TableCell>{task.duDate ? new Date(task.duDate).toLocaleDateString('pt-BR') : ''}</TableCell>
            <TableCell>{task.finishedAt ? new Date(task.finishedAt).toLocaleDateString('pt-BR') : ''}</TableCell>
            <TableCell className="flex items-center justify-between">
              <div>
                <Trash className="text-red-700"/>
              </div>
              <div>
                <Pencil className="text-yellow-700"/>
              </div>
              <div>
                <CircleCheck onClick={task.finishedAt == null ? () => handleFinishedTask(task.id): undefined} className={`${task.finishedAt == null ? 'text-green-800 cursor-pointer' : 'text-green-950 cursor-not-allowed'}`}/>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}