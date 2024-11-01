import type { TaskModel } from '@/models/TaskModel'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [] as TaskModel[],
  }),
  actions: {
    addTask(task: TaskModel): void {
      this.tasks.push(task);
    },
    removeTask(id: number): void {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    completeTask(id: number): void {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          task.completada = !task.completada;
        }
        return task;
      });
    },
    deleteTask(id: number): void {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  },
})

