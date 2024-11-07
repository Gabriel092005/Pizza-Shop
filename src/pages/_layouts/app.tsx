import { Header } from "@/components/header/header";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function AppLayout(){
    const navigate = useNavigate()

    useEffect(()=>{

      const interceptorId = api.interceptors.response.use(
        response=>response,
        error=>{
          if(isAxiosError(error)){
            
            const status = error.response?.status
            const code = error.response?.data.code

            if(status===401 || code==='UNAUTHORIZED'){
              navigate('/sign-in', {replace:true})
              // replace para nao permitir o usuario nao voltar a dashboard caso ele nao esteja autenticado
            }
          }
        }
      )
      return ()=>{
        api.interceptors.response.eject(interceptorId)
      }
      //interceptando as respostas http para redirecionar o usuario no componente de autenticação
    },[navigate])


    return(
    <div className="flex min-h-screen flex-col antialiased">
           <Header/>
        <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
          <Outlet/>
        </div>
            
    </div>
     
    )

}