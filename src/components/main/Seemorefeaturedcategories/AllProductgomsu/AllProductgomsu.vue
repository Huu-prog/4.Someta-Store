<template>
  <div class="product-section">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <router-link to="/">Trang chủ</router-link>

      <span class="separator">/</span>
      <router-link to="/Xemthemsanphamnoibat">Xemthemsanphamnoibat</router-link>
      <span class="separator">/</span>

      <!-- <span v-if="product">{{ product.name }}</span> -->
    </div>
    <div class="page-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h1 class="sidebar-title">Tất cả sản phẩm</h1>

        <div class="filter-section">
          <h3 class="filter-title" @click="toggleSection">
            Quà tặng
            <svg
              class="arrow-icon"
              :class="{ rotate: isOpen }"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 15l5 5 5-5z" />
            </svg>
          </h3>

          <ul v-show="isOpen" class="category-list">
            <router-link
              v-for="category in categories"
              :key="category.id"
              :to="`/san-pham-silebary/${category.id}`"
              custom
              v-slot="{ navigate, isActive }"
            >
              <li @click="navigate" :class="{ active: isActive }">
                {{ category.name }}
              </li>
            </router-link>
          </ul>
        </div>

        <div class="filter-section">
          <h3 class="filter-title" @click="toggleDesgin">
            Dịch vụ thiết kế
            <svg
              class="arrow-icon"
              :class="{ rotate: isOpens }"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 15l5 5 5-5z" />
            </svg>
          </h3>

          <ul v-show="isOpens" class="category-list">
            <router-link
              v-for="category in categorizing"
              :key="category.id"
              :to="`/thiet-ke-silebary/${category.id}`"
              custom
              v-slot="{ navigate, isActive }"
            >
              <li @click="navigate" :class="{ active: isActive }">
                <span class="icon">{{ category.icon }}</span>
                {{ category.name }}
              </li>
            </router-link>
          </ul>
        </div>

        <div class="filter-section">
          <h3 class="filter-title" @click="togglePrinting">
            Dịch vụ in ấn
            <svg
              class="arrow-icon"
              :class="{ rotate: isOpens_priting }"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 15l5 5 5-5z" />
            </svg>
          </h3>

          <ul v-show="isOpens_priting" class="category-list">
            <router-link
              v-for="category in printingservices"
              :key="category.id"
              :to="`/dich-vu-inan/${category.id}`"
              custom
              v-slot="{ navigate, isActive }"
            >
              <li @click="navigate" :class="{ active: isActive }">
                <span class="icon">{{ category.icon }}</span>
                {{ category.name }}
              </li>
            </router-link>
          </ul>
        </div>

        <div class="filter-section">
          <h3 class="filter-title">Sản phẩm khuyến mãi</h3>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Top Controls -->
        <div class="top-controls">
          <div class="filter-tabs">
            <button
              v-for="tab in filterTabs"
              :key="tab.id"
              :class="['tab-btn', { active: selectedTab === tab.id }]"
              @click="selectTab(tab.id)"
            >
              {{ tab.name }}
            </button>
          </div>

          <!-- <div class="price-filter">
            <span class="price-label">GIÁ</span>
            <select class="price-dropdown" v-model="priceFilter" @change="applyPriceFilter">
              <option value="all">THÁP ĐẾN CAO</option>
              <option value="low-high">Giá: Thấp đến cao</option>
              <option value="high-low">Giá: Cao đến thấp</option>
              <option value="under-100">Dưới 100.000đ</option>
              <option value="100-200">100.000đ - 200.000đ</option>
              <option value="above-200">Trên 200.000đ</option>
            </select>
          </div> -->
        </div>

        <!-- Products Grid -->
        <!-- <h1 style="color: orange;">Tất cả sản phẩm! Quà tặng: {{ categoryId }}</h1> -->
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
              <span
                v-if="product.badge"
                class="product-badge"
                :class="`badge-${product.badgeType}`"
              >
                {{ product.badge }}
              </span>

              <img :src="product.image" :alt="product.name" class="product-image" />

              <!-- Overlay on hover -->

              <div class="image-overlay">
                <router-link class="active" :to="`/san-pham-gomsu/${product.id}`">
                  <button class="view-btn">
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
                </router-link>
              </div>
            </div>

            <!-- Product Info -->
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>

              <div class="product-price">
                <span class="new-price">{{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PAGINATION - CHỈ 5 NÚT -->
        <div class="pagination">
          <!-- Nút Previous -->
          <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1" class="page-btn">
            ‹
          </button>

          <!-- CHỈ HIỂN THỊ 5 SỐ TRANG -->
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="['page-btn', { active: currentPage === page }]"
          >
            {{ page }}
          </button>

          <!-- Nút Next -->
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="page-btn"
          >
            ›
          </button>
        </div>
      </main>
    </div>
    <div class="container">
      <!-- ============ CATEGORY DESCRIPTION SECTION ============ -->
      <div class="category-description-section" v-if="currentCategory">
        <div class="description-card">
          <h2>{{ currentCategory.title }}</h2>
          <div class="description-content">
            <p v-if="currentCategory?.title">{{ currentCategory.content }}</p>
          </div>
        </div>
      </div>
      <!-- ============ WHY CHOOSE US SECTION ============ -->
      <div class="why-choose-section">
        <h2>Tại Sao Chọn Chúng Tôi?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-gift"></i></div>
            <h3>Sản Phẩm Chất Lượng</h3>
            <p>
              Cam kết 100% hàng chính hãng, nguồn gốc rõ ràng, được kiểm tra kỹ lưỡng trước khi giao
              hàng
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-truck"></i></div>
            <h3>Giao Hàng Nhanh</h3>
            <p>
              Giao hàng toàn quốc, nhanh chóng trong 2-3 ngày. Miễn phí vận chuyển cho đơn hàng trên
              500k
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-arrow-rotate-left"></i></div>
            <h3>Đổi Trả Dễ Dàng</h3>
            <p>Chính sách đổi trả linh hoạt trong 7 ngày, hoàn tiền 100% nếu sản phẩm có lỗi</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-palette"></i></div>
            <h3>Thiết Kế Độc Đáo</h3>
            <p>In logo, khắc tên miễn phí theo yêu cầu. Tư vấn thiết kế chuyên nghiệp</p>
          </div>
        </div>
      </div>

      <!-- ============ STATS SECTION ============ -->
      <div class="stats-section">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Khách hàng tin tưởng</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">5,000+</div>
            <div class="stat-label">Sản phẩm đa dạng</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">98%</div>
            <div class="stat-label">Khách hàng hài lòng</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15+</div>
            <div class="stat-label">Năm kinh nghiệm</div>
          </div>
        </div>
      </div>
      <!-- BANNER ĐẶT ĐÂY! -->
      <section class="promo-banner-section">
        <div class="container">
          <div class="promo-banner">
            <!-- <div class="banner-content">
              <span class="banner-badge">🔥 HOT DEAL</span>
              <h3>GIẢM GIÁ 50% - CHỈ HÔM NAY!</h3>
              <p>Thiết kế Logo chuyên nghiệp chỉ từ 500K</p>
              <button class="cta-button">Xem ngay →</button>
            </div> -->
          </div>
        </div>
      </section>
      <!-- ============ BENEFITS SECTION ============ -->
      <div class="benefits-section">
        <h2>Ưu Đãi Đặc Biệt</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon"><i class="fa-solid fa-tag"></i></div>
            <div class="benefit-content">
              <h3>Giảm Giá Số Lượng Lớn</h3>
              <p>Đặt từ 50 sản phẩm giảm 5%, từ 100 sản phẩm giảm 10%, từ 200 sản phẩm giảm 15%</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon"><i class="fa-solid fa-comments"></i></div>
            <div class="benefit-content">
              <h3>Tư Vấn Miễn Phí</h3>
              <p>Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng tư vấn 24/7 để chọn quà phù hợp</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon"><i class="fa-solid fa-gift"></i></div>
            <div class="benefit-content">
              <h3>Đóng Gói Sang Trọng</h3>
              <p>Miễn phí đóng gói cao cấp với hộp quà, thiệp chúc mừng theo yêu cầu</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon"><i class="fa-solid fa-truck-fast"></i></div>
            <div class="benefit-content">
              <h3>Xử Lý Đơn Nhanh</h3>
              <p>Xử lý và xuất hàng trong 24h với đơn hàng thông thường, 48h với đơn có in ấn</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ RELATED CATEGORIES SECTION ============ -->
      <div class="related-categories-section">
        <h2>Danh Mục Liên Quan</h2>
        <div class="categories-grid">
          <router-link
            v-for="(category, index) in categories_gom_su"
            :key="index"
            :to="category.link"
            class="category-card"
          >
            <div class="category-card-image">
              <img :src="category.image" :alt="category.title" />
              <div class="category-overlay">
                <h3 class="category-title">{{ category.title }}</h3>
                <p class="category-count">{{ category.count }} sản phẩm</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- ============ REVIEWS SECTION ============ -->
      <div class="reviews-section">
        <h2>Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <div class="reviews-grid">
          <div class="review-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="review-text">
              "Sản phẩm rất đẹp và chất lượng. Đóng gói cẩn thận, giao hàng nhanh. Nhân viên tư vấn
              nhiệt tình. Rất hài lòng và sẽ tiếp tục ủng hộ!"
            </p>
            <div class="reviewer">
              <strong>Nguyễn Văn A</strong>
              <span>CEO - Công ty ABC Technology</span>
            </div>
          </div>
          <div class="review-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="review-text">
              "Đã đặt 100 bộ quà tặng cho nhân viên. Chất lượng tuyệt vời, giá cả hợp lý. In logo
              rất đẹp và chuyên nghiệp. Highly recommended!"
            </p>
            <div class="reviewer">
              <strong>Trần Thị B</strong>
              <span>Giám đốc Nhân sự - Công ty XYZ</span>
            </div>
          </div>
          <div class="review-card">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="review-text">
              "Quà tặng đẹp, ý nghĩa. Nhân viên rất thích. Dịch vụ chăm sóc khách hàng tốt. Cảm ơn
              shop rất nhiều!"
            </p>
            <div class="reviewer">
              <strong>Lê Văn C</strong>
              <span>HR Manager - Tập đoàn DEF Group</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ============ FAQ SECTION ============ -->
      <div class="faq-section">
        <h2>Câu Hỏi Thường Gặp</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>❓ Làm sao để đặt hàng số lượng lớn?</h3>
            <p>
              Quý khách vui lòng liên hệ hotline 𝟬𝟴𝟲𝟳𝟴𝟭𝟰𝟮𝟰𝟵 hoặc email 123someta@gmail.com để được
              tư vấn chi tiết và báo giá ưu đãi cho đơn hàng số lượng lớn. Chúng tôi có chính sách
              giảm giá đặc biệt cho đơn hàng từ 50 sản phẩm trở lên.
            </p>
          </div>
          <div class="faq-item">
            <h3>❓ Có được in logo công ty lên sản phẩm không?</h3>
            <p>
              Có, chúng tôi cung cấp dịch vụ in logo, khắc tên MIỄN PHÍ cho đơn hàng từ 20 sản phẩm
              trở lên. Thời gian in ấn từ 3-5 ngày làm việc. Quý khách cần cung cấp file logo vector
              (AI, PDF) để đảm bảo chất lượng in tốt nhất.
            </p>
          </div>
          <div class="faq-item">
            <h3>❓ Thời gian giao hàng là bao lâu?</h3>
            <p>
              Đơn hàng trong nội thành Hà Nội và TP.HCM sẽ được giao trong 24h. Đơn hàng tỉnh xa từ
              2-3 ngày làm việc. Đối với đơn hàng có in ấn logo, thời gian giao hàng sẽ tăng thêm
              3-5 ngày.
            </p>
          </div>
          <div class="faq-item">
            <h3>❓ Chính sách đổi trả như thế nào?</h3>
            <p>
              Chúng tôi hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ
              nhà sản xuất, bị vỡ trong quá trình vận chuyển hoặc không đúng mô tả. Sản phẩm đổi trả
              phải còn nguyên vẹn, chưa qua sử dụng và còn đầy đủ hộp, nhãn mác.
            </p>
          </div>
          <div class="faq-item">
            <h3>❓ Có hỗ trợ thanh toán trả góp không?</h3>
            <p>
              Có, chúng tôi hỗ trợ thanh toán trả góp 0% qua các đối tác: Home PayLater, Fundiin,
              MoMo, ZaloPay cho đơn hàng từ 3 triệu đồng trở lên.
            </p>
          </div>
        </div>
      </div>

      <!-- ============ CTA SECTION ============ -->
      <div class="cta-section">
        <div class="cta-content">
          <h2>Cần Tư Vấn Thêm?</h2>
          <p>Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
          <div class="cta-buttons">
            <a href="tel:1900xxxx" class="btn-primary"> 📞 Gọi Ngay: 0867.814.249 </a>
            <!-- <a href="#" class="btn-secondary">
                        💬 Chat Tư Vấn
                    </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { productsGomSu } from '@/components/main/Seemorefeaturedcategories/AllProductgomsu/products-gom-su.data'
// import { Product } from '@/types/product.types';
import {
  getProductsByCategory,
  getCategoryById,
} from '@/components/main/Seemorefeaturedcategories/Data/products.data' // ✅ Import này
import { useRoute } from 'vue-router'

const route = useRoute()

const categoryId = ref(route.params.categoryId)

// // Lọc sản phẩm
// const filteredProducts = computed(() => {
//   const categoryId = route.params.categoryId;

//   // Xử lý và thêm default value
//   const id = Array.isArray(categoryId) ? categoryId[0] : (categoryId || '');

//   console.log('🔍 Current categoryId:', id);

//   const products = getProductsByCategory(id);

//   console.log('📦 Filtered products:', products);

//   return products;
// });

// // Lấy tên category
// const categoryName = computed(() => {
//   const category = getCategoryById(categoryId.value);
//   return category ? category.name : 'Sản phẩm';
// });

// ✅ Dùng data trực tiếp
const products = ref(productsGomSu)

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return products.value.slice(start, end)
})

