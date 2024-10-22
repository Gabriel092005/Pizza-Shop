import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm} from 'react-hook-form'
import {z} from 'zod'
import {toast} from'sonner'
import { Link, useNavigate } from "react-router-dom";

const SignUpForm =z.object({
    restaurantName:z.string(),
    managerName : z.string(),
    phone:z.string(),
    email:z.string().email()
})

type SignUpFormInputs = z.infer< typeof SignUpForm>


export function SignUp(){
   const navigate = useNavigate()
   const { register, handleSubmit ,reset, formState:{isSubmitting}} = useForm<SignUpFormInputs>()

   async function handleSignUp(data:SignUpFormInputs)
    {
        
        console.log(data)
        
        try{
                        
                        
                        toast.success('Enviamos um Link de autenticação',{
                           action:{
                              label:'Login',
                              onClick:()=>navigate('/sign-in')
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
                  <Link to="/sign-in" className="">Fazer Login</Link>
                </Button>
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight ">Cria sua Conta Gratís</h1>
                        <p className="text-sm text-muted-foreground">Seja Parceiro e comece suas vendas</p>
                    </div>
            </div>
            <div>
            <form action="" className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                <div className="space-y-2">
                  <Label  htmlFor='' />
                  <Input id='restaurantName' placeholder="Nome do restaurante" type="text" required {...register('restaurantName')}/>
                </div>
                <div className="space-y-2">
                  <Label  htmlFor='' />
                  <Input id='email' placeholder="Seu Email" type="email" required {...register('email')}/>
                </div>
                <div className="space-y-2">
                  <Label  htmlFor='' />
                  <Input id='managerName' placeholder="Nome do Gestor" type="text" required {...register('managerName')}/>
                </div>
                <div className="space-y-2">
                  <Label  htmlFor='' />
                  <Input id='phone' placeholder="Seu Telefone" type="text" required {...register('phone')}/>
                </div>
                <div>
                <Button className="w-full" type="submit" disabled={isSubmitting}>Finalizar Cadastro</Button>
                </div>
                <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                    Ao Continuar voce concorda com nossos termos de <br /> <a className="underline underline-offset-4" href="">
                   servicos </a>e de <a className="underline underline-offset-4" href="">privacidade</a> 
                </p>
               </form>
            </div>
        </div>
        </>
    )
}