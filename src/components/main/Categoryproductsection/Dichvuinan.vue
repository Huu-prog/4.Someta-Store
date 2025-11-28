<template>
  <div class="category-section">
    <div class="category-container">
      <!-- Section Header -->
      <div class="section-header">
        <div class="header-line"></div>
        <h2 class="section-title">{{ categoryName }}</h2>
        <div class="header-line"></div>
      </div>

      <!-- View All Link -->
      <div class="view-all-wrapper">
        <router-link to="/dich-vu-inan/Printing-on-other-materials" class="view-all-link">
          Xem tất cả
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <div
          v-for="vanPhongProducts in vanPhongProducts"
          :key="vanPhongProducts.id"
          class="product-item"
          @click="goToProduct(vanPhongProducts.id)"
        >
          <!-- Product Image -->
          <div class="product-image-box">
            <img :src="vanPhongProducts.image" :alt="vanPhongProducts.name" class="product-img" />
            <div class="image-overlay">
              <!-- <button class="quick-view-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Xem nhanh
              </button> -->
            </div>
          </div>

          <!-- Product Name -->
          <div class="product-name-box">
            <h3 class="product-title">{{ vanPhongProducts.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

// Import TẤT CẢ ảnh trong tất cả folder con (** = recursive)
const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

// Helper - gõ đường dẫn đầy đủ
const img = (path) => {
  const fullPath = `/src/assets/images/${path}`
  return images[fullPath] || ''
}

// dịch vụ in ấn
const vanPhongProducts = [
  { id: 21, name: 'In ấn nón theo yêu cầu', image: img('inan/inannon/1.jpg') },
  { id: 22, name: 'In ấn bìa sách', image: img('inan/inanbiasach/1.jpg') },
  { id: 23, name: 'In ấn thiệp', image: img('inan/inanthiep/1.jpg') },
  { id: 24, name: 'In ấn ly mũ', image: img('inan/inanly/1.jpg') },
  { id: 25, name: 'In ấn túi xách', image: img('inan/inantuixach/1.jpg') },
  { id: 26, name: 'In ấn cốc', image: img('inan/inancoc/1.jpg') },
]

const props = defineProps({
  categoryName: {
    type: String,
    required: true,
  },
  categoryLink: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
})

const router = useRouter()

// const goToProduct = (gomSuProducts) => {
//   router.push(`/san-pham/${gomSuProducts}`);
// };
</script>

<style scoped>
.category-section {
  padding: 50px 0;
  background-color: #fafafa;
}

.category-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Section Header */
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.header-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, transparent, #d1d5db, transparent);
  max-width: 200px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  position: relative;
  padding: 0 20px;
}

.section-title::before {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #f59e0b, #ef4444);
  border-radius: 2px;
}

/* View All Link */
.view-all-wrapper {
  text-align: right;
  margin-bottom: 20px;
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #000000;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
}

.view-all-link:hover {
  background-color: #f59e0b;
  gap: 10px;
}

.view-all-link svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.view-all-link:hover svg {
  transform: translateX(4px);
}

/* Products Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

/* Product Item */
.product-item {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.product-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Product Image */
.product-image-box {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: #f9fafb;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-item:hover .product-img {
  transform: scale(1.15);
}

/* Image Overlay */
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-item:hover .image-overlay {
  opacity: 1;
}

.quick-view-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
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

.product-item:hover .quick-view-btn {
  transform: translateY(0);
}

.quick-view-btn:hover {
  background-color: #f59e0b;
  color: #ffffff;
}

.quick-view-btn svg {
  width: 18px;
  height: 18px;
}

/* Product Name */
.product-name-box {
  padding: 16px 12px;
  text-align: center;
  background-color: #ffffff;
}

.product-title {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 40px;
  transition: color 0.3s ease;
}

.product-item:hover .product-title {
  color: #f59e0b;
}

/* Responsive */
@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
  }
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .section-title {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .category-section {
    padding: 40px 0;
  }

  .products-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .section-title {
    font-size: 20px;
  }

  .header-line {
    max-width: 80px;
  }

  .product-title {
    font-size: 13px;
    min-height: 36px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .section-title {
    font-size: 18px;
    padding: 0 12px;
  }

  .product-name-box {
    padding: 12px 8px;
  }

  .product-title {
    font-size: 12px;
  }

  .view-all-link {
    font-size: 14px;
    padding: 6px 12px;
  }
}
</style>
