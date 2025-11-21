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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9f9f9;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-bottom: 5px;
}
</style>
