<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";
  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: dayjs().format(),
        isDone: false,
      });
      return currentTasks;
    });
    title = "";
  }
</script>

<div class="input-group input-group-divider flex justify-between">
  <input
    bind:value={title}
    class="flex-1 !bg-white"
    type="search"
    placeholder="عنوان المهمة"
  />
  <button on:click={addTask} class="variant-filled-primary">إضافة</button>
</div>
