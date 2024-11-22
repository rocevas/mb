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

<script setup>
import {computed, inject} from 'vue'
import { usePage } from '@inertiajs/vue3'

const props = defineProps({
    block: {
        type: Object,
        required: true
    },
    first: {
        type: Boolean,
        default: false
    }
})

const updateContent = (e, contentType) => {
    if (props.block.data[contentType]) {
        props.block.data[contentType] = e.target.innerText;
    }
};

const builderMode = computed(() => inject('builderMode'));
</script>
