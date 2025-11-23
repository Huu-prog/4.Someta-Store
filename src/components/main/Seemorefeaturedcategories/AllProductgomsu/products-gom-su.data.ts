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
  categoryId: 'gom-su',
  name: 'Bộ ấm chén gốm sứ Bát Tràng cao cấp',
  image: img('gomsu/1.jpg'),
  price: '1.500.000đ',
  priceNumber: 1500000,
  description: 'Bộ ấm chén gốm sứ Bát Tràng với họa tiết truyền thống',
  stock: 15
},
{
  id: 2,
  categoryId: 'gom-su',
  name: 'Bộ tách trà gốm sứ hoa sen',
  image: img('gomsu/2.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Bộ tách trà gốm sứ họa tiết hoa sen tinh tế',
  stock: 20
},
{
  id: 3,
  categoryId: 'gom-su',
  name: 'Lọ hoa gốm sứ Bát Tràng vẽ tay',
  image: img('gomsu/3.jpg'),
  price: '650.000đ',
  priceNumber: 650000,
  description: 'Lọ hoa gốm sứ vẽ tay nghệ thuật, trang trí nội thất',
  stock: 12
},
{
  id: 4,
  categoryId: 'gom-su',
  name: 'Bình hút lộc gốm sứ men rạn',
  image: img('gomsu/4.jpg'),
  price: '2.200.000đ',
  priceNumber: 2200000,
  description: 'Bình hút lộc gốm sứ men rạn cổ điển, may mắn tài lộc',
  stock: 8
},
{
  id: 5,
  categoryId: 'gom-su',
  name: 'Bộ bát đĩa gốm sứ 10 món',
  image: img('gomsu/5.jpg'),
  price: '1.800.000đ',
  priceNumber: 1800000,
  description: 'Bộ bát đĩa gốm sứ cao cấp 10 món cho gia đình',
  stock: 18
},
{
  id: 6,
  categoryId: 'gom-su',
  name: 'Chén cơm gốm sứ hoa văn xanh',
  image: img('gomsu/6.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Bộ 6 chén cơm gốm sứ hoa văn xanh truyền thống',
  stock: 25
},
{
  id: 7,
  categoryId: 'gom-su',
  name: 'Ấm trà gốm sứ Nhật Bản',
  image: img('gomsu/7.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Ấm trà gốm sứ phong cách Nhật Bản thanh lịch',
  stock: 10
},
{
  id: 8,
  categoryId: 'gom-su',
  name: 'Tranh gốm sứ phong cảnh Việt Nam',
  image: img('gomsu/8.jpg'),
  price: '3.500.000đ',
  priceNumber: 3500000,
  description: 'Tranh gốm sứ vẽ phong cảnh Việt Nam độc đáo',
  stock: 5
},
{
  id: 9,
  categoryId: 'gom-su',
  name: 'Khay mứt Tết gốm sứ 5 ngăn',
  image: img('gomsu/9.jpg'),
  price: '750.000đ',
  priceNumber: 750000,
  description: 'Khay mứt Tết gốm sứ 5 ngăn họa tiết hoa mai',
  stock: 30
},
{
  id: 10,
  categoryId: 'gom-su',
  name: 'Hũ đựng trà gốm sứ men ngọc',
  image: img('gomsu/10.jpg'),
  price: '950.000đ',
  priceNumber: 950000,
  description: 'Hũ đựng trà gốm sứ men ngọc bảo quản tốt',
  stock: 14
},
{
  id: 11,
  categoryId: 'gom-su',
  name: 'Bộ ly sứ cao cấp 6 chiếc',
  image: img('gomsu/11.jpg'),
  price: '420.000đ',
  priceNumber: 420000,
  description: 'Bộ 6 ly sứ cao cấp uống nước hàng ngày',
  stock: 22
},
{
  id: 12,
  categoryId: 'gom-su',
  name: 'Đĩa trang trí gốm sứ treo tường',
  image: img('gomsu/12.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Đĩa gốm sứ trang trí treo tường nghệ thuật',
  stock: 16
},
{
  id: 13,
  categoryId: 'gom-su',
  name: 'Bình cắm hoa gốm sứ hình ống tre',
  image: img('gomsu/13.jpg'),
  price: '720.000đ',
  priceNumber: 720000,
  description: 'Bình cắm hoa gốm sứ hình ống tre độc đáo',
  stock: 11
},
{
  id: 14,
  categoryId: 'gom-su',
  name: 'Tách cafe sứ trắng cao cấp',
  image: img('gomsu/14.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Bộ 2 tách cafe sứ trắng thanh lịch',
  stock: 28
},
{
  id: 15,
  categoryId: 'gom-su',
  name: 'Bộ gia vị gốm sứ 4 món',
  image: img('gomsu/15.jpg'),
  price: '340.000đ',
  priceNumber: 340000,
  description: 'Bộ gia vị gốm sứ 4 món cho bếp ăn',
  stock: 19
},
{
  id: 16,
  categoryId: 'gom-su',
  name: 'Chậu cây cảnh gốm sứ men xanh',
  image: img('gomsu/16.jpg'),
  price: '890.000đ',
  priceNumber: 890000,
  description: 'Chậu cây cảnh gốm sứ men xanh ngọc bích',
  stock: 13
},
{
  id: 17,
  categoryId: 'gom-su',
  name: 'Tượng Phật Di Lặc gốm sứ',
  image: img('gomsu/17.jpg'),
  price: '1.650.000đ',
  priceNumber: 1650000,
  description: 'Tượng Phật Di Lặc gốm sứ may mắn phong thủy',
  stock: 7
},
{
  id: 18,
  categoryId: 'gom-su',
  name: 'Đèn xông tinh dầu gốm sứ',
  image: img('gomsu/18.jpg'),
  price: '320.000đ',
  priceNumber: 320000,
  description: 'Đèn xông tinh dầu gốm sứ thơm phòng',
  stock: 24
},
{
  id: 19,
  categoryId: 'gom-su',
  name: 'Bình đựng rượu gốm sứ 5 lít',
  image: img('gomsu/19.jpg'),
  price: '2.800.000đ',
  priceNumber: 2800000,
  description: 'Bình đựng rượu gốm sứ 5 lít cao cấp',
  stock: 6
},
{
  id: 20,
  categoryId: 'gom-su',
  name: 'Bộ đũa gốm sứ 5 đôi',
  image: img('gomsu/20.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Bộ 5 đôi đũa gốm sứ họa tiết hoa văn',
  stock: 35
},
{
  id: 21,
  categoryId: 'gom-su',
  name: 'Bát súp gốm sứ có nắp',
  image: img('gomsu/21.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Bộ 4 bát súp gốm sứ có nắp giữ nhiệt',
  stock: 17
},
{
  id: 22,
  categoryId: 'gom-su',
  name: 'Đĩa oval gốm sứ 30cm',
  image: img('gomsu/22.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Đĩa oval gốm sứ 30cm đựng cá, thịt',
  stock: 21
},
{
  id: 23,
  categoryId: 'gom-su',
  name: 'Hũ đựng gạo gốm sứ 10kg',
  image: img('gomsu/23.jpg'),
  price: '1.950.000đ',
  priceNumber: 1950000,
  description: 'Hũ đựng gạo gốm sứ 10kg chống ẩm mốc',
  stock: 9
},
{
  id: 24,
  categoryId: 'gom-su',
  name: 'Bộ tách trà Trung Hoa cổ điển',
  image: img('gomsu/24.jpg'),
  price: '2.100.000đ',
  priceNumber: 2100000,
  description: 'Bộ tách trà Trung Hoa họa tiết rồng phượng',
  stock: 8
},
{
  id: 25,
  categoryId: 'gom-su',
  name: 'Chén ăn cơm Nhật Bản ceramic',
  image: img('gomsu/25.jpg'),
  price: '520.000đ',
  priceNumber: 520000,
  description: 'Bộ 6 chén ăn cơm phong cách Nhật Bản',
  stock: 26
},
{
  id: 26,
  categoryId: 'gom-su',
  name: 'Lọ đựng muối tiêu gốm sứ',
  image: img('gomsu/26.jpg'),
  price: '240.000đ',
  priceNumber: 240000,
  description: 'Bộ 2 lọ đựng muối tiêu gốm sứ mini',
  stock: 32
},
{
  id: 27,
  categoryId: 'gom-su',
  name: 'Tô phở gốm sứ Bát Tràng',
  image: img('gomsu/27.jpg'),
  price: '680.000đ',
  priceNumber: 680000,
  description: 'Bộ 6 tô phở gốm sứ Bát Tràng cao cấp',
  stock: 15
},
{
  id: 28,
  categoryId: 'gom-su',
  name: 'Bình trà gốm sứ giữ nhiệt',
  image: img('gomsu/28.jpg'),
  price: '1.350.000đ',
  priceNumber: 1350000,
  description: 'Bình trà gốm sứ giữ nhiệt 1 lít cao cấp',
  stock: 12
},
{
  id: 29,
  categoryId: 'gom-su',
  name: 'Dĩa sứ trắng hình vuông 25cm',
  image: img('gomsu/29.jpg'),
  price: '290.000đ',
  priceNumber: 290000,
  description: 'Bộ 6 dĩa sứ trắng hình vuông 25cm',
  stock: 27
},
{
  id: 30,
  categoryId: 'gom-su',
  name: 'Bộ bình ly gốm sứ Nhật 7 món',
  image: img('gomsu/30.jpg'),
  price: '1.480.000đ',
  priceNumber: 1480000,
  description: 'Bộ bình ly gốm sứ Nhật 1 bình 6 ly cao cấp',
  stock: 10
},
// ==================== THỦY TINH PHA LÊ (ID: 31-60) ====================
{
  id: 31,
  categoryId: 'thuy-tinh',
  name: 'Cúp pha lê vinh danh ngôi sao',
  image: img('thuytinh/1.jpg'),
  price: '2.500.000đ',
  priceNumber: 2500000,
  description: 'Cúp pha lê vinh danh hình ngôi sao cao cấp',
  stock: 12
},
{
  id: 32,
  categoryId: 'thuy-tinh',
  name: 'Biểu trưng pha lê khắc laser 3D',
  image: img('thuytinh/2.jpg'),
  price: '3.200.000đ',
  priceNumber: 3200000,
  description: 'Biểu trưng pha lê khắc laser 3D chuyên nghiệp',
  stock: 8
},
{
  id: 33,
  categoryId: 'thuy-tinh',
  name: 'Bộ ly rượu vang pha lê 6 chiếc',
  image: img('thuytinh/3.jpg'),
  price: '1.850.000đ',
  priceNumber: 1850000,
  description: 'Bộ 6 ly rượu vang pha lê cao cấp Bohemia',
  stock: 15
},
{
  id: 34,
  categoryId: 'thuy-tinh',
  name: 'Bình hoa pha lê khắc hoa văn',
  image: img('thuytinh/4.jpg'),
  price: '2.800.000đ',
  priceNumber: 2800000,
  description: 'Bình hoa pha lê khắc hoa văn tinh xảo',
  stock: 10
},
{
  id: 35,
  categoryId: 'thuy-tinh',
  name: 'Cúp pha lê oval vinh danh',
  image: img('thuytinh/5.jpg'),
  price: '1.950.000đ',
  priceNumber: 1950000,
  description: 'Cúp pha lê hình oval khắc tên vinh danh',
  stock: 18
},
{
  id: 36,
  categoryId: 'thuy-tinh',
  name: 'Bộ ly whisky pha lê vuông',
  image: img('thuytinh/6.jpg'),
  price: '1.450.000đ',
  priceNumber: 1450000,
  description: 'Bộ 6 ly whisky pha lê vuông sang trọng',
  stock: 20
},
{
  id: 37,
  categoryId: 'thuy-tinh',
  name: 'Đĩa trang trí pha lê 30cm',
  image: img('thuytinh/7.jpg'),
  price: '1.680.000đ',
  priceNumber: 1680000,
  description: 'Đĩa trang trí pha lê 30cm cao cấp',
  stock: 14
},
{
  id: 38,
  categoryId: 'thuy-tinh',
  name: 'Biểu trưng pha lê chữ nhật',
  image: img('thuytinh/8.jpg'),
  price: '2.100.000đ',
  priceNumber: 2100000,
  description: 'Biểu trưng pha lê chữ nhật khắc logo',
  stock: 16
},
{
  id: 39,
  categoryId: 'thuy-tinh',
  name: 'Bình đựng rượu pha lê có nắp',
  image: img('thuytinh/9.jpg'),
  price: '3.500.000đ',
  priceNumber: 3500000,
  description: 'Bình đựng rượu pha lê có nắp 1.5 lít',
  stock: 7
},
{
  id: 40,
  categoryId: 'thuy-tinh',
  name: 'Cúp pha lê thể thao',
  image: img('thuytinh/10.jpg'),
  price: '1.750.000đ',
  priceNumber: 1750000,
  description: 'Cúp pha lê thể thao vinh danh vô địch',
  stock: 22
},
{
  id: 41,
  categoryId: 'thuy-tinh',
  name: 'Bộ bình ly pha lê khắc hoa',
  image: img('thuytinh/11.jpg'),
  price: '2.950.000đ',
  priceNumber: 2950000,
  description: 'Bộ bình ly pha lê khắc hoa văn cổ điển',
  stock: 9
},
{
  id: 42,
  categoryId: 'thuy-tinh',
  name: 'Ly champagne pha lê cao cấp',
  image: img('thuytinh/12.jpg'),
  price: '1.280.000đ',
  priceNumber: 1280000,
  description: 'Bộ 6 ly champagne pha lê cao cấp',
  stock: 19
},
{
  id: 43,
  categoryId: 'thuy-tinh',
  name: 'Biểu trưng pha lê tròn khắc 3D',
  image: img('thuytinh/13.jpg'),
  price: '2.650.000đ',
  priceNumber: 2650000,
  description: 'Biểu trưng pha lê tròn khắc 3D độc đáo',
  stock: 11
},
{
  id: 44,
  categoryId: 'thuy-tinh',
  name: 'Đèn chùm pha lê mini',
  image: img('thuytinh/14.jpg'),
  price: '4.200.000đ',
  priceNumber: 4200000,
  description: 'Đèn chùm pha lê mini trang trí cao cấp',
  stock: 5
},
{
  id: 45,
  categoryId: 'thuy-tinh',
  name: 'Cúp pha lê hình cầu',
  image: img('thuytinh/15.jpg'),
  price: '1.890.000đ',
  priceNumber: 1890000,
  description: 'Cúp pha lê hình cầu vinh danh đặc biệt',
  stock: 13
},
{
  id: 46,
  categoryId: 'thuy-tinh',
  name: 'Bộ ly cocktail pha lê',
  image: img('thuytinh/16.jpg'),
  price: '1.550.000đ',
  priceNumber: 1550000,
  description: 'Bộ 6 ly cocktail pha lê phong cách Bar',
  stock: 17
},
{
  id: 47,
  categoryId: 'thuy-tinh',
  name: 'Tượng thiên nga pha lê đôi',
  image: img('thuytinh/17.jpg'),
  price: '3.800.000đ',
  priceNumber: 3800000,
  description: 'Tượng thiên nga pha lê đôi trang trí',
  stock: 6
},
{
  id: 48,
  categoryId: 'thuy-tinh',
  name: 'Cắm bút pha lê để bàn',
  image: img('thuytinh/18.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Cắm bút pha lê để bàn làm việc cao cấp',
  stock: 25
},
{
  id: 49,
  categoryId: 'thuy-tinh',
  name: 'Biểu trưng pha lê kim cương',
  image: img('thuytinh/19.jpg'),
  price: '2.450.000đ',
  priceNumber: 2450000,
  description: 'Biểu trưng pha lê hình kim cương sang trọng',
  stock: 14
},
{
  id: 50,
  categoryId: 'thuy-tinh',
  name: 'Bộ ly nước pha lê 6 chiếc',
  image: img('thuytinh/20.jpg'),
  price: '980.000đ',
  priceNumber: 980000,
  description: 'Bộ 6 ly nước pha lê uống hàng ngày',
  stock: 28
},
{
  id: 51,
  categoryId: 'thuy-tinh',
  name: 'Cúp pha lê chữ V vinh danh',
  image: img('thuytinh/21.jpg'),
  price: '2.200.000đ',
  priceNumber: 2200000,
  description: 'Cúp pha lê chữ V vinh danh chiến thắng',
  stock: 12
},
{
  id: 52,
  categoryId: 'thuy-tinh',
  name: 'Bình rượu pha lê khắc rồng',
  image: img('thuytinh/22.jpg'),
  price: '4.500.000đ',
  priceNumber: 4500000,
  description: 'Bình rượu pha lê khắc rồng phong thủy',
  stock: 4
},
{
  id: 53,
  categoryId: 'thuy-tinh',
  name: 'Đồng hồ pha lê để bàn',
  image: img('thuytinh/23.jpg'),
  price: '1.650.000đ',
  priceNumber: 1650000,
  description: 'Đồng hồ pha lê để bàn làm việc cao cấp',
  stock: 16
},
{
  id: 54,
  categoryId: 'thuy-tinh',
  name: 'Bộ ly brandy pha lê cổ điển',
  image: img('thuytinh/24.jpg'),
  price: '1.780.000đ',
  priceNumber: 1780000,
  description: 'Bộ 6 ly brandy pha lê phong cách cổ điển',
  stock: 15
},
{
  id: 55,
  categoryId: 'thuy-tinh',
  name: 'Biểu trưng pha lê tháp',
  image: img('thuytinh/25.jpg'),
  price: '2.850.000đ',
  priceNumber: 2850000,
  description: 'Biểu trưng pha lê hình tháp cao cấp',
  stock: 10
},
{
  id: 56,
  categoryId: 'thuy-tinh',
  name: 'Gạt tàn pha lê vuông',
  image: img('thuytinh/26.jpg'),
  price: '680.000đ',
  priceNumber: 680000,
  description: 'Gạt tàn pha lê vuông sang trọng',
  stock: 21
},
{
  id: 57,
  categoryId: 'thuy-tinh',
  name: 'Cúp pha lê hình quả địa cầu',
  image: img('thuytinh/27.jpg'),
  price: '3.100.000đ',
  priceNumber: 3100000,
  description: 'Cúp pha lê hình quả địa cầu độc đáo',
  stock: 8
},
{
  id: 58,
  categoryId: 'thuy-tinh',
  name: 'Bộ bình thủy tinh pha lê',
  image: img('thuytinh/28.jpg'),
  price: '2.350.000đ',
  priceNumber: 2350000,
  description: 'Bộ bình thủy tinh pha lê đựng nước',
  stock: 13
},
{
  id: 59,
  categoryId: 'thuy-tinh',
  name: 'Khay đựng trang sức pha lê',
  image: img('thuytinh/29.jpg'),
  price: '1.150.000đ',
  priceNumber: 1150000,
  description: 'Khay đựng trang sức pha lê cao cấp',
  stock: 18
},
{
  id: 60,
  categoryId: 'thuy-tinh',
  name: 'Biểu trưng pha lê hình lá',
  image: img('thuytinh/30.jpg'),
  price: '1.950.000đ',
  priceNumber: 1950000,
  description: 'Biểu trưng pha lê hình lá nghệ thuật',
  stock: 11
},
// ==================== VINH DANH (ID: 61-90) ====================
{
  id: 61,
  categoryId: 'vinh-danh',
  name: 'Cúp vàng vinh danh cao cấp 35cm',
  image: img('vinhdanh/1.jpg'),
  price: '3.200.000đ',
  priceNumber: 3200000,
  description: 'Cúp vàng vinh danh cao cấp cao 35cm mạ vàng 24K',
  stock: 12
},
{
  id: 62,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng gỗ đồng vinh danh',
  image: img('vinhdanh/2.jpg'),
  price: '1.850.000đ',
  priceNumber: 1850000,
  description: 'Biểu trưng gỗ đồng vinh danh khắc tên cao cấp',
  stock: 20
},
{
  id: 63,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương pha lê hình tròn',
  image: img('vinhdanh/3.jpg'),
  price: '1.450.000đ',
  priceNumber: 1450000,
  description: 'Kỷ niệm chương pha lê hình tròn có chân đế',
  stock: 18
},
{
  id: 64,
  categoryId: 'vinh-danh',
  name: 'Cúp bạc vinh danh thể thao',
  image: img('vinhdanh/4.jpg'),
  price: '2.800.000đ',
  priceNumber: 2800000,
  description: 'Cúp bạc vinh danh dành cho giải thể thao',
  stock: 15
},
{
  id: 65,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng đồng đỏ khắc nổi',
  image: img('vinhdanh/5.jpg'),
  price: '1.250.000đ',
  priceNumber: 1250000,
  description: 'Biểu trưng đồng đỏ khắc nổi logo doanh nghiệp',
  stock: 22
},
{
  id: 66,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương vàng hình ngôi sao',
  image: img('vinhdanh/6.jpg'),
  price: '980.000đ',
  priceNumber: 980000,
  description: 'Kỷ niệm chương vàng hình ngôi sao kèm hộp',
  stock: 25
},
{
  id: 67,
  categoryId: 'vinh-danh',
  name: 'Cúp pha lê vinh danh có đế gỗ',
  image: img('vinhdanh/7.jpg'),
  price: '2.650.000đ',
  priceNumber: 2650000,
  description: 'Cúp pha lê trong suốt kết hợp đế gỗ cao cấp',
  stock: 14
},
{
  id: 68,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng inox vàng hình khiên',
  image: img('vinhdanh/8.jpg'),
  price: '1.580.000đ',
  priceNumber: 1580000,
  description: 'Biểu trưng inox mạ vàng hình khiên sang trọng',
  stock: 19
},
{
  id: 69,
  categoryId: 'vinh-danh',
  name: 'Cúp đồng vinh danh kỷ niệm',
  image: img('vinhdanh/9.jpg'),
  price: '2.100.000đ',
  priceNumber: 2100000,
  description: 'Cúp đồng vinh danh kỷ niệm khắc chữ miễn phí',
  stock: 16
},
{
  id: 70,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương mica vàng đồng',
  image: img('vinhdanh/10.jpg'),
  price: '680.000đ',
  priceNumber: 680000,
  description: 'Kỷ niệm chương mica vàng đồng giá rẻ',
  stock: 30
},
{
  id: 71,
  categoryId: 'vinh-danh',
  name: 'Cúp vàng hình cánh chim đại bàng',
  image: img('vinhdanh/11.jpg'),
  price: '3.500.000đ',
  priceNumber: 3500000,
  description: 'Cúp vàng hình cánh chim đại bàng cao 40cm',
  stock: 8
},
{
  id: 72,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng gỗ hương cao cấp',
  image: img('vinhdanh/12.jpg'),
  price: '2.200.000đ',
  priceNumber: 2200000,
  description: 'Biểu trưng gỗ hương tự nhiên khắc laser',
  stock: 13
},
{
  id: 73,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương đồng hình lục giác',
  image: img('vinhdanh/13.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Kỷ niệm chương đồng hình lục giác độc đáo',
  stock: 24
},
{
  id: 74,
  categoryId: 'vinh-danh',
  name: 'Cúp pha lê 3D khắc chân dung',
  image: img('vinhdanh/14.jpg'),
  price: '4.200.000đ',
  priceNumber: 4200000,
  description: 'Cúp pha lê 3D khắc laser chân dung bên trong',
  stock: 6
},
{
  id: 75,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng bạc vinh danh nhân viên',
  image: img('vinhdanh/15.jpg'),
  price: '1.680.000đ',
  priceNumber: 1680000,
  description: 'Biểu trưng bạc vinh danh nhân viên xuất sắc',
  stock: 17
},
{
  id: 76,
  categoryId: 'vinh-danh',
  name: 'Cúp vàng hình quả địa cầu',
  image: img('vinhdanh/16.jpg'),
  price: '2.950.000đ',
  priceNumber: 2950000,
  description: 'Cúp vàng hình quả địa cầu biểu tượng toàn cầu',
  stock: 11
},
{
  id: 77,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương gỗ treo tường',
  image: img('vinhdanh/17.jpg'),
  price: '1.150.000đ',
  priceNumber: 1150000,
  description: 'Kỷ niệm chương gỗ treo tường khắc chữ',
  stock: 20
},
{
  id: 78,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng pha lê hình lá cờ',
  image: img('vinhdanh/18.jpg'),
  price: '1.850.000đ',
  priceNumber: 1850000,
  description: 'Biểu trưng pha lê hình lá cờ Việt Nam',
  stock: 15
},
{
  id: 79,
  categoryId: 'vinh-danh',
  name: 'Cúp đồng thau vinh danh golf',
  image: img('vinhdanh/19.jpg'),
  price: '2.480.000đ',
  priceNumber: 2480000,
  description: 'Cúp đồng thau dành cho giải golf cao cấp',
  stock: 12
},
{
  id: 80,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương bạc hình tháp',
  image: img('vinhdanh/20.jpg'),
  price: '1.380.000đ',
  priceNumber: 1380000,
  description: 'Kỷ niệm chương bạc hình tháp có hộp nhung',
  stock: 18
},
{
  id: 81,
  categoryId: 'vinh-danh',
  name: 'Cúp vàng vinh danh bóng đá',
  image: img('vinhdanh/21.jpg'),
  price: '3.100.000đ',
  priceNumber: 3100000,
  description: 'Cúp vàng vinh danh giải bóng đá cao 38cm',
  stock: 10
},
{
  id: 82,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng đá hoa cương đen',
  image: img('vinhdanh/22.jpg'),
  price: '2.750.000đ',
  priceNumber: 2750000,
  description: 'Biểu trưng đá hoa cương đen khắc vàng sang trọng',
  stock: 9
},
{
  id: 83,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương vàng hình oval',
  image: img('vinhdanh/23.jpg'),
  price: '920.000đ',
  priceNumber: 920000,
  description: 'Kỷ niệm chương vàng hình oval kèm dây đeo',
  stock: 28
},
{
  id: 84,
  categoryId: 'vinh-danh',
  name: 'Cúp pha lê ngọn lửa vinh danh',
  image: img('vinhdanh/24.jpg'),
  price: '2.580.000đ',
  priceNumber: 2580000,
  description: 'Cúp pha lê hình ngọn lửa biểu tượng đam mê',
  stock: 13
},
{
  id: 85,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng đồng vàng hình tròn',
  image: img('vinhdanh/25.jpg'),
  price: '1.450.000đ',
  priceNumber: 1450000,
  description: 'Biểu trưng đồng vàng hình tròn treo tường',
  stock: 21
},
{
  id: 86,
  categoryId: 'vinh-danh',
  name: 'Cúp bạc hình cánh buồm',
  image: img('vinhdanh/26.jpg'),
  price: '2.350.000đ',
  priceNumber: 2350000,
  description: 'Cúp bạc hình cánh buồm biểu tượng chiến thắng',
  stock: 14
},
{
  id: 87,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương mica hình lục giác',
  image: img('vinhdanh/27.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Kỷ niệm chương mica trong suốt hình lục giác',
  stock: 32
},
{
  id: 88,
  categoryId: 'vinh-danh',
  name: 'Biểu trưng pha lê kim cương lớn',
  image: img('vinhdanh/28.jpg'),
  price: '3.800.000đ',
  priceNumber: 3800000,
  description: 'Biểu trưng pha lê kim cương cao 30cm cực đẹp',
  stock: 7
},
{
  id: 89,
  categoryId: 'vinh-danh',
  name: 'Cúp đồng đỏ vinh danh tennis',
  image: img('vinhdanh/29.jpg'),
  price: '2.680.000đ',
  priceNumber: 2680000,
  description: 'Cúp đồng đỏ dành cho giải tennis chuyên nghiệp',
  stock: 11
},
{
  id: 90,
  categoryId: 'vinh-danh',
  name: 'Kỷ niệm chương vàng hình chữ nhật',
  image: img('vinhdanh/30.jpg'),
  price: '1.280.000đ',
  priceNumber: 1280000,
  description: 'Kỷ niệm chương vàng hình chữ nhật có khắc tên',
  stock: 19
},
// ==================== NHÂN VIÊN (ID: 91-120) ====================
{
  id: 91,
  categoryId: 'nhan-vien',
  name: 'Bộ quà tặng văn phòng cao cấp',
  image: img('nhanvien/1.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Bộ quà tặng văn phòng gồm bút, sổ tay, cốc giữ nhiệt',
  stock: 50
},
{
  id: 92,
  categoryId: 'nhan-vien',
  name: 'Túi canvas tote bag in logo',
  image: img('nhanvien/2.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Túi canvas tote bag in logo công ty chất lượng cao',
  stock: 100
},
{
  id: 93,
  categoryId: 'nhan-vien',
  name: 'Bình giữ nhiệt inox 500ml',
  image: img('nhanvien/3.jpg'),
  price: '320.000đ',
  priceNumber: 320000,
  description: 'Bình giữ nhiệt inox 304 khắc tên nhân viên',
  stock: 80
},
{
  id: 94,
  categoryId: 'nhan-vien',
  name: 'Sổ tay da cao cấp có logo',
  image: img('nhanvien/4.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Sổ tay bìa da cao cấp khắc logo doanh nghiệp',
  stock: 60
},
{
  id: 95,
  categoryId: 'nhan-vien',
  name: 'Bút ký cao cấp Parker',
  image: img('nhanvien/5.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Bút ký Parker khắc tên tặng nhân viên',
  stock: 30
},
{
  id: 96,
  categoryId: 'nhan-vien',
  name: 'Cốc sứ in hình theo yêu cầu',
  image: img('nhanvien/6.jpg'),
  price: '120.000đ',
  priceNumber: 120000,
  description: 'Cốc sứ trắng in hình ảnh, tên nhân viên',
  stock: 150
},
{
  id: 97,
  categoryId: 'nhan-vien',
  name: 'Móc khóa da bò khắc tên',
  image: img('nhanvien/7.jpg'),
  price: '80.000đ',
  priceNumber: 80000,
  description: 'Móc khóa da bò thật khắc tên nhân viên',
  stock: 200
},
{
  id: 98,
  categoryId: 'nhan-vien',
  name: 'Balo laptop công sở',
  image: img('nhanvien/8.jpg'),
  price: '650.000đ',
  priceNumber: 650000,
  description: 'Balo laptop chống nước in logo công ty',
  stock: 45
},
{
  id: 99,
  categoryId: 'nhan-vien',
  name: 'Đồng hồ để bàn có lịch',
  image: img('nhanvien/9.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Đồng hồ để bàn điện tử có lịch, nhiệt độ',
  stock: 70
},
{
  id: 100,
  categoryId: 'nhan-vien',
  name: 'Hộp đựng danh thiếp gỗ',
  image: img('nhanvien/10.jpg'),
  price: '220.000đ',
  priceNumber: 220000,
  description: 'Hộp đựng danh thiếp gỗ khắc logo công ty',
  stock: 90
},
{
  id: 101,
  categoryId: 'nhan-vien',
  name: 'Áo thun polo in logo',
  image: img('nhanvien/11.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Áo thun polo cotton in logo doanh nghiệp',
  stock: 200
},
{
  id: 102,
  categoryId: 'nhan-vien',
  name: 'Ô dù cầm tay gấp gọn',
  image: img('nhanvien/12.jpg'),
  price: '150.000đ',
  priceNumber: 150000,
  description: 'Ô dù cầm tay gấp gọn in logo công ty',
  stock: 100
},
{
  id: 103,
  categoryId: 'nhan-vien',
  name: 'Túi đựng laptop chống sốc',
  image: img('nhanvien/13.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Túi đựng laptop chống sốc 15.6 inch',
  stock: 65
},
{
  id: 104,
  categoryId: 'nhan-vien',
  name: 'Gấu bông mascot công ty',
  image: img('nhanvien/14.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Gấu bông mascot mặc áo in logo công ty',
  stock: 50
},
{
  id: 105,
  categoryId: 'nhan-vien',
  name: 'Lịch để bàn gỗ 2025',
  image: img('nhanvien/15.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Lịch để bàn gỗ 2025 in logo doanh nghiệp',
  stock: 80
},
{
  id: 106,
  categoryId: 'nhan-vien',
  name: 'Chuột máy tính không dây',
  image: img('nhanvien/16.jpg'),
  price: '250.000đ',
  priceNumber: 250000,
  description: 'Chuột không dây in logo tặng nhân viên',
  stock: 70
},
{
  id: 107,
  categoryId: 'nhan-vien',
  name: 'Thẻ nhân viên da cao cấp',
  image: img('nhanvien/17.jpg'),
  price: '120.000đ',
  priceNumber: 120000,
  description: 'Bao đựng thẻ nhân viên da cao cấp khắc tên',
  stock: 150
},
{
  id: 108,
  categoryId: 'nhan-vien',
  name: 'Hộp cơm giữ nhiệt inox',
  image: img('nhanvien/18.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Hộp cơm giữ nhiệt inox 304 cao cấp',
  stock: 55
},
{
  id: 109,
  categoryId: 'nhan-vien',
  name: 'Bộ ấm trà văn phòng',
  image: img('nhanvien/19.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Bộ ấm trà gốm sứ cho văn phòng',
  stock: 40
},
{
  id: 110,
  categoryId: 'nhan-vien',
  name: 'Giá đỡ điện thoại để bàn',
  image: img('nhanvien/20.jpg'),
  price: '95.000đ',
  priceNumber: 95000,
  description: 'Giá đỡ điện thoại gỗ để bàn làm việc',
  stock: 120
},
{
  id: 111,
  categoryId: 'nhan-vien',
  name: 'Túi vải không dệt in logo',
  image: img('nhanvien/21.jpg'),
  price: '25.000đ',
  priceNumber: 25000,
  description: 'Túi vải không dệt in logo giá rẻ',
  stock: 500
},
{
  id: 112,
  categoryId: 'nhan-vien',
  name: 'Pin sạc dự phòng 10000mAh',
  image: img('nhanvien/22.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Pin sạc dự phòng 10000mAh in logo',
  stock: 60
},
{
  id: 113,
  categoryId: 'nhan-vien',
  name: 'Khăn tắm cotton cao cấp',
  image: img('nhanvien/23.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Khăn tắm cotton thêu logo công ty',
  stock: 100
},
{
  id: 114,
  categoryId: 'nhan-vien',
  name: 'Vớ cao cấp hộp quà tặng',
  image: img('nhanvien/24.jpg'),
  price: '120.000đ',
  priceNumber: 120000,
  description: 'Bộ 3 đôi vớ cao cấp đóng hộp quà tặng',
  stock: 150
},
{
  id: 115,
  categoryId: 'nhan-vien',
  name: 'Đèn LED đọc sách USB',
  image: img('nhanvien/25.jpg'),
  price: '85.000đ',
  priceNumber: 85000,
  description: 'Đèn LED mini cắm USB đọc sách, làm việc',
  stock: 180
},
{
  id: 116,
  categoryId: 'nhan-vien',
  name: 'Hộp quà Tết nhân viên',
  image: img('nhanvien/26.jpg'),
  price: '500.000đ',
  priceNumber: 500000,
  description: 'Hộp quà Tết nhân viên gồm bánh kẹo cao cấp',
  stock: 200
},
{
  id: 117,
  categoryId: 'nhan-vien',
  name: 'Áo khoác gió in logo',
  image: img('nhanvien/27.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Áo khoác gió thể thao in logo công ty',
  stock: 100
},
{
  id: 118,
  categoryId: 'nhan-vien',
  name: 'Bình nước thủy tinh 1 lít',
  image: img('nhanvien/28.jpg'),
  price: '150.000đ',
  priceNumber: 150000,
  description: 'Bình nước thủy tinh có túi đựng in logo',
  stock: 90
},
{
  id: 119,
  categoryId: 'nhan-vien',
  name: 'Thẻ giảm giá siêu thị',
  image: img('nhanvien/29.jpg'),
  price: '200.000đ',
  priceNumber: 200000,
  description: 'Thẻ mua hàng giảm giá tặng nhân viên',
  stock: 300
},
{
  id: 120,
  categoryId: 'nhan-vien',
  name: 'Bộ quà tặng tri ân cuối năm',
  image: img('nhanvien/30.jpg'),
  price: '1.500.000đ',
  priceNumber: 1500000,
  description: 'Bộ quà tặng tri ân nhân viên cuối năm cao cấp',
  stock: 50
},

// ==================== SẾP (ID: 121-150) ====================
{
  id: 121,
  categoryId: 'sep',
  name: 'Bộ rượu XO Hennessy hộp gỗ',
  image: img('sep/1.jpg'),
  price: '5.500.000đ',
  priceNumber: 5500000,
  description: 'Rượu XO Hennessy hộp gỗ sang trọng tặng sếp',
  stock: 10
},
{
  id: 122,
  categoryId: 'sep',
  name: 'Bút Montblanc cao cấp',
  image: img('sep/2.jpg'),
  price: '12.000.000đ',
  priceNumber: 12000000,
  description: 'Bút ký Montblanc chính hãng cao cấp',
  stock: 5
},
{
  id: 123,
  categoryId: 'sep',
  name: 'Tranh phong thủy mạ vàng',
  image: img('sep/3.jpg'),
  price: '8.500.000đ',
  priceNumber: 8500000,
  description: 'Tranh phong thủy mạ vàng 24K tặng sếp',
  stock: 8
},
{
  id: 124,
  categoryId: 'sep',
  name: 'Đồng hồ Rolex nam cao cấp',
  image: img('sep/4.jpg'),
  price: '85.000.000đ',
  priceNumber: 85000000,
  description: 'Đồng hồ Rolex nam chính hãng cao cấp',
  stock: 2
},
{
  id: 125,
  categoryId: 'sep',
  name: 'Hộp xì gà Cohiba Cuba',
  image: img('sep/5.jpg'),
  price: '15.000.000đ',
  priceNumber: 15000000,
  description: 'Hộp xì gà Cohiba Cuba 25 điếu cao cấp',
  stock: 6
},
{
  id: 126,
  categoryId: 'sep',
  name: 'Tượng ngựa đồng mạ vàng',
  image: img('sep/6.jpg'),
  price: '4.800.000đ',
  priceNumber: 4800000,
  description: 'Tượng ngựa đồng mạ vàng phong thủy',
  stock: 12
},
{
  id: 127,
  categoryId: 'sep',
  name: 'Ví da Louis Vuitton nam',
  image: img('sep/7.jpg'),
  price: '9.500.000đ',
  priceNumber: 9500000,
  description: 'Ví da Louis Vuitton nam chính hãng',
  stock: 8
},
{
  id: 128,
  categoryId: 'sep',
  name: 'Bộ trà Tử Sa cao cấp',
  image: img('sep/8.jpg'),
  price: '3.200.000đ',
  priceNumber: 3200000,
  description: 'Bộ trà Tử Sa Trung Quốc cao cấp',
  stock: 15
},
{
  id: 129,
  categoryId: 'sep',
  name: 'Tranh sơn mài Hà Nội',
  image: img('sep/9.jpg'),
  price: '12.000.000đ',
  priceNumber: 12000000,
  description: 'Tranh sơn mài Hà Nội vẽ tay cao cấp',
  stock: 5
},
{
  id: 130,
  categoryId: 'sep',
  name: 'Đồng hồ để bàn mạ vàng',
  image: img('sep/10.jpg'),
  price: '2.800.000đ',
  priceNumber: 2800000,
  description: 'Đồng hồ để bàn mạ vàng 24K sang trọng',
  stock: 20
},
{
  id: 131,
  categoryId: 'sep',
  name: 'Bộ golf Titleist cao cấp',
  image: img('sep/11.jpg'),
  price: '25.000.000đ',
  priceNumber: 25000000,
  description: 'Bộ gậy golf Titleist chuyên nghiệp',
  stock: 3
},
{
  id: 132,
  categoryId: 'sep',
  name: 'Hộp đựng xì gà gỗ hương',
  image: img('sep/12.jpg'),
  price: '5.500.000đ',
  priceNumber: 5500000,
  description: 'Hộp đựng xì gà gỗ hương khắc họa tiết',
  stock: 10
},
{
  id: 133,
  categoryId: 'sep',
  name: 'Thắt lưng da cá sấu thật',
  image: img('sep/13.jpg'),
  price: '8.500.000đ',
  priceNumber: 8500000,
  description: 'Thắt lưng da cá sấu thật 100% cao cấp',
  stock: 7
},
{
  id: 134,
  categoryId: 'sep',
  name: 'Bộ whisky Macallan 18 năm',
  image: img('sep/14.jpg'),
  price: '18.000.000đ',
  priceNumber: 18000000,
  description: 'Rượu Macallan 18 năm hộp gỗ sang trọng',
  stock: 4
},
{
  id: 135,
  categoryId: 'sep',
  name: 'Cặp da công sở Salvatore',
  image: img('sep/15.jpg'),
  price: '15.000.000đ',
  priceNumber: 15000000,
  description: 'Cặp da Salvatore Ferragamo chính hãng',
  stock: 6
},
{
  id: 136,
  categoryId: 'sep',
  name: 'Tượng Phật bằng vàng 24K',
  image: img('sep/16.jpg'),
  price: '35.000.000đ',
  priceNumber: 35000000,
  description: 'Tượng Phật bằng vàng 24K phong thủy',
  stock: 2
},
{
  id: 137,
  categoryId: 'sep',
  name: 'Máy ảnh Canon EOS R5',
  image: img('sep/17.jpg'),
  price: '95.000.000đ',
  priceNumber: 95000000,
  description: 'Máy ảnh Canon EOS R5 chuyên nghiệp',
  stock: 3
},
{
  id: 138,
  categoryId: 'sep',
  name: 'Gậy golf Putter Scotty Cameron',
  image: img('sep/18.jpg'),
  price: '12.000.000đ',
  priceNumber: 12000000,
  description: 'Gậy golf Putter Scotty Cameron cao cấp',
  stock: 5
},
{
  id: 139,
  categoryId: 'sep',
  name: 'Đá phong thủy Ngọc Bích lớn',
  image: img('sep/19.jpg'),
  price: '45.000.000đ',
  priceNumber: 45000000,
  description: 'Đá Ngọc Bích thiên nhiên phong thủy',
  stock: 2
},
{
  id: 140,
  categoryId: 'sep',
  name: 'Bộ trà bạc nguyên chất',
  image: img('sep/20.jpg'),
  price: '8.800.000đ',
  priceNumber: 8800000,
  description: 'Bộ trà bạc nguyên chất 999 cao cấp',
  stock: 8
},
{
  id: 141,
  categoryId: 'sep',
  name: 'Tranh đồng mạ vàng 3D',
  image: img('sep/21.jpg'),
  price: '6.500.000đ',
  priceNumber: 6500000,
  description: 'Tranh đồng mạ vàng 3D nổi cao cấp',
  stock: 10
},
{
  id: 142,
  categoryId: 'sep',
  name: 'Bút ký vàng khắc tên',
  image: img('sep/22.jpg'),
  price: '25.000.000đ',
  priceNumber: 25000000,
  description: 'Bút ký vàng 18K khắc tên sang trọng',
  stock: 3
},
{
  id: 143,
  categoryId: 'sep',
  name: 'Rượu Chivas 25 năm hộp gỗ',
  image: img('sep/23.jpg'),
  price: '9.500.000đ',
  priceNumber: 9500000,
  description: 'Rượu Chivas 25 năm hộp gỗ sang trọng',
  stock: 12
},
{
  id: 144,
  categoryId: 'sep',
  name: 'Đồng hồ Patek Philippe',
  image: img('sep/24.jpg'),
  price: '450.000.000đ',
  priceNumber: 450000000,
  description: 'Đồng hồ Patek Philippe chính hãng Thụy Sỹ',
  stock: 1
},
{
  id: 145,
  categoryId: 'sep',
  name: 'Bộ phong thủy rồng mạ vàng',
  image: img('sep/25.jpg'),
  price: '15.000.000đ',
  priceNumber: 15000000,
  description: 'Bộ 9 rồng phong thủy mạ vàng 24K',
  stock: 6
},
{
  id: 146,
  categoryId: 'sep',
  name: 'Gậy đánh golf Callaway',
  image: img('sep/26.jpg'),
  price: '18.000.000đ',
  priceNumber: 18000000,
  description: 'Bộ gậy golf Callaway Epic Max',
  stock: 4
},
{
  id: 147,
  categoryId: 'sep',
  name: 'Bàn cờ vua gỗ mun',
  image: img('sep/27.jpg'),
  price: '12.500.000đ',
  priceNumber: 12500000,
  description: 'Bàn cờ vua gỗ mun cao cấp thủ công',
  stock: 5
},
{
  id: 148,
  categoryId: 'sep',
  name: 'Hộp đựng đồng hồ gỗ sang trọng',
  image: img('sep/28.jpg'),
  price: '4.200.000đ',
  priceNumber: 4200000,
  description: 'Hộp đựng 12 đồng hồ gỗ tự động',
  stock: 15
},
{
  id: 149,
  categoryId: 'sep',
  name: 'Tranh ngọc Hòa Bình Bồ câu',
  image: img('sep/29.jpg'),
  price: '28.000.000đ',
  priceNumber: 28000000,
  description: 'Tranh ngọc Hòa Bình Bồ câu khảm trai',
  stock: 3
},
{
  id: 150,
  categoryId: 'sep',
  name: 'Bộ quà tặng VIP cao cấp',
  image: img('sep/30.jpg'),
  price: '50.000.000đ',
  priceNumber: 50000000,
  description: 'Bộ quà tặng VIP rượu, xì gà, bút cao cấp',
  stock: 5
},

// ==================== ĐỒ GIA DỤNG (ID: 151-180) ====================
{
  id: 151,
  categoryId: 'do-gia-dung',
  name: 'Nồi cơm điện cao tần Cuckoo',
  image: img('dogiadung/1.jpg'),
  price: '4.500.000đ',
  priceNumber: 4500000,
  description: 'Nồi cơm điện cao tần Cuckoo 1.8 lít Hàn Quốc',
  stock: 25
},
{
  id: 152,
  categoryId: 'do-gia-dung',
  name: 'Bộ nồi inox 304 cao cấp',
  image: img('dogiadung/2.jpg'),
  price: '2.800.000đ',
  priceNumber: 2800000,
  description: 'Bộ 5 nồi inox 304 đáy từ 3 lớp',
  stock: 30
},
{
  id: 153,
  categoryId: 'do-gia-dung',
  name: 'Máy xay sinh tố Philips',
  image: img('dogiadung/3.jpg'),
  price: '1.850.000đ',
  priceNumber: 1850000,
  description: 'Máy xay sinh tố Philips công suất 600W',
  stock: 40
},
{
  id: 154,
  categoryId: 'do-gia-dung',
  name: 'Bình đun siêu tốc Lock&Lock',
  image: img('dogiadung/4.jpg'),
  price: '680.000đ',
  priceNumber: 680000,
  description: 'Bình đun siêu tốc Lock&Lock 1.7 lít',
  stock: 50
},
{
  id: 155,
  categoryId: 'do-gia-dung',
  name: 'Bộ dao kéo nhà bếp Zwilling',
  image: img('dogiadung/5.jpg'),
  price: '3.200.000đ',
  priceNumber: 3200000,
  description: 'Bộ dao kéo Zwilling Đức 7 món',
  stock: 20
},
{
  id: 156,
  categoryId: 'do-gia-dung',
  name: 'Máy lọc nước RO Karofi',
  image: img('dogiadung/6.jpg'),
  price: '6.500.000đ',
  priceNumber: 6500000,
  description: 'Máy lọc nước RO Karofi 9 lõi',
  stock: 15
},
{
  id: 157,
  categoryId: 'do-gia-dung',
  name: 'Chảo chống dính Tefal',
  image: img('dogiadung/7.jpg'),
  price: '980.000đ',
  priceNumber: 980000,
  description: 'Chảo chống dính Tefal 28cm Pháp',
  stock: 45
},
{
  id: 158,
  categoryId: 'do-gia-dung',
  name: 'Bộ thớt gỗ tre 3 chiếc',
  image: img('dogiadung/8.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Bộ 3 thớt gỗ tre kháng khuẩn',
  stock: 60
},
{
  id: 159,
  categoryId: 'do-gia-dung',
  name: 'Máy ép trái cây Hafele',
  image: img('dogiadung/9.jpg'),
  price: '2.400.000đ',
  priceNumber: 2400000,
  description: 'Máy ép trái cây Hafele Đức',
  stock: 28
},
{
  id: 160,
  categoryId: 'do-gia-dung',
  name: 'Bình giữ nhiệt Elmich 2 lít',
  image: img('dogiadung/10.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Bình giữ nhiệt Elmich inox 304 giữ nhiệt 24h',
  stock: 35
},
{
  id: 161,
  categoryId: 'do-gia-dung',
  name: 'Bộ hũ gia vị thủy tinh 6 món',
  image: img('dogiadung/11.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Bộ 6 hũ gia vị thủy tinh có giá đỡ',
  stock: 50
},
{
  id: 162,
  categoryId: 'do-gia-dung',
  name: 'Máy hút bụi cầm tay Dyson',
  image: img('dogiadung/12.jpg'),
  price: '12.000.000đ',
  priceNumber: 12000000,
  description: 'Máy hút bụi cầm tay Dyson V8',
  stock: 10
},
{
  id: 163,
  categoryId: 'do-gia-dung',
  name: 'Bộ ly thủy tinh Luminarc 6 chiếc',
  image: img('dogiadung/13.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Bộ 6 ly thủy tinh Luminarc Pháp',
  stock: 80
},
{
  id: 164,
  categoryId: 'do-gia-dung',
  name: 'Thùng rác inox đạp chân 20L',
  image: img('dogiadung/14.jpg'),
  price: '650.000đ',
  priceNumber: 650000,
  description: 'Thùng rác inox đạp chân 20L cao cấp',
  stock: 40
},
{
  id: 165,
  categoryId: 'do-gia-dung',
  name: 'Máy hâm sữa Philips Avent',
  image: img('dogiadung/15.jpg'),
  price: '1.450.000đ',
  priceNumber: 1450000,
  description: 'Máy hâm sữa Philips Avent đa năng',
  stock: 25
},
{
  id: 166,
  categoryId: 'do-gia-dung',
  name: 'Bộ hộp thực phẩm Lock&Lock 10 món',
  image: img('dogiadung/16.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Bộ 10 hộp Lock&Lock bảo quản thực phẩm',
  stock: 55
},
{
  id: 167,
  categoryId: 'do-gia-dung',
  name: 'Nồi áp suất điện Bluestone',
  image: img('dogiadung/17.jpg'),
  price: '2.200.000đ',
  priceNumber: 2200000,
  description: 'Nồi áp suất điện Bluestone 6 lít',
  stock: 20
},
{
  id: 168,
  categoryId: 'do-gia-dung',
  name: 'Máy xông hơi mặt Panasonic',
  image: img('dogiadung/18.jpg'),
  price: '1.800.000đ',
  priceNumber: 1800000,
  description: 'Máy xông hơi mặt Panasonic Nhật Bản',
  stock: 18
},
{
  id: 169,
  categoryId: 'do-gia-dung',
  name: 'Bộ muỗng nĩa inox cao cấp 24 món',
  image: img('dogiadung/19.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Bộ 24 món muỗng nĩa inox 304 cao cấp',
  stock: 35
},
{
  id: 170,
  categoryId: 'do-gia-dung',
  name: 'Máy sấy tóc Dyson Supersonic',
  image: img('dogiadung/20.jpg'),
  price: '13.500.000đ',
  priceNumber: 13500000,
  description: 'Máy sấy tóc Dyson Supersonic chính hãng',
  stock: 8
},
{
  id: 171,
  categoryId: 'do-gia-dung',
  name: 'Bình lọc nước Brita 2.4L',
  image: img('dogiadung/21.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Bình lọc nước Brita Đức 2.4 lít',
  stock: 30
},
{
  id: 172,
  categoryId: 'do-gia-dung',
  name: 'Nồi chiên không dầu Philips',
  image: img('dogiadung/22.jpg'),
  price: '3.500.000đ',
  priceNumber: 3500000,
  description: 'Nồi chiên không dầu Philips 4.1 lít',
  stock: 22
},
{
  id: 173,
  categoryId: 'do-gia-dung',
  name: 'Giỏ để đồ inox đa năng',
  image: img('dogiadung/23.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Giỏ để đồ inox 3 tầng tiện dụng',
  stock: 45
},
{
  id: 174,
  categoryId: 'do-gia-dung',
  name: 'Máy xông tinh dầu tạo ẩm',
  image: img('dogiadung/24.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Máy xông tinh dầu tạo ẩm 300ml',
  stock: 60
},
{
  id: 175,
  categoryId: 'do-gia-dung',
  name: 'Bộ dụng cụ pha cà phê Timemore',
  image: img('dogiadung/25.jpg'),
  price: '1.850.000đ',
  priceNumber: 1850000,
  description: 'Bộ dụng cụ pha cà phê Timemore cao cấp',
  stock: 15
},
{
  id: 176,
  categoryId: 'do-gia-dung',
  name: 'Máy đánh trứng cầm tay',
  image: img('dogiadung/26.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Máy đánh trứng cầm tay 7 tốc độ',
  stock: 50
},
{
  id: 177,
  categoryId: 'do-gia-dung',
  name: 'Bộ hộp cơm văn phòng Lock&Lock',
  image: img('dogiadung/27.jpg'),
  price: '250.000đ',
  priceNumber: 250000,
  description: 'Bộ hộp cơm văn phòng 3 ngăn Lock&Lock',
  stock: 70
},
{
  id: 178,
  categoryId: 'do-gia-dung',
  name: 'Máy làm sữa chua Kangaroo',
  image: img('dogiadung/28.jpg'),
  price: '480.000đ',
  priceNumber: 480000,
  description: 'Máy làm sữa chua Kangaroo 12 cốc',
  stock: 35
},
{
  id: 179,
  categoryId: 'do-gia-dung',
  name: 'Bàn là hơi nước Philips',
  image: img('dogiadung/29.jpg'),
  price: '1.650.000đ',
  priceNumber: 1650000,
  description: 'Bàn là hơi nước Philips 2400W',
  stock: 28
},
{
  id: 180,
  categoryId: 'do-gia-dung',
  name: 'Bộ quà tặng gia dụng cao cấp',
  image: img('dogiadung/30.jpg'),
  price: '5.500.000đ',
  priceNumber: 5500000,
  description: 'Bộ quà tặng gia dụng cao cấp 15 món',
  stock: 12
},

// ==================== THEO MỨC GIÁ (ID: 181-210) ====================
{
  id: 181,
  categoryId: 'theo-muc-gia',
  name: 'Móc khóa da cao cấp',
  image: img('theomucgia/1.jpg'),
  price: '50.000đ',
  priceNumber: 50000,
  description: 'Móc khóa da PU cao cấp nhiều màu',
  stock: 200
},
{
  id: 182,
  categoryId: 'theo-muc-gia',
  name: 'Bút bi văn phòng',
  image: img('theomucgia/2.jpg'),
  price: '15.000đ',
  priceNumber: 15000,
  description: 'Bút bi mực xanh văn phòng giá rẻ',
  stock: 500
},
{
  id: 183,
  categoryId: 'theo-muc-gia',
  name: 'Sổ tay bìa cứng A5',
  image: img('theomucgia/3.jpg'),
  price: '35.000đ',
  priceNumber: 35000,
  description: 'Sổ tay bìa cứng A5 kẻ ngang 200 trang',
  stock: 300
},
{
  id: 184,
  categoryId: 'theo-muc-gia',
  name: 'Cốc nhựa in logo',
  image: img('theomucgia/4.jpg'),
  price: '25.000đ',
  priceNumber: 25000,
  description: 'Cốc nhựa in logo theo yêu cầu',
  stock: 400
},
{
  id: 185,
  categoryId: 'theo-muc-gia',
  name: 'Túi vải canvas mini',
  image: img('theomucgia/5.jpg'),
  price: '45.000đ',
  priceNumber: 45000,
  description: 'Túi vải canvas mini đựng mỹ phẩm',
  stock: 250
},
{
  id: 186,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 100k',
  image: img('theomucgia/6.jpg'),
  price: '100.000đ',
  priceNumber: 100000,
  description: 'Bộ quà tặng dưới 100k gồm bút, sổ, móc khóa',
  stock: 150
},
{
  id: 187,
  categoryId: 'theo-muc-gia',
  name: 'Ly sứ in hình theo yêu cầu',
  image: img('theomucgia/7.jpg'),
  price: '80.000đ',
  priceNumber: 80000,
  description: 'Ly sứ trắng in hình ảnh, text theo yêu cầu',
  stock: 200
},
{
  id: 188,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 200k',
  image: img('theomucgia/8.jpg'),
  price: '200.000đ',
  priceNumber: 200000,
  description: 'Bộ quà tặng 200k gồm cốc, sổ, bút cao cấp',
  stock: 120
},
{
  id: 189,
  categoryId: 'theo-muc-gia',
  name: 'Ô dù gấp gọn mini',
  image: img('theomucgia/9.jpg'),
  price: '120.000đ',
  priceNumber: 120000,
  description: 'Ô dù gấp gọn mini bỏ túi tiện lợi',
  stock: 180
},
{
  id: 190,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 300k',
  image: img('theomucgia/10.jpg'),
  price: '300.000đ',
  priceNumber: 300000,
  description: 'Bộ quà tặng 300k bình giữ nhiệt + sổ + bút',
  stock: 100
},
{
  id: 191,
  categoryId: 'theo-muc-gia',
  name: 'Bình giữ nhiệt 500ml',
  image: img('theomucgia/11.jpg'),
  price: '250.000đ',
  priceNumber: 250000,
  description: 'Bình giữ nhiệt inox 500ml giá rẻ',
  stock: 150
},
{
  id: 192,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 500k',
  image: img('theomucgia/12.jpg'),
  price: '500.000đ',
  priceNumber: 500000,
  description: 'Bộ quà tặng 500k văn phòng cao cấp',
  stock: 80
},
{
  id: 193,
  categoryId: 'theo-muc-gia',
  name: 'Áo thun cotton in logo',
  image: img('theomucgia/13.jpg'),
  price: '150.000đ',
  priceNumber: 150000,
  description: 'Áo thun cotton 100% in logo công ty',
  stock: 200
},
{
  id: 194,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 800k',
  image: img('theomucgia/14.jpg'),
  price: '800.000đ',
  priceNumber: 800000,
  description: 'Bộ quà tặng 800k gồm túi, sổ, bút, cốc',
  stock: 60
},
{
  id: 195,
  categoryId: 'theo-muc-gia',
  name: 'Túi vải canvas lớn',
  image: img('theomucgia/15.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Túi vải canvas to in logo công ty',
  stock: 150
},
{
  id: 196,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 1 triệu',
  image: img('theomucgia/16.jpg'),
  price: '1.000.000đ',
  priceNumber: 1000000,
  description: 'Bộ quà tặng 1 triệu balo + sổ da + bút cao cấp',
  stock: 50
},
{
  id: 197,
  categoryId: 'theo-muc-gia',
  name: 'Balo laptop giá rẻ',
  image: img('theomucgia/17.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Balo laptop chống nước giá rẻ',
  stock: 100
},
{
  id: 198,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 1.5 triệu',
  image: img('theomucgia/18.jpg'),
  price: '1.500.000đ',
  priceNumber: 1500000,
  description: 'Bộ quà tặng 1.5tr hộp gỗ cao cấp',
  stock: 40
},
{
  id: 199,
  categoryId: 'theo-muc-gia',
  name: 'Sổ tay da cao cấp',
  image: img('theomucgia/19.jpg'),
  price: '400.000đ',
  priceNumber: 400000,
  description: 'Sổ tay bìa da PU cao cấp khắc tên',
  stock: 80
},
{
  id: 200,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 2 triệu',
  image: img('theomucgia/20.jpg'),
  price: '2.000.000đ',
  priceNumber: 2000000,
  description: 'Bộ quà tặng 2tr ấm trà + cốc cao cấp',
  stock: 35
},
{
  id: 201,
  categoryId: 'theo-muc-gia',
  name: 'Bút ký cao cấp',
  image: img('theomucgia/21.jpg'),
  price: '600.000đ',
  priceNumber: 600000,
  description: 'Bút ký cao cấp khắc tên có hộp',
  stock: 70
},
{
  id: 202,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 3 triệu',
  image: img('theomucgia/22.jpg'),
  price: '3.000.000đ',
  priceNumber: 3000000,
  description: 'Bộ quà tặng 3tr bộ trà + tranh + biểu trưng',
  stock: 25
},
{
  id: 203,
  categoryId: 'theo-muc-gia',
  name: 'Cặp da công sở',
  image: img('theomucgia/23.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Cặp da công sở đựng laptop 15 inch',
  stock: 50
},
{
  id: 204,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 4 triệu',
  image: img('theomucgia/24.jpg'),
  price: '4.000.000đ',
  priceNumber: 4000000,
  description: 'Bộ quà tặng 4tr bộ ấm chén + tranh gốm sứ',
  stock: 20
},
{
  id: 205,
  categoryId: 'theo-muc-gia',
  name: 'Đồng hồ để bàn',
  image: img('theomucgia/25.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Đồng hồ để bàn có lịch, nhiệt độ',
  stock: 90
},
{
  id: 206,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 5 triệu',
  image: img('theomucgia/26.jpg'),
  price: '5.000.000đ',
  priceNumber: 5000000,
  description: 'Bộ quà tặng 5tr cúp pha lê + hộp gỗ sang trọng',
  stock: 15
},
{
  id: 207,
  categoryId: 'theo-muc-gia',
  name: 'Ví da cao cấp',
  image: img('theomucgia/27.jpg'),
  price: '750.000đ',
  priceNumber: 750000,
  description: 'Ví da bò thật cao cấp khắc tên',
  stock: 60
},
{
  id: 208,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 8 triệu',
  image: img('theomucgia/28.jpg'),
  price: '8.000.000đ',
  priceNumber: 8000000,
  description: 'Bộ quà tặng 8tr biểu trưng vàng + tranh đồng',
  stock: 10
},
{
  id: 209,
  categoryId: 'theo-muc-gia',
  name: 'Thắt lưng da cao cấp',
  image: img('theomucgia/29.jpg'),
  price: '950.000đ',
  priceNumber: 950000,
  description: 'Thắt lưng da bò cao cấp nam',
  stock: 45
},
{
  id: 210,
  categoryId: 'theo-muc-gia',
  name: 'Bộ quà tặng 10 triệu',
  image: img('theomucgia/30.jpg'),
  price: '10.000.000đ',
  priceNumber: 10000000,
  description: 'Bộ quà tặng 10tr VIP hộp gỗ + rượu + xì gà',
  stock: 8
},

// ==================== MAY MẶC (ID: 211-240) ====================
{
  id: 211,
  categoryId: 'may-mac',
  name: 'Áo thun polo nam in logo',
  image: img('maymac/1.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Áo thun polo cotton in logo công ty',
  stock: 300
},
{
  id: 212,
  categoryId: 'may-mac',
  name: 'Áo sơ mi nam trắng',
  image: img('maymac/2.jpg'),
  price: '250.000đ',
  priceNumber: 250000,
  description: 'Áo sơ mi nam trắng công sở cao cấp',
  stock: 200
},
{
  id: 213,
  categoryId: 'may-mac',
  name: 'Áo khoác gió thể thao',
  image: img('maymac/3.jpg'),
  price: '320.000đ',
  priceNumber: 320000,
  description: 'Áo khoác gió thể thao in logo',
  stock: 150
},
{
  id: 214,
  categoryId: 'may-mac',
  name: 'Áo hoodie nỉ có mũ',
  image: img('maymac/4.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Áo hoodie nỉ bông có mũ in logo',
  stock: 180
},
{
  id: 215,
  categoryId: 'may-mac',
  name: 'Quần âu nam công sở',
  image: img('maymac/5.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Quần âu nam công sở vải tuyết mưa',
  stock: 120
},
{
  id: 216,
  categoryId: 'may-mac',
  name: 'Áo thun nữ cổ tròn',
  image: img('maymac/6.jpg'),
  price: '150.000đ',
  priceNumber: 150000,
  description: 'Áo thun nữ cotton cổ tròn in logo',
  stock: 250
},
{
  id: 217,
  categoryId: 'may-mac',
  name: 'Áo ba lỗ thể thao',
  image: img('maymac/7.jpg'),
  price: '120.000đ',
  priceNumber: 120000,
  description: 'Áo ba lỗ thể thao thoáng mát',
  stock: 300
},
{
  id: 218,
  categoryId: 'may-mac',
  name: 'Áo vest nam cao cấp',
  image: img('maymac/8.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Áo vest nam cao cấp may đo',
  stock: 50
},
{
  id: 219,
  categoryId: 'may-mac',
  name: 'Quần short thể thao',
  image: img('maymac/9.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Quần short thể thao thoáng mát',
  stock: 200
},
{
  id: 220,
  categoryId: 'may-mac',
  name: 'Áo khoác da nam',
  image: img('maymac/10.jpg'),
  price: '1.500.000đ',
  priceNumber: 1500000,
  description: 'Áo khoác da nam cao cấp',
  stock: 40
},
{
  id: 221,
  categoryId: 'may-mac',
  name: 'Áo len cardigan nữ',
  image: img('maymac/11.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Áo len cardigan nữ dệt kim',
  stock: 100
},
{
  id: 222,
  categoryId: 'may-mac',
  name: 'Quần jean nam cao cấp',
  image: img('maymac/12.jpg'),
  price: '480.000đ',
  priceNumber: 480000,
  description: 'Quần jean nam cao cấp co giãn',
  stock: 150
},
{
  id: 223,
  categoryId: 'may-mac',
  name: 'Áo sơ mi nữ công sở',
  image: img('maymac/13.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Áo sơ mi nữ công sở vải lụa',
  stock: 180
},
{
  id: 224,
  categoryId: 'may-mac',
  name: 'Áo phao nam mùa đông',
  image: img('maymac/14.jpg'),
  price: '650.000đ',
  priceNumber: 650000,
  description: 'Áo phao nam lông vũ giữ ấm',
  stock: 80
},
{
  id: 225,
  categoryId: 'may-mac',
  name: 'Váy công sở nữ',
  image: img('maymac/15.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Váy công sở nữ thanh lịch',
  stock: 120
},
{
  id: 226,
  categoryId: 'may-mac',
  name: 'Áo thun dài tay nam',
  image: img('maymac/16.jpg'),
  price: '200.000đ',
  priceNumber: 200000,
  description: 'Áo thun dài tay nam cotton',
  stock: 200
},
{
  id: 227,
  categoryId: 'may-mac',
  name: 'Quần jogger thể thao',
  image: img('maymac/17.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Quần jogger thể thao co giãn',
  stock: 150
},
{
  id: 228,
  categoryId: 'may-mac',
  name: 'Áo blazer nữ công sở',
  image: img('maymac/18.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Áo blazer nữ công sở cao cấp',
  stock: 70
},
{
  id: 229,
  categoryId: 'may-mac',
  name: 'Quần tây nam ống đứng',
  image: img('maymac/19.jpg'),
  price: '420.000đ',
  priceNumber: 420000,
  description: 'Quần tây nam ống đứng công sở',
  stock: 130
},
{
  id: 230,
  categoryId: 'may-mac',
  name: 'Áo gile nam cao cấp',
  image: img('maymac/20.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Áo gile nam công sở cao cấp',
  stock: 90
},
{
  id: 231,
  categoryId: 'may-mac',
  name: 'Đầm suông nữ công sở',
  image: img('maymac/21.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Đầm suông nữ công sở thanh lịch',
  stock: 100
},
{
  id: 232,
  categoryId: 'may-mac',
  name: 'Áo khoác bomber nam',
  image: img('maymac/22.jpg'),
  price: '480.000đ',
  priceNumber: 480000,
  description: 'Áo khoác bomber nam thời trang',
  stock: 110
},
{
  id: 233,
  categoryId: 'may-mac',
  name: 'Quần legging nữ thể thao',
  image: img('maymac/23.jpg'),
  price: '180.000đ',
  priceNumber: 180000,
  description: 'Quần legging nữ tập gym, yoga',
  stock: 200
},
{
  id: 234,
  categoryId: 'may-mac',
  name: 'Áo tank top thể thao',
  image: img('maymac/24.jpg'),
  price: '120.000đ',
  priceNumber: 120000,
  description: 'Áo tank top thể thao nữ',
  stock: 250
},
{
  id: 235,
  categoryId: 'may-mac',
  name: 'Quần kaki nam túi hộp',
  image: img('maymac/25.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Quần kaki nam túi hộp thời trang',
  stock: 140
},
{
  id: 236,
  categoryId: 'may-mac',
  name: 'Áo len nam cổ tim',
  image: img('maymac/26.jpg'),
  price: '420.000đ',
  priceNumber: 420000,
  description: 'Áo len nam cổ tim cao cấp',
  stock: 80
},
{
  id: 237,
  categoryId: 'may-mac',
  name: 'Set bộ thể thao nữ',
  image: img('maymac/27.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Set bộ thể thao nữ áo + quần',
  stock: 120
},
{
  id: 238,
  categoryId: 'may-mac',
  name: 'Áo sơ mi flannel kẻ',
  image: img('maymac/28.jpg'),
  price: '280.000đ',
  priceNumber: 280000,
  description: 'Áo sơ mi flannel kẻ caro',
  stock: 150
},
{
  id: 239,
  categoryId: 'may-mac',
  name: 'Quần short jean nữ',
  image: img('maymac/29.jpg'),
  price: '250.000đ',
  priceNumber: 250000,
  description: 'Quần short jean nữ thời trang',
  stock: 180
},
{
  id: 240,
  categoryId: 'may-mac',
  name: 'Áo khoác denim unisex',
  image: img('maymac/30.jpg'),
  price: '520.000đ',
  priceNumber: 520000,
  description: 'Áo khoác denim jeans unisex',
  stock: 100
},

// ==================== HỘP QUÀ TẶNG (ID: 241-270) ====================
{
  id: 241,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà tặng Tết 2025 cao cấp',
  image: img('hopquatang/1.jpg'),
  price: '1.500.000đ',
  priceNumber: 1500000,
  description: 'Hộp quà Tết 2025 gồm bánh kẹo, rượu, hạt cao cấp',
  stock: 100
},
{
  id: 242,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà trà cao cấp',
  image: img('hopquatang/2.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Hộp quà gồm trà Shan Tuyết, ấm trà gốm sứ',
  stock: 80
},
{
  id: 243,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà sinh nhật sang trọng',
  image: img('hopquatang/3.jpg'),
  price: '650.000đ',
  priceNumber: 650000,
  description: 'Hộp quà sinh nhật gồm nến thơm, sổ tay, bút',
  stock: 120
},
{
  id: 244,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà rượu vang',
  image: img('hopquatang/4.jpg'),
  price: '2.800.000đ',
  priceNumber: 2800000,
  description: 'Hộp gỗ rượu vang Pháp kèm ly pha lê',
  stock: 50
},
{
  id: 245,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà cà phê Việt Nam',
  image: img('hopquatang/5.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Hộp quà cà phê nguyên chất Việt Nam',
  stock: 150
},
{
  id: 246,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà trung thu 2025',
  image: img('hopquatang/6.jpg'),
  price: '950.000đ',
  priceNumber: 950000,
  description: 'Hộp quà trung thu bánh nướng, kẹo, trà',
  stock: 200
},
{
  id: 247,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà tặng văn phòng',
  image: img('hopquatang/7.jpg'),
  price: '750.000đ',
  priceNumber: 750000,
  description: 'Hộp quà văn phòng: sổ da, bút, cốc',
  stock: 100
},
{
  id: 248,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà mỹ phẩm nữ',
  image: img('hopquatang/8.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Hộp quà mỹ phẩm nữ cao cấp Hàn Quốc',
  stock: 80
},
{
  id: 249,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà bánh kẹo Tết',
  image: img('hopquatang/9.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Hộp bánh kẹo Tết Kinh Đô, Bibica',
  stock: 300
},
{
  id: 250,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà sức khỏe',
  image: img('hopquatang/10.jpg'),
  price: '1.850.000đ',
  priceNumber: 1850000,
  description: 'Hộp quà yến sào, nhân sâm, đông trùng',
  stock: 60
},
{
  id: 251,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà tặng cưới',
  image: img('hopquatang/11.jpg'),
  price: '350.000đ',
  priceNumber: 350000,
  description: 'Hộp quà cảm ơn khách mời đám cưới',
  stock: 500
},
{
  id: 252,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà chocolate cao cấp',
  image: img('hopquatang/12.jpg'),
  price: '680.000đ',
  priceNumber: 680000,
  description: 'Hộp chocolate Ferrero Rocher, Lindt',
  stock: 150
},
{
  id: 253,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà doanh nghiệp',
  image: img('hopquatang/13.jpg'),
  price: '2.500.000đ',
  priceNumber: 2500000,
  description: 'Hộp quà doanh nghiệp cao cấp in logo',
  stock: 80
},
{
  id: 254,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà yến sào tươi',
  image: img('hopquatang/14.jpg'),
  price: '3.200.000đ',
  priceNumber: 3200000,
  description: 'Hộp quà yến sào tươi Nha Trang',
  stock: 40
},
{
  id: 255,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà hạt dinh dưỡng',
  image: img('hopquatang/15.jpg'),
  price: '550.000đ',
  priceNumber: 550000,
  description: 'Hộp quà hạt điều, óc chó, hạnh nhân',
  stock: 200
},
{
  id: 256,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà sản vật Đà Lạt',
  image: img('hopquatang/16.jpg'),
  price: '480.000đ',
  priceNumber: 480000,
  description: 'Hộp quà sản vật Đà Lạt: mứt, rau củ sấy',
  stock: 120
},
{
  id: 257,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà trái cây sấy',
  image: img('hopquatang/17.jpg'),
  price: '380.000đ',
  priceNumber: 380000,
  description: 'Hộp quà trái cây sấy nhiều loại',
  stock: 180
},
{
  id: 258,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà mật ong rừng',
  image: img('hopquatang/18.jpg'),
  price: '850.000đ',
  priceNumber: 850000,
  description: 'Hộp quà mật ong rừng nguyên chất',
  stock: 90
},
{
  id: 259,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà đặc sản miền Bắc',
  image: img('hopquatang/19.jpg'),
  price: '720.000đ',
  priceNumber: 720000,
  description: 'Hộp quà đặc sản Hà Nội, Bắc Ninh',
  stock: 100
},
{
  id: 260,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà tinh dầu thơm',
  image: img('hopquatang/20.jpg'),
  price: '650.000đ',
  priceNumber: 650000,
  description: 'Hộp quà tinh dầu thơm + máy xông',
  stock: 110
},
{
  id: 261,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà nông sản sạch',
  image: img('hopquatang/21.jpg'),
  price: '580.000đ',
  priceNumber: 580000,
  description: 'Hộp quà nông sản sạch organic',
  stock: 130
},
{
  id: 262,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà gạo đặc sản',
  image: img('hopquatang/22.jpg'),
  price: '450.000đ',
  priceNumber: 450000,
  description: 'Hộp quà gạo ST25, Jasmine cao cấp',
  stock: 150
},
{
  id: 263,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà chăm sóc da',
  image: img('hopquatang/23.jpg'),
  price: '980.000đ',
  priceNumber: 980000,
  description: 'Hộp quà chăm sóc da từ thiên nhiên',
  stock: 70
},
{
  id: 264,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà trà sen Hồ Tây',
  image: img('hopquatang/24.jpg'),
  price: '1.200.000đ',
  priceNumber: 1200000,
  description: 'Hộp quà trà sen Hồ Tây cao cấp',
  stock: 50
},
{
  id: 265,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà tỏi đen',
  image: img('hopquatang/25.jpg'),
  price: '680.000đ',
  priceNumber: 680000,
  description: 'Hộp quà tỏi đen Lý Sơn hộp gỗ',
  stock: 100
},
{
  id: 266,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà mứt Tết cao cấp',
  image: img('hopquatang/26.jpg'),
  price: '520.000đ',
  priceNumber: 520000,
  description: 'Hộp quà 8 loại mứt Tết truyền thống',
  stock: 200
},
{
  id: 267,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà đặc sản Huế',
  image: img('hopquatang/27.jpg'),
  price: '750.000đ',
  priceNumber: 750000,
  description: 'Hộp quà đặc sản Huế: mè xửng, bánh kẹo',
  stock: 90
},
{
  id: 268,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà chăm sóc sức khỏe',
  image: img('hopquatang/28.jpg'),
  price: '1.450.000đ',
  priceNumber: 1450000,
  description: 'Hộp quà vitamin, collagen, omega 3',
  stock: 60
},
{
  id: 269,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà bánh trung thu',
  image: img('hopquatang/29.jpg'),
  price: '880.000đ',
  priceNumber: 880000,
  description: 'Hộp quà bánh trung thu Kinh Đô',
  stock: 150
},
{
  id: 270,
  categoryId: 'hop-qua-tang',
  name: 'Hộp quà VIP siêu sang',
  image: img('hopquatang/30.jpg'),
  price: '10.000.000đ',
  priceNumber: 10000000,
  description: 'Hộp quà VIP gồm rượu XO, xì gà, tranh đồng',
  stock: 20
},



];
