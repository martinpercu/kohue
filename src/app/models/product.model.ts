import { Category } from './category.model'

export interface Product {
  id: number;
  title: string;
  subtitle?: string;
  titleCart: string;
  price: number;
  image?: string;
  imageMobile?: string;
  imageDesktop?: string;
  imageAll?: string;
  description: string;
  description_a?: string;
  description_b?: string;
  specsheet?: string;
  images: string[];
  creationAt?: string;
  category: Category;
  quantity: number;
}
