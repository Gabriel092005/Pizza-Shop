import { api } from "@/lib/axios";


export interface GetOrdersDetailsParams
{
  orderId:string
}

export async function canceledOrder({orderId}:GetOrdersDetailsParams)
{
     await api.patch(`/order/${orderId}`)
}