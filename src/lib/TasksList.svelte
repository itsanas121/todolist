<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from 'dayjs/plugin/relativeTime'
  dayjs.extend(relativeTime);
</script>

<ol class="flex flex-col gap-2">
  {#each $tasks as task}
    <li
      class="bg-secondary-500 p-2 rounded-xl flex justify-between items-center"
    >
      <div>
        <input class="checkbox rounded-lg h-6 w-6" type="checkbox" />
        <span class="mr-2"> {task.title}</span>
      </div>
      <div class="flex gap-1">
        <button class="btn variant-filled-surface hover:bg-surface-700">
          {dayjs().to(dayjs(task.assignedDate))}
        </button>
        <button
          class="btn variant-filled-surface hover:bg-surface-700 p-[0.7rem]"
        >
          <svg
            class="w-5 h-5 rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            /></svg
          >
        </button>
      </div>
    </li>
  {/each}
</ol>
