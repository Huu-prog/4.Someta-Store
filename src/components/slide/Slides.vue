<template>
  <div class="slider-container">
    <div class="slider">
      <!-- Slides -->
      <div 
        class="slides-wrapper" 
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="slide-content">
            <!-- <h2 class="slide-title">{{ slide.title }}</h2> -->
            <!-- <p class="slide-description">{{ slide.description }}</p> -->
            <!-- <button class="slide-btn">{{ slide.buttonText }}</button> -->
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button class="slider-arrow prev" @click="prevSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button class="slider-arrow next" @click="nextSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <!-- Dots Indicators -->
      <div class="slider-dots">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Import TẤT CẢ ảnh trong tất cả folder con (** = recursive)
const images = import.meta.glob('@/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default'
});

// Helper - gõ đường dẫn đầy đủ
const img = (path) => {
  const fullPath = `/src/assets/images/${path}`;
  return images[fullPath] || '';
};


// Dữ liệu slides mẫu
const slides = ref([
  {
    image: img('banner/banner8.jpg'),
    title: 'Bộ sưu tập mùa hè 2024',
    description: 'Khám phá những xu hướng thời trang mới nhất',
    buttonText: 'Mua ngay'
  },
  {
    image: img('banner/banner13.png'),
    title: 'Giảm giá đến 50%',
    description: 'Săn sale cực đã với hàng ngàn sản phẩm hot',
    buttonText: 'Xem ngay'
  },
  {
    image: img('banner/banner12.png'),
    title: 'Sản phẩm mới về',
    description: 'Cập nhật những mặt hàng mới nhất hàng tuần',
    buttonText: 'Khám phá'
  },
  {
    image: img('banner/4.jpg'),
    title: 'Miễn phí vận chuyển',
    description: 'Cho đơn hàng từ 500.000đ trên toàn quốc',
    buttonText: 'Mua sắm'
  }
]);

const currentSlide = ref(0);
let autoplayInterval = null;

// Chuyển slide tiếp theo
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

// Chuyển slide trước
const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? slides.value.length - 1 
    : currentSlide.value - 1;
};

// Chuyển đến slide cụ thể
const goToSlide = (index) => {
  currentSlide.value = index;
};

// Auto play slider
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 205000); // Chuyển slide mỗi 5 giây
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

// Lifecycle hooks
onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.slider-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}
img.resize {
    width:300px; /* you can use % */
    height: auto;
}
.slider {
  position: relative;
  width: 100%;
  height: 30rem;
  overflow: clip;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

}

/* Slides Wrapper */
.slides-wrapper {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;

}

.slide {
  min-width: 100%;
  height: 100%;
 
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)); */
}

/* Slide Content */
.slide-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 2rem;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.slide-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.slide-btn:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

/* Navigation Arrows */
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  color: #1f2937;
}

.slider-arrow:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.slider-arrow.prev {
  left: 20px;
}

.slider-arrow.next {
  right: 20px;
}

/* Dots Indicators */
.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.2);
}

.dot.active {
  background: white;
  width: 35px;
  border-radius: 6px;
}

/* Responsive */
@media (max-width: 768px) {
  .slider {
    height: 400px;
    border-radius: 8px;
  }

  .slide-title {
    font-size: 2rem;
  }

  .slide-description {
    font-size: 1rem;
  }

  .slide-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }

  .slider-arrow {
    width: 40px;
    height: 40px;
  }

  .slider-arrow.prev {
    left: 10px;
  }

  .slider-arrow.next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .slider {
    height: 300px;
  }

  .slide-title {
    font-size: 1.5rem;
  }

  .slide-description {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .slide-btn {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  .slider-arrow {
    width: 35px;
    height: 35px;
  }
}
</style>