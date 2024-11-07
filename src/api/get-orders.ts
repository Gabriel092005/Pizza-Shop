import { api } from "@/lib/axios";

export interface GetOrdersResponse {
   costumerName: string;
   status: string;
   orderId: string;
   created_at: string;
   total: number | null;
   restaurantId: string;
}

export interface GetOrdersQuery{
   pageIndex?:number|null
   orderId?: string|null
   costumerName?: string|null
   status?: string|null
}



export async function getOrders({costumerName,orderId,status}:GetOrdersQuery) {

    const response = await api.get<GetOrdersResponse[]>(`/orders/fetch/`,{
      params:{
         costumerName,
         orderId,
         status
      }
    });

    return response.data; // Retorna somente o array Orders
 }
 