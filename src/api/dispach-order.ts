import { api } from "@/lib/axios";


export interface dispachOrderParams
{
  orderId:string
}

export async function dispachOrder({orderId}:dispachOrderParams)
{
     await api.patch(`/order/dispach/${orderId}`)
}