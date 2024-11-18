<template>
    <header class="flex justify-between py-3 px-4">
        <div class="flex gap-2">
            <a href="/" class="btn btn-square">
                <Icon name="layout-left"  styles="w-6 h-6"/>
                </a>
            </div>
        <div class="flex gap-4">
            <a class="btn btn-square" :href="route('templates.preview', props.template.id)" target="_blank">
                <Icon name="play" styles="w-7 h-7" />
            </a>

            <button class="btn btn-gray" @click="$emit('updateTemplate')">
                Update
            </button>

            <button class="btn btn-dark" @click="$emit('showSaveTemplateModal')">
                Save
            </button>
        </div>
    </header>
</template>

<script setup>
import Icon from '../Builder/Icon.vue';

const props = defineProps({
    template: {
        type: Object,
        default: () => ({})
    },
})
</script>
