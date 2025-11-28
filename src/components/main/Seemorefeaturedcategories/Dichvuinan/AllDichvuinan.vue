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
              v-for="categores in printingservices"
              :key="categores.id"
              :to="`/dich-vu-inan/${categores.id}`"
              custom
              v-slot="{ navigate, isActive }"
            >
              <li @click="navigate" :class="{ active: isActive }">
                <span class="icon">{{ categores.icon }}</span>
                {{ categores.name }}
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
        <!-- <h1 style="color: orange;">Tất cả sản phẩm! Quà tặng: {{ categori }}</h1> -->
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
                <router-link class="active" :to="`/san-pham-inan/${product.id}`">
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
                <!-- <span class="old-price">{{ product.price }}</span> -->
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
      <!-- <div class="category-description-section">
            <div class="description-card">
             <h2>{{ currentCategory?.title }}</h2>
                <div class="description-content">
                     <p v-if="currentCategory?.title">{{  currentCategory?.content }}</p> 
                </div>
            </div>
        </div> -->
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
            v-for="(category, index) in categories_print"
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
              Quý khách vui lòng liên hệ hotline 𝟬𝟴𝟲𝟳𝟴𝟭𝟰𝟮𝟰𝟵 hoặc email 123some@gmail.com để được tư
              vấn chi tiết và báo giá ưu đãi cho đơn hàng số lượng lớn. Chúng tôi có chính sách giảm
              giá đặc biệt cho đơn hàng từ 50 sản phẩm trở lên.
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
import { productsThietke } from '@/components/main/Seemorefeaturedcategories/Dichvuthietke/products-dichvuthietke.data'
import { productsInan } from '@/components/main/Seemorefeaturedcategories/Dichvuinan/products-dichvuinan.data'
// import { Product } from '@/types/product.types';
import {
  getProductsByCategory,
  getCategoryById,
} from '@/components/main/Seemorefeaturedcategories/Data/products.data' // ✅ Import này
import { useRoute } from 'vue-router'

const route = useRoute()

const categori = ref(route.params.categori_id)

// ✅ Dùng data trực tiếp
const products = ref(productsInan)

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
import { categorizing } from '@/components/main/Seemorefeaturedcategories/Data/designservices.data'
import { printingservices } from '@/components/main/Seemorefeaturedcategories/Data/categoriesprinting.data'
const router = useRouter()

