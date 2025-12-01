// data/categories.data.ts
import type { Category } from '@/types/product.types';

export const categories: Category[] = [
 { 
  id: 'qua-tang-phat-giao', 
  name: 'Quà tặng phật giáo', 
  title: 'Quà tặng phật giáo – Trang nghiêm, ý nghĩa tâm linh',
  content: 'Quà tặng phật giáo mang ý nghĩa tâm linh sâu sắc, thích hợp cho các dịp lễ Phật, tri ân hay tặng người tu học. Các sản phẩm như tượng Phật, chuỗi niệm, tranh Phật giáo, nhang thơm… không chỉ thể hiện sự tôn kính mà còn mang đến sự bình an, may mắn. Thiết kế trang nghiêm, chất lượng cao giúp món quà thêm ý nghĩa và giá trị.',
  route: '/products/qua-tang-phat-giao'
},
{ 
  id: 'qua-tang-dai-hoi', 
  name: 'Quà tặng đại hội', 
  title: 'Quà tặng đại hội – Chuyên nghiệp, ấn tượng và đẳng cấp',
  content: 'Quà tặng đại hội cần thể hiện sự chuyên nghiệp và đẳng cấp của sự kiện. Các sản phẩm như túi quà hội nghị, bút ký cao cấp, sổ tay, cốc giữ nhiệt, huy chương… đều có thể in logo và thông điệp của chương trình. Món quà phù hợp sẽ giúp tăng giá trị sự kiện và để lại ấn tượng tốt đẹp với đại biểu tham dự.',
  route: '/products/qua-tang-dai-hoi'
},
{ 
  id: 'qua-tang-khach-hang', 
  name: 'Quà tặng khách hàng', 
  title: 'Quà tặng khách hàng – Tri ân và gắn kết lòng trung thành',
  content: 'Quà tặng khách hàng là cách thể hiện sự tri ân và xây dựng mối quan hệ bền vững. Các sản phẩm như bộ quà tết, giỏ quà cao cấp, sản phẩm công nghệ, đồ dùng văn phòng… đều có thể tùy chỉnh theo thương hiệu. Món quà ý nghĩa sẽ giúp doanh nghiệp ghi điểm trong lòng khách hàng và tăng cường lòng trung thành.',
  route: '/products/qua-tang-khach-hang'
},
{ 
  id: 'qua-tang-cong-doan', 
  name: 'Quà tặng công đoàn', 
  title: 'Quà tặng công đoàn – Thể hiện sự quan tâm đến người lao động',
  content: 'Quà tặng công đoàn thể hiện sự quan tâm của doanh nghiệp đến đời sống người lao động. Các sản phẩm như túi quà tết, giỏ quà sinh nhật, phiếu mua hàng, đồ gia dụng… phù hợp với nhiều dịp khác nhau. Món quà ý nghĩa sẽ giúp động viên tinh thần và gắn kết tập thể trong công ty.',
  route: '/products/qua-tang-cong-doan'
},
{ 
  id: 'qua-tang-nhan-vien', 
  name: 'Quà tặng nhân viên', 
  title: 'Quà tặng nhân viên – Động viên và ghi nhận công sức',
  content: 'Quà tặng nhân viên là cách thể hiện sự trân trọng và ghi nhận đóng góp của đội ngũ. Các sản phẩm như voucher du lịch, đồng hồ, túi xách, thiết bị công nghệ… đều tạo động lực làm việc và tăng sự gắn bó. Lựa chọn quà phù hợp sẽ giúp nâng cao tinh thần và hiệu suất làm việc của nhân viên.',
  route: '/products/qua-tang-nhan-vien'
},

];