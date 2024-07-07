import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Authenticate from "../Pages/public/Authenticate";
import Account from "../Pages/private/Account";
import ListOfItems from "../Pages/private/ListOfItems";
import { useEffect } from "react";
import db from "../db";

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
    },
  ]);

  useEffect(() => {
    //Popular o localstorage caso não tenha nada
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(db().users));
    }

    if (!localStorage.getItem("companies")) {
      localStorage.setItem("companies", JSON.stringify(db().companies));
    }

    if (!localStorage.getItem("services")) {
      localStorage.setItem("services", JSON.stringify(db().services));
    }
  });

  return <RouterProvider router={routers} />;
};

export default RoutesProvider;
