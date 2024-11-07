import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog";
import { Search } from "lucide-react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { getOrderDetail } from "@/api/get-order-details";
import { useState } from "react";
import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale'






export interface OrdersDetailsProps{
    orderId:string
    // open:boolean
}

export function OrderDetails({orderId}:OrdersDetailsProps){

    const [isDetailsOpen,setIsDetailsOpen]=useState(false)

    const {data:order} = useQuery({

        queryKey:['order',orderId],
        queryFn:()=>getOrderDetail({orderId}),

    })
    if(!order){
        return
    }



    return(
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogTrigger asChild>
        <Button size="sm" variant='outline'>
        <Search className=" h-3 w-3"/>
        <span className="sr-only">Detalhes do pedido</span>
      </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogTitle>Pedido: {order.orderId}</DialogTitle>
            <DialogDescription>Detalhes do Pedido</DialogDescription>
            <div className="space-y-6">
                <Table>
                    <TableRow>
                        <TableCell className="text-muted-foreground">
                        <div className=" flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">{order.status}</span>
                                </div>
                        </TableCell>
                        <TableCell>status</TableCell>
                    </TableRow>
                        <TableRow>
                        <TableCell>
                        <div className=" flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">{order.costumerName}</span>
                                </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                            Cliente
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                        <div className=" flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">Celular</span>
                                </div>
                        </TableCell>
                        <TableCell className="">
                            (+244) 931 120 510
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                        <div className=" flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">gabriecavalal@gmail.com</span>
                                </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                            Email
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                        <div className=" flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">Realizado há</span>
                         </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                               { formatDistanceToNow(order.created_at,{
                                locale:ptBR,
                                addSuffix:true
                               })}
                              
                        </TableCell>
                    </TableRow>
                    
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-right">Produto</TableHead>
                            <TableHead className="text-right">Quantidade</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">SubTotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-right" >Pizza Peperoni</TableCell>
                            <TableCell  className="text-right">2 </TableCell>
                            <TableCell className="text-right">$R 69,999</TableCell>
                            <TableCell className="text-right">$R 69,999</TableCell>


                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </DialogContent>
    </Dialog>
    )
}

