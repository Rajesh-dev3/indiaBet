import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import LayoutPrimary from "../common/LayoutPrimary";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPrimary />,
      children:[
        {
            path:"/",
            element:"dashboard"
        }
      ]
    },
    {
        path:"/login",
        element:<Login/>
    }
  ]);