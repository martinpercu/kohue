import { Category } from './category.model'

export interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
  imageMobile?: string;
  imageDesktop?: string;
  description: string;
  images: string[];
  creationAt?: string;
  category: Category;
  quantity: number;
}
