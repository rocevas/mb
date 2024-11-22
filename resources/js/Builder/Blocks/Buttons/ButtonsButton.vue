<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4 text-center">
                <a :href="builderMode === 'edit' ? '#' : (block.data.url ? block.data.url : '#')" class="btn btn-secondary btn-wide">{{ block.data.title }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, inject} from 'vue'

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
