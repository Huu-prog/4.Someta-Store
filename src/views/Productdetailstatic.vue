<script setup >
import Hotlinefloating from '@/components/Theheader/Hotlinefloating .vue';
import  { products } from '@/components/main/Categoryproductsection/DataDanhmucnoibat/DataDanhmucnoibat';

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)

// Log ngay lập tức
console.log('=== IMMEDIATE CHECK ===')
console.log('route exists?', !!route)
console.log('route.params exists?', !!route.params)
console.log('ALL route.params keys:', Object.keys(route.params))
console.log('route.params.id value:', route.params.id)
console.log('route.path:', route.path)

onMounted(() => {
  console.log('=== ON MOUNTED ===')
  console.log('1. route.params.id:', route.params.id)
  console.log('2. products array:', products)
  console.log('3. products length:', products.length)
  
  // Thử lấy từ route.path nếu params không có
  if (!route.params.id) {
    console.log('⚠️ Trying to extract ID from path...')
    const pathParts = route.path.split('/')
    console.log('Path parts:', pathParts)
    const idFromPath = pathParts[pathParts.length - 1]
    console.log('ID from path:', idFromPath)
    
    if (idFromPath && !isNaN(Number(idFromPath))) {
      const id = Number(idFromPath)
      product.value = products.find(p => p.id === id)
      console.log('✅ Found product using path:', product.value)
      return
    }
  }
  
  const id = Number(route.params.id)
  console.log('4. Looking for ID:', id)
  
  if (isNaN(id)) {
    console.error('❌ ID is NaN!')
    return
  }
  
  product.value = products.find(p => p.id === id)
  console.log('5. Found product:', product.value)
})
// State cho modal
const showContactModal = ref(false);

// Số Zalo của bạn (thay bằng số thật)
const ZALO_PHONE = '0867814249';

// Xử lý đặt hàng qua Zalo
const handleOrder = () => {
  // Link Zalo với tin nhắn mẫu
  const message = encodeURIComponent('Xin chào! Tôi muốn đặt hàng sản phẩm.');
  window.open(`https://zalo.me/${ZALO_PHONE}?text=${message}`, '_blank');
};

// Hiển thị modal tư vấn
const openContactModal = () => {
  showContactModal.value = true;
};

