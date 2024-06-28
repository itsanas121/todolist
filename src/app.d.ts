// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Dayjs } from "dayjs";

// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}    
}
declare global {
	interface Task{
        title: string;
        assignedDate: Dayjs;
        isDone: boolean;
    }
}

