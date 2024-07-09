import { FormProvider, useForm } from "react-hook-form";
import Header from "../../components/Header";
import { useState } from "react";
import Button from "../../components/UI/Button";
import InputField from "../../components/FormFields/InputField";
import useAuthenticate from "../../hooks/useAuthenticate";
import useUsers from "../../hooks/useUsers";
import useCompanies from "../../hooks/useCompanies";
import cn from "../../utils/cn";

export default function Authenticate() {
  const [isLogin, setIsLogin] = useState(true);

  const { authenticate } = useAuthenticate();

  const { create: createUser } = useUsers();
  const { create: createCompany } = useCompanies();

  const form = useForm({
    defaultValues: {
      email: "teste@hotmail.com",
      password: "123456",
      phone: "9999-9999",
      name: "Manicure",
      type: null,
    },
  });

  const handleAuthenticate = form.handleSubmit((data) => {
    if (isLogin) {
      return authenticate(data.email, data.password);
    }
    if (data?.type === "company") {
      createCompany(data);
      authenticate(data.email, data.password);
    } else {
      createUser(data);
      authenticate(data.email, data.password);
    }
  });

  return (
    <>
      <Header />
      <main className="bg-white max-w-full w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
        <div className="max-w-2xl max-h-fit w-full px-4 py-20 shadow-black shadow-2xl rounded-lg">
          <div className="flex item-center">
            <Button
              onClick={() => setIsLogin(true)}
              className={cn(
                "transition-all duration-100 font-bold w-full rounded-r-none",
                {
                  "bg-blue-primary text-white": isLogin,
                  "bg-transparent border border-solid border-blue-primary text-blue-primary":
                    !isLogin,
                }
              )}
            >
              Login
            </Button>
            <Button
              onClick={() => setIsLogin(false)}
              className={cn(
                "transition-all duration-100 font-bold w-full rounded-l-none",
                {
                  "bg-blue-primary text-white": !isLogin,
                  "bg-transparent border border-solid border-blue-primary text-blue-primary":
                    isLogin,
                }
              )}
            >
              Cadastro do usuário
            </Button>
          </div>

          <FormProvider {...form}>
            <form className="mt-10 flex flex-col gap-4 mx-auto max-w-80 text-black">
              <h1 className="text-2xl font-bold">
                {isLogin ? "Login" : "Cadastrar"}
              </h1>
              {!isLogin && (
                <InputField
                  name={"name"}
                  className="bg-transparent border border-solid border-blue-primary placeholder:text-black"
                />
              )}
              <InputField
                name={"email"}
                className="bg-transparent border border-solid border-blue-primary placeholder:text-black"
              />
              <InputField
                name={"password"}
                type={"password"}
                className="bg-transparent border border-solid border-blue-primary placeholder:text-black"
              />
              {!isLogin && (
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      {...form.register("type")}
                      id="user"
                      type="radio"
                      value="user"
                    />
                    <label htmlFor="user">Usuário</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      {...form.register("type")}
                      id="company"
                      type="radio"
                      value="company"
                    />
                    <label htmlFor="company">Empresa</label>
                  </div>
                </div>
              )}

              <button
                onClick={handleAuthenticate}
                className="bg-blue-primary text-white p-2 rounded-lg font-bold"
              >
                {isLogin ? "Login" : "Cadastrar"}
              </button>
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  );
}
