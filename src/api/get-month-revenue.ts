import { api } from "@/lib/axios";

interface GetMonthRevenueResponse{

   TotalReceitas:number

}

export async function getMonthRevenue(){
    const response = await api.get<GetMonthRevenueResponse>('/orders/totalReceiptByMonth')
    return response.data
}