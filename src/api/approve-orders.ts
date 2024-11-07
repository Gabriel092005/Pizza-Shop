import { api } from "@/lib/axios";


export interface ApproveOrderParams
{
  orderId:string
}

export async function approveOrder({orderId}:ApproveOrderParams)
{
     console.log(orderId)
     await api.patch(`/order/approve/${orderId}`)
}