import type { TTask } from '@/config/types'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  const taskId = ref<number | null>(null)
  const taskList = ref<TTask[]>([])

  const setTaskId = (id: number) => {
    taskId.value = id
  }

  return { taskId, setTaskId, taskList }
})
