//Crear un Modelo TaskState, que incluye un booleano loading, y una lista data de Task[]

import type { TaskModel } from '@/models/TaskModel'

export interface TaskState {
  loading: boolean
  data: TaskModel[]
}

export interface TaskFilter extends TaskState {
  completas: TaskModel[]
  pendientes: TaskModel[]
  todas: TaskModel[]
}
