type orderstatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered';

interface OrderStatusProps {
  Status: orderstatus | string; // Agora aceita strings genéricas também
}

const OrderStatusMap: Record<orderstatus, string> = {
  pending: 'pendente',
  canceled: 'cancelado',
  delivered: 'entregue',
  delivering: 'em entrega',
  processing: 'em preparo'
};

export function OrderStatus({ Status }: OrderStatusProps) {
  // Verifica se o Status é um dos valores mapeados ou exibe um fallback
  const statusDisplay = OrderStatusMap[Status as orderstatus] || 'Status desconhecido';

  return (
    <div>
      <div className="flex items-center gap-2">
        {Status === 'pending' && (
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
        )}

        {Status === 'canceled' && (
          <span className="h-2 w-2 rounded-full bg-rose-500"></span>
        )}

        {Status === 'delivered' && (
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
        )}

        {['delivering', 'processing'].includes(Status) && (
          <span className="h-2 w-2 rounded-full bg-orange-400"></span>
        )}

        {/* Exibe o status ou um fallback */}
        <span className="font-medium text-muted-foreground">{statusDisplay}</span>
      </div>
    </div>
  );
}
