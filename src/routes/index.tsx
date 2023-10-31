import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Chat from "../pages/Chat";

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
        path: "/Chat",
        element: <Chat />,
      },
    ],
  },
]);

export default router;
