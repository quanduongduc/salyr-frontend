import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notfound/page";
import Search from "../pages/search/page";
import Liked from "../pages/liked/page";
import Home from "../pages/mainPage/page";

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
        path: "/search",
        element: <Search />,
      },
      {
        path: "/Liked",
        element: <Liked />,
      },
      {
        path: "/Liked",
        element: <Liked />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
