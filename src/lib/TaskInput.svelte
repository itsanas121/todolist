<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";

  let title = "";
  let datetime = dayjs().add(1, "hour").format("YYYY-MM-DDTHH:mm");

  function addTask() {
    tasks.update((currentTasks) => {
      currentTasks.push({
        title,
        assignedDate: datetime,
        isDone: false,
      });

      return currentTasks.sort((a: Task, b: Task) => {
        return dayjs(a.assignedDate).unix() - dayjs(b.assignedDate).unix();
      });
    });
    title = "";
  }
</script>

<form
  class="input-group input-group-divider flex flex-col sm:flex-row justify-between bg-white"
>
  <input
    bind:value={title}
    class="flex-1"
    type="search"
    placeholder="عنوان المهمة"
  />
  <input
    bind:value={datetime}
    class="input sm:w-fit"
    title="Input (datetime-local)"
    type="datetime-local"
  />
  <button
    type="submit"
    on:click={addTask}
    class="variant-filled-primary p-1 {title.trim().length == 0 && 'bg-slate-400'}"
    disabled={title.trim().length == 0}
  >
    <span class="mx-auto">إضافة</span>
  </button>
</form>
