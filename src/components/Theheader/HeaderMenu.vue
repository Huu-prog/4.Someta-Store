<template>



      <!-- Navigation Menu -->
      <nav class="nav-menu">
        <ul>
          <li><router-link  class="active" to="/">Trang chủ</router-link></li>
          
          <li class="has-dropdown">
            <router-link to="/Xemthemsanphamnoibat" >Sản phẩm</router-link>
            <ul class="dropdown-menu">

              <li class="has-dropdown__child">  <router-link to="/san-pham-silebary/gom-su">Quà tặng gốm sứ</router-link>
              <!-- <ul class="dropdown-menu__right">
              <li><a href="#">Ấm chén</a></li>
              <li><a href="#">Ca cốc sứ</a></li>
              <li><a href="#">Bát đĩa</a></li>
              <li><a href="#">Bình hút lộc</a></li>
              <li><a href="#">Lọ Hoa</a></li>
              <li><a href="#">Hủ đựng trà</a></li>
              <li><a href="#">Tranh gốm sứ</a></li>
              <li><a href="#">Khay mứt Tết bằng sứ</a></li>
            
            </ul> -->
              </li>
                <li class="has-dropdown__child"> <router-link to="/san-pham-silebary/thuy-tinh">Quà tặng thủy tinh pha lê</router-link>
                   <!-- <ul class="dropdown-menu__right">
                <li><a href="#">Biểu trưng pha lê</a></li>
                <li><a href="#">Cúp pha lê</a></li>
                <li><a href="#">Cắm bút pha lê</a></li>
                <li><a href="#">Bình cốc thủy tinh</a></li>
            
            
            </ul> -->
                </li>
            
              <li class="has-dropdown__child">  <router-link to="/san-pham-silebary/vinh-danh">Quà tặng vinh danh</router-link>
               <!-- <ul class="dropdown-menu__right">
                <li><a href="#">Linh vật phong thủy</a></li>
                <li><a href="#">Biểu trưng gỗ đồng</a></li>
                <li><a href="#">Bảng vinh danh gỗ đồng</a></li>
       
            
            
            </ul> -->
              </li>
            <li class="has-dropdown__child">
            <router-link to="/san-pham-silebary/sep">
              Quà tặng sếp
            </router-link>
          </li>

          <!-- Quà tặng đồ gia dụng -->
          <li class="has-dropdown__child">
            <router-link to="/san-pham-silebary/do-gia-dung">
              Quà tặng đồ gia dụng
            </router-link>
          </li>

          <!-- Quà tặng theo mức giá -->
          <li class="has-dropdown__child">
            <router-link to="/san-pham-silebary/theo-muc-gia">
              Quà tặng theo mức giá
            </router-link>
          </li>

          <!-- Quà tặng may mặc -->
          <li class="has-dropdown__child">
            <router-link to="/san-pham-silebary/may-mac">
              Quà tặng may mặc
            </router-link>
          </li>

          <!-- Hộp quà tặng -->
          <li class="has-dropdown__child">
            <router-link to="/san-pham-silebary/hop-qua-tang">
              Hộp quà tặng
            </router-link>
          </li>
            
            </ul>
          </li>
           <li class="has-dropdown">
            <a href="#">DV Thiết Kế ấn phẩm</a>
            <ul class="dropdown-menu">
              <li>  
                <router-link to="/thiet-ke-silebary/card-visit">
             Thiết kế card visit
            </router-link>
          </li>
              <li>  
                <router-link to="/thiet-ke-silebary/to-roi">
             Thiết kế tờ rơi
            </router-link>
          </li>
                <li> 
                   <router-link to="/thiet-ke-silebary/bang-ron">
             Thiết kế bảng hiệu
            </router-link></li>
               <li> 
                 <router-link to="/thiet-ke-silebary/thiep-cuoi">
             Thiết kế thiệp cưới
            </router-link>
          </li>
            <li>  
            <router-link to="/thiet-ke-silebary/menu">
             Thiết kế Menu
            </router-link>
          </li>
           
            </ul>
          </li>
             <li class="has-dropdown">
            <a href="#">DV In Ấn</a>
            <ul class="dropdown-menu">
              <li>  <router-link to="/dich-vu-inan/printing-documents">
             In ấn tài liệu
            </router-link></li>
              <li><router-link to="/dich-vu-inan/Design-and-print">
             Thiết kế và in ấn quảng cáo
            </router-link></li>
              <li><router-link to="/dich-vu-inan/graphic-printing">
             In ấn đồ họa
            </router-link></li>
              <li><router-link to="/dich-vu-inan/Printing-on-other-materials">
             In ấn chất liệu khác
            </router-link></li>
            </ul>
          </li>
         <li> <router-link to="/lien-he">Liên hệ</router-link></li>
          <li><router-link to="/about">Về chúng tôi</router-link></li>
        </ul>
      </nav>
</template>

<style scoped>






/* Navigation Menu */
.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  margin: 10px ;
  padding: 0 ;
  /* gap: 2rem; */
}

.nav-menu li {
  position: relative;
  margin: 0 15px;
}

.nav-menu a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;
  font-weight: 400;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: #ffffff;
}

.nav-menu > ul > li > a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #ebd725;
  transition: width 0.3s ease;
}

.nav-menu > ul > li > a:hover::after,
.nav-menu > ul > li > a.active::after {
  width: 100%;
}

/* Dropdown Menu */
.has-dropdown {
  position: relative;
}

.has-dropdown > a::before {
  content: '▼';
  font-size: 0.7rem;
  margin-left: 0.4rem;
  transition: transform 0.3s ease;
}

.has-dropdown:hover > a::before {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 250px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.has-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #4b5563;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.dropdown-menu a:hover {
  background: #f3f4f6;
  color: #2563eb;
  border-left-color: #2563eb;
  padding-left: 1.7rem;
}

.dropdown-menu a::after {
  display: none;
}

.dropdown-menu__right{
  position: absolute;
  top: 0;
  left: 240px;
  background: white;
  min-width: 250px;
   background: white;
  min-width: 250px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0.5rem 0;
   margin-top: 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0;

}
.dropdown-menu__right li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.dropdown-menu__right a{
  
  padding: 0.75rem 1.5rem;
  color: #4b5563;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  
}
.dropdown-menu__right {
  opacity: 0;           /* ← ẨN bằng trong suốt */
  visibility: hidden;   /* ← ẨN bằng không tương tác */
  transform: translateY(-10px);
  
  /* KHÔNG dùng display: none */
  display: block;       /* ← Để block hoặc flex */
}

/* Trạng thái HIỆN - khi hover */
.has-dropdown__child:hover .dropdown-menu__right {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

</style>