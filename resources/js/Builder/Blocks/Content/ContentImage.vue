<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4" :style="'padding-top:' + block.data.paddingTop + 'rem; padding-bottom:' + block.data.paddingBottom + 'rem'">
                <img :src="block.data.imageUrl" class="object-cover h-80 w-full" loading="lazy" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'ContentImage',
        props: {
            block: {
                type: Object,
                required: true
            },
        },
        setup() {

        },
    })
</script>
