import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import About from "../pages/About";
import Docs from "../pages/Docs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
    ],
  },
]);

export default router;
