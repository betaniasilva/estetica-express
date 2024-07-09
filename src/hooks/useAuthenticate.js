import { useState } from "react";
import { toast } from "react-toastify";

const useAuthenticate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (username, password) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const companies = JSON.parse(localStorage.getItem("companies"));

    const user =
      users.find((user) => user.email === username) ||
      companies.find((company) => company.email === username);

    if (user && user.password === password) {
      setIsAuthenticated(true);

      localStorage.setItem("me", JSON.stringify(user));

      toast.success("Usuário logado com sucesso", {
        position: "top-left",
        autoClose: 3000,
      });

      if (user.type === "company") {
        window.location.href = "/lista-de-itens";
      }

      if (user.type === "user") {
        window.location.href = "/account";
      }
    } else {
      toast.error("Usuário ou senha inválidos", {
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("me");
    window.location.href = "/";
  };

  return { isAuthenticated, authenticate, logout };
};

export default useAuthenticate;
