import { createBrowserRouter } from "react-router-dom";
import { Home, Root } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'',
        element:<Home/>
      }
    ]
  },
]);
