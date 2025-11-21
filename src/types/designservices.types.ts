// types/product.types.ts
export interface Design {
  id: number;
  categorizeId: string;
  name: string;
  image: string;
  price: string;
  priceNumber: number;
  description?: string;
  stock?: number;

}

export interface design {
  id: string;
  name: string;
  title:string;
  content:string;
  route?: string; // Thêm route để navigate
}