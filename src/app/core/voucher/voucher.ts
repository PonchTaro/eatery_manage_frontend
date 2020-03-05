import { Table } from '../table/table';
import { Product } from '../product/product';

export class Voucher {
    id: number;
    table: Table;
    products: Product[];
}
