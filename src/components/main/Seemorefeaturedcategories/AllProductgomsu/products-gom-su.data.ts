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


  // ========== CARD VISIT (30 sản phẩm: ID 1000-1029) ==========
  {
    id: 1000,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit cao cấp #1',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
    price: '500.000đ',
    priceNumber: 500000,
    description: 'Thiết kế card visit chuyên nghiệp, sang trọng',
    stock: 99
  },
  {
    id: 1001,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit doanh nghiệp #2',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    price: '450.000đ',
    priceNumber: 450000,
    description: 'Card visit phong cách doanh nghiệp',
    stock: 99
  },
  {
    id: 1002,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit sáng tạo #3',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=400',
    price: '600.000đ',
    priceNumber: 600000,
    description: 'Card visit độc đáo, sáng tạo',
    stock: 99
  },
  {
    id: 1003,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit tối giản #4',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=400',
    price: '400.000đ',
    priceNumber: 400000,
    description: 'Card visit phong cách tối giản',
    stock: 99
  },
  {
    id: 1004,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit vàng đồng #5',
    image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400',
    price: '800.000đ',
    priceNumber: 800000,
    description: 'Card visit cao cấp với chi tiết vàng',
    stock: 99
  },
  {
    id: 1005,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit hiện đại #6',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    price: '550.000đ',
    priceNumber: 550000,
    description: 'Card visit hiện đại, chuyên nghiệp',
    stock: 99
  },
  {
    id: 1006,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit đen trắng #7',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Card visit phong cách đen trắng cổ điển',
    stock: 99
  },
  {
    id: 1007,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit màu sắc #8',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=400',
    price: '520.000đ',
    priceNumber: 520000,
    description: 'Card visit đầy màu sắc, bắt mắt',
    stock: 99
  },
  {
    id: 1008,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit luxury #9',
    image: 'https://images.unsplash.com/photo-1619709267480-d1e423a0e5b5?w=400',
    price: '900.000đ',
    priceNumber: 900000,
    description: 'Card visit luxury cao cấp',
    stock: 99
  },
  {
    id: 1009,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit bóng #10',
    image: 'https://images.unsplash.com/photo-1600783245777-f3c8e638b615?w=400',
    price: '420.000đ',
    priceNumber: 420000,
    description: 'Card visit bề mặt bóng sang trọng',
    stock: 99
  },
  {
    id: 1010,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit nhám #11',
    image: 'https://images.unsplash.com/photo-1583339793403-3d9b001b6008?w=400',
    price: '430.000đ',
    priceNumber: 430000,
    description: 'Card visit bề mặt nhám tinh tế',
    stock: 99
  },
  {
    id: 1011,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit gradient #12',
    image: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=400',
    price: '560.000đ',
    priceNumber: 560000,
    description: 'Card visit hiệu ứng gradient đẹp mắt',
    stock: 99
  },
  {
    id: 1012,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit pattern #13',
    image: 'https://images.unsplash.com/photo-1586953208270-e6bfc6c92a15?w=400',
    price: '490.000đ',
    priceNumber: 490000,
    description: 'Card visit với họa tiết độc đáo',
    stock: 99
  },
  {
    id: 1013,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit geometric #14',
    image: 'https://images.unsplash.com/photo-1638202947265-b80d1f5ef676?w=400',
    price: '510.000đ',
    priceNumber: 510000,
    description: 'Card visit hình học hiện đại',
    stock: 99
  },
  {
    id: 1014,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit vintage #15',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    price: '540.000đ',
    priceNumber: 540000,
    description: 'Card visit phong cách vintage cổ điển',
    stock: 99
  },
  {
    id: 1015,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit typography #16',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    price: '470.000đ',
    priceNumber: 470000,
    description: 'Card visit tập trung vào typography',
    stock: 99
  },
  {
    id: 1016,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit logo #17',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400',
    price: '530.000đ',
    priceNumber: 530000,
    description: 'Card visit nổi bật logo doanh nghiệp',
    stock: 99
  },
  {
    id: 1017,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit tech #18',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400',
    price: '580.000đ',
    priceNumber: 580000,
    description: 'Card visit cho công ty công nghệ',
    stock: 99
  },
  {
    id: 1018,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit creative #19',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400',
    price: '620.000đ',
    priceNumber: 620000,
    description: 'Card visit sáng tạo cho designer',
    stock: 99
  },
  {
    id: 1019,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit professional #20',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400',
    price: '440.000đ',
    priceNumber: 440000,
    description: 'Card visit chuyên nghiệp đơn giản',
    stock: 99
  },
  {
    id: 1020,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit elegant #21',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400',
    price: '570.000đ',
    priceNumber: 570000,
    description: 'Card visit thanh lịch, trang nhã',
    stock: 99
  },
  {
    id: 1021,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit bold #22',
    image: 'https://images.unsplash.com/photo-1560179406-9aa5b2d46b8e?w=400',
    price: '460.000đ',
    priceNumber: 460000,
    description: 'Card visit in đậm, nổi bật',
    stock: 99
  },
  {
    id: 1022,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit pastel #23',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Card visit màu pastel nhẹ nhàng',
    stock: 99
  },
  {
    id: 1023,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit neon #24',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400',
    price: '590.000đ',
    priceNumber: 590000,
    description: 'Card visit hiệu ứng neon bắt mắt',
    stock: 99
  },
  {
    id: 1024,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit watercolor #25',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400',
    price: '610.000đ',
    priceNumber: 610000,
    description: 'Card visit hiệu ứng màu nước nghệ thuật',
    stock: 99
  },
  {
    id: 1025,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit marble #26',
    image: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=400',
    price: '640.000đ',
    priceNumber: 640000,
    description: 'Card visit họa tiết đá marble cao cấp',
    stock: 99
  },
  {
    id: 1026,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit metallic #27',
    image: 'https://images.unsplash.com/photo-1635776063043-ab23b4c226f6?w=400',
    price: '750.000đ',
    priceNumber: 750000,
    description: 'Card visit hiệu ứng kim loại sang trọng',
    stock: 99
  },
  {
    id: 1027,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit foil #28',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400',
    price: '850.000đ',
    priceNumber: 850000,
    description: 'Card visit dập kim foil đẹp mắt',
    stock: 99
  },
  {
    id: 1028,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit embossed #29',
    image: 'https://images.unsplash.com/photo-1554260570-e9689a3418b8?w=400',
    price: '780.000đ',
    priceNumber: 780000,
    description: 'Card visit dập nổi cao cấp',
    stock: 99
  },
  {
    id: 1029,
    categoryId: 'card-visit',
    name: 'Thiết kế card visit spot UV #30',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=400',
    price: '820.000đ',
    priceNumber: 820000,
    description: 'Card visit spot UV bóng cục bộ',
    stock: 99
  },

  // ========== TỜ RƠI (30 sản phẩm: ID 1030-1059) ==========
  {
    id: 1030,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi quảng cáo A4 #1',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=400',
    price: '300.000đ',
    priceNumber: 300000,
    description: 'Tờ rơi A4 chuyên nghiệp cho quảng cáo',
    stock: 99
  },
  {
    id: 1031,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi khuyến mãi #2',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
    price: '350.000đ',
    priceNumber: 350000,
    description: 'Tờ rơi khuyến mãi bắt mắt',
    stock: 99
  },
  {
    id: 1032,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi sự kiện #3',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
    price: '400.000đ',
    priceNumber: 400000,
    description: 'Tờ rơi cho sự kiện, hội nghị',
    stock: 99
  },
  {
    id: 1033,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi nhà hàng #4',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
    price: '450.000đ',
    priceNumber: 450000,
    description: 'Tờ rơi menu nhà hàng đẹp mắt',
    stock: 99
  },
  {
    id: 1034,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi bất động sản #5',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    price: '500.000đ',
    priceNumber: 500000,
    description: 'Tờ rơi giới thiệu dự án BDS',
    stock: 99
  },
  {
    id: 1035,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi du lịch #6',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400',
    price: '380.000đ',
    priceNumber: 380000,
    description: 'Tờ rơi tour du lịch hấp dẫn',
    stock: 99
  },
  {
    id: 1036,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi thẩm mỹ #7',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400',
    price: '420.000đ',
    priceNumber: 420000,
    description: 'Tờ rơi spa, thẩm mỹ viện',
    stock: 99
  },
  {
    id: 1037,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi giáo dục #8',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
    price: '360.000đ',
    priceNumber: 360000,
    description: 'Tờ rơi trung tâm đào tạo',
    stock: 99
  },
  {
    id: 1038,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi fitness #9',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    price: '390.000đ',
    priceNumber: 390000,
    description: 'Tờ rơi phòng gym, yoga',
    stock: 99
  },
  {
    id: 1039,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi thời trang #10',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
    price: '440.000đ',
    priceNumber: 440000,
    description: 'Tờ rơi shop thời trang',
    stock: 99
  },
  {
    id: 1040,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi công nghệ #11',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
    price: '460.000đ',
    priceNumber: 460000,
    description: 'Tờ rơi sản phẩm công nghệ',
    stock: 99
  },
  {
    id: 1041,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi ô tô #12',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Tờ rơi showroom ô tô',
    stock: 99
  },
  {
    id: 1042,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi y tế #13',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
    price: '410.000đ',
    priceNumber: 410000,
    description: 'Tờ rơi phòng khám, bệnh viện',
    stock: 99
  },
  {
    id: 1043,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi cafe #14',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    price: '330.000đ',
    priceNumber: 330000,
    description: 'Tờ rơi quán café phong cách',
    stock: 99
  },
  {
    id: 1044,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi bar #15',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400',
    price: '370.000đ',
    priceNumber: 370000,
    description: 'Tờ rơi bar, pub sôi động',
    stock: 99
  },
  {
    id: 1045,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi khách sạn #16',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    price: '520.000đ',
    priceNumber: 520000,
    description: 'Tờ rơi khách sạn, resort',
    stock: 99
  },
  {
    id: 1046,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi ngân hàng #17',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    price: '550.000đ',
    priceNumber: 550000,
    description: 'Tờ rơi ngân hàng, tài chính',
    stock: 99
  },
  {
    id: 1047,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi bảo hiểm #18',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
    price: '430.000đ',
    priceNumber: 430000,
    description: 'Tờ rơi sản phẩm bảo hiểm',
    stock: 99
  },
  {
    id: 1048,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi siêu thị #19',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400',
    price: '340.000đ',
    priceNumber: 340000,
    description: 'Tờ rơi siêu thị khuyến mãi',
    stock: 99
  },
  {
    id: 1049,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi điện máy #20',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400',
    price: '360.000đ',
    priceNumber: 360000,
    description: 'Tờ rơi cửa hàng điện máy',
    stock: 99
  },
  {
    id: 1050,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi nội thất #21',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    price: '470.000đ',
    priceNumber: 470000,
    description: 'Tờ rơi showroom nội thất',
    stock: 99
  },
  {
    id: 1051,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi xây dựng #22',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
    price: '490.000đ',
    priceNumber: 490000,
    description: 'Tờ rơi công ty xây dựng',
    stock: 99
  },
  {
    id: 1052,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi vận chuyển #23',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    price: '400.000đ',
    priceNumber: 400000,
    description: 'Tờ rơi dịch vụ vận chuyển',
    stock: 99
  },
  {
    id: 1053,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi ẩm thực #24',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
    price: '380.000đ',
    priceNumber: 380000,
    description: 'Tờ rơi lễ hội ẩm thực',
    stock: 99
  },
  {
    id: 1054,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi festival #25',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400',
    price: '420.000đ',
    priceNumber: 420000,
    description: 'Tờ rơi lễ hội, festival',
    stock: 99
  },
  {
    id: 1055,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi concert #26',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400',
    price: '460.000đ',
    priceNumber: 460000,
    description: 'Tờ rơi buổi hòa nhạc',
    stock: 99
  },
  {
    id: 1056,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi thể thao #27',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    price: '440.000đ',
    priceNumber: 440000,
    description: 'Tờ rơi sự kiện thể thao',
    stock: 99
  },
  {
    id: 1057,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi triển lãm #28',
    image: 'https://images.unsplash.com/photo-1569783078883-6d7de2e8d59e?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Tờ rơi triển lãm nghệ thuật',
    stock: 99
  },
  {
    id: 1058,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi chính trị #29',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400',
    price: '500.000đ',
    priceNumber: 500000,
    description: 'Tờ rơi chiến dịch chính trị',
    stock: 99
  },
  {
    id: 1059,
    categoryId: 'to-roi',
    name: 'Thiết kế tờ rơi từ thiện #30',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
    price: '320.000đ',
    priceNumber: 320000,
    description: 'Tờ rơi hoạt động từ thiện',
    stock: 99
  },

  // ========== BĂNG RÔN (30 sản phẩm: ID 1060-1089) ==========
  {
    id: 1060,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn khai trương #1',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400',
    price: '600.000đ',
    priceNumber: 600000,
    description: 'Băng rôn khai trương rực rỡ',
    stock: 99
  },
  {
    id: 1061,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn quảng cáo #2',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
    price: '550.000đ',
    priceNumber: 550000,
    description: 'Băng rôn quảng cáo nổi bật',
    stock: 99
  },
  {
    id: 1062,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn sự kiện #3',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400',
    price: '700.000đ',
    priceNumber: 700000,
    description: 'Băng rôn sự kiện chuyên nghiệp',
    stock: 99
  },
  {
    id: 1063,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn khuyến mãi #4',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400',
    price: '500.000đ',
    priceNumber: 500000,
    description: 'Băng rôn khuyến mãi giảm giá',
    stock: 99
  },
  {
    id: 1064,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn cao cấp #5',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
    price: '800.000đ',
    priceNumber: 800000,
    description: 'Băng rôn cao cấp sang trọng',
    stock: 99
  },
  {
    id: 1065,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn nhà hàng #6',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    price: '580.000đ',
    priceNumber: 580000,
    description: 'Băng rôn nhà hàng, quán ăn',
    stock: 99
  },
  {
    id: 1066,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn shop #7',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400',
    price: '520.000đ',
    priceNumber: 520000,
    description: 'Băng rôn cửa hàng thời trang',
    stock: 99
  },
  {
    id: 1067,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn siêu thị #8',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
    price: '650.000đ',
    priceNumber: 650000,
    description: 'Băng rôn siêu thị lớn',
    stock: 99
  },
  {
    id: 1068,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn hội chợ #9',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    price: '590.000đ',
    priceNumber: 590000,
    description: 'Băng rôn hội chợ, triển lãm',
    stock: 99
  },
  {
    id: 1069,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn lễ hội #10',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
    price: '720.000đ',
    priceNumber: 720000,
    description: 'Băng rôn lễ hội sôi động',
    stock: 99
  },
  {
    id: 1070,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn tết #11',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
    price: '680.000đ',
    priceNumber: 680000,
    description: 'Băng rôn chúc mừng năm mới',
    stock: 99
  },
  {
    id: 1071,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn tuyển dụng #12',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
    price: '540.000đ',
    priceNumber: 540000,
    description: 'Băng rôn tuyển nhân viên',
    stock: 99
  },
  {
    id: 1072,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn bất động sản #13',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
    price: '750.000đ',
    priceNumber: 750000,
    description: 'Băng rôn dự án BDS',
    stock: 99
  },
  {
    id: 1073,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn chào mừng #14',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
    price: '620.000đ',
    priceNumber: 620000,
    description: 'Băng rôn chào mừng sự kiện',
    stock: 99
  },
  {
    id: 1074,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn hội nghị #15',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
    price: '780.000đ',
    priceNumber: 780000,
    description: 'Băng rôn hội nghị chuyên nghiệp',
    stock: 99
  },
  {
    id: 1075,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn đám cưới #16',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
    price: '850.000đ',
    priceNumber: 850000,
    description: 'Băng rôn đám cưới lãng mạn',
    stock: 99
  },
  {
    id: 1076,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn sinh nhật #17',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Băng rôn sinh nhật vui nhộn',
    stock: 99
  },
  {
    id: 1077,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn thể thao #18',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
    price: '640.000đ',
    priceNumber: 640000,
    description: 'Băng rôn giải thể thao',
    stock: 99
  },
  {
    id: 1078,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn trường học #19',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
    price: '560.000đ',
    priceNumber: 560000,
    description: 'Băng rôn sự kiện trường học',
    stock: 99
  },
  {
    id: 1079,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn từ thiện #20',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400',
    price: '520.000đ',
    priceNumber: 520000,
    description: 'Băng rôn hoạt động từ thiện',
    stock: 99
  },
  {
    id: 1080,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn concert #21',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400',
    price: '900.000đ',
    priceNumber: 900000,
    description: 'Băng rôn buổi hòa nhạc',
    stock: 99
  },
  {
    id: 1081,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn workshop #22',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    price: '580.000đ',
    priceNumber: 580000,
    description: 'Băng rôn workshop, seminar',
    stock: 99
  },
  {
    id: 1082,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn fitness #23',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
    price: '610.000đ',
    priceNumber: 610000,
    description: 'Băng rôn phòng gym',
    stock: 99
  },
  {
    id: 1083,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn spa #24',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    price: '660.000đ',
    priceNumber: 660000,
    description: 'Băng rôn spa, beauty',
    stock: 99
  },
  {
    id: 1084,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn salon #25',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
    price: '570.000đ',
    priceNumber: 570000,
    description: 'Băng rôn salon tóc',
    stock: 99
  },
  {
    id: 1085,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn showroom #26',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400',
    price: '820.000đ',
    priceNumber: 820000,
    description: 'Băng rôn showroom ô tô',
    stock: 99
  },
  {
    id: 1086,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn khách sạn #27',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
    price: '760.000đ',
    priceNumber: 760000,
    description: 'Băng rôn khách sạn, resort',
    stock: 99
  },
  {
    id: 1087,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn y tế #28',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400',
    price: '690.000đ',
    priceNumber: 690000,
    description: 'Băng rôn phòng khám, bệnh viện',
    stock: 99
  },
  {
    id: 1088,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn công ty #29',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
    price: '740.000đ',
    priceNumber: 740000,
    description: 'Băng rôn văn phòng công ty',
    stock: 99
  },
  {
    id: 1089,
    categoryId: 'bang-ron',
    name: 'Thiết kế băng rôn ngoài trời #30',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    price: '950.000đ',
    priceNumber: 950000,
    description: 'Băng rôn ngoài trời chất lượng cao',
    stock: 99
  },

  // ========== THIỆP CƯỚI (30 sản phẩm: ID 1090-1119) ==========
  {
    id: 1090,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới tối giản #1',
    image: 'https://images.unsplash.com/photo-1522673607211-8c4bf73857a8?w=400',
    price: '400.000đ',
    priceNumber: 400000,
    description: 'Thiệp cưới phong cách tối giản',
    stock: 99
  },
  {
    id: 1091,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới cổ điển #2',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400',
    price: '500.000đ',
    priceNumber: 500000,
    description: 'Thiệp cưới cổ điển truyền thống',
    stock: 99
  },
  {
    id: 1092,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới hiện đại #3',
    image: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400',
    price: '600.000đ',
    priceNumber: 600000,
    description: 'Thiệp cưới hiện đại sang trọng',
    stock: 99
  },
  {
    id: 1093,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới cao cấp #4',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400',
    price: '800.000đ',
    priceNumber: 800000,
    description: 'Thiệp cưới cao cấp với vàng',
    stock: 99
  },
  {
    id: 1094,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới sáng tạo #5',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400',
    price: '700.000đ',
    priceNumber: 700000,
    description: 'Thiệp cưới độc đáo sáng tạo',
    stock: 99
  },
  {
    id: 1095,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới hoa #6',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=400',
    price: '550.000đ',
    priceNumber: 550000,
    description: 'Thiệp cưới họa tiết hoa lá',
    stock: 99
  },
  {
    id: 1096,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới vintage #7',
    image: 'https://images.unsplash.com/photo-1516732587223-a858c619b3da?w=400',
    price: '620.000đ',
    priceNumber: 620000,
    description: 'Thiệp cưới phong cách vintage',
    stock: 99
  },
  {
    id: 1097,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới elegant #8',
    image: 'https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?w=400',
    price: '680.000đ',
    priceNumber: 680000,
    description: 'Thiệp cưới thanh lịch tao nhã',
    stock: 99
  },
  {
    id: 1098,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới lãng mạn #9',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400',
    price: '590.000đ',
    priceNumber: 590000,
    description: 'Thiệp cưới lãng mạn ngọt ngào',
    stock: 99
  },
  {
    id: 1099,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới pastel #10',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400',
    price: '520.000đ',
    priceNumber: 520000,
    description: 'Thiệp cưới tông pastel nhẹ nhàng',
    stock: 99
  },
  {
    id: 1100,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới gold #11',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400',
    price: '850.000đ',
    priceNumber: 850000,
    description: 'Thiệp cưới dập vàng sang trọng',
    stock: 99
  },
  {
    id: 1101,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới watercolor #12',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
    price: '640.000đ',
    priceNumber: 640000,
    description: 'Thiệp cưới màu nước nghệ thuật',
    stock: 99
  },
  {
    id: 1102,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới laser cut #13',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    price: '950.000đ',
    priceNumber: 950000,
    description: 'Thiệp cưới cắt laser tinh xảo',
    stock: 99
  },
  {
    id: 1103,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới popup #14',
    image: 'https://images.unsplash.com/photo-1543773826-82a847b13d2f?w=400',
    price: '1200.000đ',
    priceNumber: 1200000,
    description: 'Thiệp cưới 3D popup độc đáo',
    stock: 99
  },
  {
    id: 1104,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới foil #15',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400',
    price: '780.000đ',
    priceNumber: 780000,
    description: 'Thiệp cưới dập kim foil',
    stock: 99
  },
  {
    id: 1105,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới rustic #16',
    image: 'https://images.unsplash.com/photo-1452274381522-521513015433?w=400',
    price: '560.000đ',
    priceNumber: 560000,
    description: 'Thiệp cưới phong cách rustic',
    stock: 99
  },
  {
    id: 1106,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới bohemian #17',
    image: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=400',
    price: '630.000đ',
    priceNumber: 630000,
    description: 'Thiệp cưới phong cách bohemian',
    stock: 99
  },
  {
    id: 1107,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới geometric #18',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    price: '580.000đ',
    priceNumber: 580000,
    description: 'Thiệp cưới họa tiết hình học',
    stock: 99
  },
  {
    id: 1108,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới marble #19',
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400',
    price: '720.000đ',
    priceNumber: 720000,
    description: 'Thiệp cưới vân đá marble',
    stock: 99
  },
  {
    id: 1109,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới greenery #20',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400',
    price: '570.000đ',
    priceNumber: 570000,
    description: 'Thiệp cưới họa tiết lá xanh',
    stock: 99
  },
  {
    id: 1110,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới acrylic #21',
    image: 'https://images.unsplash.com/photo-1516690553543-a46982a1fe0d?w=400',
    price: '1100.000đ',
    priceNumber: 1100000,
    description: 'Thiệp cưới chất liệu acrylic trong suốt',
    stock: 99
  },
  {
    id: 1111,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới vellum #22',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
    price: '820.000đ',
    priceNumber: 820000,
    description: 'Thiệp cưới giấy vellum mờ đục',
    stock: 99
  },
  {
    id: 1112,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới calligraphy #23',
    image: 'https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=400',
    price: '750.000đ',
    priceNumber: 750000,
    description: 'Thiệp cưới chữ viết tay nghệ thuật',
    stock: 99
  },
  {
    id: 1113,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới monogram #24',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400',
    price: '660.000đ',
    priceNumber: 660000,
    description: 'Thiệp cưới với monogram đôi uyên ương',
    stock: 99
  },
  {
    id: 1114,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới chụp ảnh #25',
    image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=400',
    price: '690.000đ',
    priceNumber: 690000,
    description: 'Thiệp cưới in ảnh cô dâu chú rể',
    stock: 99
  },
  {
    id: 1115,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới timeline #26',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400',
    price: '710.000đ',
    priceNumber: 710000,
    description: 'Thiệp cưới kể câu chuyện tình yêu',
    stock: 99
  },
  {
    id: 1116,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới map #27',
    image: 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=400',
    price: '540.000đ',
    priceNumber: 540000,
    description: 'Thiệp cưới kèm bản đồ địa điểm',
    stock: 99
  },
  {
    id: 1117,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới QR code #28',
    image: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Thiệp cưới có QR code hiện đại',
    stock: 99
  },
  {
    id: 1118,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới pocket #29',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400',
    price: '880.000đ',
    priceNumber: 880000,
    description: 'Thiệp cưới dạng bỏ túi nhiều tờ',
    stock: 99
  },
  {
    id: 1119,
    categoryId: 'thiep-cuoi',
    name: 'Thiết kế thiệp cưới gate fold #30',
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400',
    price: '920.000đ',
    priceNumber: 920000,
    description: 'Thiệp cưới gấp cửa sang trọng',
    stock: 99
  },

  // ========== MENU (30 sản phẩm: ID 1120-1149) ==========
  {
    id: 1120,
    categoryId: 'menu',
    name: 'Thiết kế menu nhà hàng sang trọng #1',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    price: '500.000đ',
    priceNumber: 500000,
    description: 'Menu nhà hàng cao cấp sang trọng',
    stock: 99
  },
  {
    id: 1121,
    categoryId: 'menu',
    name: 'Thiết kế menu quán café #2',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    price: '400.000đ',
    priceNumber: 400000,
    description: 'Menu café phong cách hiện đại',
    stock: 99
  },
  {
    id: 1122,
    categoryId: 'menu',
    name: 'Thiết kế menu quán ăn #3',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
    price: '350.000đ',
    priceNumber: 350000,
    description: 'Menu quán ăn bình dân thân thiện',
    stock: 99
  },
  {
    id: 1123,
    categoryId: 'menu',
    name: 'Thiết kế menu đồ uống #4',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400',
    price: '450.000đ',
    priceNumber: 450000,
    description: 'Menu chuyên về đồ uống',
    stock: 99
  },
  {
    id: 1124,
    categoryId: 'menu',
    name: 'Thiết kế menu buffet #5',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    price: '600.000đ',
    priceNumber: 600000,
    description: 'Menu buffet đa dạng phong phú',
    stock: 99
  },
  {
    id: 1125,
    categoryId: 'menu',
    name: 'Thiết kế menu fast food #6',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400',
    price: '380.000đ',
    priceNumber: 380000,
    description: 'Menu quán fast food năng động',
    stock: 99
  },
  {
    id: 1126,
    categoryId: 'menu',
    name: 'Thiết kế menu bar #7',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400',
    price: '480.000đ',
    priceNumber: 480000,
    description: 'Menu bar, pub sôi động',
    stock: 99
  },
  {
    id: 1127,
    categoryId: 'menu',
    name: 'Thiết kế menu sushi #8',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
    price: '550.000đ',
    priceNumber: 550000,
    description: 'Menu nhà hàng Nhật Bản',
    stock: 99
  },
  {
    id: 1128,
    categoryId: 'menu',
    name: 'Thiết kế menu pizza #9',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
    price: '420.000đ',
    priceNumber: 420000,
    description: 'Menu quán pizza Italia',
    stock: 99
  },
  {
    id: 1129,
    categoryId: 'menu',
    name: 'Thiết kế menu bakery #10',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    price: '440.000đ',
    priceNumber: 440000,
    description: 'Menu tiệm bánh ngọt',
    stock: 99
  },
  {
    id: 1130,
    categoryId: 'menu',
    name: 'Thiết kế menu BBQ #11',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    price: '520.000đ',
    priceNumber: 520000,
    description: 'Menu quán nướng BBQ',
    stock: 99
  },
  {
    id: 1131,
    categoryId: 'menu',
    name: 'Thiết kế menu seafood #12',
    image: 'https://images.unsplash.com/photo-1559366384-a262f8f71d91?w=400',
    price: '580.000đ',
    priceNumber: 580000,
    description: 'Menu nhà hàng hải sản',
    stock: 99
  },
  {
    id: 1132,
    categoryId: 'menu',
    name: 'Thiết kế menu vegetarian #13',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    price: '460.000đ',
    priceNumber: 460000,
    description: 'Menu quán chay healthy',
    stock: 99
  },
  {
    id: 1133,
    categoryId: 'menu',
    name: 'Thiết kế menu dessert #14',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
    price: '410.000đ',
    priceNumber: 410000,
    description: 'Menu chuyên tráng miệng',
    stock: 99
  },
  {
    id: 1134,
    categoryId: 'menu',
    name: 'Thiết kế menu breakfast #15',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400',
    price: '390.000đ',
    priceNumber: 390000,
    description: 'Menu bữa sáng đa dạng',
    stock: 99
  },
  {
    id: 1135,
    categoryId: 'menu',
    name: 'Thiết kế menu fine dining #16',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
    price: '700.000đ',
    priceNumber: 700000,
    description: 'Menu nhà hàng fine dining',
    stock: 99
  },
  {
    id: 1136,
    categoryId: 'menu',
    name: 'Thiết kế menu street food #17',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400',
    price: '320.000đ',
    priceNumber: 320000,
    description: 'Menu đồ ăn đường phố',
    stock: 99
  },
  {
    id: 1137,
    categoryId: 'menu',
    name: 'Thiết kế menu wine #18',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
    price: '620.000đ',
    priceNumber: 620000,
    description: 'Menu rượu vang cao cấp',
    stock: 99
  },
  {
    id: 1138,
    categoryId: 'menu',
    name: 'Thiết kế menu cocktail #19',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400',
    price: '540.000đ',
    priceNumber: 540000,
    description: 'Menu cocktail sáng tạo',
    stock: 99
  },
  {
    id: 1139,
    categoryId: 'menu',
    name: 'Thiết kế menu kid #20',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400',
    price: '430.000đ',
    priceNumber: 430000,
    description: 'Menu dành cho trẻ em',
    stock: 99
  },
  {
    id: 1140,
    categoryId: 'menu',
    name: 'Thiết kế menu seasonal #21',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400',
    price: '490.000đ',
    priceNumber: 490000,
    description: 'Menu theo mùa đặc biệt',
    stock: 99
  },
  {
    id: 1141,
    categoryId: 'menu',
    name: 'Thiết kế menu QR code #22',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    price: '450.000đ',
    priceNumber: 450000,
    description: 'Menu điện tử QR code',
    stock: 99
  },
  {
    id: 1142,
    categoryId: 'menu',
    name: 'Thiết kế menu takeaway #23',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400',
    price: '370.000đ',
    priceNumber: 370000,
    description: 'Menu đồ ăn mang đi',
    stock: 99
  },
  {
    id: 1143,
    categoryId: 'menu',
    name: 'Thiết kế menu delivery #24',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400',
    price: '360.000đ',
    priceNumber: 360000,
    description: 'Menu giao hàng tận nơi',
    stock: 99
  },
  {
    id: 1144,
    categoryId: 'menu',
    name: 'Thiết kế menu catering #25',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400',
    price: '650.000đ',
    priceNumber: 650000,
    description: 'Menu tiệc cưới, sự kiện',
    stock: 99
  },
  {
    id: 1145,
    categoryId: 'menu',
    name: 'Thiết kế menu hotel #26',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    price: '680.000đ',
    priceNumber: 680000,
    description: 'Menu khách sạn room service',
    stock: 99
  },
  {
    id: 1146,
    categoryId: 'menu',
    name: 'Thiết kế menu spa #27',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    price: '530.000đ',
    priceNumber: 530000,
    description: 'Menu dịch vụ spa, massage',
    stock: 99
  },
  {
    id: 1147,
    categoryId: 'menu',
    name: 'Thiết kế menu tối giản #28',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400',
    price: '420.000đ',
    priceNumber: 420000,
    description: 'Menu phong cách minimalist',
    stock: 99
  },
  {
    id: 1148,
    categoryId: 'menu',
    name: 'Thiết kế menu vintage #29',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400',
    price: '510.000đ',
    priceNumber: 510000,
    description: 'Menu phong cách vintage cổ điển',
    stock: 99
  },
  {
    id: 1149,
    categoryId: 'menu',
    name: 'Thiết kế menu luxury #30',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400',
    price: '750.000đ',
    priceNumber: 750000,
    description: 'Menu cao cấp luxury đẳng cấp',
    stock: 99
  }

];
