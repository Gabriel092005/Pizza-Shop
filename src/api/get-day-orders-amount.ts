import { api } from "@/lib/axios";

interface GetDayOrderAmountResponse{
    ordersCountToday:{
        
        ordersCountToday: number;
        ordersCountYesterday: number;
        percentageChange: number;

    }
      
}

export async function getDayOrdersAmount(){
    const response = await api.get<GetDayOrderAmountResponse>('/orders/by-day')
    return response.data
}