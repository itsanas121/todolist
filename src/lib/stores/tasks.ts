import { persisted } from 'svelte-persisted-store'

export const tasks = persisted<Task[]>('tasks', []);