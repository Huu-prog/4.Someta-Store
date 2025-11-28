<script setup>
import Header from './components/Theheader/Header.vue'

import Footer from './components/footer/Footer.vue'
</script>

<template>
  <Header />
  <main class="main-content">
    <router-view />
  </main>

  <Footer />
</template>

<style scoped>
#app {
  overflow: visible;
}
.main-content {
  margin-top: 90px;
}
</style>
