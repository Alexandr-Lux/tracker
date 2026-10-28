<template>
  <div class="pause-btn">
    <div class="btn-well">
      <div class="btn-recess">
        <button
          class="skeuo-btn"
          :class="{ pressed }"
          @click="toggle"
        >
          <div class="btn-inner-glow" />
          <span class="btn-text">🥣 ОБЕД</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ modelValue: boolean }>()
const $emit = defineEmits<{ 'update:model-value': [boolean] }>()

const pressed = ref(props.modelValue)

const toggle = () => {
  pressed.value = !pressed.value

  $emit('update:model-value', pressed.value)
}
</script>

<style scoped lang="scss">
/* ===== BUTTON WELL ===== */
.btn-well {
  background: conic-gradient(
    from 0deg,
    var(--flint-400),
    var(--flint-200),
    var(--flint-500),
    var(--flint-300),
    var(--flint-500),
    var(--flint-200),
    var(--flint-400)
  );
  border-radius: 26px;
  padding: 4px;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.5),
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    inset 0 -1px 1px rgba(0, 0, 0, 0.8);
}

.btn-recess {
  background: var(--flint-800);
  border-radius: 22px;
  padding: 6px;
  box-shadow:
    inset 0 5px 12px rgba(0, 0, 0, 0.95),
    inset 0 2px 4px rgba(0, 0, 0, 0.8),
    inset 3px 0 6px rgba(0, 0, 0, 0.4),
    inset -3px 0 6px rgba(0, 0, 0, 0.4),
    inset 0 -2px 4px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
}

/* ===== BUTTON ===== */
.skeuo-btn {
  position: relative;
  border: none;
  cursor: pointer;
  border-radius: 18px;
  padding: 20px 60px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  user-select: none;
  overflow: hidden;
  width: 100%;
  min-width: 280px;

  background: linear-gradient(
    170deg,
    #4a4f5a 0%,
    #3c414c 15%,
    #30353f 35%,
    #282d38 55%,
    #222730 75%,
    #1c2028 100%
  );

  transform: translateY(0);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.7),
    0 5px 8px rgba(0, 0, 0, 0.5),
    0 2px 3px rgba(0, 0, 0, 0.4),
    inset 0 2px 2px rgba(255, 255, 255, 0.18),
    inset 1px 0 1px rgba(255, 255, 255, 0.06),
    inset 0 -3px 6px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.06);

  transition:
    transform 0.1s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.1s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: repeating-linear-gradient(
      165deg,
      transparent 0px,
      rgba(255, 255, 255, 0.01) 1px,
      transparent 2px,
      transparent 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 45%;
    border-radius: 18px 18px 0 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 2;
    transition: opacity 0.15s ease;
  }

  &.pressed {
    transform: translateY(4px);
    background: linear-gradient(
      170deg,
      #2e3340 0%,
      #282d36 20%,
      #22272f 45%,
      #1c2028 65%,
      #181c24 85%,
      #14181f 100%
    );

    box-shadow:
      inset 0 4px 10px rgba(0, 0, 0, 0.7),
      inset 0 2px 4px rgba(0, 0, 0, 0.5),
      inset 3px 0 6px rgba(0, 0, 0, 0.3),
      inset -3px 0 6px rgba(0, 0, 0, 0.3),
      inset 0 -1px 2px rgba(0, 0, 0, 0.3),
      0 0 0 1.5px rgba(255, 130, 20, 0.5),
      0 0 6px rgba(255, 110, 0, 0.5),
      0 0 6px rgba(255, 110, 0, 0.3),
      0 0 16px rgba(255, 90, 0, 0.25),
      0 0 35px rgba(255, 70, 0, 0.12),
      0 0 60px rgba(255, 50, 0, 0.06);

    &::after {
      opacity: 0;
    }
  }

  &:active:not(.pressed) {
    transform: translateY(3px);
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.6),
      0 1px 2px rgba(0, 0, 0, 0.4),
      inset 0 3px 8px rgba(0, 0, 0, 0.5),
      inset 0 1px 2px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.04);
    transition: all 0.04s ease-out;
  }

  &.pressed:active {
    transform: translateY(2px);
    transition: all 0.04s ease-out;
  }
}

.btn-text {
  position: relative;
  z-index: 5;
  font-size: var(--pause-text-size);
  letter-spacing: 2px;
  text-transform: uppercase;
  pointer-events: none;
  transition: all 0.25s ease;

  color: rgba(255, 255, 255, 0.08);
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.03),
    0 -1px 1px rgba(0, 0, 0, 0.8);

  .pressed & {
    color: rgba(255, 170, 50, 0.95);
    text-shadow:
      0 0 3px rgba(255, 160, 30, 1),
      0 0 8px rgba(255, 120, 0, 0.8),
      0 0 18px rgba(255, 90, 0, 0.5),
      0 0 35px rgba(255, 70, 0, 0.25),
      0 0 60px rgba(255, 50, 0, 0.1);
  }
}

.btn-inner-glow {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.35s ease;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 100, 0, 0.06) 0%,
    rgba(255, 60, 0, 0.02) 40%,
    transparent 70%
  );

  .pressed & {
    opacity: 1;
  }
}
</style>