// Đóng modal
const closeContactModal = () => {
  showContactModal.value = false;
};
</script>
<template>
  <div class="product-detail-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <router-link to="/">Trang chủ</router-link>
      <span class="separator">/</span>
      <span v-if="product">{{ product.category }}</span>
      <span class="separator">/</span>

          <span v-if="product">{{ product.name }}</span>
    </div>

    <!-- Main Content -->
    <div class="detail-container">
      <!-- Left - Images -->
      <div class="image-section">
        <div class="main-image">
          <!-- <img src="./assets/images/inan/inancoc/1.jpg" alt="Thiết kế logo"> -->
           <img 
            v-if="product"
            :src="product.image" 
            :alt="product.name"
              />

          <!-- <div v-else class="loading">Đang tải...</div> -->

        </div>
        
       
      </div>

      <!-- Right - Info -->
      <div class="info-section">
        <!-- Category Badge -->
         
        <span v-if="product" class="category-badge">{{ product.category }}</span>

        <!-- Product Name -->
        <h1 v-if="product" class="product-name">{{ product.name }}</h1>

        <!-- Rating -->
        <!-- <div class="rating">
          <span class="stars">⭐⭐⭐⭐⭐</span>
          <span class="rating-text">(48 đánh giá)</span>
        </div> -->

        <!-- Price -->
        <div class="price-box">
          <div class="price-label">Giá từ:</div>
          <div class="price-main">200.000đ - 1.000.000đ</div>
          <div class="price-note">*Tùy theo gói dịch vụ</div>
        </div>

        <!-- Description -->
        <div class="description-box">
          <h3> Mô tả dịch vụ</h3>
          <!-- <p>
            
            {{ product.content }}
          </p> -->
        </div>

        <!-- Features -->
        <div class="features-box">
          <h3>✨ Điểm nổi bật</h3>
          <ul class="features-list">
            <li><i class="fa-solid fa-hand-point-right"></i> Thiết kế độc quyền 100%</li>
            <li><i class="fa-solid fa-hand-point-right"></i> File nguồn chất lượng cao (AI, PSD, PNG, SVG)</li>
            <li><i class="fa-solid fa-hand-point-right"></i> Chỉnh sửa miễn phí đến khi hài lòng</li>
            <li><i class="fa-solid fa-hand-point-right"></i> Bản quyền hoàn toàn thuộc về khách hàng</li>
            <li><i class="fa-solid fa-hand-point-right"></i> Giao hàng đúng hạn cam kết</li>
            <li><i class="fa-solid fa-hand-point-right"></i> Hỗ trợ tư vấn 24/7</li>
          </ul>
        </div>

        <!-- Pricing Packages -->
        <!-- <div class="packages-box"> -->
          <!-- <h3>💼 Các gói dịch vụ</h3> -->
          
          <!-- <div class="package-grid"> -->
            <!-- Basic Package -->
            <!-- <div class="package-card">
              <div class="package-header">
                <div class="package-name">BASIC</div>
                <div class="package-price">500.000đ</div>
              </div>
              <div class="package-body">
                <ul>
                  <li>✓ 3 mẫu thiết kế</li>
                  <li>✓ 2 lần chỉnh sửa</li>
                  <li>✓ File PNG, JPG</li>
                  <li>✓ Giao hàng 3-5 ngày</li>
                </ul>
              </div>
            </div> -->

            <!-- Standard Package -->
            <!-- <div class="package-card popular">
              <div class="popular-badge">PHỔ BIẾN</div>
              <div class="package-header">
                <div class="package-name">STANDARD</div>
                <div class="package-price">1.000.000đ</div>
              </div>
              <div class="package-body">
                <ul>
                  <li>✓ 5 mẫu thiết kế</li>
                  <li>✓ Chỉnh sửa không giới hạn</li>
                  <li>✓ File nguồn đầy đủ</li>
                  <li>✓ Giao hàng 3-5 ngày</li>
                  <li>✓ Hỗ trợ ưu tiên</li>
                </ul>
              </div>
            </div> -->

            <!-- Premium Package -->
            <!-- <div class="package-card">
              <div class="package-header">
                <div class="package-name">PREMIUM</div>
                <div class="package-price">2.000.000đ</div>
              </div>
              <div class="package-body">
                <ul>
                  <li>✓ 10 mẫu thiết kế</li>
                  <li>✓ Chỉnh sửa không giới hạn</li>
                  <li>✓ File nguồn + Mockup 3D</li>
                  <li>✓ Giao hàng 2-3 ngày</li>
                  <li>✓ Hỗ trợ in ấn miễn phí</li>
                  <li>✓ Tư vấn thương hiệu</li>
                </ul>
              </div>
            </div> -->
          <!-- </div> -->
        <!-- </div> -->

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button @click="handleOrder" class="btn-order">
            Đặt hàng ngay
          </button>
          <button  @click="openContactModal" class="btn-contact">
          Liên hệ tư vấn
          </button>
   
        </div>
         <!-- Modal liên hệ -->
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showContactModal" class="modal-overlay" @click="closeContactModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeContactModal">&times;</button>
          
          <h3>Liên hệ tư vấn</h3>
          
          <div class="contact-info">
            <div class="contact-item">
              <strong><i class="fa-solid fa-phone"></i> Hotline:</strong>
              <a href="tel:0123456789">0867 814 249</a>
            </div>
            
            <div class="contact-item">
              <strong><i class="fa-solid fa-comment-dots"></i> Zalo:</strong>
              <a :href="`https://zalo.me/${ZALO_PHONE}`" target="_blank">
                Chat ngay
              </a>
            </div>
            
            <div class="contact-item">
              <strong><i class="fa-solid fa-envelope"></i> Email:</strong>
              <a href="mailto:info@example.com">123someta@gmail.com</a>
            </div>
            
            <div class="contact-item">
              <strong><i class="fa-solid fa-location-dot"></i> Địa chỉ:</strong>
              <span>Chợ Xoài Xiêm,Ngãi Xuyên,Trà cú,Trà Vinh</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
        <!-- Contact Info -->
        <!-- <div class="contact-box">
          <div class="contact-item">
            <span class="icon">📞</span>
            <span>Hotline: 0123 456 789</span>
          </div>
          <div class="contact-item">
            <span class="icon">📧</span>
            <span>Email: contact@design.com</span>
          </div>
          <div class="contact-item">
            <span class="icon">⏰</span>
            <span>Thời gian: 8:00 - 22:00 hàng ngày</span>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Process Section -->
    <div class="process-section">
      <h2> Quy trình làm việc</h2>
      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Tư vấn & Báo giá</h4>
            <p>Trao đổi ý tưởng, phong cách và yêu cầu của bạn</p>
          </div>
        </div>
        
        <div class="step-arrow">→</div>
        
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Thiết kế</h4>
            <p>Triển khai thiết kế theo brief đã thống nhất</p>
          </div>
        </div>
        
        <div class="step-arrow">→</div>
        
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Chỉnh sửa</h4>
            <p>Điều chỉnh theo ý kiến phản hồi của bạn</p>
          </div>
        </div>
        
        <div class="step-arrow">→</div>
        
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Bàn giao</h4>
            <p>Giao file hoàn thiện và hỗ trợ sử dụng</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="reviews-section">
      <h2>⭐ Đánh giá từ khách hàng</h2>
      <div class="reviews-grid">
        <div class="review-card">
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">H</div>
              <div>
                <div class="reviewer-name">Nguyễn Văn Hữu</div>
                <div class="review-date">15/10/2024</div>
              </div>
            </div>
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
          </div>
          <p class="review-text">
            "Dịch vụ tuyệt vời! Đội ngũ làm việc chuyên nghiệp, 
            thiết kế đẹp và đúng ý tôi muốn. Logo mới giúp thương 
            hiệu của tôi trông chuyên nghiệp hơn rất nhiều."
          </p>
        </div>

        <div class="review-card">
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">N</div>
              <div>
                <div class="reviewer-name">Trần Thị Nga</div>
                <div class="review-date">10/10/2024</div>
              </div>
            </div>
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
          </div>
          <p class="review-text">
            "Rất hài lòng với chất lượng thiết kế. Team support 
            nhiệt tình, chỉnh sửa nhanh. Giá cả hợp lý. 
            Sẽ quay lại sử dụng dịch vụ lần sau!"
          </p>
        </div>

        <div class="review-card">
          <div class="review-header">
            <div class="reviewer-info">
              <div class="reviewer-avatar">C</div>
              <div>
                <div class="reviewer-name">Lê Minh Châu</div>
                <div class="review-date">05/10/2024</div>
              </div>
            </div>
            <div class="review-stars">⭐⭐⭐⭐⭐</div>
          </div>
          <p class="review-text">
            "Thiết kế sáng tạo, độc đáo. File giao đầy đủ, 
            chất lượng cao. Quy trình làm việc rõ ràng, 
            minh bạch. Highly recommended!"
          </p>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <div class="related-section">
      <h2>🎨 Dịch vụ liên quan</h2>
      <div class="related-grid">
        <div class="related-card">
          <div class="related-image">
            <!-- <img src="/images/service-2.jpg" alt="Thiết kế quảng cáo"> -->
          </div>
          <div class="related-info">
            <h4>Thiết kế quảng cáo</h4>
            <p class="related-price">Từ 300.000đ</p>
          </div>
        </div>

        <div class="related-card">
          <div class="related-image">
            <!-- <img src="/images/service-3.jpg" alt="Thiết kế túi giấy"> -->
          </div>
          <div class="related-info">
            <h4>Thiết kế túi giấy</h4>
            <p class="related-price">Từ 500.000đ</p>
          </div>
        </div>

        <div class="related-card">
          <div class="related-image">
            <!-- <img src="/images/service-4.jpg" alt="Thiết kế menu"> -->
          </div>
          <div class="related-info">
            <h4>Thiết kế menu</h4>
            <p class="related-price">Từ 400.000đ</p>
          </div>
        </div>

        <div class="related-card">
          <div class="related-image">
            <!-- <img src="/images/service-5.jpg" alt="Thiết kế brochure"> -->
          </div>
          <div class="related-info">
            <h4>Thiết kế brochure</h4>
            <p class="related-price">Từ 800.000đ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <Hotlinefloating style="margin-right:40px ;"/>
