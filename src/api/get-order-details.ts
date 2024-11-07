import { api } from "@/lib/axios";


export interface GetOrdersDetailsParams
{
  orderId:string
}

export interface GetOrdersDetailsResponse
{
    Orders:{
    costumerName:string
    created_at:string,
    orderId:string
    restaurantId:string
    status:string
    total:number
    } 
}

export async function getOrderDetail({orderId}:GetOrdersDetailsParams)
{
    const response = await api.get<GetOrdersDetailsResponse>(`/ordersDetails/${orderId}`)
    return response.data.Orders
}