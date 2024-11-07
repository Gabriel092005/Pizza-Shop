import { api } from "@/lib/axios";

interface GetProfileResponse{
 user:{
  user:{
    name: string;
    email: string;
    phone: string|null
    id: string;
    created_at: Date | null;
    updated_at: Date | null;
    role: 'manager'|'customer'
   }
 }
}



export async function getProfile()
{
    const response = await api.get<GetProfileResponse>('/me')
    const userId =  response.data.user.user.id
    localStorage.setItem('userId',userId )
    return response.data.user

    



}