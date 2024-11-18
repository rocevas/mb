<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="py-5 px-4 flex flex-col items-center justify-center">
                <img :src="block.data.imageUrl" class="max-h-6 w-auto" loading="lazy" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'HeaderLogo',
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
