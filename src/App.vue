<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
