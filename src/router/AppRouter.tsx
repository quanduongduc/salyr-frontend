import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "@/pages/notfound/page";
import Search from "@/pages/search/page";
import Liked from "@/pages/liked/page";
import Home from "@/pages/mainPage/page";
import Account from "@/pages/account/page";
import AlbumPage from "@/pages/album/page";
import ArtistPage from "@/pages/artist/page";
import PlaylistPage from "@/pages/playlist/page";

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
        path: "/liked",
        element: <Liked />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/album/:id",
        element: <AlbumPage />,
      },
      {
        path: "/playlist/:id",
        element: <PlaylistPage />,
      },
      {
        path: "/artist/:id",
        element: <ArtistPage />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
