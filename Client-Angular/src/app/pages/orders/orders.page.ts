import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { Order } from '../../interfaces/orders.interface';
import { State } from '../../interfaces/state.interface';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  imports: [AlertComponent],
})
export class OrdersPage {
  orders: Order[] = [];
  state: State = 'init';

  private ordersService = inject(OrdersService);

  ngOnInit(): void {
    this.state = 'loading';
    this.ordersService.getAllOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
