<template>
  <!-- Header -->
  <header>
    <div class="container">
      <h1>Về Chúng Tôi</h1>
      <p>Chúng tôi là đơn vị chuyên sản xuất – in ấn – thiết kế với đội ngũ sáng tạo, nhiệt huyết và luôn đổi mới từng ngày.
    Sứ mệnh của chúng tôi là mang đến các sản phẩm in ấn chất lượng cao, thiết kế ấn tượng và giải pháp thương hiệu hiệu quả cho doanh nghiệp.</p>
    </div>
  </header>

  <!-- Giới thiệu -->
  <section>
    <div class="container">
      <h2 class="section-title">Chuyện của chúng tôi</h2>
      <div class="about-content">
        <div class="about-text">
          <h3>Thành lập năm {{ foundingYear }}</h3>
          <p>
            Công ty SOMETA được thành lập với mong muốn trở thành đơn vị in ấn – thiết kế – sản xuất bao bì và ấn phẩm quảng cáo hàng đầu tại Việt Nam.
            Bắt đầu từ một xưởng in nhỏ với vài thành viên yêu nghề, chúng tôi đã không ngừng cải tiến công nghệ, nâng cấp máy móc và mở rộng đội ngũ để đáp ứng mọi nhu cầu của khách hàng từ cá nhân đến doanh nghiệp lớn.
            Sau nhiều năm hoạt động, chúng tôi tự hào đã có những thành viên tài năng.
          </p>
          <p>
            Chúng tôi tin rằng mang đến giải pháp in ấn & thiết kế trọn gói – chuyên nghiệp – đúng tiến độ, giúp doanh nghiệp xây dựng hình ảnh thương hiệu mạnh mẽ và thu hút khách hàng..
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
               alt="Đội ngũ làm việc" class="about-img">
        </div>
      </div>
    </div>
  </section>

  <!-- Giá trị cốt lõi -->
  <section class="values-section">
    <div class="container">
      <h2 class="section-title">Giá trị cốt lõi</h2>
      <div class="values">
        <div class="value-card" v-for="value in coreValues" :key="value.title">
          <i :class="value.icon"></i>
          <h3>{{ value.title }}</h3>
          <p>{{ value.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Đội ngũ -->
  <section>
    <div class="container">
      <h2 class="section-title">Đội ngũ của chúng tôi</h2>
      <div class="team">
        <div class="member" v-for="member in team" :key="member.name">
          <img :src="member.photo" :alt="member.name">
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


 
</template>

<script setup>
import { ref, computed } from 'vue'

// Dữ liệu cơ bản
const foundingYear = ref(2025)
const teamCount = ref(50)



// Giá trị cốt lõi
const coreValues = ref([
  { icon: 'fas fa-lightbulb', title: 'Sáng tạo', desc: 'Không ngừng đổi mới trong từng ý tưởng thiết kế, từng sản phẩm in.Chúng tôi luôn tìm cách tạo nên những ấn phẩm độc đáo, hiện đại và mang dấu ấn riêng của khách hàng.' },
  { icon: 'fas fa-users', title: 'Đồng đội', desc: 'Hợp tác – hỗ trợ – cùng nhau phát triển.Mỗi sản phẩm hoàn thiện đều là kết tinh của sự phối hợp nhịp nhàng giữa đội ngũ thiết kế, kỹ thuật in và sản xuất.' },
  { icon: 'fas fa-heart', title: 'Đam mê', desc: 'Yêu nghề – yêu chất lượng – yêu sự hài lòng của khách hàng.Chúng tôi đặt tâm huyết vào từng đường nét, từng chi tiết để tạo ra sản phẩm đẹp nhất.' },
  { icon: 'fas fa-shield-alt', title: 'Trách nhiệm', desc: 'Giữ chữ tín trong từng đơn hàng – từng cam kết.Khách hàng tin tưởng không chỉ vì chất lượng tốt mà còn vì quy trình làm việc minh bạch, rõ ràng và chuyên nghiệp.' }
])

// Đội ngũ
const team = ref([
  { name: 'Nguyễn Văn A', role: 'CEO & Founder', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800' },
  { name: 'Trần Thị B', role: 'CTO', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800' },
  { name: 'Lê Văn C', role: 'Head of Design', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800' },
  { name: 'Phạm Thị D', role: 'Lead Developer', photo: 'https://images.unsplash.com/photo-158048994092c-w1b0b67a19d3?w=800' }
])
</script>

<style scoped>
/* Giữ nguyên toàn bộ CSS từ file HTML trước, chỉ thêm scoped để không ảnh hưởng toàn cục */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background: #f8fafc; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}
header h1 { font-size: 3.5rem; margin-bottom: 10px; }
header p { font-size: 1.3rem; opacity: 0.9; }

section { padding: 80px 0; }
.values-section { background: #f1f5f9; }

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  position: relative;
}
.section-title::after {
  content: '';
  width: 80px;
  height: 4px;
  background: #667eea;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.about-text h3 { font-size: 1.8rem; margin-bottom: 20px; color: #444; }
.about-text p { margin-bottom: 20px; font-size: 1.1rem; }
.about-img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
.value-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.3s;
}
.value-card:hover { transform: translateY(-10px); }
.value-card i { font-size: 3rem; color: #667eea; margin-bottom: 20px; }
.value-card h3 { font-size: 1.5rem; margin-bottom: 15px; }

.team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}
.member {
  text-align: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.member:hover { transform: scale(1.05); }
.member img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.member-info {
  padding: 20px;
}
.member-info h3 { margin-bottom: 5px; }
.member-info p { color: #667eea; font-weight: 600; }



@media (max-width: 768px) {
  .about-content { grid-template-columns: 1fr; }
  header h1 { font-size: 2.8rem; }
}
</style>