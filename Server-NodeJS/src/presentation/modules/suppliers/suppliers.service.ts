import { faker } from '@faker-js/faker';
import { Supplier, SupplierStatus } from '../../../domain/interfaces/supplier.interface';

/**
 * Servicio encargado de la generación y gestión de proveedores.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar proveedores
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class SuppliersService {

  /**
  * Estados disponibles para los proveedores.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un estado
   * a cada proveedor generado.
   */
  private statuses: SupplierStatus[] = [
    'Active',
    'Inactive',
  ];

  /**
  * Obtiene un listado de proveedores generados dinámicamente.
   *
  * @param countSuppliers Cantidad de proveedores a generar
  * @returns Promesa que resuelve un arreglo de proveedores
   *
   * @example
   * ```ts
   * const suppliers = await suppliersService.getAllSuppliers(5);
   * ```
   */
  public async getAllSuppliers(countSuppliers: number): Promise<Supplier[]> {
    const suppliers: Promise<Supplier>[] = [];

    for (let i = 1; i <= countSuppliers; i++) {
      suppliers.push(this.generateSupplier(i));
    }

    return Promise.all(suppliers);
  }

  /**
  * Genera un proveedor ficticio.
   *
   * @param id Identificador único del proveedor
   * @returns Promesa que resuelve un proveedor generado
   */
  private generateSupplier(id: number): Promise<Supplier> {
    return Promise.resolve({
      id,
      name: faker.company.name(),
      contactName: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      city: faker.location.city(),
      status: faker.helpers.arrayElement(this.statuses),
    });
  }
}
