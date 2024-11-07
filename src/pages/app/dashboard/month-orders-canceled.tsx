import { getMonthOrdersCanceledAmount } from "@/api/get-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";



export function MonthCanceledOrdersAmountCard(){

  
  const {data:monthOrdersCanceledAmount} = useQuery({
    queryFn:getMonthOrdersCanceledAmount,
    queryKey:['metrics','month-orders-amount'],
  })
  if(!monthOrdersCanceledAmount){
    return
  }
    const {TotalReceitas } = monthOrdersCanceledAmount ?? {}
    console.log(TotalReceitas)
    return(
        <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
          <DollarSign className="h-4 w-4  text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">{TotalReceitas}</span>
          <p className="text-sm text-muted-foreground"><span className="text-emerald-500 dark:text-emerald-400">-3%</span>em relação ao mês passado</p>
        </CardContent>
      </Card>
    )
}