import { api } from "@/lib/axios";



const userId = localStorage.getItem('userId'); 

console.log(userId)

export async function signOut(){

    await api.patch(`/logOut/${userId}`)

}