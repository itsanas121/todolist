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
  <!-- <textarea
    bind:value={title}
    class="flex-1 text-xl text-center"
    placeholder="عنوان المهمة"
    style="border: none; border-bottom-left-radius: 0;"
></textarea> -->
  <input
    bind:value={title}
    class="flex-1 text-xl"
    type="search"
    placeholder="ماذا تريد أن تنجز؟"
    style="word-wrap: break-word;"
  />
</form>
<form class=" input-group flex justify-center  ">
  <div class="flex flex-row !bg-[#F0F0F0]">
    <div class="!justify-items-center text-[#e0541d]">تاريخ المهمة</div>
    <input
      bind:value={datetime}
      class="input  sm:w-fit !flex-1  "
      title="Input (datetime-local)"
      type="datetime-local"
      dir="auto"
    />
  </div>
  <button
  type="submit"
  on:click={addTask}
  class="variant-filled-primary p-1 flex-1  {title.trim().length == 0 &&
    'bg-slate-400'}"
  disabled={title.trim().length == 0}
>
  <span class="mx-auto text-center sm:text-right ">إضافة</span>
</button>
</form>

