// data/products-gom-su.data.ts
import type { Design } from '@/types/designservices.types';
const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// Helper - gõ đường dẫn đầy đủ
const img = (path) => {
  const fullPath = `/src/assets/images/${path}`;
  return images[fullPath] || '';
};
// products-dichvuthietke.data.ts
import type { Product } from '@/types/product.types';



export const productsThietke: Product[] = [
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