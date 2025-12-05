import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root"
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailsPage from "./pages/details/DetailsPage";
import { homeloader } from "./pages/home/homeLoader";
import { searchLoader } from "./pages/search/searchLoader";

//set up browser router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeloader
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader
      },
      {
        path: "/details/:name",
        element: <DetailsPage />
      },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
