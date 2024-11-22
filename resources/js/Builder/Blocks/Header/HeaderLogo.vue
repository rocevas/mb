<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="py-5 px-4 flex flex-col items-center justify-center">
                <img :src="block.data.imageUrl" class="max-h-6 w-auto" loading="lazy" alt="">
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
