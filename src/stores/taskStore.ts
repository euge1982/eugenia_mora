//TaskStore debe contener una constante useTaskStore usando defineStore, que implemente el modelo TaskState.
//Definir el estado incial en loading false, data igual a una lista vacia. Se deberan crear los siguientes metodos:
//- **addTask**, agrega una nueva tarea a la lista en data usando el metodo de array push.
//- **removeTask**, recibe un tipo Task como argumento quita una nueva tarea de la lista en data usando el metodo filter.
//- **updateTaskStatus**, recibe un argumento de tipo Task y busca el indice en la lista usando el metodo findIndex,
//para luego instanciar el elemento Task de la lista por su indice y modificar su status a falso o verdadero segun
//corresponda

import type { TaskModel } from '@/models/TaskModel'
import { defineStore } from 'pinia'
import type { TaskFilter } from '@/models/TaskState'

export const useTaskStore = defineStore({
  id: 'task',
  state: (): TaskFilter => ({
    loading: false,
    data: [],
    completas: [],
    pendientes: [],
    todas: [],
  }),
  actions: {
    //**addTask**, agrega una nueva tarea a la lista en data usando el metodo de array push.
    addTask(task: TaskModel): void {
      const newTask: TaskModel = {...task}   //Clono la tarea, porque sino no la puedo guardar y modificarla despues
      this.data.push(newTask);
      this.todas.push(newTask);
      if (task.status) {
        this.completas.push(newTask);
      } else {
        this.pendientes.push(newTask);
      }
      task.id = this.data.length;   //Los id seran incrementales
      task.status = false;   //Por defecto la tarea esta pendiente
      task.tarea = '';   //Por defecto la tarea esta vacia
    },
    //**removeTask**, recibe un tipo Task como argumento quita una nueva tarea de la lista en data usando el metodo filter
    removeTask(task: TaskModel): void {
      this.data = this.data.filter((tarea) => tarea.id !== task.id);
      this.completas = this.completas.filter((tarea) => tarea.id !== task.id);
      this.pendientes = this.pendientes.filter((tarea) => tarea.id !== task.id);
      this.todas = this.todas.filter((tarea) => tarea.id !== task.id);
    },
    //**updateTaskStatus**, recibe un argumento de tipo Task y busca el indice en la lista usando el metodo findIndex
    //para luego instanciar el elemento Task de la lista por su indice y modificar su status a falso o verdadero segun
    //corresponda
    updateTaskStatus(task: TaskModel): void {
      const index = this.data.findIndex((tarea) => tarea.id === task.id);
      if (index !== -1) {
        this.data[index].status = !this.data[index].status;
      }
      //Si la tarea quedo completa
      if (this.data[index].status) {
        //Agrego la tarea a completas y la saco de pendientes
        this.completas.push(task);
        this.pendientes = this.pendientes.filter((tarea) => tarea.id !== task.id);
      }
      //Si la tarea quedo pendiente
      else {
        //Agrego la tarea a pendientes y la saco de completas
        this.pendientes.push(task);
        this.completas = this.completas.filter((tarea) => tarea.id !== task.id);
      }
    },
    //**showCompleted**: actualiza data para mostrar solo tareas con status completo
    showCompleted(): void {
      this.data = this.completas;
    },
    //**showPending**: actualiza data para mostrar solo tareas con status pendiente
    showPending(): void {
      this.data = this.pendientes;
    },
    //**showAll**: actualiza data para mostrar todos los datos
    showAll(): void {
      this.data = this.todas;
    },
  },
});
