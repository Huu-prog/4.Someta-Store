<script setup>

import Header from './components/Theheader/Header.vue';

import Footer from './components/footer/Footer.vue';

</script>

<template>
<Header style="margin-bottom: 5px;"/>
    <main class="main-content">
       <router-view  />
    </main>

<Footer />
</template>

<style scoped>


#app {
  margin: 0;
  padding: 0;
  width: 100%;
}

.main-content {
  flex: 1;
  margin-bottom: 5px;
}
</style>