const categories_print = [
  {
    title: 'In áo thun',

    link: '/dich-vu-inan/to-roi',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5p80e6bs3QodOpGtHxG6E8JoLGx1Mav-bMg&s',
  },
  {
    title: 'Thiết kế và in quảng cáo',

    link: '/dich-vu-inan/Design-and-print',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YutJSSCRTPJkOFCgCmq_FUGeUfYXhB5xiw&s',
  },
  {
    title: 'In ấn đồ họa',

    link: '/dich-vu-inan/graphic-printing',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyVCuJSCDIWXmLPiVKOjmFZI1I59FIAF06w&s',
  },
  {
    title: 'In ấn tài liệu',

    link: '/dich-vu-inan/printing-documents',
    image:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIVFRIVEhUVEhUVFRAVFRAVFRUWFhUVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEIQAAEDAgQDBQQIAwcEAwAAAAEAAgMEEQUSITFBUWEGEyIycVKBkaEUQmJyscHR8CMzNAcVFnOCovFDU1SSwtLh/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgICAgICAgIDAAAAAAAAAAECEQMhEjETQQRRYbEioRQyUv/aAAwDAQACEQMRAD8AvNjUoCdlSa1c50g3GY7tss/hTXMm02Wor23QenZaRSykbvA6jYItUsuszhjrWWnhfmCvG7VGORU7B72qFryCrlQyyqyNvqhjRO2QOFnC6p1uAQyjRoBTmOViKVOM/smUARhmBuhcbai61AbooY5VYL7hbRkjCUDIdo476dUCfS+FajHYDvZCXN8K0WzLoy3c5SUTw+nvqqtWPEi2D7KGtlp6I6yl1TDFeyK1oVGPdDBMv0EZuFrKAaBZ+jGy0VEmgLpGiispjsokASRqrXDRW41VrtlQAqlHiR+n2QGm8yPwbJIChjA8JWWwP+c5arF/KVlMG/nOTZnLs1CSZmSRQzNjxDRcKoUdUUQLr7rjR6JTq9kGJtIEaqAgVdcOB6qWNGpoHLQ0rtFlsOfoPRaKkdojGxTQQkFwqICttfoq045LWX2ZRKkmhTmlQzbqwBoFl7NCdpUrZFA3ZIlXZDRdkAcNQgWK0gDSWooJNFDLHnjI6LaEtmOSOjz2tHiRTB1LPgT3FEMNwR7Vo4uzFSRBWqgzdaWfA3uVX/Djwb3SaYckKj4LQ0RQ2DCnBF6WmIToLLR2USnMZTO6KKGdjVWu2VxkZVergJTCwPT+ZHqfZCYqMgoxAw2QFlDF/KVksHP8Z3qtliMBcCszRYcWSkpmcmGcyS5ZJOgs89jfZF6OpvoUNlhTInlq889QNTw31CAYrGRxRylqLixVTFoLi6bEh2Cy3aFpqJyxvZ9+hbyK1lE9THscugw1twQq0pNrFQV2KtiFm+J/LgPX9EIqMVkOpNvSyqeSK0LHhlLZel3UwqWBurh8UC+kl25TXyN5hY+WujoXx77Zo4X34jXbUJ70GhqW23Cs/TiBvfodVSy/ZMvju9F8a6Dc6BF4IGgAdNeqBUuIMDgXC2nDXXnZGI5w4XabhdOFp7Ry5oSj2i7FSMdtvyVuKiA4IaHq5BWuG+o67/FdGzk4ouinCRpgux1bTtvyO666cJbKpEZpgl3KRqQmmpCeydHTGm92oX1gCiOIBOmK0W8i46NUjiQ5rn95BPixckWvo4UjY1QOJDmuf3kOaOLFyRffECh76QXJTv7xHNNZWBxRQNpkfcpJ/epJAeetcHKGaBMaOStMdfQrgPTKcZLSiLXB7bFV3xLsLSEXQVZRoWZJnN56ozJVkDTT8SoeN7C6glN1lKX0dEMf2XKUX1NlNJECOBB4KtA6wsmzSEai9um6yVmzSI24Yy/mfblcW/BPfh8Y4OPvVdleb2DXab+Fw/JTMxIbOBHI229ybsaslbTRO+rbqC4H8VHJhRveOYjo5t/mD+SljrYhu75HRWIqph1B0S5P2VTXRR7iS2XvGE8PNp8kTwKWVriJCALe005uVuKovc0k6ptPJbTr+yrx5OLsJ4nOLRt4HE7K2G2VfDG2jF+PPe3D99VZK9FSbVniyioto4mygkaGx5/qF0pXVqRm4gKuqqiI3cwub7TdR7xuFXbjRPNabNzVGqwuN+oGV3Nv5hUZOBl6/tAWg6FZyu7alvArR432flynIM4+zv8ABeZ47TOYbPaWm+xBH4pOxKK9ho9uXclz/HL+SyGVWjhrg3PJ4BbQHd3uStl8ImjPbl/JN/xxJyWSIXLIth44mu/xxJyWt7FY66ovmGxXki9E/sx2d6oFKKS0ei5iku2SVEHn7wQrNNTvOtrDmdEUaxo2A9eK69ee2eoU5wGkC5PhBN/f+iYn1ugDuRsfR23z/FRtWMm7OjGlQx9z0UdtQFPlUb9Fm2bRWy22w4BIqFr9LqoZZCfDo3r/AMKVZq4oJa2XKUE76qzDBGWi0tn21DhpfpspPoxHFp+IWvCZj5ILTKFRhEbzcAsdzbt8NlcEfdsawDQC1+Z4n4pzpC3zNt1BBUL6pruKqM5w9ClGOXV/2MG61OE0DWNu4AvO+3h6BZio4EE5eYvp62Rzs9O43GbM0De97G/NdGPNy0zly/GcFyTDq4U3MuFy6DjOkppTS9ML1VE2SXSvyUedNMw5p2KiUyc9FXq2xOFpA1w+0AfxUFZi8cYJe4ADmoKSodN4+6DIz5S4eOTq1vAdSnYqGQ4VS3zMgjH2sg+SzPb7spLUSNlgAOgaRt71uGD4cAu98Llo1LdXcmdD16IsKR5/h3YOGCN01Y4PLWk5b2YNOPNeazs8RyjTMbb6C+i9qxmifUGzv5YOjeB6nmhg7KM9lFE8jyTuzyK9C/sx+t6ohiHZdobo1O7G0PdOcOqKoUpWbRJK6SCTOtXSEmBPsvMs9WitPFma5vMWHrw+dlRpn3A58UU4odM3LI4cD4h6O3+d1EujbE90ThcdF/8Aqrtmsen4q02UFZUzcj7sWTQ0K1Fldrf4J4I5BawwSe2RP5EVrso0rfEbok15tYHThxUjoIyL5QDzFwonwWaXZiBwB1ur8WRdE/5GOXYyoa944W6XCZgdC18o7wiw1A9sjh6KTDXulJjaOBueAHUotQ4Y9rgXltgbgAXJI68FrCWRaaMskcLTaYSfRxndjfgB8wnRRtYLNAA6JOeoZJV0JI4nJtVZOZFE6ZVJKhV3zKyS6+dQvqkPkqEIxTG44mkvcAmIOT19uKz9Z2gc9/c0zTJKeA2b1ceAQ2hparEDpmhp/aOj3joOA6rc4ZhcNFGGxMAJ47lx4uceKAKGEdngwiascJZhqGn+XF6N4nqUWNS4mwFyfKCbfE/kFmMU7TPbWNgYzvGMZnqbAl0ebynTd18oDLEuLrAXWhAzeXXlbj+/3suH5WfNCcVBa/f4Oz4+HHKEnJ7/AF+StimL92CxjrybPeLWZzDOq0WH4fG2lBab5gHA8XX4nmTqvPY5GzyyNhcyQtkLHd2SWhwtfU8r7+q3OEU5hiDHPJtc9G33Dei9ScUoprs5JJUTiG3CwSIHAXKlz30VavrWwiw1eeHs9SsmzOhtZR+C7jrwCz2HsDZCOqvNq3OPiO6pUrSJiCiMrRE0GklxJUSA2tTrJwC4V5VnrETgh2Mtsxslr5HAP3vkdofnb4lFSFHLEHAtd5XNLT6EWQnsZjq2qcyUMYdDrzuOBVzvybXKoTQG4zeeImJ/oCcp9N/krVPqV0Uu0RybVNhqjPhUheo4dGpmbVaGYUhGYhvxPIcSoq+QyOEUYudmj98E98nds+2/4gcAiuDYf3Qzv/mO3+yPZ/VUjNstYbRNgZlGp3c72nc1M+RMkkVWWVAiSSZU5JlFLMqktRZUkIsPlVOorANyg+MY9HCLvd6DifQIFTUtXiDuMUH+54/JUIt4l2jc9/c0rTJIdNNm+pRXAOxtyJ652d+4afIz0CK4RhFPRssxovxPEnqUyqxZzzliFz8gkBo4p2NaQCGgegv+iCYjjWd7qektLVWFybmKmB+vK7oDcMGpNttwMmppHO7trv4n/Uk3bADrZo+tJ02G55HQ9nsOZTsyxssDrfVz3uOpe931nFUhMr0mBCniMcRcZpSXSTaCRz3CzpSbaO1IHsg8zZS4f2fjhpvo0bnCM5s5zOzOzm7gHXuATy/VGYYzqX7nhufeeJ6DT1XXkA66n2eA+8fyRSsLYOwPAqakDvo8QjDrXsXXdlvbc9SjDGk/v8FyCInU7lRYniQh8DLGXidxH+runBN7JO4nXtgGRuspHujvxPXogDIXPN3HUnUncpM1NzqTqSdyVchSoRVmiMbrH3K1TsD9frD5hdxzdtt7KpST5SCFPTDtBOySk+lsXVdkcWBrLhCe5MK8k9YamOUhUZSGBcXo/wCNmG0zMp/zGWyn4ZfgUPom6rRV1OZWZQ7K4EOYTsHDa/rcj3oZLTFkjg4WOhI5EgE/O66sbtGMtMmc6wUlCwayO8rf9zuA/NVgC52Uf8DiSjWGUQkIJH8FnlB/6h4k9P8AhbGTZZwijLj38u+8YPD7R/JFJJE2SRUaioTIJJplQmnUFRU9VnMa7RRxC17uOzRqT7laQrDNXWhouSslX9oZJnd1SNzu2Lvqt9/FMpMJqq45piY4fYG7h1K2OHYdBTNtG0acf3umIB4H2PAImq3Z5N9dh6BaSormRtyt0HIcVRqK9zzliFyeP7/4TYaexv8AzJOZ1Y3/AO3u06hIDjw6QZ5Xd3F13dyAG5PQKeB7vLCwsHE6d477ztox8Xei73YBzyOLnbA8vsi2jR0brzJUUtW4jKwWG1hoP38T0QARgLIx4yCfZb5eevF3qVNB2gc59oWZrCxt5Gj7T9r9BdAPoxcbPJPHI35ZuAHqfSyL0dY2OzXkWPlY3U39d3H96piDkcsj99OZH4C/4q/SUtv3+7oa/EWRNDpSGX2B8x9Am0OLvkdmjYcvtO002NgnYqL2M4p3I7uIHP8AWfbRnQH2vwWbjN1r4428XM9znD43CT6GJ27AeoLb/I3Va9MhpmajV6kjJIRX+6YuDXj/ANv0ViKFjNtPVFBZEymBdcjhZZuvpzG8i1gScvotdHI3U3usp2nqf4jRxsfxSmtAivnSVPv3ey74FJY2VYRcmJ7iguJ9oYYjlBzv9lvD7ztguBJvo9LoKOQyvxqGLQvBd7LbF3v5e9ZDHu0kjwWh2UW1y6W6X3KDYZHZvU6nqtlhrsjn9GvkxuSQ+DwDpq74/orLHG1ySSfeShGHx8VosKoXSu5Abn2R0+0flutopIymyzhVAXmx0b/1Hc/sNP4rSOeGgACwAsAOAUALY2hrRZoGiG1leBxWiRk2WamqQXEMTawEucABzQTF+0YB7uIF8h2a3X48lDQdmJqgiStdZu4jHlHrzVUSVJsWnq3ZKRpy7GQjQenNG8E7Jxw/xJiXynidSfQIv3kNM3KwBummmp9B+qrgyzaj+Gw7uPmd70AWKmva3wjfgxv/AMioBSvk1lOVvBo3PuU0EbI9GDM/iTuOp4N96ZUVQG5zE7AXsfzd7rBAEgDWgtaLN47a/edt7vkm5ydGjTjwA9b7+/4FQXLrZtOTRw9ANv3qU6WW2jjbk1urj8Nvd8UAdewXs4lzreUcv09bDomTStb5ja+zGaudyFxr7m/FKZpYzPM9tNDzd/Mf91u5PxK5QNnl/oYO6Yd6upF5HdY4z+aTkOjk2ZrM0z20sPDNYyv+6zn8SnYcZpP6GExMPmqZ9ZHjm0H9+iMYb2WhY7vZi6on4ySnNY/ZbsEesocikgLh3ZyNhzyudNKd3vN9egRpJNJUt2OjpKaVwlNL0hj85Gxsu/THjZ7viVVfKkyNzug5qkm+iW0uyycTkH1/kP0UUmKycx/6tv8AgpGUrR6qu+EXW0cb9s55ZF6Rz+9Jfa+Tf0XFzIElpwRHNnllXj9TU6X7uM/VZcXHV25QySUN8LN+J5JVU9/BHoOJVV2gyj3lccUkeg2VKiXM4MG17k80aoWXICERt8enDRbbsvgjpPE7Rg3PPoE+2LoIYJhpk6NG5WqL2RNyt0A+fU9VTqKxkLcrbABZeqxeWdxjpml54u+q31K0UTJysK4vjjIwS51kAjhqq0+G8UPtHzOHTkiVHgMUR72qf3km+vlb0AVuTEnyeGBtm89gFRIqHDaajbpYu4uOpJ/Err6yWb+WMrfbdpb0CgbAxpvITJIdhqfgBup5nOteVwjYOALcw9T5WfM9UAcihjjPGSU68yeoHAdTYdU+pqLDNK8NGwa0/IvHH7LBfqqzJHuGWBgYw7vcHeLrlPikPV1gpY6RkZzPcXPt5nWLh6cGD0QA0PkeLNHds4XAzHqGbD1dc9Antjazc6nfXM93qSp5DlYZJHNgh4ySHLfoL6uPQfNKhbNL/RQ5G/8AlVTSCesVPufV1vQqXIdDZhkZ3kz208PtPNnO6NG7j80qBk0v9FD3bDvVVTfG7rFD+brDojeHdmYmP72YuqKj/uzHMW/cb5WD0CNqHIpIBYd2Xhjd3spdUT/92Y5iPuN2YPRG7Jy4Uihq4SkSmOckB0lMLkx8lkJrsZYw5dzyCYgpJLZVu/zGzfjwWdqMabvI7T2QfxVOftYxujTotY4v+jGeb1E2sYa3VxuV2TEWrzWp7YjgUMn7Yu4LdOK6MGpyPVJMTHNVRiYJ3Xkk/aeU7FWcFxeRzvEUuaDxyPUvpwSWR+mHmuJ2KjKTODdBv+ChtYElOYz3krS4bgjGNE1ZYN3bGePV3TouNbPRboqdj+zpl/jzAtivdt9DJ6dOq1WJY6yMCOIa7Na0a+4BD5K2ap0i/hwjTORYW+wOKUMkUF+6GZ/1pHak+/gtVGjFtsTcLkl8dW/IzcRg6n7xVv6e1g7umYANtB+7qi7PIbyEgHYcT6N/VEKWkIHsN57ud++iYiJtPc5pnZncG8ldMZt4jkbyG5Hpw9SmNnA8MLczuLrjT7z9h6C5SFP9aV2Y7htjlv0bu49SgBjZjtAzfeR17H/Vu70bp1XW0jWkOkOd41FwLN+6zZvqVauSC64ZG0XdI8ta1oG5Ljo0KOjzTf0UXeD/AMmcPZTjrGzzznro37SV0Ohzichke5sUQ80j3BrR/qO/oPim0TZZv6KGzf8Ayqlrms9YafRz/V2UeqNUXZqMPEtS51TOPK+S2SL/ACoh4Y/W1+pR1Q5FKIDw/s1Ex4mmc6onG0s1nZP8pnljH3QjgVepqQwE2JsNhuVRpsRe/U2aOW5+JWM8qi6ZtDDKStBUrl1QqK9zQTbMALm26zOLdo+8GSN9rnW29vVLyqrKWGTlRsW1DScocCeV1IVlcEYGlriLj98UeZUgEA8dkYsnNDz4fEyaR1kOra0NG4VftZUSRR5mLKQTOfq43W3E5XMKYpi7reH4rB4tislzYrS4mdPcsNiztSqiQ99lGSted3FQmUniVDdK6sY8lK6akgB90UwQ+JCUUwbzIE+jUZ11Q94ElZkEaSnjp/KO9qOFvLH++aUkYzZ6l3eP3DB5G+7ioIsThDA2FwJsM7rHU+qmoKN8muXfi7ksYdHTPsdJUPk+y3hwHoOfuVyioCdRoPadv7hw/FTsiji83jf8fgOXwCeS9/mOVvIG3xdw9ysgcHsjNmAvf8T776D3/BO7pztZXWHsgmx6E7u9Nk6nZs2NtzwsPwHH1Kmjju8saDPMNHMY4BkR5TT+VnDwtu7XylJugOwMLvDG3QcbAZRz5N96bSnvDamZ9IdezpSS2lZ6y7zHowEaWJCMQ9nu8A+luD28KdgLadu/mbvMeryRpcNCOtaAAALAbAaAeihyKUQFTdm2uLX1b/pD2m7GlobBCeHdwDS49p2Z3VHdkySZrfMbdOJ9yoVGKsGlnE+izc10aqDHV+JZCA1tyeJ2Hu4phqHkefW19hZBq/FCdoz71XoMSzOyu8LuGt7rky87tM7MMYNU1s5jONyxC7hcc7INhfacPlyObYHY9Vr54GPbZwvcLHYt2ZyESQg5b6gbjqErUls1jHg/4mwjmFvVYztLh8kD+8gjzNJzHmOYWhwee7bO3CNhgcLEKYSa0VNJOwFgeICRgI0PEHcI9m8N+IVM4awagW6hWoIjq3e40TxpxkLM4zjY7GAJ6Y23ssHQnRa2AvizRvGjr2PBZow5XuHW49CvQ5Wjx5RplfEzosRip1K3OJt0WFxfcoiIDLqaurQDq6mrqAHIhhz7FDlapimAc+kLqG3STsjibqkwWGEePxHfKL5b/mrrqh79G+FvS1/0CEYAyRje7eC4cCblw6Fx4LQQ4dI61/Aw7Egku+5GNXHqdFjCUa0b5FK9laJjW9SfU3P4uKvspSSGvzZ7XETAHSkcCR5Yh9pxHqi2HYKW8477uuHTv9X7Rjo256hGqWmZGMsbQ0XubbuPEuO5PUpuRKiCaTA3EWlPdx8YonOu/wDzZtHP9BlGpBzIzTwMjaGRtaxjRZrWgBrRyAGyfdK6kqjpKje9dJVHEInPbYGymTpaLik3sH1tQxr82YFx0y319ygEocSHXHIncKpVYeAfELHg4FMkbKRYPvba4XBJ7+j1ccajp2i1NQvcNDccuaoSkMP8p1+e6u0lfI0Wc33hT/SQ4+IKlkIeJN9A2lxNpdkcbHhdHKd4tYqCSgidrYXUeW2yl6eiu1TJn0oBJAspWXvdRNlOxT0u9h0i21yfENVXYU8PWkHsxki9StbK0tfuDZZvtJQtje23FG8Lk8b/AHLP9p6wOny+yPxXYpXGzz5x4yoC4lssFjW5W7xGTwrB4w65KcOyJANJcKV1sSdTgmrqAHKxTqsrFOgC0kkkgD3HDsGawAuIJ9ogf7W7e8/BFGGNv1m3O5LgSfUrFMomn/lTRUQC5eaOngzWy18TdXSMH+oKCPHac7TNPobrN1FG1wsUGwmmEVQW/VOo5IeTQLGeisxGMi4JI9Evp7eAKHjbRcBU+Rj4IsTYieAQyqrZTsbKZ6rvCXJlKKA9Z3h3cVVjqpGfWNkamjuEGq4jdL3svaWgnRTl25RCfQXQihBFkUqT4Vt44P0c/nyL2B5sZ7t4GuvwRCPEmu9VkcbfZwPVdxirMdM6RvmIsLLLLhVqjfD8mTT5G5jnB4qUSe8LwrDO2FVDpnzjk79VpqH+0zhNF72lRL480ax+TB/g9Rzrjpw0EuNgNyvPpv7SoMvha8u4Cyylf2tqauRsebIxz2jK3iCeJRHDP2KeeC/J7lhVQBE+Y7G5v0Xn8+Jd5K9993G3pwRPtbjQgpWU0Z8bmi9uAtqsHHV2XVjj/E4csrkaKvq9FksSkuVYqK2/FC55LrRRozKpXF2yVlQHUgkkgDqtUo1VVW6LdJgXci6pUlNlUehxJ6SS5jqGlVR/Pb6JJJS6HHs1sXlCXFJJQAx6hKSSYEciFVW6SSBoloVeqPKkkuiHRy5P9jEdofzTcV/pAkkqn6DH7PMpPMfVMKSS1My1D5Vd7Of1UP8AmBJJZy6Za9Gn7Yf1Lvuj80DXUlUeiX2RvUDkkkxCauOSSTAickkkgDqt0e6SSTAJpJJKCj//2Q==',
  },
]
const handleSelectCategorizing_printing = (categori) => {
  const categorize_printing = printingservices.find((cat) => cat.id === categori)
  if (categorize_printing?.route) {
    router.push(categorize_printing.route)
  }
}

