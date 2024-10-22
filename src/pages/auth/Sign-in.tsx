import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm} from 'react-hook-form'
import {z} from 'zod'
import {toast} from'sonner'
import { Link } from "react-router-dom";

const SignInForm =z.object({
    email:z.string().email()
})

type SignInFormInputs = z.infer< typeof SignInForm>


export function SignIn(){
   const { register, handleSubmit ,reset, formState:{isSubmitting}} = useForm<SignInFormInputs>()

   async function handleSignIn(data:SignInFormInputs)
    {
        
        
        try{
        
        toast.success('Enviamos um Link de autenticação',{
            action:{
                label:'Reenviar',
                onClick:()=>handleSignIn(data)
            }
        })
        reset()

        await new Promise((resolve)=>setTimeout(resolve,2000))

       }catch{
        toast.error('Credenciais inválidas')

       }
    }

    return(
        <>
        <div className="p-8">
            <div className="w-[350px] flex flex-col justify-center gap-6">
                <Button variant="outline" asChild className="absolute right-4 top-8">
                  <Link to="/sign-up" className="">Novo Estabelecimento</Link>
                </Button>
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight ">Acessar Painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
                    </div>
            </div>
            <form action="" className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                <div className="space-y-2">
                  <Label  htmlFor='' />
                  <Input id='email' placeholder="Seu Email" type="email" required {...register('email')}/>
                </div>
                <div>

                <Button className="w-full" type="submit" disabled={isSubmitting}>Acessar Painel</Button>
                </div>
            </form>

        </div>
        </>
    )
}