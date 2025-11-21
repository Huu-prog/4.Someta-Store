<template>
  <div class="hotline-floating" :class="{ 'show': isVisible }">
    <a :href="`tel:${phoneNumber}`" class="hotline-button">
      <div class="phone-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      </div>
      <div class="phone-number">{{ displayNumber }}</div>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Số điện thoại
const phoneNumber = '0867.814.249';
const displayNumber = '0867.814.249';

// Hiển thị button sau khi scroll một chút
const isVisible = ref(false);

const handleScroll = () => {
  if (window.scrollY > 100) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  // Hiển thị ngay khi load trang
  isVisible.value = true;
  
  // Hoặc nếu muốn hiện sau khi scroll, bỏ comment dòng dưới
  // window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hotline-floating {
  position: fixed;
  bottom: 30px;
  left: 0;
  z-index: 9999;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease-in-out;
}

.hotline-floating.show {
  opacity: 1;
  transform: translateX(0);
}

.hotline-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  padding: 8px 20px 8px 8px;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  text-decoration: none;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.hotline-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
}

.phone-icon {
  width: 50px;
  height: 50px;
  background-color: #1f2937;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.phone-icon svg {
  width: 28px;
  height: 28px;
  color: #ef4444;
  animation: shake 1s ease-in-out infinite;
}

.phone-number {
  font-size: 1.6rem;
  font-weight: 700;
  color: #b91c1c;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Animation cho icon phone */
@keyframes shake {
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-10deg);
  }
  20%, 40%, 60%, 80% {
    transform: rotate(10deg);
  }
}

/* Animation cho button */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  }
  50% {
    box-shadow: 0 4px 25px rgba(245, 158, 11, 0.7);
  }
}

/* Responsive cho mobile */
@media (max-width: 768px) {
  .hotline-floating {
    bottom: 20px;
    left: 20px;
  }
  
  .hotline-button {
    padding: 6px 15px 6px 6px;
  }
  
  .phone-icon {
    width: 45px;
    height: 45px;
  }
  
  .phone-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .phone-number {
    font-size: 16px;
  }
}

/* Mobile nhỏ */
@media (max-width: 480px) {
  .phone-number {
    font-size: 14px;
  }
}
</style>