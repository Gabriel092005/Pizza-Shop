import { api } from "@/lib/axios";

interface updateProfileBody{

    name:string,
    description:string | null

}

const restaurantId = localStorage.getItem('restaurantId'); 

export async function updateProfile({description,name}:updateProfileBody){

    await api.put(`profile/${restaurantId}`,{
        name,description
    })
}