</template>



<style scoped>
/* ===== GENERAL ===== */
.product-detail-page {
  background: #f8f9fa;
  min-height: 100vh;
  padding: 20px;
}

/* ===== BREADCRUMB ===== */
.breadcrumb {
  max-width: 1400px;
  margin: 0 auto 30px;
  padding: 15px 0;
  font-size: 1.4rem;
  color: #666;
}

.breadcrumb a {
  color: #4285F4;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb a:hover {
  color: #3367D6;
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

/* ===== MAIN CONTAINER ===== */
.detail-container {
  max-width: 1310px;
  margin: 0 auto 40px;
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

/* ===== IMAGE SECTION ===== */
.image-section {
  position: sticky;
  top: 20px;
  height: fit-content;
}

.main-image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.thumbnail {
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s;
  background: #f5f5f5;
}

.thumbnail:hover {
  border-color: #4285F4;
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: #4285F4;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== INFO SECTION ===== */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.category-badge {
  display: inline-block;
  width: fit-content;
  padding: 8px 16px;
  background: #E8F0FE;
  color: #4285F4;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.product-name {
  font-size: 2rem;
  color: #333;
  margin: 0;
  line-height: 1.3;
}

.rating {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stars {
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.rating-text {
  color: #666;
  font-size: 0.9rem;
}

/* ===== PRICE BOX ===== */
.price-box {
  padding: 25px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.price-label {
  font-size: 1.4rem;
  opacity: 0.9;
  margin-bottom: 8px;
}

.price-main {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.price-note {
  font-size: 1.1rem;
  opacity: 0.8;
  font-style: italic;
}

/* ===== DESCRIPTION & FEATURES ===== */
.description-box h3,
.features-box h3,
.packages-box h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
}

.description-box p {
  color: #666;
  line-height: 1.8;
  font-size: 1.2rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  padding: 10px 0;
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
}

/* ===== PACKAGES ===== */
.package-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.package-card {
  position: relative;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  background: white;
}

.package-card:hover {
  border-color: #4285F4;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(66, 133, 244, 0.2);
}

.package-card.popular {
  border-color: #4285F4;
  box-shadow: 0 5px 15px rgba(66, 133, 244, 0.2);
}

.popular-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #4285F4;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
}

.package-header {
  padding: 25px 20px;
  background: #f8f9fa;
  text-align: center;
}

.package-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.package-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #d32f2f;
}

.package-body {
  padding: 25px 20px;
}

.package-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.package-body li {
  padding: 8px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ===== ACTION BUTTONS ===== */
.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 12px;
  margin-top: 10px;
}

.btn-order,
.btn-contact
 {
  padding: 16px 24px;
  border: none;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-order {
  background: #4285F4;
  color: white;
}

.btn-order:hover {
  background: #3367D6;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
}

.btn-contact {
  background: #34A853;
  color: white;
}

.btn-contact:hover {
  background: #2d8f47;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 168, 83, 0.4);
}

.btn-favorite {
  background: white;
  border: 2px solid #e0e0e0;
  padding: 16px 20px;
}

.btn-favorite:hover {
  border-color: #ff4444;
  background: #fff5f5;
}

/* ===== CONTACT BOX ===== */
.contact-box {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #666666;
  font-size: 1.2rem;
}

.contact-item .icon {
  font-size: 1.3rem;
}

/* ===== PROCESS SECTION ===== */
.process-section {
  max-width: 1310px;
  margin: 0 auto 40px;
  background: white;
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.process-section h2 {
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.process-steps {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 20px;
}

.step {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  background: rgb(255, 122, 33);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 15px;
  box-shadow: 0 4px 15px rgb(255, 122, 33);;
}

.step-content h4 {
  color: #333;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.step-content p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.step-arrow {
  font-size: 2rem;
  color: #4285F4;
  font-weight: 700;
}

/* ===== REVIEWS SECTION ===== */
.reviews-section {
  max-width: 1310px;
  margin: 0 auto 40px;
  background: white;
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.reviews-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.review-card {
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.reviewer-info {
  display: flex;
  gap: 12px;
  align-items: center;
}

.reviewer-avatar {
  width: 45px;
  height: 45px;
  background: rgb(255, 122, 33);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.reviewer-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.review-date {
  font-size: 0.85rem;
  color: #999;
}

.review-stars {
  color: #FFA000;
  font-size: 1.1rem;
}

.review-text {
  color: #666;
  line-height: 1.7;
  font-size: 0.95rem;
  font-style: italic;
}

/* ===== RELATED SECTION ===== */
.related-section {
  max-width: 1310px;
  margin: 0 auto 40px;
  background: white;
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.related-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.related-card {
  border-radius: 12px;
  overflow: hidden;
  background: #f8f9fa;
  transition: all 0.3s;
  cursor: pointer;
}

.related-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.related-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #e0e0e0;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.related-card:hover .related-image img {
  transform: scale(1.1);
}

.related-info {
  padding: 20px;
  text-align: center;
}

.related-info h4 {
  color: #333;
  font-size: 1rem;
  margin-bottom: 8px;
}

.related-price {
  color: #d32f2f;
  font-weight: 600;
  font-size: 0.95rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .detail-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .image-section {
    position: relative;
    top: 0;
  }

  .package-grid {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .step-arrow {
    transform: rotate(90deg);
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-detail-page {
    padding: 10px;
  }

  .detail-container {
    padding: 20px;
  }

  .product-name {
    font-size: 1.5rem;
  }

  .price-main {
    font-size: 1.5rem;
  }

  .action-buttons {
    grid-template-columns: 1fr;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }

  .process-section,
  .reviews-section,
  .related-section {
    padding: 30px 20px;
  }
}
/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #999;
  line-height: 1;
  padding: 0;
  width: 30px;
  height: 30px;
}

.modal-close:hover {
  color: #333;
}

.modal-content h3 {
  margin: 0 0 20px 0;
  font-size: 24px;
  color: #333;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact-item strong {
  color: #ffa600;
  font-size: 1.4rem;
}

.contact-item a {
  color: #ff0000;
  text-decoration: none;
  font-size: 1.6rem;
}

.contact-item a:hover {
  text-decoration: underline;
}

.contact-item span {
  font-size: 16px;
  color: #333;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}
</style>