const isOpen = ref(false)
const isOpens = ref(false)
const isOpens_priting = ref(false)
// Toggle mở/đóng
const toggleSection = () => {
  isOpen.value = !isOpen.value
}
const toggleDesgin = () => {
  isOpens.value = !isOpens.value
}
const togglePrinting = () => {
  isOpens_priting.value = !isOpens_priting.value
}

import { categories } from '@/components/main/Seemorefeaturedcategories/Data/products.data' // Import từ data/index.ts
import { Import } from 'lucide-vue-next'
import { categorizing } from '@/components/main/Seemorefeaturedcategories/Data/designservices.data'
import { printingservices } from '@/components/main/Seemorefeaturedcategories/Data/categoriesprinting.data'
const router = useRouter()
// const isOpen = ref(false);

const handleSelectCategory = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId)
  if (category?.route) {
    router.push(category.route)
  }
}

const handleProductClick = (productId) => {
  router.push(`/san-pham-gomsu/${productId}`)
}

watch(
  () => route.params.categoryId,
  (newCategoryId) => {
    console.log('🔄 Category changed to:', newCategoryId)
    categoryId.value = newCategoryId
    // currentPage.value = 1; // Reset về trang 1
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true }, // ✅ Chạy ngay khi component mount
)

// Lấy categoryId từ route
const currentCategoryId = computed(() => route.params.categoryId)

