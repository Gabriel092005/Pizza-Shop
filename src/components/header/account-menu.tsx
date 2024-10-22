import { Building, ChevronDown, LogOut, Ruler } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

export function AccountMenu(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap 2 select-none">
                    Pizza Shop
                    <ChevronDown className="w-4 r-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Diego Fernandes</span>
                    <span className="text-xs font-normal font-normal text-muted-foreground">diego@rocketseat.com.br</span>
                </DropdownMenuLabel>
                  <DropdownMenuSeparator></DropdownMenuSeparator>
                <DropdownMenuItem className="">
                    <Building className="w-4 mr-4"/> 
                    <span>Perfil da Loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="w-4 mr-4"/> 
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}