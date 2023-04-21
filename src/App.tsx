import { createBrowserRouter } from "react-router-dom";
import { EditTask, Home, Root } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/edit/:id",
        element: <EditTask />,
      },
    ],
  },
]);
