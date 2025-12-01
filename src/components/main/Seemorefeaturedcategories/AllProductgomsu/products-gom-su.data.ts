// data/products-gom-su.data.ts

import type { Product } from '@/types/product.types';
const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// Helper - gõ đường dẫn đầy đủ
const img = (path) => {
  const fullPath = `/src/assets/images/${path}`;
  return images[fullPath] || '';
};

export const productsGomSu: Product[] = [
  // ==================== GỐM SỨ (ID: 1-30) ====================

{
  id: 1,
  categoryId: 'qua-tang-phat-giao',
  name: 'Bộ ấm chén gốm sứ Bát Tràng cao cấp',
  image: img('gomsu/1.jpg'),
  logo: img('logo.png'), // Thêm trường logo
  price: '1.500.000đ',
  priceNumber: 1500000,
  description: 'Bộ ấm chén gốm sứ Bát Tràng với họa tiết truyền thống',
  stock: 15
},
{
  id: 2,
  categoryId: 'qua-tang-dai-hoi',
  name: 'Bộ quà tặng hội nghị cao cấp',
  image: img('daihoi/1.jpg'),
  price: '800.000đ',
  priceNumber: 800000,
  description: 'Bộ quà tặng hội nghị bao gồm sổ tay, bút ký và túi vải canvas',
  stock: 50
},
{
  id: 3,
  categoryId: 'qua-tang-khach-hang',
  name: 'Giỏ quà tết cao cấp',
  image: img('khachhang/1.jpg'),
  price: '2.500.000đ',
  priceNumber: 2500000,
  description: 'Giỏ quà tết sang trọng với đặc sản và rượu cao cấp',
  stock: 30
},
{
  id: 4,
  categoryId: 'qua-tang-cong-doan',
  name: 'Túi quà tết công đoàn',
  image: img('congdoan/1.jpg'),
  price: '500.000đ',
  priceNumber: 500000,
  description: 'Túi quà tết dành cho người lao động với thực phẩm thiết yếu',
  stock: 100
},
{
  id: 5,
  categoryId: 'qua-tang-nhan-vien',
  name: 'Đồng hồ để bàn cao cấp',
  image: img('nhanvien/1.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Đồng hồ để bàn sang trọng có thể khắc tên nhân viên',
  stock: 25
},
{
  id: 6,
  categoryId: 'qua-tang-may-mac',
  name: 'Cây kim tiền phong thủy',
  image: img('maymac/1.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Cây kim tiền trong chậu gốm sứ, mang lại may mắn tài lộc',
  stock: 40
},
{
  id: 7,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà gỗ cao cấp',
  image: img('hopqua/1.jpg'),
  price: '200.000đ',
  priceNumber: 200000,
  description: 'Hộp gỗ sang trọng có thể in logo doanh nghiệp',
  stock: 60
}

];
