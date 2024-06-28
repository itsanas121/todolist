import { persisted } from "svelte-persisted-store";

export const name = persisted('name', 'Unknown');
