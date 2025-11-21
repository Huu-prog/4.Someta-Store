import { defineStore } from 'pinia'

// Import TẤT CẢ ảnh trong tất cả folder con (** = recursive)
const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// Helper - gõ đường dẫn đầy đủ
const img = (path) => {
  const fullPath = `/src/assets/images/${path}`;
  return images[fullPath] || '';
};

export const useProductStore = defineStore('product', {
  state: () => ({
    products: ([
   // ========== QUÀ TẶNG GỐM SỨ (50 sản phẩm: ID 1-50) ==========
  {
    id: 1,
    name: 'Bộ ấm chén gốm sứ Bát Tràng cao cấp',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '850.000đ'
  },
  {
    id: 2,
    name: 'Ly sứ trắng in logo doanh nghiệp',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500',
    oldPrice: '180.000đ',
    newPrice: '120.000đ'
  },
  {
    id: 3,
    name: 'Bình hoa gốm sứ nghệ thuật trang trí',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
    oldPrice: '450.000đ',
    newPrice: '320.000đ'
  },
  {
    id: 4,
    name: 'Bộ chén dĩa sứ trắng sang trọng',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500',
    oldPrice: '2.500.000đ',
    newPrice: '1.800.000đ'
  },
  {
    id: 5,
    name: 'Tượng gốm phong thủy may mắn',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500',
    oldPrice: '680.000đ',
    newPrice: '480.000đ'
  },
  {
    id: 6,
    name: 'Bộ tách café sứ cao cấp',
    image: 'https://images.unsplash.com/photo-1517512006864-735bbfc84f1d?w=500',
    oldPrice: '890.000đ',
    newPrice: '620.000đ'
  },
  {
    id: 7,
    name: 'Đĩa sứ trang trí nghệ thuật',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
    oldPrice: '320.000đ',
    newPrice: '250.000đ'
  },
  {
    id: 8,
    name: 'Bộ ấm trà Nhật Bản tinh tế',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.100.000đ'
  },
  {
    id: 9,
    name: 'Lọ hoa gốm sơn mài truyền thống',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=500',
    oldPrice: '560.000đ',
    newPrice: '420.000đ'
  },
  {
    id: 10,
    name: 'Bình trà gốm Bát Tràng thủ công',
    image: 'https://images.unsplash.com/photo-1564107987383-3acda7f690e3?w=500',
    oldPrice: '780.000đ',
    newPrice: '580.000đ'
  },
  {
    id: 11,
    name: 'Bộ ly sứ dát vàng sang trọng',
    image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '890.000đ'
  },
  {
    id: 12,
    name: 'Chén cơm sứ Nhật phong cách',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500',
    oldPrice: '180.000đ',
    newPrice: '140.000đ'
  },
  {
    id: 13,
    name: 'Bộ bát đĩa gốm sứ cao cấp',
    image: 'https://images.unsplash.com/photo-1606299332326-96af917f3e5c?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.650.000đ'
  },
  {
    id: 14,
    name: 'Ly thủy tinh cao cấp trong suốt',
    image: 'https://images.unsplash.com/photo-1577554966997-27ade1a18095?w=500',
    oldPrice: '150.000đ',
    newPrice: '110.000đ'
  },
  {
    id: 15,
    name: 'Bình gốm trang trí hiện đại',
    image: 'https://images.unsplash.com/photo-1610294675875-ff4cf0cd5ff4?w=500',
    oldPrice: '680.000đ',
    newPrice: '520.000đ'
  },
  {
    id: 16,
    name: 'Bộ ấm chén men rạn cổ điển',
    image: 'https://images.unsplash.com/photo-1564107987383-3acda7f690e3?w=500',
    oldPrice: '1.800.000đ',
    newPrice: '1.350.000đ'
  },
  {
    id: 17,
    name: 'Đĩa gốm vẽ tay thủ công',
    image: 'https://images.unsplash.com/photo-1601924357840-3c70c8e8d6c9?w=500',
    oldPrice: '420.000đ',
    newPrice: '320.000đ'
  },
  {
    id: 18,
    name: 'Tách trà sứ trắng thanh lịch',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500',
    oldPrice: '280.000đ',
    newPrice: '220.000đ'
  },
  {
    id: 19,
    name: 'Bình đựng tăm cao cấp tiện dụng',
    image: 'https://images.unsplash.com/photo-1585933646398-38113a732e1d?w=500',
    oldPrice: '180.000đ',
    newPrice: '140.000đ'
  },
  {
    id: 20,
    name: 'Bộ chén sứ họa tiết hoa văn',
    image: 'https://images.unsplash.com/photo-1558857563-b101a60e1d2d?w=500',
    oldPrice: '850.000đ',
    newPrice: '680.000đ'
  },
  {
    id: 21,
    name: 'Lọ hoa sứ trắng tối giản',
    image: 'https://images.unsplash.com/photo-1603112936275-c5f7cc50b460?w=500',
    oldPrice: '520.000đ',
    newPrice: '420.000đ'
  },
  {
    id: 22,
    name: 'Bộ tách espresso chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500',
    oldPrice: '780.000đ',
    newPrice: '620.000đ'
  },
  {
    id: 23,
    name: 'Đĩa sứ họa tiết xanh cổ điển',
    image: 'https://images.unsplash.com/photo-1610294675875-ff4cf0cd5ff4?w=500',
    oldPrice: '350.000đ',
    newPrice: '280.000đ'
  },
  {
    id: 24,
    name: 'Bình rượu gốm sứ truyền thống',
    image: 'https://images.unsplash.com/photo-1559056199-d03c45bb6290?w=500',
    oldPrice: '950.000đ',
    newPrice: '750.000đ'
  },
  {
    id: 25,
    name: 'Ly uống nước gốm tiện lợi',
    image: 'https://images.unsplash.com/photo-1581933804215-77b0a4e99bdd?w=500',
    oldPrice: '160.000đ',
    newPrice: '130.000đ'
  },
  {
    id: 26,
    name: 'Bộ đồ ăn sứ hoàn chỉnh',
    image: 'https://images.unsplash.com/photo-1589817912925-46e00f9c4a9e?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.500.000đ'
  },
  {
    id: 27,
    name: 'Chén súp sứ cao cấp',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=500',
    oldPrice: '220.000đ',
    newPrice: '180.000đ'
  },
  {
    id: 28,
    name: 'Bình hoa gốm đỏ nổi bật',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=500',
    oldPrice: '680.000đ',
    newPrice: '540.000đ'
  },
  {
    id: 29,
    name: 'Bộ tách latte chuyên dụng',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500',
    oldPrice: '820.000đ',
    newPrice: '680.000đ'
  },
  {
    id: 30,
    name: 'Đĩa gốm tráng men bóng',
    image: 'https://images.unsplash.com/photo-1610294675875-ff4cf0cd5ff4?w=500',
    oldPrice: '380.000đ',
    newPrice: '310.000đ'
  },
  {
    id: 31,
    name: 'Bộ ly cocktail pha chế',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500',
    oldPrice: '1.100.000đ',
    newPrice: '880.000đ'
  },
  {
    id: 32,
    name: 'Chén trà Trung Quốc cổ điển',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500',
    oldPrice: '480.000đ',
    newPrice: '390.000đ'
  },
  {
    id: 33,
    name: 'Bình sứ dát bạc quý phái',
    image: 'https://images.unsplash.com/photo-1610294676653-b85b6d1c09e6?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.200.000đ'
  },
  {
    id: 34,
    name: 'Lọ đựng gia vị tiện dụng',
    image: 'https://images.unsplash.com/photo-1585933646398-38113a732e1d?w=500',
    oldPrice: '280.000đ',
    newPrice: '230.000đ'
  },
  {
    id: 35,
    name: 'Bộ bát tô sứ gia đình',
    image: 'https://images.unsplash.com/photo-1606913084060-3e85e3f82320?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '950.000đ'
  },
  {
    id: 36,
    name: 'Đĩa salad gốm hiện đại',
    image: 'https://images.unsplash.com/photo-1589817912925-46e00f9c4a9e?w=500',
    oldPrice: '420.000đ',
    newPrice: '350.000đ'
  },
  {
    id: 37,
    name: 'Ly rượu vang cao cấp tinh tế',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=500',
    oldPrice: '680.000đ',
    newPrice: '550.000đ'
  },
  {
    id: 38,
    name: 'Bình trà gốm Japan phong cách',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.200.000đ'
  },
  {
    id: 39,
    name: 'Chén cơm họa tiết đẹp mắt',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500',
    oldPrice: '200.000đ',
    newPrice: '165.000đ'
  },
  {
    id: 40,
    name: 'Bộ đồ ăn Nhật Bản cao cấp',
    image: 'https://images.unsplash.com/photo-1589817912925-46e00f9c4a9e?w=500',
    oldPrice: '3.800.000đ',
    newPrice: '3.100.000đ'
  },
  {
    id: 41,
    name: 'Tách café sứ trắng thanh lịch',
    image: 'https://images.unsplash.com/photo-1517512006864-735bbfc84f1d?w=500',
    oldPrice: '250.000đ',
    newPrice: '200.000đ'
  },
  {
    id: 42,
    name: 'Bình gốm xanh ngọc quý phái',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
    oldPrice: '890.000đ',
    newPrice: '720.000đ'
  },
  {
    id: 43,
    name: 'Đĩa sứ vuông hiện đại',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
    oldPrice: '320.000đ',
    newPrice: '280.000đ'
  },
  {
    id: 44,
    name: 'Bộ chén bát sứ trắng tinh khôi',
    image: 'https://images.unsplash.com/photo-1606299332326-96af917f3e5c?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.250.000đ'
  },
  {
    id: 45,
    name: 'Ly bia thủy tinh dày dặn',
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500',
    oldPrice: '180.000đ',
    newPrice: '150.000đ'
  },
  {
    id: 46,
    name: 'Tượng gốm mèo thần tài',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500',
    oldPrice: '580.000đ',
    newPrice: '480.000đ'
  },
  {
    id: 47,
    name: 'Bình hoa sứ họa tiết vàng',
    image: 'https://images.unsplash.com/photo-1603112936275-c5f7cc50b460?w=500',
    oldPrice: '720.000đ',
    newPrice: '620.000đ'
  },
  {
    id: 48,
    name: 'Chén trà men ngọc bích',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500',
    oldPrice: '350.000đ',
    newPrice: '300.000đ'
  },
  {
    id: 49,
    name: 'Bộ tách trà Tử Sa cao cấp',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.900.000đ'
  },
  {
    id: 50,
    name: 'Đĩa gốm tròn họa tiết rồng phượng',
    image: 'https://images.unsplash.com/photo-1601924357840-3c70c8e8d6c9?w=500',
    oldPrice: '650.000đ',
    newPrice: '550.000đ'
  },

  // ========== QUÀ TẶNG THỦY TINH PHA LÊ (50 sản phẩm: ID 51-100) ==========
  {
    id: 51,
    name: 'Cúp pha lê vinh danh cao cấp',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.500.000đ',
    newPrice: '1.950.000đ'
  },
  {
    id: 52,
    name: 'Kỷ niệm chương pha lê quý phái',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    oldPrice: '1.800.000đ',
    newPrice: '1.450.000đ'
  },
  {
    id: 53,
    name: 'Biểu trưng pha lê sang trọng',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.650.000đ'
  },
  {
    id: 54,
    name: 'Ly thủy tinh khắc laser tên',
    image: 'https://images.unsplash.com/photo-1577554966997-27ade1a18095?w=500',
    oldPrice: '580.000đ',
    newPrice: '480.000đ'
  },
  {
    id: 55,
    name: 'Bình hoa pha lê trong suốt',
    image: 'https://images.unsplash.com/photo-1603112936275-c5f7cc50b460?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.200.000đ'
  },
  {
    id: 56,
    name: 'Bộ ly rượu pha lê cao cấp',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.300.000đ'
  },
  {
    id: 57,
    name: 'Cúp thủy tinh vàng đẹp mắt',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '3.500.000đ',
    newPrice: '2.900.000đ'
  },
  {
    id: 58,
    name: 'Đế kỷ niệm chương pha lê',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '980.000đ'
  },
  {
    id: 59,
    name: 'Tượng pha lê 3D tinh xảo',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '4.500.000đ',
    newPrice: '3.800.000đ'
  },
  {
    id: 60,
    name: 'Ly whisky pha lê cao cấp',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '1.800.000đ',
    newPrice: '1.500.000đ'
  },
  {
    id: 61,
    name: 'Bình rượu thủy tinh sang trọng',
    image: 'https://images.unsplash.com/photo-1564595231049-2ce2d5e451e8?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.850.000đ'
  },
  {
    id: 62,
    name: 'Đĩa pha lê trang trí đẹp',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
    oldPrice: '980.000đ',
    newPrice: '820.000đ'
  },
  {
    id: 63,
    name: 'Cúp pha lê ngôi sao nổi bật',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.900.000đ',
    newPrice: '2.400.000đ'
  },
  {
    id: 64,
    name: 'Bộ ly champagne pha lê',
    image: 'https://images.unsplash.com/photo-1560859251-d7884141223b?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.650.000đ'
  },
  {
    id: 65,
    name: 'Lọ hoa thủy tinh hiện đại',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=500',
    oldPrice: '850.000đ',
    newPrice: '720.000đ'
  },
  {
    id: 66,
    name: 'Biểu trưng thủy tinh khắc tên',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '2.500.000đ',
    newPrice: '2.100.000đ'
  },
  {
    id: 67,
    name: 'Ly brandy pha lê sang trọng',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '1.600.000đ',
    newPrice: '1.350.000đ'
  },
  {
    id: 68,
    name: 'Cúp golf pha lê cao cấp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.800.000đ',
    newPrice: '3.200.000đ'
  },
  {
    id: 69,
    name: 'Tượng pha lê laser 3D',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '5.200.000đ',
    newPrice: '4.500.000đ'
  },
  {
    id: 70,
    name: 'Bộ ly martini pha lê',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500',
    oldPrice: '2.600.000đ',
    newPrice: '2.200.000đ'
  },
  {
    id: 71,
    name: 'Đế pha lê vuông tinh tế',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    oldPrice: '1.400.000đ',
    newPrice: '1.180.000đ'
  },
  {
    id: 72,
    name: 'Cúp thủy tinh oval độc đáo',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.350.000đ'
  },
  {
    id: 73,
    name: 'Ly cognac pha lê cao cấp',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '1.900.000đ',
    newPrice: '1.600.000đ'
  },
  {
    id: 74,
    name: 'Biểu trưng pha lê kim cương',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '4.200.000đ',
    newPrice: '3.600.000đ'
  },
  {
    id: 75,
    name: 'Bình đựng nước pha lê sang',
    image: 'https://images.unsplash.com/photo-1564595231049-2ce2d5e451e8?w=500',
    oldPrice: '1.800.000đ',
    newPrice: '1.500.000đ'
  },
  {
    id: 76,
    name: 'Đĩa thủy tinh sang trọng',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '1.000.000đ'
  },
  {
    id: 77,
    name: 'Cúp pha lê tròn đẹp mắt',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.400.000đ',
    newPrice: '2.050.000đ'
  },
  {
    id: 78,
    name: 'Ly vodka thủy tinh chuyên dụng',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '1.300.000đ',
    newPrice: '1.100.000đ'
  },
  {
    id: 79,
    name: 'Tượng pha lê ngựa phong thủy',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '3.600.000đ',
    newPrice: '3.100.000đ'
  },
  {
    id: 80,
    name: 'Bộ ly bia pha lê cao cấp',
    image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.900.000đ'
  },
  {
    id: 81,
    name: 'Biểu trưng pha lê hình tháp',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    oldPrice: '3.800.000đ',
    newPrice: '3.250.000đ'
  },
  {
    id: 82,
    name: 'Cúp thủy tinh khắc 3D tinh xảo',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '4.500.000đ',
    newPrice: '3.900.000đ'
  },
  {
    id: 83,
    name: 'Ly cocktail pha lê thanh lịch',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500',
    oldPrice: '1.700.000đ',
    newPrice: '1.450.000đ'
  },
  {
    id: 84,
    name: 'Đế kỷ niệm chương cao cấp',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '1.600.000đ',
    newPrice: '1.350.000đ'
  },
  {
    id: 85,
    name: 'Bình hoa thủy tinh nghệ thuật',
    image: 'https://images.unsplash.com/photo-1603112936275-c5f7cc50b460?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.400.000đ'
  },
  {
    id: 86,
    name: 'Cúp pha lê titan đẳng cấp',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '5.500.000đ',
    newPrice: '4.800.000đ'
  },
  {
    id: 87,
    name: 'Ly rum pha lê cao cấp',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.280.000đ'
  },
  {
    id: 88,
    name: 'Biểu trưng thủy tinh chữ nhật',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '2.600.000đ',
    newPrice: '2.250.000đ'
  },
  {
    id: 89,
    name: 'Tượng pha lê sư tử oai phong',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '4.800.000đ',
    newPrice: '4.200.000đ'
  },
  {
    id: 90,
    name: 'Bộ ly nước cao cấp thanh lịch',
    image: 'https://images.unsplash.com/photo-1577554966997-27ade1a18095?w=500',
    oldPrice: '2.400.000đ',
    newPrice: '2.050.000đ'
  },
  {
    id: 91,
    name: 'Cúp pha lê chữ nhật hiện đại',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.800.000đ'
  },
  {
    id: 92,
    name: 'Bình rượu pha lê khắc hoa văn',
    image: 'https://images.unsplash.com/photo-1564595231049-2ce2d5e451e8?w=500',
    oldPrice: '3.500.000đ',
    newPrice: '3.000.000đ'
  },
  {
    id: 93,
    name: 'Đĩa pha lê vuông trang trí',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
    oldPrice: '1.100.000đ',
    newPrice: '950.000đ'
  },
  {
    id: 94,
    name: 'Cúp thủy tinh kim tự tháp',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '4.200.000đ',
    newPrice: '3.650.000đ'
  },
  {
    id: 95,
    name: 'Ly gin pha lê chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500',
    oldPrice: '1.600.000đ',
    newPrice: '1.400.000đ'
  },
  {
    id: 96,
    name: 'Biểu trưng pha lê hình quả cầu',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '3.900.000đ',
    newPrice: '3.400.000đ'
  },
  {
    id: 97,
    name: 'Tượng pha lê thiên nga tinh tế',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '4.500.000đ',
    newPrice: '3.950.000đ'
  },
  {
    id: 98,
    name: 'Bộ ly rượu vang pha lê',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=500',
    oldPrice: '3.800.000đ',
    newPrice: '3.300.000đ'
  },
  {
    id: 99,
    name: 'Cúp pha lê khắc laser tên',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '3.600.000đ',
    newPrice: '3.150.000đ'
  },
  {
    id: 100,
    name: 'Bình hoa pha lê khắc hoa',
    image: 'https://images.unsplash.com/photo-1603112936275-c5f7cc50b460?w=500',
    oldPrice: '2.900.000đ',
    newPrice: '2.500.000đ'
  },

  // ========== QUÀ TẶNG VINH DANH (50 sản phẩm: ID 101-150) ==========
  {
    id: 101,
    name: 'Cúp vàng vinh danh cao cấp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.500.000đ',
    newPrice: '2.950.000đ'
  },
  {
    id: 102,
    name: 'Kỷ niệm chương đồng sang trọng',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '1.000.000đ'
  },
  {
    id: 103,
    name: 'Biểu trưng kim loại đẳng cấp',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.400.000đ'
  },
  {
    id: 104,
    name: 'Cúp bạc vinh danh chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.900.000đ',
    newPrice: '2.500.000đ'
  },
  {
    id: 105,
    name: 'Bằng khen khung gỗ cao cấp',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=500',
    oldPrice: '850.000đ',
    newPrice: '720.000đ'
  },
  {
    id: 106,
    name: 'Huy chương vàng thể thao',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.280.000đ'
  },
  {
    id: 107,
    name: 'Cúp titan cao cấp bền đẹp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '4.200.000đ',
    newPrice: '3.650.000đ'
  },
  {
    id: 108,
    name: 'Biểu trưng gỗ đồng truyền thống',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '1.800.000đ',
    newPrice: '1.550.000đ'
  },
  {
    id: 109,
    name: 'Kỷ niệm chương mica hiện đại',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '980.000đ',
    newPrice: '850.000đ'
  },
  {
    id: 110,
    name: 'Cúp đồng vinh danh đẹp mắt',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.400.000đ',
    newPrice: '2.100.000đ'
  },
  {
    id: 111,
    name: 'Huy chương bạc cao cấp',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '1.050.000đ'
  },
  {
    id: 112,
    name: 'Biểu trưng mica vàng sang trọng',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '1.600.000đ',
    newPrice: '1.400.000đ'
  },
  {
    id: 113,
    name: 'Cúp crystal vinh danh quý phái',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.800.000đ',
    newPrice: '3.300.000đ'
  },
  {
    id: 114,
    name: 'Bằng khen khung nhôm hiện đại',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=500',
    oldPrice: '680.000đ',
    newPrice: '600.000đ'
  },
  {
    id: 115,
    name: 'Kỷ niệm chương thủy tinh đẹp',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.900.000đ'
  },
  {
    id: 116,
    name: 'Cúp inox cao cấp bền đẹp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '1.900.000đ',
    newPrice: '1.650.000đ'
  },
  {
    id: 117,
    name: 'Huy chương đồng thể thao',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '950.000đ',
    newPrice: '850.000đ'
  },
  {
    id: 118,
    name: 'Biểu trưng gỗ cao cấp sang trọng',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.500.000đ',
    newPrice: '2.200.000đ'
  },
  {
    id: 119,
    name: 'Cúp vàng 24k đẳng cấp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '6.500.000đ',
    newPrice: '5.800.000đ'
  },
  {
    id: 120,
    name: 'Kỷ niệm chương acrylic hiện đại',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '1.100.000đ',
    newPrice: '980.000đ'
  },
  {
    id: 121,
    name: 'Cúp thể thao vàng chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.850.000đ'
  },
  {
    id: 122,
    name: 'Biểu trưng đồng đỏ cổ điển',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.100.000đ',
    newPrice: '1.850.000đ'
  },
  {
    id: 123,
    name: 'Huy chương titan cao cấp',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '1.800.000đ',
    newPrice: '1.600.000đ'
  },
  {
    id: 124,
    name: 'Cúp golf vàng sang trọng',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '4.500.000đ',
    newPrice: '3.950.000đ'
  },
  {
    id: 125,
    name: 'Kỷ niệm chương gỗ thủ công',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '1.400.000đ',
    newPrice: '1.250.000đ'
  },
  {
    id: 126,
    name: 'Biểu trưng pha lê vàng quý phái',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '3.900.000đ',
    newPrice: '3.400.000đ'
  },
  {
    id: 127,
    name: 'Cúp bóng đá vàng thể thao',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.450.000đ'
  },
  {
    id: 128,
    name: 'Huy chương acrylic hiện đại',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '680.000đ',
    newPrice: '620.000đ'
  },
  {
    id: 129,
    name: 'Kỷ niệm chương kim loại bền đẹp',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '1.900.000đ',
    newPrice: '1.700.000đ'
  },
  {
    id: 130,
    name: 'Cúp tennis vàng cao cấp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.600.000đ',
    newPrice: '3.150.000đ'
  },
  {
    id: 131,
    name: 'Biểu trưng nhựa vàng bền đẹp',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '850.000đ',
    newPrice: '750.000đ'
  },
  {
    id: 132,
    name: 'Cúp marathon vàng thể thao',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.600.000đ',
    newPrice: '2.300.000đ'
  },
  {
    id: 133,
    name: 'Huy chương gỗ đồng truyền thống',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '1.200.000đ',
    newPrice: '1.100.000đ'
  },
  {
    id: 134,
    name: 'Kỷ niệm chương bạc cao cấp',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '2.400.000đ',
    newPrice: '2.100.000đ'
  },
  {
    id: 135,
    name: 'Cúp võ thuật vàng chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.100.000đ',
    newPrice: '2.750.000đ'
  },
  {
    id: 136,
    name: 'Biểu trưng đồng vàng sang trọng',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.900.000đ',
    newPrice: '2.550.000đ'
  },
  {
    id: 137,
    name: 'Cúp badminton vàng thể thao',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.700.000đ',
    newPrice: '2.400.000đ'
  },
  {
    id: 138,
    name: 'Huy chương thủy tinh cao cấp',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.350.000đ'
  },
  {
    id: 139,
    name: 'Kỷ niệm chương vàng 24k đẳng cấp',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '5.800.000đ',
    newPrice: '5.200.000đ'
  },
  {
    id: 140,
    name: 'Cúp bơi lội vàng thể thao',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.500.000đ',
    newPrice: '2.250.000đ'
  },
  {
    id: 141,
    name: 'Biểu trưng mica bạc hiện đại',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '1.350.000đ',
    newPrice: '1.200.000đ'
  },
  {
    id: 142,
    name: 'Cúp đua xe vàng chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.400.000đ',
    newPrice: '3.000.000đ'
  },
  {
    id: 143,
    name: 'Huy chương vàng 18k cao cấp',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.500.000đ'
  },
  {
    id: 144,
    name: 'Kỷ niệm chương đồng đỏ cổ điển',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '1.650.000đ',
    newPrice: '1.450.000đ'
  },
  {
    id: 145,
    name: 'Cúp cầu lông vàng thể thao',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.600.000đ',
    newPrice: '2.350.000đ'
  },
  {
    id: 146,
    name: 'Biểu trưng inox cao cấp bền đẹp',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.950.000đ'
  },
  {
    id: 147,
    name: 'Cúp bóng chuyền vàng thể thao',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '2.900.000đ',
    newPrice: '2.600.000đ'
  },
  {
    id: 148,
    name: 'Huy chương đồng đỏ truyền thống',
    image: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500',
    oldPrice: '1.100.000đ',
    newPrice: '1.000.000đ'
  },
  {
    id: 149,
    name: 'Kỷ niệm chương titan cao cấp',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.850.000đ'
  },
  {
    id: 150,
    name: 'Cúp boxing vàng chuyên nghiệp',
    image: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=500',
    oldPrice: '3.100.000đ',
    newPrice: '2.800.000đ'
  },

  // ========== QUÀ TẶNG NHÂN VIÊN (50 sản phẩm: ID 151-200) ==========
  {
    id: 151,
    name: 'Bình giữ nhiệt in logo công ty',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    oldPrice: '350.000đ',
    newPrice: '280.000đ'
  },
  {
    id: 152,
    name: 'Balo laptop cao cấp chống nước',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    oldPrice: '850.000đ',
    newPrice: '720.000đ'
  },
  {
    id: 153,
    name: 'Áo thun đồng phục công ty',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    oldPrice: '180.000đ',
    newPrice: '150.000đ'
  },
  {
    id: 154,
    name: 'Sổ tay da cao cấp sang trọng',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
    oldPrice: '420.000đ',
    newPrice: '350.000đ'
  },
  {
    id: 155,
    name: 'Bút ký kim loại khắc tên',
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500',
    oldPrice: '280.000đ',
    newPrice: '240.000đ'
  },
  {
    id: 156,
    name: 'Túi vải canvas in logo',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
    oldPrice: '150.000đ',
    newPrice: '130.000đ'
  },
  {
    id: 157,
    name: 'Ô dù gấp 2 tự động cao cấp',
    image: 'https://images.unsplash.com/photo-1527456515993-12c506ba1c65?w=500',
    oldPrice: '280.000đ',
    newPrice: '240.000đ'
  },
  {
    id: 158,
    name: 'Cốc sứ in logo doanh nghiệp',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500',
    oldPrice: '120.000đ',
    newPrice: '100.000đ'
  },
  {
    id: 159,
    name: 'Móc khóa kim loại cao cấp',
    image: 'https://images.unsplash.com/photo-1591672302574-4f56c00ae68b?w=500',
    oldPrice: '85.000đ',
    newPrice: '70.000đ'
  },
  {
    id: 160,
    name: 'Bộ quà tặng văn phòng cao cấp',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500',
    oldPrice: '680.000đ',
    newPrice: '580.000đ'
  },
  {
    id: 161,
    name: 'Pin sạc dự phòng 20000mAh',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500',
    oldPrice: '450.000đ',
    newPrice: '390.000đ'
  },
  {
    id: 162,
    name: 'Áo khoác gió in logo công ty',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
    oldPrice: '380.000đ',
    newPrice: '320.000đ'
  },
  {
    id: 163,
    name: 'Thẻ nhân viên cao cấp in ép',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500',
    oldPrice: '120.000đ',
    newPrice: '100.000đ'
  },
  {
    id: 164,
    name: 'Đồng hồ để bàn hiện đại',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500',
    oldPrice: '280.000đ',
    newPrice: '240.000đ'
  },
  {
    id: 165,
    name: 'Lịch để bàn 2025 cao cấp',
    image: 'https://images.unsplash.com/photo-1586943759416-2f6b6c81a5f7?w=500',
    oldPrice: '150.000đ',
    newPrice: '130.000đ'
  },
  {
    id: 166,
    name: 'Hộp namecard da sang trọng',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
    oldPrice: '220.000đ',
    newPrice: '190.000đ'
  },
  {
    id: 167,
    name: 'Bộ ấm trà văn phòng tiện lợi',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '480.000đ',
    newPrice: '420.000đ'
  },
  {
    id: 168,
    name: 'Túi laptop chống sốc cao cấp',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    oldPrice: '320.000đ',
    newPrice: '280.000đ'
  },
  {
    id: 169,
    name: 'Chuột máy tính không dây ergonomic',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    oldPrice: '180.000đ',
    newPrice: '150.000đ'
  },
  {
    id: 170,
    name: 'Đèn bàn LED chống cận',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    oldPrice: '380.000đ',
    newPrice: '330.000đ'
  },
  {
    id: 171,
    name: 'Balo du lịch chống nước',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500',
    oldPrice: '680.000đ',
    newPrice: '580.000đ'
  },
  {
    id: 172,
    name: 'Gối tựa văn phòng êm ái',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500',
    oldPrice: '220.000đ',
    newPrice: '190.000đ'
  },
  {
    id: 173,
    name: 'Bộ dụng cụ pha café văn phòng',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
    oldPrice: '580.000đ',
    newPrice: '500.000đ'
  },
  {
    id: 174,
    name: 'Thảm lót chuột size lớn',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500',
    oldPrice: '120.000đ',
    newPrice: '100.000đ'
  },
  {
    id: 175,
    name: 'Hộp cơm giữ nhiệt inox',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    oldPrice: '280.000đ',
    newPrice: '240.000đ'
  },
  {
    id: 176,
    name: 'Áo polo công ty cao cấp',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500',
    oldPrice: '220.000đ',
    newPrice: '190.000đ'
  },
  {
    id: 177,
    name: 'Dây đeo thẻ in logo công ty',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500',
    oldPrice: '50.000đ',
    newPrice: '40.000đ'
  },
  {
    id: 178,
    name: 'Bộ bút viết cao cấp hộp gỗ',
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500',
    oldPrice: '480.000đ',
    newPrice: '420.000đ'
  },
  {
    id: 179,
    name: 'Kệ để điện thoại gỗ',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500',
    oldPrice: '150.000đ',
    newPrice: '130.000đ'
  },
  {
    id: 180,
    name: 'Nón kết in logo công ty',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500',
    oldPrice: '120.000đ',
    newPrice: '100.000đ'
  },
  {
    id: 181,
    name: 'Túi zip laptop chống sốc',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    oldPrice: '180.000đ',
    newPrice: '150.000đ'
  },
  {
    id: 182,
    name: 'Ly giữ nhiệt inox 500ml',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    oldPrice: '280.000đ',
    newPrice: '240.000đ'
  },
  {
    id: 183,
    name: 'Đồng hồ treo tường văn phòng',
    image: 'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500',
    oldPrice: '380.000đ',
    newPrice: '330.000đ'
  },
  {
    id: 184,
    name: 'Khăn tắm in logo cao cấp',
    image: 'https://images.unsplash.com/photo-1606380933290-491f572a5dfb?w=500',
    oldPrice: '150.000đ',
    newPrice: '130.000đ'
  },
  {
    id: 185,
    name: 'Bình nước thể thao 1L',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    oldPrice: '180.000đ',
    newPrice: '150.000đ'
  },
  {
    id: 186,
    name: 'Bộ chăn ga gối đệm cao cấp',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500',
    oldPrice: '850.000đ',
    newPrice: '720.000đ'
  },
  {
    id: 187,
    name: 'Khẩu trang vải in logo',
    image: 'https://images.unsplash.com/photo-1588159343745-445ae0b16383?w=500',
    oldPrice: '50.000đ',
    newPrice: '40.000đ'
  },
  {
    id: 188,
    name: 'Sạc không dây fast charge',
    image: 'https://images.unsplash.com/photo-1591290619762-d55d5e8e4e87?w=500',
    oldPrice: '380.000đ',
    newPrice: '330.000đ'
  },
  {
    id: 189,
    name: 'Giỏ quà tết nhân viên cao cấp',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500',
    oldPrice: '680.000đ',
    newPrice: '580.000đ'
  },
  {
    id: 190,
    name: 'Thẻ quà tặng điện tử 500k',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
    oldPrice: '500.000đ',
    newPrice: '500.000đ'
  },
  {
    id: 191,
    name: 'Bộ dụng cụ làm việc văn phòng',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500',
    oldPrice: '420.000đ',
    newPrice: '360.000đ'
  },
  {
    id: 192,
    name: 'Tai nghe bluetooth chống ồn',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    oldPrice: '580.000đ',
    newPrice: '500.000đ'
  },
  {
    id: 193,
    name: 'Máy tính casio văn phòng',
    image: 'https://images.unsplash.com/photo-1611867967243-2ae925e00cfd?w=500',
    oldPrice: '250.000đ',
    newPrice: '220.000đ'
  },
  {
    id: 194,
    name: 'Kệ sách mini để bàn',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500',
    oldPrice: '180.000đ',
    newPrice: '150.000đ'
  },
  {
    id: 195,
    name: 'Gương để bàn mini tiện lợi',
    image: 'https://images.unsplash.com/photo-1585128720728-4951f42c4f2e?w=500',
    oldPrice: '120.000đ',
    newPrice: '100.000đ'
  },
  {
    id: 196,
    name: 'Bình xịt nước mini 30ml',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    oldPrice: '80.000đ',
    newPrice: '65.000đ'
  },
  {
    id: 197,
    name: 'Đế tản nhiệt laptop cao cấp',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    oldPrice: '350.000đ',
    newPrice: '300.000đ'
  },
  {
    id: 198,
    name: 'Bộ dụng cụ vệ sinh bàn làm việc',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500',
    oldPrice: '150.000đ',
    newPrice: '130.000đ'
  },
  {
    id: 199,
    name: 'Hộp đựng khẩu trang vải oxford',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
    oldPrice: '100.000đ',
    newPrice: '85.000đ'
  },
  {
    id: 200,
    name: 'Bộ quà tặng nhân viên cuối năm VIP',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.280.000đ'
  },

  // ========== QUÀ TẶNG SẾP (50 sản phẩm: ID 201-250) ==========
  {
    id: 201,
    name: 'Rượu vang Pháp Bordeaux cao cấp',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500',
    oldPrice: '3.500.000đ',
    newPrice: '2.950.000đ'
  },
  {
    id: 202,
    name: 'Bộ trà Trung Quốc tử sa',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '2.800.000đ',
    newPrice: '2.400.000đ'
  },
  {
    id: 203,
    name: 'Đồng hồ Rolex Oyster Perpetual',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500',
    oldPrice: '250.000.000đ',
    newPrice: '220.000.000đ'
  },
  {
    id: 204,
    name: 'Túi xách da thật Louis Vuitton',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
    oldPrice: '45.000.000đ',
    newPrice: '39.000.000đ'
  },
  {
    id: 205,
    name: 'Tranh sơn dầu nghệ thuật cao cấp',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    oldPrice: '5.800.000đ',
    newPrice: '5.200.000đ'
  },
  {
    id: 206,
    name: 'Bút ký Montblanc Meisterstück',
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500',
    oldPrice: '8.500.000đ',
    newPrice: '7.800.000đ'
  },
  {
    id: 207,
    name: 'Xì gà Cuba Cohiba cao cấp',
    image: 'https://images.unsplash.com/photo-1606927031002-3667d30c95f2?w=500',
    oldPrice: '2.200.000đ',
    newPrice: '1.950.000đ'
  },
  {
    id: 208,
    name: 'Bộ dao cạo râu Gillette Fusion',
    image: 'https://images.unsplash.com/photo-1621607510817-af26b65adc9e?w=500',
    oldPrice: '1.500.000đ',
    newPrice: '1.300.000đ'
  },
  {
    id: 209,
    name: 'Nước hoa nam Dior Sauvage',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.850.000đ'
  },
  {
    id: 210,
    name: 'Thắt lưng da Hermes H Belt',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=500',
    oldPrice: '12.000.000đ',
    newPrice: '10.500.000đ'
  },
  {
    id: 211,
    name: 'Ví da cá sấu thật handmade',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
    oldPrice: '8.500.000đ',
    newPrice: '7.650.000đ'
  },
  {
    id: 212,
    name: 'Gậy golf Titleist cao cấp',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500',
    oldPrice: '15.000.000đ',
    newPrice: '13.500.000đ'
  },
  {
    id: 213,
    name: 'Tượng đồng phong thủy rồng phượng',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '4.200.000đ',
    newPrice: '3.750.000đ'
  },
  {
    id: 214,
    name: 'Hộp đựng xì gà gỗ Cohiba',
    image: 'https://images.unsplash.com/photo-1606927031002-3667d30c95f2?w=500',
    oldPrice: '3.500.000đ',
    newPrice: '3.100.000đ'
  },
  {
    id: 215,
    name: 'Whisky Macallan 18 năm Single Malt',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '12.000.000đ',
    newPrice: '10.800.000đ'
  },
  {
    id: 216,
    name: 'Bàn cờ vua gỗ hương cao cấp',
    image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=500',
    oldPrice: '5.500.000đ',
    newPrice: '4.950.000đ'
  },
  {
    id: 217,
    name: 'Cặp da công sở Montblanc',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    oldPrice: '38.000.000đ',
    newPrice: '34.000.000đ'
  },
  {
    id: 218,
    name: 'Tủ rượu mini Eurocave',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500',
    oldPrice: '65.000.000đ',
    newPrice: '58.500.000đ'
  },
  {
    id: 219,
    name: 'Ghế massage văn phòng Osim',
    image: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=500',
    oldPrice: '180.000.000đ',
    newPrice: '162.000.000đ'
  },
  {
    id: 220,
    name: 'Đồng hồ để bàn Patek Philippe',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500',
    oldPrice: '25.000.000đ',
    newPrice: '22.500.000đ'
  },
  {
    id: 221,
    name: 'Bộ pha chế cocktail cao cấp',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500',
    oldPrice: '3.200.000đ',
    newPrice: '2.880.000đ'
  },
  {
    id: 222,
    name: 'Tranh thêu tay Huế đại bàng',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    oldPrice: '4.800.000đ',
    newPrice: '4.320.000đ'
  },
  {
    id: 223,
    name: 'Bình trà ngọc bích thủ công',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '7.500.000đ',
    newPrice: '6.750.000đ'
  },
  {
    id: 224,
    name: 'Hộp nhạc cổ điển Reuge',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    oldPrice: '38.000.000đ',
    newPrice: '34.200.000đ'
  },
  {
    id: 225,
    name: 'Bộ dụng cụ golf Callaway',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500',
    oldPrice: '220.000.000đ',
    newPrice: '198.000.000đ'
  },
  {
    id: 226,
    name: 'Tượng ngựa đồng phong thủy',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '5.200.000đ',
    newPrice: '4.680.000đ'
  },
  {
    id: 227,
    name: 'Bàn làm việc thông minh điện tử',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500',
    oldPrice: '125.000.000đ',
    newPrice: '112.500.000đ'
  },
  {
    id: 228,
    name: 'Loa Bose Home Speaker 500',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500',
    oldPrice: '8.500.000đ',
    newPrice: '7.650.000đ'
  },
  {
    id: 229,
    name: 'Bộ ly whisky pha lê Waterford',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '4.200.000đ',
    newPrice: '3.780.000đ'
  },
  {
    id: 230,
    name: 'Kính râm Rayban Aviator',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    oldPrice: '3.500.000đ',
    newPrice: '3.150.000đ'
  },
  {
    id: 231,
    name: 'Tranh đá quý phong thủy',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    oldPrice: '9.800.000đ',
    newPrice: '8.820.000đ'
  },
  {
    id: 232,
    name: 'Bình rượu pha lê khắc tên',
    image: 'https://images.unsplash.com/photo-1564595231049-2ce2d5e451e8?w=500',
    oldPrice: '6.500.000đ',
    newPrice: '5.850.000đ'
  },
  {
    id: 233,
    name: 'Đồng hồ Omega Seamaster',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500',
    oldPrice: '350.000.000đ',
    newPrice: '315.000.000đ'
  },
  {
    id: 234,
    name: 'Bộ trà Nhật Bản Kyusu cao cấp',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '4.800.000đ',
    newPrice: '4.320.000đ'
  },
  {
    id: 235,
    name: 'Tủ đựng rượu vang Electrolux',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500',
    oldPrice: '280.000.000đ',
    newPrice: '252.000.000đ'
  },
  {
    id: 236,
    name: 'Bộ golf TaylorMade M6',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=500',
    oldPrice: '450.000.000đ',
    newPrice: '405.000.000đ'
  },
  {
    id: 237,
    name: 'Tượng Phật gỗ trắc tay thủ công',
    image: 'https://images.unsplash.com/photo-1603028348874-d21f59ffe39a?w=500',
    oldPrice: '120.000.000đ',
    newPrice: '108.000.000đ'
  },
  {
    id: 238,
    name: 'Bình hoa Lalique Crystal',
    image: 'https://images.unsplash.com/photo-1603112936275-c5f7cc50b460?w=500',
    oldPrice: '180.000.000đ',
    newPrice: '162.000.000đ'
  },
  {
    id: 239,
    name: 'Dao cắt xì gà vàng 18k',
    image: 'https://images.unsplash.com/photo-1606927031002-3667d30c95f2?w=500',
    oldPrice: '5.500.000đ',
    newPrice: '4.950.000đ'
  },
  {
    id: 240,
    name: 'Hộp quà tặng sếp VIP đầy đủ',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500',
    oldPrice: '15.000.000đ',
    newPrice: '13.500.000đ'
  },
  {
    id: 241,
    name: 'Cognac Hennessy XO',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '8.500.000đ',
    newPrice: '7.650.000đ'
  },
  {
    id: 242,
    name: 'Bộ chén trà ngọc thạch anh',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '6.800.000đ',
    newPrice: '6.120.000đ'
  },
  {
    id: 243,
    name: 'Túi xách Gucci GG Marmont',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500',
    oldPrice: '52.000.000đ',
    newPrice: '46.800.000đ'
  },
  {
    id: 244,
    name: 'Đồng hồ TAG Heuer Carrera',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500',
    oldPrice: '95.000.000đ',
    newPrice: '85.500.000đ'
  },
  {
    id: 245,
    name: 'Bàn cờ go Nhật Bản cao cấp',
    image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=500',
    oldPrice: '12.500.000đ',
    newPrice: '11.250.000đ'
  },
  {
    id: 246,
    name: 'Rượu Chivas 25 năm Royal Salute',
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500',
    oldPrice: '18.500.000đ',
    newPrice: '16.650.000đ'
  },
  {
    id: 247,
    name: 'Tranh đồng mạ vàng phong thủy',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500',
    oldPrice: '15.000.000đ',
    newPrice: '13.500.000đ'
  },
  {
    id: 248,
    name: 'Bộ pha trà tử sa Trung Quốc',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?w=500',
    oldPrice: '8.800.000đ',
    newPrice: '7.920.000đ'
  },
  {
    id: 249,
    name: 'Giày da công sở Ferragamo',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500',
    oldPrice: '22.000.000đ',
    newPrice: '19.800.000đ'
  },
  {
    id: 250,
    name: 'Bộ quà tặng sếp siêu VIP đẳng cấp',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500',
    oldPrice: '35.000.000đ',
    newPrice: '31.500.000đ'
  }


   
    ])
  })
})