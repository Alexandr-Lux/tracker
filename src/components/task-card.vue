<template>
  <div
    class="task-card"
    :class="{ inactive: !active }"
  >
    <p class="task-card__title">DEV-2396</p>
    <p class="task-card__timer inactive">00:00:00</p>
    <div class="task-card__radio-wrapper">
      <div
        v-if="active"
        class="task-card__radio-dot"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TProps = {
  active: boolean
  name: string
}

type TEmits = {
  select: [id: number]
}

defineProps<TProps>()
const $emit = defineEmits<TEmits>()
</script>

<style lang="scss" scoped>
.task-card {
  width: 250px;
  height: 300px;

  display: grid;
  gap: 0.5rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-rows: auto 1fr 1fr;

  border: 1px solid #197;
  border-radius: 1rem;
  overflow: hidden;
  padding: 0.5rem;

  &.inactive {
    border-color: var(--inactive-color);
  }

  &__timer {
    color: var(--timer-color);
    font-size: var(--card-timer-size);
    font-family: var(--clock-font);

    &.inactive {
      color: var(--inactive-color);
    }
  }

  &__radio-wrapper {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    border: 2px solid #197;

    display: grid;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  &__radio-dot {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #197;
  }
}
</style>
