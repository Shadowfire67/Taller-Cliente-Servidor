import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { SuppliersPage } from './suppliers.page';
import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { SUPPLIERS_MOCK } from '../../mocks/suppliers.mocks';

describe('SuppliersPage', () => {
  let component: SuppliersPage;
  let fixture: ComponentFixture<SuppliersPage>;
  let suppliersService: SuppliersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppliersPage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliersPage);
    component = fixture.componentInstance;
    suppliersService = TestBed.inject(SuppliersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllSuppliers al iniciar', () => {
    const spyGetAllSuppliers = jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllSuppliers).toHaveBeenCalled();
  });

  it('debería asignar los proveedores recibidos del servicio', () => {
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    expect(component.suppliers).toEqual(SUPPLIERS_MOCK);
  });

  it('debería renderizar filas de proveedores', () => {
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(of(SUPPLIERS_MOCK));
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(SUPPLIERS_MOCK.length);
  });

  it('debería manejar el error cuando falla getAllSuppliers', () => {
    const errorResponse = new Error('Error al cargar proveedores');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(suppliersService, 'getAllSuppliers').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(suppliersService.getAllSuppliers).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.suppliers.length).toBe(0);
  });
});
