import Header from "./components/Header";
import TableTask from "./components/TableTask";

export default function App() {
  return (
    <div className="bg-zinc-900 text-zinc-200 min-h-screen w-full">
      <Header/>
      <main className="container mx-auto mt-12">
        <TableTask/>
      </main>
    </div>
  )
}
