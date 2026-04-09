import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../interfaces/suppliers.interface';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  private httpClient = inject(HttpClient);

  getAllSuppliers(countSuppliers: number): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(`api/suppliers/${countSuppliers}`);
  }
}
