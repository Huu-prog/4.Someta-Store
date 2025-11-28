<template>
  <div class="product-section">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <router-link to="/">Trang chủ</router-link>

      <!-- <span class="separator">/</span>
     
      <span class="separator">/</span> -->

      <!-- <span v-if="product">{{ product.name }}</span> -->
    </div>
    <div class="page-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h1 class="sidebar-title">Tất cả sản phẩm</h1>

        <div class="filter-section">
          <h3 class="filter-title" @click="toggleSection">
            Danh mục quà tặng
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
                <span class="icon">{{ category.icon }}</span>
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
          <img src="@/assets/images/banner/banner18.png" alt="" />
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
        <div class="products-grid">
          <div
            v-for="product in displayedProducts"
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
                <router-link class="active" :to="`/san-pham/${products.id}`">
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
                <span class="old-price">{{ product.newPrice }}</span>
                <span class="new-price">{{ product.newPrice }}</span>
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
            v-for="page in visiblePages"
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
      <!-- <div class="category-description-section">
            <div class="description-card">
                <h2>Quà Tặng Vinh Danh - Lựa Chọn Hoàn Hảo</h2>
                <div class="description-content">
                    <p>
                        Bộ sưu tập quà tặng vinh danh cao cấp của chúng tôi được thiết kế đặc biệt để tôn vinh những thành tựu xuất sắc. 
                        Mỗi sản phẩm đều được chế tác tỉ mỉ, mang đậm giá trị và ý nghĩa, là món quà hoàn hảo để ghi nhận những đóng góp quan trọng. 
                        Với đa dạng mẫu mã từ cúp pha lê, biểu trưng gỗ cao cấp đến các sản phẩm gốm sứ nghệ thuật, chúng tôi cam kết mang đến 
                        những món quà thể hiện sự trân trọng và công nhận xứng đáng cho mỗi cá nhân và tổ chức.
                    </p>
                </div>
            </div>
        </div> -->

      <!-- ============ WHY CHOOSE US SECTION ============ -->
      <div class="why-choose-section">
        <h2>Tại Sao Chọn Chúng Tôi?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎁</div>
            <h3>Sản Phẩm Chất Lượng</h3>
            <p>
              Cam kết 100% hàng chính hãng, nguồn gốc rõ ràng, được kiểm tra kỹ lưỡng trước khi giao
              hàng
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚚</div>
            <h3>Giao Hàng Nhanh</h3>
            <p>
              Giao hàng toàn quốc, nhanh chóng trong 2-3 ngày. Miễn phí vận chuyển cho đơn hàng trên
              500k
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💯</div>
            <h3>Đổi Trả Dễ Dàng</h3>
            <p>Chính sách đổi trả linh hoạt trong 7 ngày, hoàn tiền 100% nếu sản phẩm có lỗi</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
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

      <!-- ============ BENEFITS SECTION ============ -->
      <div class="benefits-section">
        <h2>Ưu Đãi Đặc Biệt</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="benefit-icon">🏷️</div>
            <div class="benefit-content">
              <h3>Giảm Giá Số Lượng Lớn</h3>
              <p>Đặt từ 50 sản phẩm giảm 5%, từ 100 sản phẩm giảm 10%, từ 200 sản phẩm giảm 15%</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">🎯</div>
            <div class="benefit-content">
              <h3>Tư Vấn Miễn Phí</h3>
              <p>Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng tư vấn 24/7 để chọn quà phù hợp</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">📦</div>
            <div class="benefit-content">
              <h3>Đóng Gói Sang Trọng</h3>
              <p>Miễn phí đóng gói cao cấp với hộp quà, thiệp chúc mừng theo yêu cầu</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon">⚡</div>
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
          <a href="#" class="category-card">
            <!-- <div class="category-icon-large">🏺</div> -->
            <h3>Gốm Sứ Bát Tràng</h3>
            <p>120 sản phẩm</p>
          </a>
          <a href="#" class="category-card">
            <!-- <div class="category-icon-large">👔</div> -->
            <h3>Quà Tặng Nhân Viên</h3>
            <p>89 sản phẩm</p>
          </a>
          <a href="#" class="category-card">
            <!-- <div class="category-icon-large">💎</div> -->
            <h3>Thủy Tinh Pha Lê</h3>
            <p>67 sản phẩm</p>
          </a>
          <a href="#" class="category-card">
            <!-- <div class="category-icon-large">🎩</div> -->
            <h3>Quà Tặng Sếp</h3>
            <p>54 sản phẩm</p>
          </a>
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
              Quý khách vui lòng liên hệ hotline 1900-xxxx hoặc email sales@sometagift.com để được
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

import { useProductStore } from '@/components/main/Seemorefeaturedcategories/datasanpham'

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

import { categories } from '@/components/main/Seemorefeaturedcategories/Data/products.data'
import { categorizing } from '@/components/main/Seemorefeaturedcategories/Data/designservices.data'
import { printingservices } from '@/components/main/Seemorefeaturedcategories/Data/categoriesprinting.data'
const router = useRouter()

const handleSelectCategory = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId)
  if (category?.route) {
    router.push(category.route)
  }
}

const handleSelectCategorizing = (categorizeId) => {
  const categorize = categorizing.find((cat) => cat.id === categorizeId)
  if (categorize?.route) {
    router.push(categorize.route)
  }
}
const handleSelectCategorizing_printing = (categori_id) => {
  const categorize_printing = printingservices.find((cat) => cat.id === categori_id)
  if (categorize_printing?.route) {
    router.push(categorize_printing.route)
  }
}
const store = useProductStore()
// const router = useRouter()

// Lấy products - Kiểm tra kỹ
const products = computed(() => store.products || [])

// Log để debug
onMounted(() => {
  console.log('Store:', store)
  console.log('Store.$state:', store.$state)
  console.log('Products:', store.products)
  console.log('Products length:', store.products?.length)
})

const handleProductClick = (productId) => {
  router.push(`/san-pham/${productId}`)
}
const handlecategorizeIdClick = (categorizeId) => {
  router.push(`/thiet-ke-silebary/${categorizeId}`)
}

const handlecategori_idClick = (categori_id) => {
  router.push(`/dich-vu-inan/${categori_id}`)
}

console.log('📦 Loaded products:', products.value.length)

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return products.value.slice(start, end)
})

// ============================================
// COMPUTED - SỬA LẠI LOGIC
// ============================================
const currentPage = ref(1) // Trang hiện tại
const itemsPerPage = 15 // 15 sản phẩm/trang (không cần ref)
// Tổng số trang (30 sản phẩm ÷ 15 = 2 trang)
const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage)
})
console.log(totalPages)

// ⭐ CHỈ HIỂN THỊ 5 SỐ TRANG
const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5 // Tối đa 5 nút
  const total = totalPages.value
  const current = currentPage.value

  // Tính start và end
  let start = Math.max(1, current - 2) // 2 bên trái
  let end = Math.min(total, start + maxVisible - 1) // 2 bên phải

  // Điều chỉnh nếu cần
  if (end - start < maxVisible - 1) {
    start = Math.max(1, end - maxVisible + 1)
  }

  // Tạo mảng số trang
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

// ============================================
// METHODS
// ============================================

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo(0, 2)
  }
}
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.category-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.category-icon-large {
  font-size: 56px;
  margin-bottom: 15px;
}

.category-card h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}

.category-card p {
  color: #666;
  font-size: 14px;
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
