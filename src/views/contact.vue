<script setup>
import {ref} from 'vue'
const message = ref()

const hendleclickmessage = () => {
   return alert ('Tính năng đang được cập nhật')
}


</script>

<template>
<!-- ============ PAGE HEADER ============ -->
    <div class="page-header">
        <h1>Liên Hệ Với Chúng Tôi</h1>
        <p>Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7</p>
    </div>

    <div class="container">
        <!-- ============ CONTACT INFO CARDS ============ -->
        <div class="contact-info-section">
            <div class="info-card">
                <div class="info-icon"><i class="fa-solid fa-phone"></i></div>
                <h3>Điện Thoại</h3>
                <p>
                    Hotline: <a href="tel:1900xxxx">086781429</a><br>
                    Tư vấn: <a href="tel:0123456789">0867-814-249</a><br>
                    Miễn phí gọi 24/7
                </p>
            </div>
            <div class="info-card">
                <div class="info-icon"><i class="fa-solid fa-envelope"></i></div>
                <h3>Email</h3>
                <p>
                    Bán hàng: <a href="mailto:23someta@gmail.com">123someta@gmail.com</a><br>
                    Hỗ trợ: <a href="mailto:123someta@gmail.com<">123someta@gmail.com</a><br>
                    Phản hồi trong 24h
                </p>
            </div>
            <div class="info-card">
                <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
                <h3>Địa Chỉ</h3>
                <p>
                   Trụ sở chính: Chợ Xoài Xiêm<br>
                    Ngãi Xuyên,Trà Cú,Trà Vinh<br>
                    Việt Nam
                </p>
                    <p>
                    Chi nhánh 2: Thanh Sơn,Trà Cú<br>
                    Trà Vinh (gần công ty Mỹ Phong)<br>
                    Việt Nam
                </p>
            </div>
        </div>

        <!-- ============ MAIN CONTENT (FORM + DETAILS) ============ -->
        <div class="main-content">
            <!-- Contact Form -->
            <div class="contact-form-section">
                <h2>Gửi Tin Nhắn</h2>
                <p class="form-subtitle">Vui lòng điền thông tin bên dưới, chúng tôi sẽ phản hồi trong 24h</p>
                
                <form id="contactForm">
                    <div @click="hendleclickmessage" class="form-row">
                        <div class="form-group">
                            <label>Họ và tên <span class="required">*</span></label>
                            <input  type="text" name="name" placeholder="Nguyễn Văn A" required>
                       
                        </div>
                        <div class="form-group">
                            <label>Số điện thoại <span class="required">*</span></label>
                            <input type="tel" name="phone" placeholder="0123456789" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Email <span class="required">*</span></label>
                        <input type="email" name="email" placeholder="example@email.com" required>
                    </div>

                    <div class="form-group">
                        <label>Công ty / Tổ chức</label>
                        <input type="text" name="company" placeholder="Tên công ty của bạn">
                    </div>

                    <div class="form-group">
                        <label>Chủ đề <span class="required">*</span></label>
                        <select name="subject" required>
                            <option value="">-- Chọn chủ đề --</option>
                            <option value="product">Tư vấn sản phẩm</option>
                            <option value="order">Đặt hàng số lượng lớn</option>
                            <option value="quote">Yêu cầu báo giá</option>
                            <option value="support">Hỗ trợ kỹ thuật</option>
                            <option value="complaint">Khiếu nại</option>
                            <option value="other">Khác</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Nội dung <span class="required">*</span></label>
                        <textarea name="message" placeholder="Nhập nội dung tin nhắn của bạn..." required></textarea>
                    </div>

                    <button @click="hendleclickmessage" type="submit" class="submit-btn">
                        Gửi Tin Nhắn 
                    </button>
                </form>
            </div>

            <!-- Contact Details -->
            <div class="contact-details-section">
                <h2>Thông Tin Liên Hệ</h2>
                
                <div class="detail-item">
                    <div class="detail-icon"><i class="fa-solid fa-building"></i></div>
                    <div class="detail-content">
                        <h3>Văn Phòng Chính</h3>
                        <p>
                            Trụ sở chính: Chợ Xoài Xiêm<br>
                            Ngãi Xuyên,Trà Cú,Trà Vinh<br>
                            Việt Nam
                        </p>
                    </div>
                </div>

                <div class="detail-item">
                    <div class="detail-icon"><i class="fa-solid fa-briefcase"></i></div>
                    <div class="detail-content">
                        <h3>Chi Nhánh Phụ</h3>
                        <p>
                               Chi nhánh 2: Thanh Sơn,Trà Cú<br>
                                Trà Vinh (gần công ty Mỹ Phong)<br>
                                Việt Nam
                            Tel: <a href="tel:0867814249">0867-814-249</a>
                        </p>
                    </div>
                </div>

                <div class="detail-item">
                    <div class="detail-icon"><i class="fa-solid fa-message"></i></div>
                    <div class="detail-content">
                        <h3>Mạng Xã Hội</h3>
                        <p>Kết nối với chúng tôi</p>
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61558154186606" class="social-link" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#" class="social-link" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                            <!-- <a href="#" class="social-link" title="LinkedIn">💼</a> -->
                            <a href="#"  title="Zalo"> <img src="/imageshtmlcss/zaloicon.png" alt="logo" class="social-link"></a>
                      
                        </div>
                    </div>
                </div>

                <div class="detail-item">
                    <div class="detail-icon"><i class="fa-solid fa-clock"></i></div>
                    <div class="detail-content">
                        <h3>Giờ Làm Việc</h3>
                        <p>
                            <strong>Thứ 2 - Thứ 6:</strong> 8:00 - 18:00<br>
                            <strong>Thứ 7:</strong> 8:00 - 17:00<br>
                            <strong>Chủ nhật:</strong> 9:00 - 16:00
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- ============ MAP SECTION ============ -->
        <!-- <div class="map-section">
            <h2>Vị Trí Của Chúng Tôi</h2>
            <div class="map-container">
                <!-- Placeholder - Thay bằng Google Maps Embed thật -->
                <!-- <div class="map-placeholder"> -->
                    <!-- <div class="map-placeholder-icon">🗺️</div>
                    <div class="map-placeholder-text">Bản đồ Google Maps</div> -->
                <!-- </div> -->
                
                <!-- 
                Uncomment để dùng Google Maps thật:
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.324584897915!2d106.69526831480144!3d10.782537792317746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzU3LjIiTiAxMDbCsDQxJzUxLjAiRQ!5e0!3m2!1svi!2s!4v1234567890"
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
                -->
            <!-- </div>
        </div> --> 

        <!-- ============ WORKING HOURS SECTION ============ -->
        <div class="working-hours-section">
            <h2>Giờ Làm Việc & Hỗ Trợ</h2>
            <div class="hours-grid">
                <div class="hours-item">
                    <h3>🏢 Văn Phòng</h3>
                    <p>
                        Thứ 2 - Thứ 6: <span class="hours-highlight">8:00 - 18:00</span><br>
                        Thứ 7: <span class="hours-highlight">8:00 - 17:00</span><br>
                        Chủ nhật: <span class="hours-highlight">9:00 - 16:00</span>
                    </p>
                </div>
                <div class="hours-item">
                    <h3><i class="fa-solid fa-phone"></i> Hotline</h3>
                    <p>
                        Hỗ trợ 24/7<br>
                        Cả ngày lễ, Tết<br>
                        <span class="hours-highlight">Luôn sẵn sàng phục vụ</span>
                    </p>
                </div>
            </div>
        </div>

        <!-- ============ FAQ SECTION ============ -->
        <div class="faq-section">
            <h2>Câu Hỏi Thường Gặp</h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <h3>Thời gian phản hồi là bao lâu?</h3>
                    <p>Chúng tôi cam kết phản hồi mọi yêu cầu trong vòng 24 giờ làm việc. Với các yêu cầu khẩn cấp, vui lòng gọi hotline để được hỗ trợ ngay.</p>
                </div>
                <div class="faq-item">
                    <h3>Có thể đặt lịch tư vấn trực tiếp không?</h3>
                    <p>Có, quý khách có thể đặt lịch hẹn trước qua hotline hoặc email. Chúng tôi sẽ sắp xếp thời gian phù hợp để tư vấn chi tiết.</p>
                </div>
                <div class="faq-item">
                    <h3>Có hỗ trợ giao hàng toàn quốc không?</h3>
                    <p>Có, chúng tôi giao hàng toàn quốc. Phí vận chuyển phụ thuộc vào địa chỉ và khối lượng đơn hàng. Miễn phí ship với đơn > 500k.</p>
                </div>
                <div class="faq-item">
                    <h3>Làm sao để được báo giá ưu đãi?</h3>
                    <p>Vui lòng liên hệ qua email sales@sometagift.com hoặc điền form yêu cầu báo giá với thông tin chi tiết về số lượng và loại sản phẩm.</p>
                </div>
            </div>
        </div>

        <!-- ============ CTA BANNER ============ -->
        <div class="cta-banner">
            <h2>Bạn Cần Hỗ Trợ Ngay?</h2>
            <p>Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng tư vấn 24/7</p>
            <div class="cta-buttons">
                <a href="tel:1900xxxx" class="cta-btn cta-btn-primary">
                    <span><i class="fa-solid fa-phone"></i></span>
                    <span>Gọi Ngay: 0867-814-249</span>
                </a>
                <a href="#" class="cta-btn cta-btn-secondary">
                    <span>💬</span>
                    <span @click="hendleclickmessage">Chat với tư vấn viên qua zalo: 0867-814-249</span>
                </a>
            </div>
        </div>
    </div>

