import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { State } from '../../interfaces/state.interface';
import { Supplier } from '../../interfaces/suppliers.interface';
import { SuppliersService } from '../../services/suppliers/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  imports: [AlertComponent],
})
export class SuppliersPage {
  suppliers: Supplier[] = [];
  state: State = 'init';

  private suppliersService = inject(SuppliersService);

  ngOnInit(): void {
    this.state = 'loading';
    this.suppliersService.getAllSuppliers(10).subscribe({
      next: (suppliers) => {
        this.suppliers = suppliers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
