import FormNewTask from "@/components/FormNewTask";
import ModalDialog from "@/components/ModalDialog";
import TableTask from "@/components/TableTask";
import { Button } from "@/components/ui/button";
import { TaskContext } from "@/context/TaskContext";
import { Plus } from "lucide-react";
import { useContext } from "react";


export default function Tasks() {
  const { tasks } = useContext(TaskContext)
  return (
      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-end">
          <ModalDialog
            textButton={
              <Button className="bg-muted-foreground p-2 rounded-md hover:bg-muted hover:text-foreground">
                <Plus/>
                Adicionar Tarefa
              </Button>
            }
            titleModal="Adicionar nova Tarefa"
            children=<FormNewTask/>
          />
        </div>
        <main className="container mx-auto mt-12">
          {tasks.length > 0 ? <TableTask/> : <h1 className="text-2xl text-center font-bold">Você ainda não possui tarefas!</h1>}
        </main>
      </div>
  )
}