</template>

<style scoped>
 /* ============ HEADER SECTION ============ */
        .page-header {
            background: linear-gradient(135deg, #ff6600 0%, #ff8533 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
        }

        .page-header h1 {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 15px;
        }

        .page-header p {
            font-size: 18px;
            opacity: 0.95;
        }

        /* ============ CONTAINER ============ */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        /* ============ CONTACT INFO SECTION ============ */
        .contact-info-section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 60px;
        }

        .info-card {
            background: white;
            padding: 40px 30px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
        }

        .info-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .info-icon {
            font-size: 56px;
            margin-bottom: 20px;
        }

        .info-card h3 {
            font-size: 22px;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .info-card p {
            font-size: 16px;
            color: #666;
            line-height: 1.8;
        }

        .info-card a {
            color: #ff6600;
            text-decoration: none;
            font-weight: 600;
        }

        .info-card a:hover {
            text-decoration: underline;
        }

        /* ============ MAIN CONTENT SECTION ============ */
        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 60px;
        }

        /* Contact Form */
        .contact-form-section {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .contact-form-section h2 {
            font-size: 32px;
            color: #333;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .form-subtitle {
            font-size: 16px;
            color: #666;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            font-size: 15px;
            color: #333;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .form-group label .required {
            color: #ff6600;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 15px;
            font-family: inherit;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: #ff6600;
            box-shadow: 0 0 0 4px rgba(255, 102, 0, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .submit-btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #ff6600 0%, #ff8533 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(255, 102, 0, 0.3);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        /* Contact Details */
        .contact-details-section {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .contact-details-section h2 {
            font-size: 32px;
            color: #333;
            margin-bottom: 30px;
            font-weight: 700;
        }

        .detail-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid #f0f0f0;
        }

        .detail-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .detail-icon {
            font-size: 32px;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff5e6;
            border-radius: 50%;
        }

        .detail-content h3 {
            font-size: 18px;
            color: #333;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .detail-content p {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
        }

        .detail-content a {
            color: #ff6600;
            text-decoration: none;
        }

        .detail-content a:hover {
            text-decoration: underline;
        }

        /* Social Links */
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }

        .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            border-radius: 50%;
            text-decoration: none;
            font-size: 20px;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: #ff6600;
            transform: translateY(-3px);
        }

        /* ============ MAP SECTION ============ */
        .map-section {
            margin-bottom: 60px;
        }

        .map-section h2 {
            font-size: 32px;
            color: #333;
            margin-bottom: 30px;
            text-align: center;
            font-weight: 700;
        }

        .map-container {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            overflow: hidden;
        }

        .map-placeholder {
            width: 100%;
            height: 450px;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 15px;
        }

        .map-placeholder-icon {
            font-size: 64px;
        }

        .map-placeholder-text {
            font-size: 18px;
            color: #666;
        }

        /* Real Map (Google Maps Embed) */
        .map-container iframe {
            width: 100%;
            height: 450px;
            border: none;
            border-radius: 8px;
        }

        /* ============ FAQ SECTION ============ */
        .faq-section {
            background: white;
            padding: 60px 40px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            margin-bottom: 60px;
        }

        .faq-section h2 {
            font-size: 32px;
            color: #333;
            margin-bottom: 40px;
            text-align: center;
            font-weight: 700;
        }

        .faq-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .faq-item {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #ff6600;
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

        /* ============ WORKING HOURS SECTION ============ */
        .working-hours-section {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            padding: 60px 40px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 60px;
        }

        .working-hours-section h2 {
            font-size: 32px;
            margin-bottom: 40px;
            font-weight: 700;
        }

        .hours-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            max-width: 800px;
            margin: 0 auto;
        }

        .hours-item {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }

        .hours-item h3 {
            font-size: 20px;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .hours-item p {
            font-size: 16px;
            opacity: 0.95;
            line-height: 1.8;
        }

        .hours-highlight {
            color: #ffc107;
            font-weight: 600;
        }

        /* ============ CTA BANNER ============ */
        .cta-banner {
            background: linear-gradient(135deg, #ff6600 0%, #ff8533 100%);
            padding: 60px 40px;
            border-radius: 12px;
            text-align: center;
            color: white;
        }

        .cta-banner h2 {
            font-size: 36px;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .cta-banner p {
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

        .cta-btn {
            padding: 15px 40px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .cta-btn-primary {
            background: white;
            color: #ff6600;
        }

        .cta-btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .cta-btn-secondary {
            background: rgba(255,255,255,0.2);
            color: white;
            border: 2px solid white;
        }

        .cta-btn-secondary:hover {
            background: white;
            color: #ff6600;
        }

        /* ============ RESPONSIVE DESIGN ============ */

        /* Tablet (768px - 1024px) */
        @media (max-width: 1024px) {
            .contact-info-section {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .main-content {
                grid-template-columns: 1fr;
                gap: 30px;
            }

            .faq-grid {
                grid-template-columns: 1fr;
            }

            .hours-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Mobile (max-width: 767px) */
        @media (max-width: 767px) {
            .page-header {
                padding: 60px 20px;
            }

            .page-header h1 {
                font-size: 36px;
            }

            .page-header p {
                font-size: 16px;
            }

            .container {
                padding: 40px 15px;
            }

            .contact-info-section {
                margin-bottom: 40px;
            }

            .info-card {
                padding: 30px 20px;
            }

            .info-icon {
                font-size: 48px;
            }

            .info-card h3 {
                font-size: 20px;
            }

            .contact-form-section,
            .contact-details-section {
                padding: 30px 20px;
            }

            .contact-form-section h2,
            .contact-details-section h2 {
                font-size: 28px;
            }

            .form-row {
                grid-template-columns: 1fr;
                gap: 0;
            }

            .detail-item {
                gap: 15px;
            }

            .detail-icon {
                font-size: 28px;
                width: 45px;
                height: 45px;
            }

            .map-section h2,
            .faq-section h2,
            .working-hours-section h2 {
                font-size: 28px;
                margin-bottom: 30px;
            }

            .map-placeholder {
                height: 350px;
            }

            .map-container iframe {
                height: 350px;
            }

            .faq-section {
                padding: 40px 20px;
            }

            .faq-grid {
                gap: 20px;
            }

            .working-hours-section {
                padding: 40px 20px;
            }

            .cta-banner {
                padding: 40px 20px;
            }

            .cta-banner h2 {
                font-size: 28px;
            }

            .cta-banner p {
                font-size: 16px;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .cta-btn {
                width: 100%;
                justify-content: center;
            }
        }

        /* Extra Small Mobile (max-width: 480px) */
        @media (max-width: 480px) {
            .page-header h1 {
                font-size: 32px;
            }

            .form-group input,
            .form-group textarea,
            .form-group select {
                padding: 12px 14px;
            }

            .submit-btn {
                padding: 14px;
            }
        }
</style>