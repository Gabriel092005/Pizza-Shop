import { api } from "@/lib/axios";

export interface SignUpBody
{
    restaurant_name : string
    email:string
    name:string
    phone:string
}

export async function registerRestaurant({email,name,phone,restaurant_name}:SignUpBody)
{
    await api.post('/users',{email,name,phone,restaurant_name})

}