const handlecategori_idClick = (categori_id) => {
  router.push(`/dich-vu-inan/${categori_id}`)
}

watch(
  () => route.params.categori,
  (newCategoryId) => {
    console.log('🔄 Category changed to:', newCategoryId)
    categori.value = newCategoryId
    // currentPage.value = 1; // Reset về trang 1
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { immediate: true }, // ✅ Chạy ngay khi component mount
)

// Lấy categori_id từ route
const currentCategoryId = computed(() => route.params.categori)

// Lấy TOÀN BỘ thông tin category
// const currentCategory = computed(() => {
//   if (!currentCategoryId.value) return null;

//   return categories.find(cat => cat.id === currentCategoryId.value);
// });

// Filter products
const displayedtitle = computed(() => {
  if (!currentCategoryId.value) {
    return productsInan
  }

  return productsInan.filter((product) => {
    return product.categori === currentCategoryId.value
  })
})
// Watch để debug
watch(categori, (newVal) => {
  console.log('Category changed to:', newVal)
})

const currentPage = ref(1) // Trang hiện tại
const itemsPerPage = 15 // 15 sản phẩm/trang (không cần ref)
// Tổng số trang (30 sản phẩm ÷ 15 = 2 trang)

const filteredProducts = computed(() => {
  const categori = route.params.categori_id
  const id = Array.isArray(categori) ? categori[0] : categori || ''

  console.log('🔵 Current categori:', id)

  const products = getProductsByCategory(id)

  console.log('🔵 Filtered products:', products)

  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return products.slice(start, end)
})

const totalPages = computed(() => {
  const categori = route.params.categori_id
  const id = Array.isArray(categori) ? categori[0] : categori || ''
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
