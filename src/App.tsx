import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import { AppRoutes } from "./Routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";


export default function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}
