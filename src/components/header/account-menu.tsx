import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Mutation, useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "../ui/skeleton";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";




export function AccountMenu() {
    
   const navigate =useNavigate()

   const{data:profile, isLoading:isLoadingProfile}=useQuery({
     queryKey:['profile'],
     queryFn:getProfile,
     staleTime:Infinity
   })

const {data:managedRestaurant, isLoading:isLoadingRestaurant} = useQuery({
    queryKey:['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime:Infinity
})

const {mutateAsync:SignOutFn,isPending:iSsigningOut} = useMutation({
    mutationFn:signOut,
    onSuccess:()=>{
        navigate('/sign-in',{replace:true})

    }
    
})
   return (
        <Dialog>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                   {isLoadingRestaurant?(
                    <Skeleton className="h-4 w-40"/>
                   ):managedRestaurant?.name}
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>   {isLoadingRestaurant?(
                    <div className="space-y-1.5">
                        <Skeleton className=" h-4 w-40"/>
                        <Skeleton className="h-4 w-40"/>
                    </div>
                    
                   ):profile?.user.email}</span>
                    <span className="text-xs font-normal text-muted-foreground">
                        {profile?.user.email}
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DialogTrigger>
                <DropdownMenuItem>
                    <Building className="w-4 mr-4" />
                    <span>Perfil da Loja</span>
                </DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuItem asChild  className="text-rose-500 dark:text-rose-400" disabled={iSsigningOut}>
                    <button className="w-full" onClick={()=>SignOutFn()}>
                    <LogOut className="w-4 mr-4" />
                    <span>Sair</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
       <StoreProfileDialog/>
        </Dialog>
    );
}
