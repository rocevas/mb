<template>
    <header class="flex justify-between py-3 px-4">
        <div class="flex gap-2">
            <Link :href="route('templates.index')" class="btn btn-square">
                <Icon name="layout-left"  styles="w-6 h-6"/>
            </Link>
        </div>
        <div class="flex gap-4">
            <a class="btn btn-square" href="/templates/preview" target="_blank">
                <Icon name="play" styles="w-7 h-7" />
            </a>
<!--            <a class="btn btn-square" :href="route('templates.preview', props.template.id)" target="_blank">-->
<!--                <Icon name="play" styles="w-7 h-7" />-->
<!--            </a>-->

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
import { Link } from '@inertiajs/vue3';
import Icon from './Components/Icon.vue';
import { useBuilderStore } from './Stores/BuilderStore.js';

const builderStore = useBuilderStore();

const props = defineProps({
    template: {
        type: Object,
        default: () => ({})
    },
})
</script>
