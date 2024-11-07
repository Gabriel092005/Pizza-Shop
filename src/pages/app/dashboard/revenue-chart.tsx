import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import{
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
} from 'recharts'
import color from'tailwindcss/colors'
const data =[
    { date : '10/12', revenue:29110},
    {  date : '12/12', revenue:3200},
    {date : '12/12', revenue:1200},
    {date : '13/12', revenue:12500},
    { date : '14/12', revenue:2200},
    {date : '15/12', revenue:5200},
    {date : '16/12', revenue:8230}
]

export function RevenueChart(){
    return(
       <Card>
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">Receita no Periódo</CardTitle>
            <CardDescription>Receita diária no periodo</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={data} style={{fontSize:12}}>
              <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={color.violet[400]}/>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}></XAxis>
                <YAxis width={80} stroke="#888" axisLine={false} tickFormatter={(value:number)=> value.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}/>
               <CartesianGrid className="stroke-muted" vertical={false}/>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
       </Card>
    )
}