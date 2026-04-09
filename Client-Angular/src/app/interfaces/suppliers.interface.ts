export interface Supplier {
  id: number;
  name: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  status: SupplierStatus;
}

export type SupplierStatus = 'Active' | 'Inactive';
