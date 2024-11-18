<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4 text-center">
                <a :href="builderMode === 'edit' ? '#' : (block.data.url ? block.data.url : '#')" class="btn btn-secondary btn-wide">{{ block.data.title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent} from 'vue'
    import { usePage } from '@inertiajs/vue3'

    export default defineComponent({
        name: 'ButtonsButton',
        props: {
            block: {
                type: Object,
                required: true
            },
        },
        methods: {
            updateContent(e, contentType) {
                if ( this.block.data[contentType] ) {
                    this.block.data[contentType] = e.target.innerText;
                }
            },
        },
        setup() {
            const builderMode = computed(() => usePage().props.value.builderMode)
            return { builderMode }
        },
    })
</script>
