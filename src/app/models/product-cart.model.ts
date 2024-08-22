import { Category } from './category.model'

export interface ProductCart {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  creationAt?: string;
  category: Category;
  quantity: number;
}
