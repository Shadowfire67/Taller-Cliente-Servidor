import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Supplier } from '../../interfaces/suppliers.interface';
import { SUPPLIERS_MOCK } from '../../mocks/suppliers.mocks';
import { SuppliersService } from './suppliers.service';

describe('SuppliersService', () => {
  let service: SuppliersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(SuppliersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una petición GET y retornar una lista de proveedores', () => {
    const countSuppliers = 5;
    const mockSuppliers: Supplier[] = SUPPLIERS_MOCK;

    service.getAllSuppliers(countSuppliers).subscribe((suppliers) => {
      expect(suppliers).toEqual(mockSuppliers);
      expect(suppliers.length).toBe(mockSuppliers.length);
    });

    const req = httpMock.expectOne(`api/suppliers/${countSuppliers}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockSuppliers);
  });

  it('debería propagar un error si la petición HTTP falla', () => {
    const countSuppliers = 3;

    service.getAllSuppliers(countSuppliers).subscribe({
      next: () => {
        fail('No debería emitir datos cuando ocurre un error');
      },
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });

    const req = httpMock.expectOne(`api/suppliers/${countSuppliers}`);

    req.flush(
      { message: 'Error interno del servidor' },
      { status: 500, statusText: 'Internal Server Error' }
    );
  });
});
