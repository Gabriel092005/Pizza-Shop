import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "@/components/header/order-status";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { canceledOrder } from "@/api/canceled-orders";
import { GetOrdersResponse } from "@/api/get-orders";
import { approveOrder } from "@/api/approve-orders";
import { deliverOrder } from "@/api/deliver-order";
import { dispachOrder } from "@/api/dispach-order";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";


export interface orderTableRowProps{
order:{
    costumerName: string;
    status: string;
    orderId: string;
    created_at: string;
    total: number | null;
    restaurantId: string;

   }
}

    export function OrderTableRow({order}:orderTableRowProps){
        function updateOrderStatusOnCash(status:string){
            const ordersListCached = queryClient.getQueriesData<GetOrdersResponse>({
                queryKey: ['orders']
            });
                if(ordersListCached){
                    queryClient.setQueryData(['orders'],{
                        ...ordersListCached.map(()=>{
                            order.status=status
                        })
                    })
                }
        }
     
        const queryClient = useQueryClient()

        const { mutateAsync: canceledOrderFn,isPending: isCanceledOrder} = useMutation({
            mutationFn: canceledOrder,
            async onSuccess(_, {}) {
                updateOrderStatusOnCash('canceled')
            }
        });

        const { mutateAsync: approveOrderFn,isPending:isApproveOrder} = useMutation({
            mutationFn: approveOrder,
            async onSuccess(_, {}) {
                updateOrderStatusOnCash('processing')
            }
        });
        const { mutateAsync: deliverOrderFn,isPending:isDeliveredOrder} = useMutation({
            mutationFn:deliverOrder,
            async onSuccess(_, {}) {
                updateOrderStatusOnCash('delivered')
            }
        });
        const { mutateAsync: dispachOrderFn,isPending:isDispachingOrder } = useMutation({
            mutationFn: dispachOrder,
            async onSuccess(_, {}) {
                updateOrderStatusOnCash('delivering')
            }
        });
    return(
        
             <TableRow>
                            <TableCell>
                             <OrderDetails  orderId={order.orderId}/>
                            </TableCell>
                            <TableCell className="fonto-mono font-medium">{order.orderId}</TableCell>
                            <TableCell className="text-muted-foreground"> 
                            { formatDistanceToNow(order.created_at,{
                                locale:ptBR,
                                addSuffix:true
                               })}
                            </TableCell>
                            <TableCell>
                               <OrderStatus Status={order.status}/>
                            </TableCell>
                            <TableCell className="font-medium">{order.costumerName}</TableCell>
                            <TableCell className="font-medium">
                              {order.total?.toLocaleString('pt-BR',{
                                style:'currency',
                                currency:'BRL'
                              })}
                            </TableCell>
                            <TableCell className="">
                             {order.status==='pending' &&(
                                   <Button disabled={isApproveOrder} onClick={()=>approveOrderFn({orderId:order.orderId})} variant="outline">
                                   <ArrowRight className="h-3 w-3"/>
                                   Aprovar</Button>
                             )}

                            {order.status==='processing' &&(
                                   <Button disabled={isDispachingOrder} onClick={()=>dispachOrderFn({orderId:order.orderId})} variant="outline">
                                   <ArrowRight className="h-3 w-3"/>
                                   Em Entrega</Button>
                             )}

                                {order.status==='delivered' &&(
                                   <Button disabled={isDeliveredOrder} onClick={()=>deliverOrderFn({orderId:order.orderId})} variant="outline">
                                   <ArrowRight className="h-3 w-3"/>
                                   Entregue</Button>
                             )}
                            </TableCell>
                            <TableCell>
                                <Button onClick={()=>canceledOrderFn({orderId:order.orderId})} disabled={!['pending','processing'].includes(order.status) || isCanceledOrder} variant={"ghost"}>
                                    <X className="w-3 h-3"/>
                                    Cancelar
                                </Button>
                            </TableCell>
                        </TableRow>
        
    )
}