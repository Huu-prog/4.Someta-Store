// data/categories.data.ts
import type { printing } from '@/types/printingservices.types';

export const printingservices: printing[] = [
  {
    id: 'printing-documents',
    name: "In ấn tài liệu",
    title: "In ấn tài liệu - Chuyên nghiệp, chất lượng cao",
    content: "Dịch vụ in ấn tài liệu đa dạng bao gồm catalog, brochure, tờ rơi, tờ gấp, voucher, phiếu giảm giá... Cam kết chất lượng in sắc nét, giá cả hợp lý và giao hàng nhanh chóng.",
    route: "/products/in-tai-lieu"
  },
  {
    id: 'Design-and-print',
    name: "Thiết kế và in ấn quảng cáo",
    title: "Thiết kế và in ấn quảng cáo - Nổi bật thương hiệu",
    content: "Thiết kế sáng tạo và in ấn các sản phẩm quảng cáo như standee, poster, banner, backdrop, pano... Giúp thương hiệu của bạn thu hút và gây ấn tượng mạnh với khách hàng.",
    route: "/products/in-quang-cao"
  },
  {
    id: 'graphic-printing',
    name: "In ấn đồ họa",
    title: "In ấn đồ họa - Sắc màu sống động",
    content: "Chuyên in ấn các sản phẩm đồ họa chất lượng cao như tranh ảnh, canvas, decal, sticker, tem nhãn... Màu sắc sống động, độ bền cao, phù hợp cho mọi nhu cầu trang trí và quảng bá.",
    route: "/products/in-do-hoa"
  },
  {
    id: 'Printing-on-other-materials',
    name: "In ấn các chất liệu khác ",
    title: "In ấn các chất liệu khác - Đa dạng và độc đáo",
    content: "In ấn trên nhiều chất liệu đặc biệt như vải, gỗ, nhựa, kim loại, mica... Tạo nên những sản phẩm độc đáo, khác biệt cho nhu cầu kinh doanh và cá nhân của bạn.",
    route: "/products/in-chat-lieu-khac"
  }
];