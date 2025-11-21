<template>
  <div class="policy-wrapper">
    <div class="policy-container">
      <!-- Header -->
      <div class="policy-header">
        <h2 class="policy-title">Tại sao lựa chọn chúng tôi</h2>
        <div class="policy-underline"></div>
      </div>

      <!-- Policy Grid -->
      <div class="policy-grid">
        <div 
          v-for="(policy, index) in policies" 
          :key="index"
          class="policy-item"
        >
          <!-- Icon -->
          <div class="policy-icon-wrapper">
            <div class="policy-icon-circle">
              <component :is="policy.icon" class="policy-icon" />
            </div>
          </div>

          <!-- Content -->
          <div class="policy-content">
            <h3 class="policy-item-title">{{ policy.title }}</h3>
            <p class="policy-description">{{ policy.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Truck, RefreshCw, Users, Headphones } from 'lucide-vue-next';

const policies = [
  {
    icon: Truck,
    title: "Giao tận nơi nhanh",
    description: "Giao hàng tận nơi từ 1-2 ngày trên toàn quốc"
  },
  {
    icon: RefreshCw,
    title: "Đổi trả dễ dàng",
    description: "Đổi trả sản phẩm dễ dàng trong vòng 30 ngày"
  },
  {
    icon: Users,
    title: "Tư vấn nhiệt tình",
    description: "Đội ngũ tư vấn tận tâm và chuyên nghiệp"
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Chăm sóc khách hàng mọi lúc mọi nơi 24/7"
  }
];
</script>

<style scoped>
.policy-wrapper {
  width: 100%;
  background-color: #ffffff;
  padding: 2rem 1rem;
}

.policy-container {
  max-width: 1400px;
  margin: 0 auto;
}

.policy-header {
  margin-bottom: 2rem;
}

.policy-title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.policy-underline {
  width: 5rem;
  height: 0.25rem;
  background-color: #facc15;
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}

.policy-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.policy-item:hover {
  background-color: #f9fafb;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.policy-icon-wrapper {
  flex-shrink: 0;
}

.policy-icon-circle {
  width: 3rem;
  height: 3rem;
  background-color: #facc15;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.policy-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
}

.policy-content {
  flex: 1;
}

.policy-item-title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.policy-description {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #4b5563;
  line-height: 1.625;
}

/* Responsive styles */
@media (min-width: 640px) {
  .policy-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .policy-title {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

@media (min-width: 1024px) {
  .policy-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>