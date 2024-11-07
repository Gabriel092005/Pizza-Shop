import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableRow} from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/header/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'




export function Orders(){
       const [searchParams, setSearchParams] = useSearchParams()


       const orderId = searchParams.get('orderId')
       const costumerName = searchParams.get('costumerName')
       const status = searchParams.get('status')

       const pageIndex = z.coerce.number().transform((page)=>page-1).parse(searchParams.get('page')??'1')

    const {data:orders} = useQuery({
        queryKey:['orders',pageIndex,orderId,costumerName,status],
        queryFn:()=>getOrders({ pageIndex, costumerName,orderId,status}),
    })
         
    return(
        <>
        
        <Helmet title="pedidos"/>
       <div className="flex flex-col gap-4 "></div>
       <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>
            <OrderTableFilters/>
        <div className="space-y-2.5">
            <div className="border rounded-md">
                <Table className=""> 
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[64px]"></TableHead>
                            <TableHead className="w-[140px]">Indentificador</TableHead>
                            <TableHead className="w-[180px]">Realizado há</TableHead>
                            <TableHead className="w-[140px]">Status</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead className="w-[140px]">Total do Pedido</TableHead>
                            <TableHead className="w-[164px]"></TableHead>
                            <TableHead className="w-[132px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                   {orders && orders.map(orders=>{
                    return <OrderTableRow key={orders.orderId} order={orders} />
                   })}
                    </TableBody>
                </Table>

            </div>
            <Pagination pageIndex={0} totalCount={105} perPage={10 }/>
        </div>
        </>
     
    )
}