<template>
  <div class="filter-tabs">
    <button 
      v-for="tab in tabs" 
      :key="tab"
      :class="['tab-btn', { active: activeTab === tab }]"
      @click="$emit('filter', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  tabs: {
    type: Array,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
})

defineEmits(['filter'])
</script>

<style scoped>
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0 40px;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 10px 25px;
  border: 1px solid #ddd;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
}

.tab-btn:hover {
  background: #f0f0f0;
}

.tab-btn.active {
  background: #007bff;
  color: white;
  border-color: #007bff;
}
</style>