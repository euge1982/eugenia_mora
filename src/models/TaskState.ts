//Crear un Modelo TaskState, que incluye un booleano loading, y una lista data de Task[]

import type { TaskModel } from '@/models/TaskModel'

export interface TaskState {
  loading: boolean
  data: TaskModel[]
}
