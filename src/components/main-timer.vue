<template>
  <div
    class="main-timer"
    :class="{ active, dinner }"
  >
    {{ formattedTime }}
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'

const props = defineProps<{ active: boolean; dinner: boolean }>()

let timerId: ReturnType<typeof setInterval> | null = null

const timeInSeconds = ref(0)
const isRunning = ref(false)

const formattedTime = computed(() => {
  const hours = Math.floor(timeInSeconds.value / 3600)
  const minutes = Math.floor((timeInSeconds.value % 3600) / 60)
  const seconds = timeInSeconds.value % 60

  const pad = (val: number) => val.toString().padStart(2, '0')

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
})

const start = () => {
  if (isRunning.value) return

  isRunning.value = true
  timerId = setInterval(() => {
    timeInSeconds.value++
  }, 1000)
}

const pause = () => {
  isRunning.value = false

  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}

const stop = () => {
  pause()
  timeInSeconds.value = 0
}

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})

watch(
  () => props.active,
  state => {
    if (state) start()
    else stop()
  }
)

watch(
  () => props.dinner,
  state => {
    if (state) pause()
    else if (props.active) start()
  }
)
</script>

<style lang="scss" scoped>
.main-timer {
  align-self: start;

  font-family: var(--clock-font);
  color: var(--inactive-color);
  font-size: var(--main-timer-size);

  transition: all 0.5s ease;

  &.active {
    color: var(--active-timer-color);
  }

  &.dinner {
    color: var(--paused-color);
  }
}
</style>
