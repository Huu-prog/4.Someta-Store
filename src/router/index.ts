import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Import components
import Home from '@/views/Home.vue'
import Productdetailstatic from '@/views/Productdetailstatic.vue'
import Xemthemsanphamnoibat from '@/components/main/Seemorefeaturedcategories/Xemthemsanphamnoibat.vue'
import Chitietsanphamxemthem from '@/components/main/Seemorefeaturedcategories/Chitietsanphamxemthem.vue'
import AllProductgomsu from '@/components/main/Seemorefeaturedcategories/AllProductgomsu/AllProductgomsu.vue'
import Chitietsanphamgomsu from '@/components/main/Seemorefeaturedcategories/AllProductgomsu/Chitietsanphamgomsu.vue'
import Contact from '@/views/contact.vue'
import Dichvuthietke from '@/components/main/Seemorefeaturedcategories/Dichvuthietke/Dichvuthietke.vue'
import Chitietsanphamthietke from '@/components/main/Seemorefeaturedcategories/Dichvuthietke/Chitietsanphamthietke.vue'
import AllDichvuinan from '@/components/main/Seemorefeaturedcategories/Dichvuinan/AllDichvuinan.vue'
import Chitietsanphaminan from '@/components/main/Seemorefeaturedcategories/Dichvuinan/Chitietsanphaminan.vue'
import About from '@/components/Theheader/About.vue'



// Define routes với type
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: Productdetailstatic,
    // props: true  // Pass route params as props
  },
  {
    path: '/Xemthemsanphamnoibat',
    name: 'Xemthemsanphamnoibat',
    component:Xemthemsanphamnoibat
    // props: true  // Pass route params as props
  },
  {
    path: '/san-pham/:id',  // ← :id là tham số động
    name: 'Chitietsanphamxemthem',
    component: Chitietsanphamxemthem
  },
  

  {
    path: '/san-pham-silebary/:categoryId',
    name: 'CategoryProducts',
    component:AllProductgomsu, // ✅ Dùng chung 1 component
    props: true
  },
    {
    path: '/thiet-ke-silebary/:categorizeId',
    name: 'designservices',
    component:Dichvuthietke,
    props: true
  },
      {
    path: '/dich-vu-inan/:categori_id',
    name: 'printingservices',
    component:AllDichvuinan, 
    props: true
  },
   {
    path: '/san-pham-gomsu/:id',  // ← :id là tham số động
    name: 'Chitietsanphamsilebar',
    component: Chitietsanphamgomsu
  },
   {
    path: '/san-pham-thietke/:id',  // ← :id là tham số động
    name: 'Chitietsanphamthietke',
    component: Chitietsanphamthietke
  },
    {
    path: '/san-pham-inan/:id',  // ← :id là tham số động
    name: 'Chitietsanphaminan',
    component:Chitietsanphaminan
  },
  //trang liên hệ
   {
    path: '/lien-he',  // ← :id là tham số động
    name: 'Liên hệ',
    component: Contact
  },
//trang công ty

    {
    path: '/about',  // ← :id là tham số động
    name: 'Về chúng tôi',
    component: About
  },



  
  

  
  
]

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guard (optional)
router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.name)
  next()
})

// Scroll behavior
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

export default router

