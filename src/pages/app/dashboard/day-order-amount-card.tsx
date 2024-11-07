import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard(){
  const {data:dayOrdersAmount} = useQuery({
    queryFn:getDayOrdersAmount,
    queryKey:['metrics','day-orders-amount'],
  })

    return(
        <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
          <Utensils className="h-4 w-4  text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          {dayOrdersAmount && (
            <>
            <span className="text-2xl font-bold tracking-tight">{dayOrdersAmount.ordersCountToday.ordersCountToday.toLocaleString('pt-BR')}</span>
            <p className="text-sm text-muted-foreground">
             {dayOrdersAmount.ordersCountToday.percentageChange>0 ? (
               <span className="text-emerald-400 dark:text-emerald -400">+{dayOrdersAmount.ordersCountToday.percentageChange}%</span>
             ):(
              <>
              <span className="text-rose-400 dark:text-rose-400">{dayOrdersAmount.ordersCountToday.percentageChange}%</span>em relação ao dia enterior
              </>
             )
            }
            </p>
            </>
            
          )}
        </CardContent>
      </Card>
    )
}