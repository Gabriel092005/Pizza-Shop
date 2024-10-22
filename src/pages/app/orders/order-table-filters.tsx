import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem ,SelectTrigger,SelectValue,SelectContent} from "@/components/ui/select";
import { Search, X } from "lucide-react";


export function OrderTableFilters(){
    return(
        <form action=""className="flex items-center gap-2">
        <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do pedido" className="h-8 w-auto"></Input>
            <Input placeholder="Nome do cliente" className="h-8 w-[328px]"></Input>
            <Select defaultValue='all'>
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
            <Button type="submit" variant={"secondary"}>
                <Search className="w-3 h-3 mr-2"></Search>
                Filtrar Resultados
            </Button>
            <Button variant={"outline"}>
                <X className="w-3 h-3 mr-2"/>
                Remover Filtros
            </Button>
        </form>
        
    )

    
}