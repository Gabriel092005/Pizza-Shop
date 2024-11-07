import { api } from "@/lib/axios";

interface GetRestaurantUseCaseResponse {
  restaurant:{
    restaurant:{
        name: string;
        id: string;
        manager_id: string;
        created_at: Date;
        updated_at: Date;
        description: string;
    }
  }
}

 export async function getManagedRestaurant(){

    const response = await api.get<GetRestaurantUseCaseResponse>('/managed/restaurant')
    const {data} = response
    const {restaurant} = data.restaurant

    const restaurantId = restaurant.id
   

    localStorage.setItem('restaurantId', restaurantId)
    



    return restaurant

 }