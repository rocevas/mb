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

<script setup>
import {computed,inject} from 'vue'

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
