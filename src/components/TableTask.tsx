import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TaskContext } from "@/context/TaskContext"
import { CircleCheck, Pencil, Trash } from "lucide-react"
import { useContext } from "react"
import { Button } from "./ui/button"
import ModalDialog from "./ModalDialog"
import FormEditTask from "./FormEditTask"

export default function TableTask() {
  const { tasks, finishedTask, page, setPage, totalPages, deleteTask } = useContext(TaskContext)
  const currentPage = page

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

  async function handleDeleteTask(id: number) {
    return deleteTask(id)
  }

  async function handleFinishedTask(id: number) {
    return finishedTask(id)
  }

  return (
    <div>
      <Table className="border-2 border-muted-foreground">
        <TableCaption>Essa é sua lista de tarefas.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Título</TableHead>
            <TableHead className="text-center">Status</TableHead>
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
              <TableCell className={`${getStatusClass(task.status)} flex items-center justify-center rounded-md`}>

                {task.status}

              </TableCell>
              <TableCell>{new Date(task.createdAt).toLocaleDateString('pt-BR')}</TableCell>
              <TableCell>{task.duDate ? new Date(task.duDate).toLocaleDateString('pt-BR') : ''}</TableCell>
              <TableCell>{task.finishedAt ? new Date(task.finishedAt).toLocaleDateString('pt-BR') : ''}</TableCell>
              <TableCell className="flex items-center justify-between">

                {/* button delete */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="bg-red-700">
                      <Trash/>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Tem certeza que deseja excluir a tarefa?</AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDeleteTask(task.id)}>Excluir</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                {/* button edit */}
                <ModalDialog
                 titleModal="Editar Tarefa"
                 children= {<FormEditTask task={task} />}
                 textButton={
                  <Button className="bg-yellow-700">
                  <Pencil/>
                </Button>
                 }
                />

                 {/* button finished task */}
                <Button disabled={task.finishedAt != null} onClick={task.finishedAt == null ? () => handleFinishedTask(task.id): undefined} className={`${task.finishedAt == null ? 'bg-green-800 hover:opacity-50' : 'bg-green-950 hover:opacity-50 disabled: opacity-50'}`}>
                  <CircleCheck/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

        <div className="flex items-center justify-center gap-4 mt-6">
          <Button onClick={() => setPage(currentPage - 1)} disabled={currentPage <= 1} >Anterior</Button>
          <p>{currentPage}</p>
          <Button onClick={() => setPage(currentPage + 1)} disabled={currentPage >= totalPages} >Próximo</Button>
        </div>

    </div>
  )
}