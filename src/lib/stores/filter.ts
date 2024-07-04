import { persisted } from 'svelte-persisted-store'

export const filter = persisted<'جميع المهام' | 'مهام اليوم'>('filter', 'جميع المهام');