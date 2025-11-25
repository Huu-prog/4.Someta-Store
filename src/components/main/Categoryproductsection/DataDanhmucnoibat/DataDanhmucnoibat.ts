

// // Định nghĩa interface cho Product
export interface Product {
  id: number,
  name: string,
  category: string,
  image: string,
  type: string,
  content:string
}

const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg}', { 
  eager: true,
  import: 'default'
})

const img = (path: string): string => {
  const fullPath = `/src/assets/images/${path}`
  return (images[fullPath] as string) || ''
}

export const products = [
     {
    id: 1,
    name: 'Thiết kế logo chuyên nghiệp',
    category: 'Thiết kế',
    image: img('thietke/1.png'),
    type: 'design',
          content:"Thiết kế bảng hiệu là gì"

  },
    {
    id: 2,
    name: 'Thiết kế quảng cáo',
    category: 'Thiết kế',
    image: img('thietke/2.jpg'),
    type: 'design',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 3,
    name: 'Thiết kế túi giấy ',
    category: 'Thiết kế',
    image: img('thietke/3.jpg'),
    type: 'design',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 4,
    name: 'Thiết kế menu',
    category: 'Thiết kế',
    image: img('thietke/4.jpg'),
    type: 'design',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 5,
    name: 'In ly',
    category: 'In ấn',
    image: img('inan/4.jpg'),
    type: 'printing',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 6,
    name: 'In logo trên bao bì',
    category: 'In ấn',
    image: img('inan/2.jpg'),
    type: 'printing',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 7,
    name: 'In chữ vào biểu tượng',
    category: 'In ấn',
    image: img('inan/1.jpg'),
    type: 'printing',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 8,
    name: 'In logo vào túi xách',
    category: 'In ấn',
    image: img('inan/3.jpg'),
    type: 'printing',
          content:"Thiết kế bảng hiệu là gì"
  },
  {
    id: 9,
    name: 'Đồng hồ ',
    category: 'Quà tặng',
    image: img('quatang/1.jpg'),
    type: 'gift',
        content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 10,
    name: 'Tách trà',
    category: 'Quà tặng',
    image: img('quatang/2.jpg'),
    type: 'gift',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 11,
    name: 'Bộ tách trà',
    category: 'Quà tặng',
    image: img('quatang/3.jpg'),
    type: 'gift',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 12,
    name: 'Ảnh in theo chữ',
    category: 'Quà tặng',
    image: img('quatang/4.jpg'),
    type: 'gift',
          content:"Thiết kế bảng hiệu là gì"
  },
   {
    id: 13,
    name: 'Bình giữ nhiệt ',
    category: 'Văn phòng',
    image: img('vanphong/1.jpg'),
    type: 'office',
        content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 14,
    name: 'Xổ tay đại hội',
    category: 'Văn phòng',
    image: img('vanphong/2.jpg'),
    type: 'office',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 15,
    name: 'Bút khắc theo logo',
    category: 'Văn phòng',
    image: img('vanphong/3.jpg'),
    type: 'office',
          content:"Thiết kế bảng hiệu là gì"
  },
    {
    id: 16,
    name: 'Xổ tay văn phòng',
    category: 'Văn phòng',
    image: img('vanphong/4.jpg'),
    type: 'office',
          content:"Thiết kế bảng hiệu là gì"
  }
 
];


