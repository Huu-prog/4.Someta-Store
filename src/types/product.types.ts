// types/product.types.ts
export interface Product {
  id: number;
  categoryId: string;
  name: string;
  image: string;
  price: string;
  priceNumber: number;
  description?: string;
  stock?: number;

}

export interface Category {
  id: string;
  name: string;
  title:string;
  content:string;
  route?: string; // Thêm route để navigate
}