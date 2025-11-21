// Quatanggomu.js
import { defineStore } from 'pinia';

const filterData = {
  categories: [
    { id: 'qua-tang-gom-su', name: 'Quà tặng gốm sứ' },
    { id: 'qua-tang-thuy-tinh-pha-le', name: 'Quà tặng thủy tinh pha lê' },
    { id: 'qua-tang-vinh-danh', name: 'Quà tặng vinh danh' },
    { id: 'qua-tang-nhan-vien', name: 'Quà tặng nhân viên' },
    { id: 'qua-tang-sep', name: 'Quà tặng sếp' },
    { id: 'qua-tang-do-gia-dung', name: 'Quà tặng đồ gia dụng' },
    { id: 'qua-tang-theo-muc-gia', name: 'Quà tặng theo mức giá' },
    { id: 'qua-tang-may-mac', name: 'Quà tặng may mặc' },
    { id: 'hop-qua-tang', name: 'Hộp quà tặng' }
  ],

  subCategories: [
    { id: 'am-chen', name: 'Ấm chén', parent: 'qua-tang-gom-su' },
    { id: 'ca-coc-su', name: 'Ca cốc sứ', parent: 'qua-tang-gom-su' },
    { id: 'bat-dia', name: 'Bát đĩa', parent: 'qua-tang-gom-su' },
    { id: 'binh-hut-loc', name: 'Bình hút lộc', parent: 'qua-tang-gom-su' },
    { id: 'lo-hoa', name: 'Lọ Hoa', parent: 'qua-tang-gom-su' },
    { id: 'hu-dung-tra', name: 'Hủ đựng trà', parent: 'qua-tang-gom-su' },
    { id: 'tranh-gom-su', name: 'Tranh gốm sứ', parent: 'qua-tang-gom-su' },
    { id: 'khay-mut-tet-bang-su', name: 'Khay mứt Tết bằng sứ', parent: 'qua-tang-gom-su' }
  ]
};

// Export default để dễ import
export default filterData;