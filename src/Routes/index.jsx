import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home";
import Authenticate from "../Pages/public/Authenticate";
import Account from "../Pages/private/Account";

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
    }
  ]);

  return (
    <RouterProvider router={routers} />
  )
}

export default RoutesProvider