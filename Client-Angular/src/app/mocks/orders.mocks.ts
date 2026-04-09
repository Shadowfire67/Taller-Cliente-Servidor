import { Order } from '../interfaces/orders.interface';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    code: 'ORD-123456',
    customerName: 'Ana Maria Gomez',
    total: 359.95,
    status: 'Processing',
    createdAt: '2026-04-09T18:30:00.000Z',
  },
  {
    id: 2,
    code: 'ORD-654321',
    customerName: 'Carlos Ramirez',
    total: 120.5,
    status: 'Completed',
    createdAt: '2026-04-09T19:00:00.000Z',
  },
];
