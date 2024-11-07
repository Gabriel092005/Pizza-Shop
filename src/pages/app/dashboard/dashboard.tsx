
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthOrderAmountCard } from "./month-order-amount";
import { DayOrdersAmountCard } from "./day-order-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-orders-canceled";
import { RevenueChart } from "./revenue-chart";
import { PupularProductsChart } from "./popular-products-charts";



export function DashBoard(){
    return(
       <>

<div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">DashBoard</h1>
            <div className="grid grid-cols-4 gap-4">
              <MonthRevenueCard/>
              <MonthOrderAmountCard/>
              <DayOrdersAmountCard/>
              <MonthCanceledOrdersAmountCard/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <RevenueChart/>
              <PupularProductsChart/>
            </div>
          
         </div>
           
       
       </>
       
         
    )
}

//grid-grelha
//grid-cols-4 quatro colunas