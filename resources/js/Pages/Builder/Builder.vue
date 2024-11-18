<template>
    <Builder :title="title" :template="template"></Builder>
</template>

<script setup>
    import { ref } from 'vue';
    import Builder from '@/Builder/Builder.vue';

    const props = defineProps({
        title: String,
        template: Object,
    })
</script>
