<template>
  <div class="product-list-container">
    <!-- Section Header -->
    <div class="section-header">
      <h2>Sản phẩm nổi bật</h2>
      <p>Khám phá những sản phẩm hot nhất hiện nay</p>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- Products Grid -->
    <div class="products-grid">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Load More Button -->
    <div class="load-more">
      <button class="load-more-btn">
        Xem thêm sản phẩm
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';

// Tabs filter
const tabs = [
  { id: 'all', name: 'Tất cả' },
  { id: 'fashion', name: 'Thời trang' },
  { id: 'electronics', name: 'Điện tử' },
  { id: 'home', name: 'Gia dụng' },
  { id: 'sports', name: 'Thể thao' }
];

const activeTab = ref('all');

// Dữ liệu sản phẩm mẫu
const products = ref([
  {
    id: 1,
    name: 'Áo thun nam basic cotton cao cấp',
    category: 'Thời trang',
    categoryId: 'fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    price: 299000,
    oldPrice: 499000,
    rating: 5,
    reviews: 128,
    badge: { type: 'hot', text: 'Hot' }
  },
  {
    id: 2,
    name: 'Tai nghe Bluetooth chống ồn ANC',
    category: 'Điện tử',
    categoryId: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    price: 1990000,
    oldPrice: 2990000,
    rating: 5,
    reviews: 256,
    badge: { type: 'sale', text: 'Sale' }
  },
  {
    id: 3,
    name: 'Giày thể thao nam sneakers trắng',
    category: 'Thể thao',
    categoryId: 'sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    price: 890000,
    oldPrice: 1290000,
    rating: 4,
    reviews: 89,
    badge: { type: 'sale', text: '-31%' }
  },
  {
    id: 4,
    name: 'Máy xay sinh tố đa năng 800W',
    category: 'Gia dụng',
    categoryId: 'home',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop',
    price: 699000,
    rating: 4,
    reviews: 45,
    badge: { type: 'new', text: 'Mới' }
  },
  {
    id: 5,
    name: 'Đồng hồ thông minh Smartwatch X5',
    category: 'Điện tử',
    categoryId: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    price: 2490000,
    oldPrice: 3990000,
    rating: 5,
    reviews: 312,
    badge: { type: 'hot', text: 'Hot' }
  },
  {
    id: 6,
    name: 'Balo laptop cao cấp chống nước',
    category: 'Thời trang',
    categoryId: 'fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    price: 450000,
    oldPrice: 750000,
    rating: 5,
    reviews: 167,
    badge: { type: 'sale', text: '-40%' }
  },
  {
    id: 7,
    name: 'Nồi cơm điện thông minh 1.8L',
    category: 'Gia dụng',
    categoryId: 'home',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop',
    price: 1290000,
    rating: 4,
    reviews: 93
  },
  {
    id: 8,
    name: 'Váy nữ công sở thanh lịch',
    category: 'Thời trang',
    categoryId: 'fashion',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    price: 399000,
    oldPrice: 599000,
    rating: 5,
    reviews: 201,
    badge: { type: 'new', text: 'Mới về' }
  }
]);

// Lọc sản phẩm theo tab
const filteredProducts = computed(() => {
  if (activeTab.value === 'all') {
    return products.value;
  }
  return products.value.filter(p => p.categoryId === activeTab.value);
});
</script>

<style scoped>
.product-list-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.section-header p {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e5e7eb;
  background: white;
  color: #6b7280;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  border-color: #2563eb;
  color: #2563eb;
  transform: translateY(-2px);
}

.tab-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  color: white;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Load More */
.load-more {
  display: flex;
  justify-content: center;
}

.load-more-btn {
  padding: 1rem 2.5rem;
  background: white;
  border: 2px solid #2563eb;
  color: #2563eb;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.load-more-btn:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.load-more-btn svg {
  transition: transform 0.3s ease;
}

.load-more-btn:hover svg {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  .filter-tabs {
    gap: 0.5rem;
  }

  .tab-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.5rem;
  }

  .section-header p {
    font-size: 0.95rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>