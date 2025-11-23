// types/product.types.ts
export interface Printing {
  id: number;
  categori_id: string;
  name: string;
  image: string;
  price: string;
  priceNumber: number;
  description?: string;
  stock?: number;

}

export interface printing {
  id: string;
  name: string;
  title:string;
  content:string;
  route?: string; // Thêm route để navigate
}