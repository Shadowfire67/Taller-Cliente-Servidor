import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { OrdersPage } from './orders.page';
import { OrdersService } from '../../services/orders/orders.service';
import { ORDERS_MOCK } from '../../mocks/orders.mocks';

describe('OrdersPage', () => {
  let component: OrdersPage;
  let fixture: ComponentFixture<OrdersPage>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersPage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersPage);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrders al iniciar', () => {
    const spyGetAllOrders = jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllOrders).toHaveBeenCalled();
  });

  it('debería asignar las órdenes recibidas del servicio', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    expect(component.orders).toEqual(ORDERS_MOCK);
  });

  it('debería renderizar filas de órdenes', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS_MOCK));
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(ORDERS_MOCK.length);
  });

  it('debería manejar el error cuando falla getAllOrders', () => {
    const errorResponse = new Error('Error al cargar ordenes');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ordersService.getAllOrders).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.orders.length).toBe(0);
  });
});
