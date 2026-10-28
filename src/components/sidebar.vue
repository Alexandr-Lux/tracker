<template>
  <div class="sidebar">
    <div
      class="sidebar__toggle-btn"
      :class="{ active }"
      @click="toggleMainTimer"
    />
    <Main-Timer
      :active="active"
      :dinner="dinner"
      @set-timestamp="setMainTime"
    />
    <Pause-Btn v-model="dinner" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent as DAC, ref } from 'vue'

const active = ref(false)
const dinner = ref(false)

const MainTimer = DAC(() => import('@/components/main-timer.vue'))
const PauseBtn = DAC(() => import('@/components/pause-btn.vue'))

const toggleMainTimer = () => {
  active.value = !active.value

  if (active.value) apiPutTime()
  else dinner.value = false
}

const apiPutTime = () => {}

const setMainTime = () => {}
</script>

<style lang="scss" scoped>
.sidebar {
  border: var(--test-border);

  display: grid;
  grid-template-rows: 150px 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  justify-items: center;

  padding: 1rem;

  &__toggle-btn {
    cursor: pointer;
    width: 150px;
    height: 80px;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    background-color: var(--main-bg);
    background-image: url('/src/assets/images/off.png');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-origin: border-box;

    &.active {
      background-image: url('/src/assets/images/on.png');
      box-shadow:
        0px -1px 59px -22px #e61b11,
        1px 16px 24px -27px #ff5800;
    }
  }
}
</style>