// Lấy TOÀN BỘ thông tin category
const currentCategory = computed(() => {
  if (!currentCategoryId.value) return null

  return categories.find((cat) => cat.id === currentCategoryId.value)
})

// Filter products
const displayedtitle = computed(() => {
  if (!currentCategoryId.value) {
    return productsGomSu
  }

  return productsGomSu.filter((product) => {
    return product.categoryId === currentCategoryId.value
  })
})
// Watch để debug
watch(categoryId, (newVal) => {
  console.log('Category changed to:', newVal)
})

const currentPage = ref(1) // Trang hiện tại
const itemsPerPage = 15 // 15 sản phẩm/trang (không cần ref)
// Tổng số trang (30 sản phẩm ÷ 15 = 2 trang)

const filteredProducts = computed(() => {
  const categoryId = route.params.categoryId
  const id = Array.isArray(categoryId) ? categoryId[0] : categoryId || ''

  console.log('🔵 Current categoryId:', id)

  const products = getProductsByCategory(id)

  console.log('🔵 Filtered products:', products)

  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return products.slice(start, end)
})

const totalPages = computed(() => {
  const categoryId = route.params.categoryId
  const id = Array.isArray(categoryId) ? categoryId[0] : categoryId || ''
  const allProducts = getProductsByCategory(id)
  return Math.ceil(allProducts.length / itemsPerPage)
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    console.log('📄 Go to page:', page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
const categories_gom_su = [
  {
    title: 'Quà tặng thủy tinh',

    link: '/san-pham-silebary/thuy-tinh',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8LmsR4RYfCDL74aaJUj3GS1g9TOPMsEIOQ&s',
  },
  {
    title: 'Quà tặng nhân viên',

    link: '/san-pham-silebary/nhan-vien',
    image:
      'data:image/jpeg;base64,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',
  },
  {
    title: 'Quà tặng sếp',

    link: '/san-pham-silebary/sep',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVzHIWcx9uk9FhfEkxk7vkKXve_YP-RZYnA&s',
  },
  {
    title: 'Quà tặng gia dụng',

    link: '/san-pham-silebary/gia-dung',
    image:
      'data:image/jpeg;base64,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',
  },
]
</script>

<style scoped>
.product-section {
  background-color: #f8f8f8;
  padding: 20px 0;
}

.page-container {
  display: flex;
  gap: 30px;
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}
/* ===== BREADCRUMB ===== */
.breadcrumb {
  max-width: 1400px;
  margin: -22px auto -40px;
  padding: 15px 0;
  font-size: 1.4rem;
  color: #666;
}

.breadcrumb a {
  color: #4285f4;
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
}

.breadcrumb a:hover {
  color: #3367d6;
  text-decoration: underline;
}

.separator {
  margin: 0 10px;
  color: #999;
}

.current {
  color: #333;
  font-weight: 500;
}

/* Sidebar */
.sidebar {
  width: 220px;
  flex-shrink: 0;
}

.sidebar-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #000;
}

.filter-section {
  margin-bottom: 30px;
}
.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  padding: 6px 6px;

  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #555;
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid #f5f5f5;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
}

.category-list li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: #ff8c00;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}
.category-list li:hover {
  background: linear-gradient(135deg, #fff9f0 0%, #fff3e0 100%);
  border-color: #ff8c00;
  color: #ff6600;
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.15);
}

.category-list li:hover:before {
  transform: scaleY(1);
}
.category-list li.active,
.category-list a.active {
  background-color: #ff9800;
  color: white;
  font-weight: 600;
  border-radius: 6px;
  padding: 12px 15px;
  border: 2px solid #b97206;
}

/* Hover effect */
.category-list li:hover,
.category-list a:hover {
  background-color: #fff3e0;
  color: #ff9800;
}
/* ⭐ STYLE CHO MŨI TÊN */
.arrow-icon {
  width: 50px;
  margin-top: -40px;

  color: #666;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
  position: relative;

  /* Di chuyển */
  top: 7px;
  right: 0px;
  bottom: 0px;
  left: -10px;
}

.arrow-icon.rotate {
  transform: rotate(180deg);
  color: #ff8c00;
}
.filter-title {
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-title:hover {
  color: #ff6b35; /* Màu cam/đỏ - bạn đổi màu tùy thích */
  /* Hoặc dùng màu khác: */
  /* color: #e67e22; */
  /* color: #f39c12; */
  /* color: #3498db; - màu xanh */
}

/* Nếu muốn thêm hiệu ứng nữa */
.filter-title:hover {
  color: #ff6b35;
  transform: translateX(5px); /* Dịch sang phải 1 chút */
}

/* Hoặc thêm background */
.filter-title:hover {
  color: #ff6b35;
  background-color: #fff3e0; /* Màu nền nhạt */
  padding: 5px 10px;
  border-radius: 4px;
}

.filter-list {
  list-style: none;
}

.filter-item {
  padding: 10px 0;
  font-size: 15px;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
}

.filter-item:hover {
  color: #ff8c00;
  padding-left: 5px;
}

.filter-item.active {
  color: #ff8c00;
  font-weight: 600;
}

/* Main Content */
.main-content {
  flex: 1;
  min-width: 0;
}

.top-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  gap: 20px;
}

.filter-tabs {
  display: flex;
  gap: 15px;
}

.tab-btn {
  background: linear-gradient(135deg, #ff8c00 0%, #ff9800 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
}

.tab-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 140, 0, 0.4);
}

