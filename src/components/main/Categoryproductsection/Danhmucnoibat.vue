<template>
  <FeaturedProducts 
    :products="products"
    @productClick="handleProductClick"
    @viewMore="handleViewMore"
  />
</template>

<script setup>
import FeaturedProducts from '@/components/main/FeaturedProducts/FeaturedProducts.vue';
import { products } from '@/components/main/Categoryproductsection/DataDanhmucnoibat/DataDanhmucnoibat';
import { useRouter } from 'vue-router'  

const router = useRouter()

const handleProductClick = (productId) => {
  router.push(`/products/${productId}`)  // ← Thêm chữ "s"
}
</script>