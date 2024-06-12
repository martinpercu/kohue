import { Category } from './category.model'

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  images: string[];
  creationAt?: string;
  category: Category;
  quantity: number;
}
