import FormNewTask from "./components/FormNewTask";
import Header from "./components/Header";
import ModalDialog from "./components/ModalDialog";
import TableTask from "./components/TableTask";

export default function App() {
  return (
    <div className="bg-zinc-900 text-zinc-200 min-h-screen w-full">
      <Header/>
      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-end">
          <ModalDialog
            textButton="Adicionar Tarefa"
            styleClass="bg-muted-foreground p-2 rounded-md"
            titleModal="Adicionar nova Tarefa"
            children=<FormNewTask/>
          />
        </div>
      </div>
      <main className="container mx-auto mt-12">
        <TableTask/>
      </main>
    </div>
  )
}
