import FormNewTask from "@/components/FormNewTask";
import ModalDialog from "@/components/ModalDialog";
import TableTask from "@/components/TableTask";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export default function Tasks() {
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
          <TableTask/>
        </main>
      </div>
  )
}
