import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./pages/Root"
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { homeloader } from "./pages/home/homeLoader";

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
        //web fetch api request
        loader: async ({ request }) => {
          console.log(request)
          //create new instance of this url from request object
          const { searchParams } = new URL(request.url);
          //pull term out of url!
          const term = searchParams.get('term');
          console.log(term);

          if(!term){
            throw new Error('Search term muse be provided!')
          }

          const res = await fetch(`https://punkapi.online/v3/beers?page=1&?per_page=10&beer_name=${term}`)
          const data = await res.json();
          console.log(data)
        }
      },
      {
        path: "/details/:name",
        element: <DetailsPage />
      },
    ]
  }
])



function App() {
  return <RouterProvider router={router} />
}

export default App
