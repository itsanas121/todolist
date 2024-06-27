<script lang="ts">
    import Header from "$lib/Header.svelte";
</script>

<div class="p-16 flex flex-col gap-8">
    <Header/>

    <div class="input-group input-group-divider flex justify-between">
        <input class="flex-1 !bg-white" type="search" placeholder="عنوان المهمة" />
        <button class="variant-filled-primary">إضافة</button>
    </div>
</div>
