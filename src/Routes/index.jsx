import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Authenticate from "../Pages/public/Authenticate";
import Account from "../Pages/private/Account";
import ListOfItems from "../Pages/private/ListOfItems";

const RoutesProvider = () => {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/authenticate",
      element: <Authenticate />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/lista-de-itens",
      element: <ListOfItems />,
    }
  ]);

  return (
    <RouterProvider router={routers} />
  )
}

export default RoutesProvider