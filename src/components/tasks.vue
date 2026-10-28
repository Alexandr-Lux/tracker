<template>
  <div class="tasks">
    <Task-Card
      v-for="task in store.taskList"
      :key="task.id"
      :active="true"
      @select="selectTask"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/main'

import { storeToRefs } from 'pinia'
import { defineAsyncComponent as DAC, ref } from 'vue'

const TaskCard = DAC(() => import('@/components/task-card.vue'))

const store = useStore()

const { taskId } = storeToRefs(store)

const selectTask = (id: number) => {
  store.setTaskId(id)
}
</script>

<style lang="scss" scoped>
.tasks {
  border: var(--test-border);

  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  justify-content: start;
  align-content: start;

  padding: 1rem;
}
</style>
