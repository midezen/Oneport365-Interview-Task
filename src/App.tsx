import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";
import AddNew from "./pages/AddNew";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/preview",
      element: <Preview />,
    },
    {
      path: "/addnew",
      element: <AddNew />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
