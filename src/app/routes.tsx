import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { BookMaker } from "./pages/BookMaker";
import { MusicStudio } from "./pages/MusicStudio";
import { ShortsCreator } from "./pages/ShortsCreator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book",
    element: <BookMaker />,
  },
  {
    path: "/music",
    element: <MusicStudio />,
  },
  {
    path: "/shorts",
    element: <ShortsCreator />,
  },
]);
