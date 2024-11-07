import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

export  interface PaginationProps{
    
    pageIndex:number
    totalCount:number
    perPage:number
}


export function Pagination({pageIndex,perPage,totalCount}:PaginationProps){

    const pages = Math.ceil(totalCount/perPage) || 1

    return(
        <div className="flex items-center  justify-between">
           <span className="text-sm text-muted-foreground">
            Total de {totalCount} item(s)
           </span>
           <div className="flex items-center gap-6 lg:gap-8">
              <div className="text-sm font-medium">
              <div> Página {pageIndex+1} de { pages}</div>
     
              </div>
              <div className="flex items-center gap-2">
                    <Button variant={"outline"} className="h-8 p-0">
                        <ChevronLeft className=""/>
                        <span className="sr-only">Primeira pagina    </span>
                    </Button>
                    <Button variant={"outline"} className="h-8 p-0">
                        <ChevronRight/>
                        <span className="sr-only">Proxima Página</span>
                    </Button>
                    <Button variant={"outline"} className="h-8 p-0">
                        <ChevronLeft/>
                        <span className="sr-only">Página Anterior</span>
                    </Button>
                    <Button variant={"outline"} className="h-8 p-0">
                        <ChevronRight/>
                        <span className="sr-only">Última Página</span>
                    </Button>
                </div>
           </div>
        </div>


    )
}