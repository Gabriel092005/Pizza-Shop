import { api } from "@/lib/axios";

interface GetMonthOrderCanceledResponse{

    TotalReceitas:number

}

export async function getMonthOrdersCanceledAmount(){
    const response = await api.get<GetMonthOrderCanceledResponse>('orders/totalReceiptCanceled')
    console.log(response.data.TotalReceitas)
 
    return response.data
}