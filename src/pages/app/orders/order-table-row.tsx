import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";


export function OrderTableRow(){
    return(
        
             <TableRow>
                            <TableCell>
                             <OrderDetails/>
                            </TableCell>
                            <TableCell className="fonto-mono font-medium">2345678sdfghj</TableCell>
                            <TableCell className="text-muted-foreground"> há 15min</TableCell>
                            <TableCell>
                                <div className=" flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"/>
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">Gabriel Manuel</TableCell>
                            <TableCell className="font-medium">
                              R$149,99 
                            </TableCell>
                            <TableCell className="">
                                <Button variant="outline">
                                    <ArrowRight className="h-3 w-3"/>
                                    Aprovar</Button>
                            </TableCell>
                            <TableCell>
                                <Button variant={"ghost"}>
                                    <X className="w-3 h-3"/>
                                    Cancelar
                                </Button>
                            </TableCell>
                        </TableRow>
        
    )
}