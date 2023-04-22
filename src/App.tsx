import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { EditTask, Home, Root } from "./pages";

export const router = createMemoryRouter([
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
