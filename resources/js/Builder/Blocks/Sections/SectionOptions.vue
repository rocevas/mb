<template>

</template>

<script setup>
import { defineComponent, computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({}),
    }
})

const emit = defineEmits(['update:modelValue']);

const block = computed({
    get: () => JSON.stringify(props.modelValue),
    set: (value) => emit('update:modelValue', value),
});
</script>
