<script>
import HeaderMenu from './HeaderMenu.vue';
</script>
<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="">
        <h1>Someta Gift</h1>
      </div>

      <!-- Navigation Menu -->
      <HeaderMenu />

      
      <div  @click="handleclickmessage" class="header-actions">
        <button class="icon-btn search-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        <button class="icon-btn cart-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-count">0</span>
        </button>
        <button class="icon-btn user-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
      <ul>
        <li><a href="#" @click="toggleMobileMenu">Trang chủ</a></li>
        <li><a href="#" @click="toggleMobileMenu">Sản phẩm</a></li>
        <li><a href="#" @click="toggleMobileMenu">Giới thiệu</a></li>
        <li><a href="#" @click="toggleMobileMenu">Liên hệ</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};


const handleclickmessage = () => {
  return alert ('Tính năng đang cập nhật')
}
</script>

<style scoped>
.header {
  background: #ffbb27;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  width: auto;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.05);
}


.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #050607;
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.logo h1:hover {
  color: #ffffff;
}


/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  color: #4b5563;
}

.icon-btn:hover {
  background: #f3f4f6;
  color: #2563eb;
}

.cart-btn {
  position: relative;
}

.cart-count {
  position: absolute;
  top: 0;
  right: 0;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #4b5563;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  background: white;
  border-top: 1px solid #e5e7eb;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.mobile-menu.active {
  max-height: 300px;
}

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 1rem 2rem;
}

.mobile-menu li {
  margin: 0.5rem 0;
}

.mobile-menu a {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  display: block;
  padding: 0.75rem 0;
  transition: color 0.3s ease;
}

.mobile-menu a:hover {
  color: #2563eb;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
  }

  .nav-menu {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .header-actions {
    gap: 0.5rem;
  }

  .logo h1 {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .search-btn {
    display: none;
  }
}
</style>