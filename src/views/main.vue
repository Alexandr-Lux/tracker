<template>
  <div class="main">
    <Sidebar />
    <Tasks />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent as DAC } from 'vue'

const Sidebar = DAC(() => import('@/components/sidebar.vue'))
const Tasks = DAC(() => import('@/components/tasks.vue'))
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;

  display: grid;
  gap: 0.5rem;
  grid-template-columns: 350px 1fr;
}
</style>