.tab-btn.active {
  background: linear-gradient(135deg, #ff6600 0%, #ff7700 100%);
}

.price-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-label {
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.price-dropdown {
  background: linear-gradient(135deg, #ff8c00 0%, #ff9800 100%);
  color: white;
  border: none;
  padding: 12px 20px;
  padding-right: 40px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 20px;
  box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
}

/* Products Grid - 5 columns */
.products-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

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
  background-color: #3b82f6;
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
  color: #3b82f6;
}
/* Giá */
.product-price {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.old-price {
  font-size: 14px;
  color: #95a5a6;
  text-decoration: line-through;
}

.new-price {
  font-size: 20px;
  font-weight: 700;
  color: #ff6b6b;
}
/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  padding: 20px;
}

.page-btn {
  min-width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background: white;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover:not(:disabled):not(.active) {
  background: #fff3e0;
  border-color: #ff8c00;
  color: #ff8c00;
}

.page-btn.active {
  background: linear-gradient(135deg, #ff8c00 0%, #ff9800 100%);
  color: white;
  border-color: #ff8c00;
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 1400px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .filter-tabs {
    flex-wrap: wrap;
  }
}

@media (max-width: 992px) {
  .page-container {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .top-controls {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 576px) {
  .page-container {
    padding: 15px;
  }
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .filter-tabs {
    width: 100%;
  }
  .tab-btn {
    flex: 1;
    padding: 10px 15px;
    font-size: 12px;
  }
}

/* // phần dưới sản phẩm */

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

/* ============ CATEGORY DESCRIPTION SECTION ============ */
.category-description-section {
  margin: 60px 0;
}

.description-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 40px;
  border-radius: 12px;
  border-left: 4px solid #ff6600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.description-card h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
  font-weight: 700;
}

.description-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
}

/* ============ WHY CHOOSE US SECTION ============ */
.why-choose-section {
  margin: 60px 0;
  text-align: center;
}

.why-choose-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.feature-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.feature-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* ============ RELATED CATEGORIES SECTION ============ */
/* ============ CATEGORY DESCRIPTION SECTION ============ */
.related-categories-section {
  margin: 60px 0;
}

.related-categories-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.category-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  background: white;
  text-decoration: none;
  display: block;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.category-card-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.category-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-card-image img {
  transform: scale(1.1);
}

.category-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  transition: background 0.3s ease;
}

.category-card:hover .category-overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%);
}

.category-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease;
}

