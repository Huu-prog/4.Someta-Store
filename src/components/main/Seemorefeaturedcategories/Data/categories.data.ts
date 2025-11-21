// data/categories.data.ts
import type { Category } from '@/types/product.types';

export const categories: Category[] = [
  { 
    id: 'gom-su', 
    name: 'Quà tặng gốm sứ', 
    title:'Quà tặng gốm sứ – Sang trọng, tinh tế và bền bỉ',
    content:'Quà tặng gốm sứ luôn được đánh giá cao nhờ độ bền, tính thẩm mỹ và sự sang trọng. Các sản phẩm như ly sứ, bình hoa, bộ chén dĩa, tượng gốm… đều phù hợp làm quà tri ân khách hàng, quà tặng doanh nghiệp hoặc sự kiện. Thiết kế tinh tế, dễ in logo giúp thương hiệu của bạn nổi bật và tạo ấn tượng lâu dài.',
    route: '/products/gom-su'
  },
  { 
    id: 'thuy-tinh', 
    name: 'Quà tặng thủy tinh pha lê', 
     title:'Quà tặng thủy tinh pha lê – Đẳng cấp, cao cấp, sang trọng',
    content:'Quà tặng pha lê là lựa chọn hàng đầu trong các dịp quan trọng. Với độ trong suốt tinh khiết và hoa văn sắc nét, sản phẩm pha lê như cúp, ly, đĩa hoặc quà décor thể hiện sự chuyên nghiệp và trân trọng đối với người nhận. Đây là dòng quà tặng cao cấp giúp tôn vinh giá trị thương hiệu.',
    route: '/products/thuy-tinh'
  },
  { 
    id: 'vinh-danh', 
    name: 'Quà tặng vinh danh', 
     title:'Quà tặng vinh danh – Tôn vinh giá trị, ghi dấu thành tựu',
    content:'Kỷ niệm chương, cúp vinh danh, tượng lưu niệm là những sản phẩm không thể thiếu trong lễ trao thưởng. Những mẫu thiết kế sang trọng giúp khắc ghi thành tựu, tạo dấu ấn trong lòng người nhận. Quà tặng vinh danh rất phù hợp cho doanh nghiệp, trường học, tổ chức và các sự kiện lớn.',
    route: '/products/vinh-danh'
  },
  { 
    id: 'nhan-vien', 
    name: 'Quà tặng nhân viên', 
     title:'Quà tặng nhân viên – Gắn kết đội ngũ, lan tỏa tinh thần doanh nghiệp',
    content:'Quà tặng nhân viên giúp nâng cao tinh thần làm việc và giá trị nội bộ doanh nghiệp. Những món quà thiết thực như bình giữ nhiệt, balo, áo thun, bộ văn phòng phẩm… không chỉ hữu ích mà còn giúp xây dựng hình ảnh thương hiệu chuyên nghiệp và thân thiện.',
    route: '/products/nhan-vien'
  },
  { 
    id: 'sep', 
    name: 'Quà tặng sếp', 
     title:'Quà tặng sếp – Lịch sự, đẳng cấp, thể hiện sự tôn trọng',
    content:'Tặng sếp cần sự tinh tế. Các sản phẩm cao cấp như bút ký, tranh phong thủy, tượng décor, đồng hồ để bàn hay vật phẩm phong thủy sẽ là lựa chọn hoàn hảo. Đây đều là quà tặng thể hiện sự trân trọng và lời chúc thành công, thăng tiến.',
    route: '/products/sep'
  },
  { 
    id: 'do-gia-dung', 
    name: 'Quà tặng đồ gia dụng', 
     title:'Quà tặng đồ gia dụng – Tiện ích, thiết thực, phù hợp mọi gia đình',
    content:'Đồ gia dụng luôn nằm trong top quà tặng được lựa chọn nhiều nhất nhờ tính hữu dụng cao. Các sản phẩm như ấm siêu tốc, nồi điện mini, quạt, đèn hoặc bộ dụng cụ nhà bếp mang đến sự tiện lợi cho người dùng và phù hợp với nhiều đối tượng khách hàng khác nhau.',
    route: '/products/do-gia-dung'
  },
  { 
    id: 'theo-muc-gia', 
    name: 'Quà tặng theo mức giá', 
     title:'Quà tặng theo mức giá – Dễ chọn, phù hợp ngân sách doanh nghiệp',
    content:'Doanh nghiệp có thể lựa chọn quà tặng theo từng mức giá: dưới 100k, 200k, 300k, 500k hoặc theo yêu cầu riêng. Danh mục được lọc rõ ràng giúp doanh nghiệp dễ dàng chọn sản phẩm phù hợp ngân sách mà vẫn đảm bảo giá trị, tính thẩm mỹ và tính ứng dụng.',
    route: '/products/theo-muc-gia'
  },
  { 
    id: 'may-mac', 
    name: 'Quà tặng may mặc', 
     title:'Quà tặng may mặc – In thêu logo, quảng bá thương hiệu hiệu quả',
    content:'Các sản phẩm may mặc như áo thun, áo polo, áo khoác, nón… luôn được doanh nghiệp ưa chuộng. Quà tặng may mặc dễ thiết kế theo bộ nhận diện thương hiệu, giúp lan tỏa hình ảnh doanh nghiệp rộng rãi và tạo sự đồng nhất trong các sự kiện, chiến dịch marketing.',
    route: '/products/may-mac'
  },
  { 
    id: 'hop-qua-tang', 
    name: 'Hộp quà tặng', 
     title:'Hộp quà tặng – Sang trọng, tinh tế, phù hợp mọi dịp',
    content:'Hộp quà tặng cao cấp bao gồm nhiều món sản phẩm kết hợp như trà, cà phê, bánh, phụ kiện hoặc đồ décor. Đóng gói đẹp, sang trọng, phù hợp làm quà tặng Tết, quà đối tác, quà khách hàng và các dịp lễ trong năm. Thiết kế theo yêu cầu và hỗ trợ in logo.',
    route: '/products/hop-qua-tang'
  }
];