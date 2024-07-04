<script lang="ts">
  import {
    ListBox,
    ListBoxItem,
    popup,
    type PopupSettings,
  } from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";
  import "dayjs/locale/ar";
  import {filter} from "$lib/stores/filter";

  dayjs.locale("ar");

  let period = dayjs().format("a") == "م" ? "مساء" : "صباح";


  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
  };
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-3xl lg:text-4xl mb-2">
      {period} الخير 👋 ...
    </h1>
    <h2 class="text-l text-surface-900">
      {dayjs().format("اليوم هو, dddd D MMM YYYY")}
    </h2>
  </div>

  <button
    class="btn variant-filled-secondary w-36 px-2 h-hit py-4 justify-between"
    use:popup={popupCombobox}
  >
    <span>{$filter}</span>
    <span class="!m-0"
      ><svg
        class="w-6 rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        ><path
          fill="currentColor"
          d="M2.47 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L3.53 9.78a.75.75 0 0 1-1.06-1.06L5.19 6zM9.75 10a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75"
        /></svg
      ></span
    >
  </button>

  <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none" active="variant-outline-primary">
      <ListBoxItem bind:group={$filter} name="medium" value="جميع المهام"
        >جميع المهام</ListBoxItem
      >
      <ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم"
        >مهام اليوم</ListBoxItem
      >
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>
</header>

