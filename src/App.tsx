import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import Ledger from "./components/dashboard/Ledger";
import DashboardNotFound from "./components/dashboard/DashboardNotFound";
import Transaction from "./components/dashboard/transaction";
import EditTransaction from "./components/dashboard/EditTransaction";
import ViewTransaction from "./components/dashboard/ViewTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "ledger", element: <Ledger /> },
      { path: "transaction", element: <Transaction /> },
      { path: "edit-transaction/:id", element: <EditTransaction /> },
      { path: "view-transaction/:id", element: <ViewTransaction /> },
      { path: "*", element: <DashboardNotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
