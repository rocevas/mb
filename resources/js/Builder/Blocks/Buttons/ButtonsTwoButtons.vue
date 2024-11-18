<template>
    <div class="bg-white columns-2">
        <div class="w-full mx-auto">
            <div class="p-4 text-center">
                <a :href="builderMode === 'edit' ? '#' : (block.data.buttons[0].url ? block.data.buttons[0].url : '#')" class="btn btn-secondary btn-wide">{{ block.data.buttons[0].title }}</a>
            </div>
        </div>
        <div class="w-full mx-auto">
            <div class="p-4 text-center">
                <a :href="builderMode === 'edit' ? '#' : (block.data.buttons[1].url ? block.data.buttons[1].url : '#')" class="btn btn-secondary btn-wide">{{ block.data.buttons[1].title }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent} from 'vue'
    import { usePage } from '@inertiajs/vue3'

    export default defineComponent({
        name: 'ButtonsTwoButtons',
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
