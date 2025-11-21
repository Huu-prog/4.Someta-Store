<template>

    <!-- Featured Categories -->
    <section class="categories-section">
      <div class="container">
        <div class="section-header">
          <h2>Danh mục nổi bật</h2>
          <p>Khám phá các danh mục quà tặng phổ biến</p>
        </div>
        
        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="category-card"
          >
          
            <div class="category-icon">
              <img :src="category.icon" :alt="category.name" />
            </div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.count }} sản phẩm</p>
          </div>
        </div>
      </div>
    </section>






</template>

<script setup>
import { ref } from 'vue';
import Header from './Header.vue';




// Danh mục nổi bật
const categories = ref([
  {
    id: 1,
    name: 'Quà tặng gốm sứ',
    icon: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=200&h=200&fit=crop',
    count: 156
  },
  {
    id: 2,
    name: 'Quà tặng thủy tinh',
    icon: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=200&h=200&fit=crop',
    count: 89
  },
  {
    id: 3,
    name: 'Quà tặng vinh danh',
    icon: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&h=200&fit=crop',
    count: 234
  },
  {
    id: 4,
    name: 'Quà tặng nhân viên',
    icon: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=200&h=200&fit=crop',
    count: 178
  },
  {
    id: 5,
    name: 'Dịch vụ in ấn',
    icon: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop',
    count: 345
  },
  {
    id: 6,
    name: 'Quà tặng đồ gia dụng',
    icon: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop',
    count: 267
  }
]);

// Tính năng nổi bật
const features = ref([
  {
    id: 1,
    title: 'Miễn phí vận chuyển',
    description: 'Giao hàng miễn phí cho đơn từ 500.000đ',
    icon: 'TruckIcon'
  },
  {
    id: 2,
    title: 'Thanh toán an toàn',
    description: 'Bảo mật thông tin 100%',
    icon: 'ShieldIcon'
  },
  {
    id: 3,
    title: 'Đổi trả dễ dàng',
    description: 'Đổi trả trong vòng 7 ngày',
    icon: 'RefreshIcon'
  },
  {
    id: 4,
    title: 'Hỗ trợ 24/7',
    description: 'Tư vấn nhiệt tình, chu đáo',
    icon: 'HeadphonesIcon'
  }
]);

</script>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
/* Categories Section */
.categories-section {
  /* padding: 5rem 0; */
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-card:hover {
  border-color: #2563eb;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
}

.category-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  background: #f3f4f6;
}

.category-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.category-card p {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}


</style>