import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient,} from "@tanstack/react-query";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";



const storeProfileSchema = z.object({
    name:z.string().min(1),
    description:z.string().nullable()
})

type StoreProfileSchema = z.infer< typeof storeProfileSchema >

export function StoreProfileDialog(){
    const queryClient = useQueryClient()
    
    function updateManagedRestaurantCached({description,name}:StoreProfileSchema){
        
        const cached = queryClient.getQueryData(['managed-restaurant'])
        
        if(cached){
            queryClient.setQueryData(['managed-restaurant'],{
                ...cached, name,description
            })
        }
    }
    const {data:managedRestaurant, isLoading:isLoadingRestaurant} = useQuery({
        queryKey:['managed-restaurant'],
        queryFn: getManagedRestaurant,
        staleTime:Infinity
    
    })
    

    const {mutateAsync : updateProfileFn} = useMutation({
        mutationFn:updateProfile,
        onMutate({name,description}) {
            updateManagedRestaurantCached({name,description})
            
        }
    })
    const {register,handleSubmit,formState:{isSubmitting}} = useForm<StoreProfileSchema>({
        resolver:zodResolver(storeProfileSchema),
        values:{
            description : managedRestaurant?.description || '',
            name:managedRestaurant?.name || '',
        }
    })
 
    async function handleDateUpdate(data:StoreProfileSchema){
        try {
            await updateProfileFn({
                name:data.name,
                description:data.description
            }
            )
            toast.success('perfil atualizado com sucesso')
        } catch (error) {
            toast.error('falha ao atualizar o perfil tente novamente')
            
        }

    }
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da Loja</DialogTitle>
                <DialogDescription className="text-muted-foreground sm ">Atualize as informações do seu estabelecimento visiveis no seu cliente</DialogDescription>
           
            </DialogHeader>
            <form  action="" onSubmit={handleSubmit(handleDateUpdate)}>
                <div className="space-y-4 gap-3">
                   <div className=" grid grid-cols-4 items-center gap-4">
                    <Label className="text-right" htmlFor="name">Nome</Label>
                    <Input className="col-span-3" id="name"{...register('name')}></Input>
                   </div>
             

                   <div className=" grid grid-cols-4 items-center gap-4">
                    <Label className="text-right" htmlFor="description">Descrição</Label>
                    <Input {...register('description')} className="col-span-3 h-28" id="description" ></Input>
                   </div>
                </div>
            <DialogFooter>
                   <DialogClose asChild>
                    <Button className='hover:bg-muted-foreground    'variant={"outline"}>Cancelar</Button>
                   </DialogClose>
                    <Button type="submit" variant='success' disabled={isSubmitting}>Salvar</Button>
           </DialogFooter>

            </form>
        </DialogContent>
    )
}