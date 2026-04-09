export interface Order {
  id: number;
  code: string;
  customerName: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Completed' | 'Cancelled';
