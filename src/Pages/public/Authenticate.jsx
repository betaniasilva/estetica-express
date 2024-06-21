import { FormProvider, useForm } from "react-hook-form";
import db from "../../db";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import {useState} from 'react'
import Button from '../../components/Button'
import InputField from '../../components/FormFields/InputField'

export default function Authenticate() {
  const [isLogin,setIsLogin] = useState(true)

    const form = useForm({
      defaultValues: {
        email: "teste@hotmail.com",
        password: "123456",
        phone: "9999-9999"
      }
    })

  const handleAuthenticate = form.handleSubmit((data) => {
    if(isLogin){
      
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
          window.location.href = '/lista-de-itens'
        return
      } 

      return toast.error('Usuário ou senha inválidos',{ position: 'top-left', autoClose: 3000}) 
    }

    const user = db().push({...data})

    if(user){
      toast.success(
        'Usuário cadastrado com sucesso',
        { 
          position: 'top-left',
          autoClose: 3000,
        }
      )
        // window.location.href = '/account'
      return
    } 

    return toast.error('Erro no cadastro do usuário',{ position: 'top-left', autoClose: 3000}) 
  })

  return (
    <>
    <Header />
    <main className="max-w-full w-screen h-screen overflow-hidden flex flex-col justify-center items-center">

      <div className="bg-black flex item-center max-w-2xl max-h-fit w-full px-4 py-20 rounded-lg">
        <Button onClick={() => setIsLogin(true)} className="">Login</Button>
        <Button onClick={() => setIsLogin(false)} className="">Cadastro do usuário</Button>
      </div>

      <div className="max-w-2xl max-h-fit w-full bg-white px-4 py-20 rounded-lg">
          <FormProvider {...form}>
              <form className="flex flex-col gap-4 m-auto max-w-80 text-black">
                <h1 className="text-2xl font-bold">Login</h1>
                <InputField name={'email'} className="bg-gray-400 placeholder:text-black" />
                <InputField name={'password'} className="bg-gray-400 placeholder:text-black" />
                {!isLogin && (
                  <InputField name={'password'} className="bg-gray-400 placeholder:text-black" />
                )}
                <button onClick={handleAuthenticate} className="bg-slate-400 p-2 rounded-lg">
                  {isLogin ? "Login" : "Cadastrar"}
                </button>
              </form>
          </FormProvider>
       </div>
    </main>
    </>
  );
}