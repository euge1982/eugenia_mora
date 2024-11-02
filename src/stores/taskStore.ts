//TaskStore debe contener una constante useTaskStore usando defineStore, que implemente el modelo TaskState.
//Definir el estado incial en loading false, data igual a una lista vacia. Se deberan crear los siguientes metodos:
//- **addTask**, agrega una nueva tarea a la lista en data usando el metodo de array push.
//- **removeTask**, recibe un tipo Task como argumento quita una nueva tarea de la lista en data usando el metodo filter.
//- **updateTaskStatus**, recibe un argumento de tipo Task y busca el indice en la lista usando el metodo findIndex,
//para luego instanciar el elemento Task de la lista por su indice y modificar su status a falso o verdadero segun
//corresponda

import type { TaskState } from '@/models/TaskState'
import type { TaskModel } from '@/models/TaskModel'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
  id: 'task',
  state: (): TaskState => ({
    loading: false,
    data: [] as TaskModel[],
  }),
  actions: {
    //**addTask**, agrega una nueva tarea a la lista en data usando el metodo de array push.
    addTask(task: TaskModel): void {
      this.data.push(task);
      task.id= 0;
      task.status = false;
      task.tarea = '';
    },
       //**removeTask**, recibe un tipo Task como argumento quita una nueva tarea de la lista en data usando el metodo filter
    removeTask(task: TaskModel): void {
      this.data = this.data.filter((tarea) => tarea.id !== task.id);
    },
    //**updateTaskStatus**, recibe un argumento de tipo Task y busca el indice en la lista usando el metodo findIndex
    //para luego instanciar el elemento Task de la lista por su indice y modificar su status a falso o verdadero segun
    //corresponda
    updateTaskStatus(task: TaskModel): void {
      const index = this.data.findIndex((tarea) => tarea.id === task.id);
      if (index !== -1) {
        this.data[index].status = !this.data[index].status;
      }
    },
     //**showCompleted**: actualiza data para mostrar solo tareas con status completo
     showCompleted(): void {
      this.data = this.data.filter((tarea) => tarea.status === true);
    },
    //**showPending**: actualiza data para mostrar solo tareas con status pendiente
    showPending(): void {
      this.data = this.data.filter((tarea) => tarea.status === false);
    },
    //**showAll**: actualiza data para mostrar todos los datos
    showAll(): void {
      this.data = this.data;
    },
    /*deleteTask(id: number): void {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },*/
  },
});
