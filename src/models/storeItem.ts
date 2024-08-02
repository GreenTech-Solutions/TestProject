import { Category } from '@models';

export interface IStoreItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: Category;
  stock: number;
  image: string;
}
