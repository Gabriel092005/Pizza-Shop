import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem ,SelectTrigger,SelectValue,SelectContent} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";


export function OrderTableFilters(){
    const [searchParams,SetSearchParams] = useSearchParams()

    const OrderId= searchParams.get('orderId')
    const CostumerName = searchParams.get('costumerName')
    const Status= searchParams.get('status')

    const orderFiltersSchema = z.object({
        OrderId : z.string().optional(),
        costumerName : z.string().optional(),
        status: z.string().optional()
        
    })

    type OrdersFiltersSchema = z.infer<typeof orderFiltersSchema>


         const {register,handleSubmit,control,reset } = useForm<OrdersFiltersSchema>({
            resolver:zodResolver( orderFiltersSchema),
            defaultValues: {
                OrderId: OrderId ?? '',
                costumerName : CostumerName ?? '',
                status : Status ?? 'all'

                
            },
         })
     function handleFilters({OrderId,costumerName,status}:OrdersFiltersSchema){
        SetSearchParams(state=>{ //pego o estado atual da url
            if(OrderId){
                state.set('orderId',OrderId)
            }else{
                state.delete('orderId')
            }

            if(costumerName){
                state.set('costumerName',costumerName)
            }else{
                state.delete('costumerName')
            }

            if(status){
                state.set('status',status)
            }else{
                state.delete('status')
             }
            state.set('page','1')

            return state
        })
     }
     function handleFilter(){
        SetSearchParams(state=>{
            state.delete('orderId')
            state.delete('costumerName')
            state.delete('status')
       
            return state
          
        })

        reset({
            OrderId:'',
            costumerName:'',
            status:''
                
        })
     }
    return(
        <form onSubmit={ handleSubmit(handleFilters)} action=""className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
            <Input {...register('OrderId')} placeholder="ID do pedido" className="h-8 w-auto"></Input>
            <Input {...register('costumerName')} placeholder="Nome do cliente" className="h-8 w-[328px]"></Input>
            <Controller
             name="status"
             control={control}
             render={({field:{name,onChange,value,disabled}})=>{
                return(
                    <Select defaultValue='all' name={name} onValueChange={onChange} value={value} disabled={disabled}>
                    <SelectTrigger className="h-8 w-[180px]">
                        <SelectValue/>
                    </SelectTrigger>
                 <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="canceled">Cancelado</SelectItem>
                        <SelectItem value="processing">Em Preparo</SelectItem>
                        <SelectItem value="delivering">Em entrega</SelectItem>
                        <SelectItem value="delivered">Entregue</SelectItem>
                    </SelectContent>
                </Select>
                )
             }}
            
            />
            <Button type="submit" variant={"secondary"}>
                <Search className="w-3 h-3 mr-2"></Search>
                Filtrar Resultados
            </Button>
            <Button onClick={handleFilter} variant={"outline"}>
                <X className="w-3 h-3 mr-2"/>
                Remover Filtros
            </Button>
        </form>
        
    )

    
}