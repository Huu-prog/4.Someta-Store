// data/index.ts
import type { Product, Category } from '@/types/product.types';
import type {Design , design} from '@/types/designservices.types'
// Import categories
export { categories } from '@/components/main/Seemorefeaturedcategories/Data/categories.data';
export { categorizing } from '@/components/main/Seemorefeaturedcategories/Data/designservices.data';
// Import products từ từng file
import { productsGomSu } from '@/components/main/Seemorefeaturedcategories/AllProductgomsu/products-gom-su.data';
import { productsThietke } from '@/components/main/Seemorefeaturedcategories/Dichvuthietke/products-dichvuthietke.data';
import { productsInan } from '@/components/main/Seemorefeaturedcategories/Dichvuinan/products-dichvuinan.data';
// import { productsThuytinh } from '@/components/main/Seemorefeaturedcategories/AllProductgomsu/products-thuy-tinh.data';

// ... import thêm các category khác

// Export riêng lẻ (nếu cần)

export { productsGomSu};
export { productsThietke};
export { productsInan};
// export { productsThuytinh};
// Gộp tất cả products lại
export const allProducts: Product[] = [
  ...productsGomSu,
  ...productsThietke,
  ...productsInan,
  // ... spread các mảng products khác
];

// Helper functions
export const getProductsByCategory = (categoryId: string): Product[] => {
  return allProducts.filter(product => product.categoryId === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(cat => cat.id === categoryId); // ✅ Dùng import
};

export const getProductById = (productId: number): Product | undefined => {
  return allProducts.find(product => product.id === productId);
};

// Get products by price range
export const getProductsByPriceRange = (min: number, max: number): Product[] => {
  return allProducts.filter(
    product => product.priceNumber >= min && product.priceNumber <= max
  );
};

// Search products by name
export const searchProducts = (keyword: string): Product[] => {
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
};