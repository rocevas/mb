<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4 pb-1">
                <h2 class="text-3xl font-bold text-center text-black" contenteditable @input="updateContent($event, 'title')">
                    {{ block.data.title }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, defineComponent, inject} from 'vue'

const props = defineProps({
    block: {
        type: Object,
        required: true
    },
})

const updateContent = (e, contentType) => {
    if (props.block.data[contentType]) {
        props.block.data[contentType] = e.target.innerText;
    }
};

const builderMode = computed(() => inject('builderMode'));
</script>
