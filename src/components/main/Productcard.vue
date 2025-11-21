<template>
  <div class="product-card">
    <!-- Product Image -->
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
      
      <!-- Badge hot/sale -->
      <span v-if="product.badge" class="badge" :class="product.badge.type">
        {{ product.badge.text }}
      </span>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <button class="action-btn" title="Thêm vào giỏ hàng">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
        <button class="action-btn" title="Yêu thích">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <button class="action-btn" title="Xem nhanh">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div class="product-info">
      <div class="product-category">{{ product.category }}</div>
      <h3 class="product-name">{{ product.name }}</h3>
      
      <!-- Rating -->
      <div class="product-rating">
        <div class="stars">
          <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= product.rating }">★</span>
        </div>
        <span class="rating-count">({{ product.reviews }})</span>
      </div>

      <!-- Price -->
      <div class="product-price">
        <span v-if="product.oldPrice" class="old-price">{{ formatPrice(product.oldPrice) }}</span>
        <span class="current-price">{{ formatPrice(product.price) }}</span>
        <span v-if="product.oldPrice" class="discount">
          -{{ calculateDiscount(product.oldPrice, product.price) }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

// Format giá tiền
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

// Tính % giảm giá
const calculateDiscount = (oldPrice, newPrice) => {
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Product Image */
.product-image {
  position: relative;
  width: 100%;
  padding-top: 100%; /* Tỷ lệ 1:1 */
  overflow: hidden;
  background: #f3f4f6;
}

.product-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

/* Badge */
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  text-transform: uppercase;
}

.badge.hot {
  background: #ef4444;
  color: white;
}

.badge.sale {
  background: #f59e0b;
  color: white;
}

.badge.new {
  background: #10b981;
  color: white;
}

/* Quick Actions */
.quick-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

.product-card:hover .quick-actions {
  opacity: 1;
  transform: translateX(0);
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.action-btn:hover {
  background: #2563eb;
  color: white;
  transform: scale(1.1);
}

/* Product Info */
.product-info {
  padding: 1rem;
}

.product-category {
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.product-name {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8em;
}

/* Rating */
.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #d1d5db;
  font-size: 1rem;
}

.star.filled {
  color: #fbbf24;
}

.rating-count {
  font-size: 0.85rem;
  color: #6b7280;
}

/* Price */
.product-price {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.old-price {
  font-size: 0.9rem;
  color: #9ca3af;
  text-decoration: line-through;
}

.current-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ef4444;
}

.discount {
  background: #fee2e2;
  color: #ef4444;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .product-name {
    font-size: 0.95rem;
  }

  .current-price {
    font-size: 1.1rem;
  }

  .quick-actions {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>