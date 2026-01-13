import { BrowserRouter } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
    <BrowserRouter>
      <UserRoutes />
      <AdminRoutes />
    </BrowserRouter>
  );
}



export default App;
