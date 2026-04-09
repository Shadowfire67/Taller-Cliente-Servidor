import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

/**
 * Servicio encargado de la generación y gestión de órdenes.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar órdenes
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
  * Estados disponibles para las órdenes.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un estado
   * a cada orden generada.
   */
  private statuses: OrderStatus[] = [
    'Pending',
    'Processing',
    'Completed',
    'Cancelled',
  ];

  /**
  * Obtiene un listado de órdenes generadas dinámicamente.
   *
  * @param countOrders Cantidad de órdenes a generar
  * @returns Promesa que resuelve un arreglo de órdenes
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(5);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
  * Genera una orden ficticia.
   *
   * @param id Identificador único de la orden
   * @returns Promesa que resuelve una orden generada
   */
  private generateOrder(id: number): Promise<Order> {
    return Promise.resolve({
      id,
      code: `ORD-${faker.string.numeric(6)}`,
      customerName: faker.person.fullName(),
      total: Number(faker.commerce.price({ min: 20, max: 2000, dec: 2 })),
      status: faker.helpers.arrayElement(this.statuses),
      createdAt: faker.date.recent().toISOString(),
    });
  }
}
