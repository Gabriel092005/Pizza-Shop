import { api } from "@/lib/axios";

interface GetMonthOrderAmountResponse{
  ordersCount:{

    ordersCountCurrentMonth:number ,
    percentageChanger:number;

  }
    

}

export async function getMonthOrdersAmount(){
    const response = await api.get<GetMonthOrderAmountResponse>('/orders/by-month')
    return response.data
}