.category-card:hover .category-title {
  transform: translateY(-5px);
}

.category-count {
  color: white;
  font-size: 1rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-count {
  opacity: 1;
}

.category-card:hover .category-count {
  opacity: 1;
}

/* ============ REVIEWS SECTION ============ */
.reviews-section {
  margin: 60px 0;
  background: #f8f9fa;
  padding: 60px 40px;
  border-radius: 12px;
}

.reviews-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.review-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.stars {
  font-size: 20px;
  margin-bottom: 15px;
  color: #ffc107;
}

.review-text {
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
}

.reviewer {
  border-top: 1px solid #eee;
  padding-top: 15px;
}

.reviewer strong {
  display: block;
  color: #333;
  margin-bottom: 5px;
  font-size: 16px;
}

.reviewer span {
  font-size: 13px;
  color: #999;
}

/* ============ FAQ SECTION ============ */
.faq-section {
  margin: 60px 0;
}

.faq-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
}

.faq-list {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
}

.faq-item p {
  font-size: 15px;
  color: #666;
  line-height: 1.7;
}

/* ============ CTA SECTION ============ */
.cta-section {
  margin: 60px 0;
  background: linear-gradient(135deg, #ff6600 0%, #ff8533 100%);
  padding: 60px;
  border-radius: 12px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 20px rgba(255, 102, 0, 0.3);
}

.cta-content h2 {
  font-size: 36px;
  margin-bottom: 15px;
  font-weight: 700;
}

.cta-content p {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 15px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #ff6600;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #ff6600;
}

/* ============ BENEFITS SECTION ============ */
.benefits-section {
  margin: 60px 0;
  background: white;
  padding: 60px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.benefits-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 700;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.benefit-icon {
  font-size: 40px;
  flex-shrink: 0;
}

.benefit-content h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}

.benefit-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* ============ STATS SECTION ============ */
.stats-section {
  margin: 60px 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 60px 40px;
  border-radius: 12px;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 20px;
}

.stat-number {
  font-size: 48px;
  font-weight: 700;
  color: #ff6600;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 16px;
  opacity: 0.9;
}
.promo-banner-section {
  padding: 2rem 0;
  background: #f8f9fa;
}

.promo-banner {
  background: url('@/assets/images/banner/banner15.png');
  border-radius: 16px;
  height: 450px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.banner-content h3 {
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-button {
  background: white;
  color: #667eea;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
}
/* ============ RESPONSIVE DESIGN ============ */

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .description-card h2 {
    font-size: 24px;
  }

  .why-choose-section h2,
  .related-categories-section h2,
  .reviews-section h2,
  .faq-section h2 {
    font-size: 28px;
  }
}

/* Mobile (max-width: 767px) */
@media (max-width: 767px) {
  .container {
    padding: 15px;
  }

  /* Description Section */
  .category-description-section {
    margin: 40px 0;
  }

  .description-card {
    padding: 25px;
  }

  .description-card h2 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .description-content p {
    font-size: 15px;
  }

  /* Features Grid */
  .why-choose-section {
    margin: 40px 0;
  }

  .why-choose-section h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 25px;
  }

  .feature-icon {
    font-size: 40px;
  }

  /* Categories Grid */
  .related-categories-section {
    margin: 40px 0;
  }

  .related-categories-section h2 {
    font-size: 24px;
  }

  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .category-card {
    padding: 20px;
  }

  .category-icon-large {
    font-size: 40px;
  }

  .category-card h3 {
    font-size: 16px;
  }

  /* Reviews */
  .reviews-section {
    margin: 40px 0;
    padding: 40px 20px;
  }

  .reviews-section h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .review-card {
    padding: 25px;
  }

  /* FAQ */
  .faq-section {
    margin: 40px 0;
  }

  .faq-section h2 {
    font-size: 24px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item h3 {
    font-size: 16px;
  }

  .faq-item p {
    font-size: 14px;
  }

  /* CTA Section */
  .cta-section {
    margin: 40px 0;
    padding: 40px 25px;
  }

  .cta-content h2 {
    font-size: 28px;
  }

  .cta-content p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    padding: 15px 30px;
  }

  /* Benefits Section */
  .benefits-section {
    margin: 40px 0;
    padding: 40px 20px;
  }

  .benefits-section h2 {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .benefit-item {
    flex-direction: column;
    text-align: center;
  }

  .benefit-icon {
    font-size: 36px;
  }

  /* Stats Section */
  .stats-section {
    margin: 40px 0;
    padding: 40px 20px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .stat-number {
    font-size: 36px;
  }

  .stat-label {
    font-size: 14px;
  }
}

/* Extra Small Mobile (max-width: 480px) */
@media (max-width: 480px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cta-content h2 {
    font-size: 24px;
  }

  .description-card {
    padding: 20px;
  }
}
</style>
