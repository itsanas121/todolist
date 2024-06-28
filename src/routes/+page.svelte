<script lang="ts">
    import Header from "$lib/Header.svelte";
    import { name } from "$lib/stores/name";
 
    name.update((name: string) => {
        return name + "1";
    })
    
    console.log($name)
</script>


<div class="p-16 flex flex-col gap-8">
    <Header/>

    <div class="input-group input-group-divider flex justify-between">
        <input class="flex-1 !bg-white" type="search" placeholder="عنوان المهمة" />
        <button class="variant-filled-primary">إضافة</button>
    </div>
</div>
