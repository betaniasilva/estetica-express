import { FormProvider, useForm } from "react-hook-form";
import db from "../../db";
import { toast } from "react-toastify";
import Header from "../../components/Header";

export default function Authenticate() {

    const form = useForm({
      defaultValues: {
        email: "teste@hotmail.com",
        password: "123456"
      }
    })

    const handleLogin = form.handleSubmit((data) => {

      //TODO - Implementar a chamada para a API
     const user = db().find((item) => item.email === data.email && item.password === data.password)
      
     if(user){
       toast.success(
        'Usuário logado com sucesso',
        { 
          position: 'top-left',
          autoClose: 3000,
        }
      )
        // window.location.href = '/account'
       return
      } 

      toast.error('Usuário ou senha inválidos',
        { 
          position: 'top-left',
          autoClose: 3000,
        }
      )

      return
    })

  return (
    <>
    <Header />
    <main className="max-w-full w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="max-w-2xl max-h-fit w-full bg-white px-4 py-20 rounded-lg">
       <FormProvider {...form}>
          <form className="flex flex-col gap-4 m-auto max-w-80 text-black">
            <h1 className="text-2xl font-bold">Login</h1>
            <input {...form.register('email')} type="text" placeholder="E-mail" className="bg-gray-400 p-2 placeholder:text-black rounded-lg"/>
            <input {...form.register('password')} type="password" placeholder="Password" className="bg-gray-400 p-2 placeholder:text-black rounded-lg"/>
            <button onClick={handleLogin} className="bg-slate-400 p-2 rounded-lg">Login</button>
          </form>
       </FormProvider>
       </div>
    </main>
    </>
  );
}