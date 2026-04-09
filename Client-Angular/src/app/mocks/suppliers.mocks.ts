import { Supplier } from '../interfaces/suppliers.interface';

export const SUPPLIERS_MOCK: Supplier[] = [
  {
    id: 1,
    name: 'Proveedores del Valle SAS',
    contactName: 'Laura Torres',
    email: 'laura.torres@example.com',
    phone: '+57 300 111 2233',
    city: 'Buga',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Tecnologias del Pacifico',
    contactName: 'Andres Gil',
    email: 'andres.gil@example.com',
    phone: '+57 300 999 8877',
    city: 'Cali',
    status: 'Inactive',
  },
];
