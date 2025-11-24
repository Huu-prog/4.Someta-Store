<template>
  <div class="nav-wrapper">
    <!-- Nút Hamburger cho Mobile -->
    <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navigation Menu -->
    <nav class="nav-menu" :class="{ active: isMenuOpen }">
      <ul>
        <li><router-link class="active" to="/" @click="closeMenu">Trang chủ</router-link></li>
        
        <li class="has-dropdown">
          <a href="#" @click.prevent="toggleDropdown('products')">Sản phẩm</a>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'products' }">
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/gom-su" @click="closeMenu">Quà tặng gốm sứ</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/thuy-tinh" @click="closeMenu">Quà tặng thủy tinh pha lê</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/vinh-danh" @click="closeMenu">Quà tặng vinh danh</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/sep" @click="closeMenu">Quà tặng sếp</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/do-gia-dung" @click="closeMenu">Quà tặng đồ gia dụng</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/theo-muc-gia" @click="closeMenu">Quà tặng theo mức giá</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/may-mac" @click="closeMenu">Quà tặng may mặc</router-link>
            </li>
            <li class="has-dropdown__child">
              <router-link to="/san-pham-silebary/hop-qua-tang" @click="closeMenu">Hộp quà tặng</router-link>
            </li>
          </ul>
        </li>

        <li class="has-dropdown">
          <a href="#" @click.prevent="toggleDropdown('design')">DV Thiết Kế ấn phẩm</a>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'design' }">
            <li>
              <router-link to="/thiet-ke-silebary/card-visit" @click="closeMenu">Thiết kế card visit</router-link>
            </li>
            <li>
              <router-link to="/thiet-ke-silebary/to-roi" @click="closeMenu">Thiết kế tờ rơi</router-link>
            </li>
            <li>
              <router-link to="/thiet-ke-silebary/bang-ron" @click="closeMenu">Thiết kế bảng hiệu</router-link>
            </li>
            <li>
              <router-link to="/thiet-ke-silebary/thiep-cuoi" @click="closeMenu">Thiết kế thiệp cưới</router-link>
            </li>
            <li>
              <router-link to="/thiet-ke-silebary/menu" @click="closeMenu">Thiết kế Menu</router-link>
            </li>
          </ul>
        </li>

        <li class="has-dropdown">
          <a href="#" @click.prevent="toggleDropdown('printing')">DV In Ấn</a>
          <ul class="dropdown-menu" :class="{ show: activeDropdown === 'printing' }">
            <li>
              <router-link to="/dich-vu-inan/printing-documents" @click="closeMenu">In ấn tài liệu</router-link>
            </li>
            <li>
              <router-link to="/dich-vu-inan/Design-and-print" @click="closeMenu">Thiết kế và in ấn quảng cáo</router-link>
            </li>
            <li>
              <router-link to="/dich-vu-inan/graphic-printing" @click="closeMenu">In ấn đồ họa</router-link>
            </li>
            <li>
              <router-link to="/dich-vu-inan/Printing-on-other-materials" @click="closeMenu">In ấn chất liệu khác</router-link>
            </li>
          </ul>
        </li>

        <li><router-link to="/lien-he" @click="closeMenu">Liên hệ</router-link></li>
        <li><router-link to="/about" @click="closeMenu">Về chúng tôi</router-link></li>
      </ul>
    </nav>

    <!-- Overlay khi mở menu mobile -->
    <div class="overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
  data() {
    return {
      isMenuOpen: false,
      activeDropdown: null
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Ngăn scroll khi menu mở
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        this.activeDropdown = null;
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.activeDropdown = null;
      document.body.style.overflow = '';
    },
    toggleDropdown(dropdown) {
      if (window.innerWidth <= 768) {
        // Chỉ toggle trên mobile
        this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
      }
    }
  }
}
</script>

<style scoped>
.nav-wrapper {
  position: relative;
}

/* Nút Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #ffffff;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Overlay */
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay.active {
  display: block;
  opacity: 1;
}

/* Navigation Menu */
.nav-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  margin: 10px;
  padding: 0;
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

/* ========== RESPONSIVE - MOBILE ========== */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: #1f2937;
    padding: 80px 20px 20px;
    transition: right 0.3s ease;
    z-index: 999;
    overflow-y: auto;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu ul {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }

  .nav-menu li {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-menu > ul > li > a {
    display: block;
    padding: 15px 10px;
    font-size: 1.6rem;
    color: #ffffff;
  }

  .nav-menu > ul > li > a::after {
    display: none;
  }

  /* Dropdown trên mobile */
  .has-dropdown > a::before {
    position: absolute;
    right: 10px;
    font-size: 1rem;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0;
    margin: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .dropdown-menu.show {
    max-height: 500px;
  }

  .dropdown-menu a {
    color: #e5e7eb;
    padding: 12px 20px;
    font-size: 1.4rem;
    border-left: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .dropdown-menu a:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ebd725;
    padding-left: 20px;
  }
}

@media (max-width: 480px) {
  .nav-menu {
    width: 85%;
  }

  .nav-menu > ul > li > a {
    font-size: 1.4rem;
    padding: 12px 10px;
  }

  .dropdown-menu a {
    font-size: 1.3rem;
    padding: 10px 15px;
  }
}
</style>