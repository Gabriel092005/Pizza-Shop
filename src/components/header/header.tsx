import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "../ui/separator";
import { NavLink } from "./nav-link";
import { ModeToggle } from "../theme/theme-toggle";
import { AccountMenu } from "./account-menu";


export interface HeaderProps{}

export function Header(){
    return(
        <div className="border-b">
             <div className="flex h-16 items-center gap-6 px-6">
               <Pizza className="h-6 w-6"/>
               <Separator orientation="vertical"></Separator>

               <nav className="flex items-center space-x-4 lg:space-x-4">
                 <NavLink  to="/">
                   <Home className="w-4 h-4"/>
                    Início
                 </NavLink >
                 <NavLink to="/orders">
                   <UtensilsCrossed className="w-4 h-4"/>
                    Pedidos
                 </NavLink >
               </nav>
               <div className="ml-auto flex items-center gap-2">
                   <ModeToggle/>
                   <AccountMenu/>
               </div>
             </div>
         </div>
    
    )
}