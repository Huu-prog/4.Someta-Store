<template>
  <div class="featured-section">
    <div class="featured-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Sản phẩm nổi bật</h2>
        <p class="section-subtitle">Khám phá những sản phẩm hot nhất hiện nay</p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="filter-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="product-card"
          @click="handleProductClick(product.id)"
        >
          <!-- Product Image -->
          <div class="product-image-wrapper">
            <!-- Badge -->
            <span v-if="product.badge" class="product-badge" :class="`badge-${product.badgeType}`">
              {{ product.badge }}
            </span>

            <img :src="product.image" :alt="product.name" class="product-image" />

            <!-- Overlay on hover -->
            <router-link class="active" :to="`/products/${products.id}`">
              <div class="image-overlay">
                <button @click="$emit('productClick', product.id)" class="view-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fill-rule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Xem chi tiết
                </button>
              </div>
            </router-link>
          </div>

          <!-- Product Info -->
          <div class="product-info">
            <span class="product-category">{{ product.category }}</span>
            <h3 class="product-name">{{ product.name }}</h3>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <router-link to="Xemthemsanphamnoibat">
        <div class="view-more-wrapper">
          <button class="view-more-btn" @click="handleViewMore">
            Xem thêm sản phẩm
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['productClick', 'viewMore'])

// Active tab
const activeTab = ref('all')

// Filter tabs
const tabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'design', label: 'Thiết kế' },
  { id: 'printing', label: 'In ấn' },
  { id: 'gift', label: 'Quà tặng' },
  { id: 'office', label: 'Văn phòng' },
]

// Filtered products
const filteredProducts = computed(() => {
  if (activeTab.value === 'all') {
    return props.products
  }
  return props.products.filter((p) => p.type === activeTab.value)
})

// Handle product click
const handleProductClick = (productId) => {
  emit('productClick', productId)
}

// Handle view more
const handleViewMore = () => {
  emit('viewMore')
}
</script>

<style scoped>
.featured-section {
  padding: 60px 0;
  background-color: #ffffff;
}

.featured-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 16px;
  color: #6b7280;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 10px 28px;
  background-color: #ffffff;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #f59e0b;
  color: #f59e0b;
}

.filter-btn.active {
  background-color: #f59e0b;
  border-color: #f59e0b;
  color: #ffffff;
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

/* Product Card */
.product-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e5e7eb;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

/* Product Image */
.product-image-wrapper {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: #f9fafb;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

/* Badge */
.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  text-transform: uppercase;
  z-index: 2;
}

.badge-hot {
  background-color: #ef4444;
  color: #ffffff;
}

.badge-new {
  background-color: #10b981;
  color: #ffffff;
}

.badge-sale {
  background-color: #f59e0b;
  color: #ffffff;
}

/* Image Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .image-overlay {
  opacity: 1;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: #ffffff;
  color: #111827;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: translateY(10px);
}

.product-card:hover .view-btn {
  transform: translateY(0);
}

.view-btn:hover {
  background-color: #f59e0b;
  color: #ffffff;
}

.view-btn svg {
  width: 18px;
  height: 18px;
}

/* Product Info */
.product-info {
  padding: 10px;
  background-color: #ffffff;
}

.product-category {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.product-name {
  font-size: 15px;
  font-weight: 600;
  color: #111827;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 20px;
  transition: color 0.3s ease;
}

.product-card:hover .product-name {
  color: #f59e0b;
}

/* View More Button */
.view-more-wrapper {
  text-align: center;
  padding-top: 20px;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background-color: #ffffff;
  color: #f59e0b;
  border: 2px solid #f59e0b;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-more-btn:hover {
  background-color: #f59e0b;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.view-more-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.view-more-btn:hover svg {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .section-title {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .featured-section {
    padding: 40px 0;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .section-title {
    font-size: 24px;
  }

  .filter-tabs {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 8px;
  }

  .filter-btn {
    padding: 8px 20px;
    font-size: 14px;
    white-space: nowrap;
  }

  .product-name {
    font-size: 14px;
    min-height: 40px;
  }
}

@media (max-width: 480px) {
  .product-info {
    padding: 12px;
  }

  .product-name {
    font-size: 13px;
  }

  .view-more-btn {
    padding: 12px 28px;
    font-size: 14px;
  }
}
</style>
