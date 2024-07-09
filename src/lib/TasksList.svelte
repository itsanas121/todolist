<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import TaskListItems from "$lib/TasksListItems.svelte";
  import TasksListItems from "$lib/TasksListItems.svelte";
    import { fade } from "svelte/transition";
  dayjs.extend(relativeTime);
</script>

{#if $tasks.length == 0}
<div class="flex flex-col items-center justify-center h-[50dvh] gap-4 text-xl">
  <img src="/timeismoney.svg" class="w-48 h-48 grayscale" alt="الوقت "/>
  لايوجد لديك أي مهام 👏🏻</div>
{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0}
  <ol transition:fade class="flex flex-col gap-2">
    <h3>المهام المتبقية:</h3>
    <TasksListItems doneTasks={false} />
  </ol>
{/if}

{#if $tasks.filter((task) => task.isDone).length > 0}
  <ol transition:fade class="flex flex-col gap-2">
    <h3>المهام المكتملة:</h3>
    <TaskListItems doneTasks={true} />
  </ol>
{/if}
{/if}