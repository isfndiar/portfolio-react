import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Home from "../pages/Home";
import Contacts from "../pages/Contacts";
import Projects from "../pages/Projects";
import Form from "../pages/FormtoPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/FormtoPage",
        element: <Form />,
      },
    ],
  },
]);
