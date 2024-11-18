<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4">
                <div class="max-w-3xl mx-auto space-y-2 text-center text-black">
                    <div v-for="link in block.data.links" :key="link.uuid">
                        <div class="text-md font-bold">
                            <a :href="builderMode === 'edit' ? '#' : link.url">{{ link.title }}</a>
                        </div>
                        <div class="divider px-64 my-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent} from 'vue'
    import { usePage } from '@inertiajs/vue3'

    export default defineComponent({
        name: 'ContentLinks',
        props: {
            block: {
                type: Object,
                required: true,
            },
            first: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const builderMode = computed(() => usePage().props.value.builderMode)
            return { builderMode }
        },
    })
</script>
