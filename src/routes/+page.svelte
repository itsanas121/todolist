<script lang="ts">
    import dayjs from 'dayjs';
    import 'dayjs/locale/ar';
    
    dayjs.locale('ar');
    
    let period= dayjs().format('a') =='م'?'مساء': 'صباح';
</script>

<div class="p-12">
    <header class="flex justify-between">
        <div>
            <h1 class ="text-4xl mb-2  ">
                {period}  الخير👋
            </h1>
            <h2 class="text-2xl text-surface-500/50 ">
                {dayjs().format('اليوم هو, dddd D MMM YYYY')}
            </h2>
    
        </div>
        <div class="bg-gray-300 h-16 w-32 ">

        </div>
    </header>
</div>