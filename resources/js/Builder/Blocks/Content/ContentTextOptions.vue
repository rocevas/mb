<template>
    <div class="space-y-2 p-2">
        <div>
            <span class="text-sm font-medium uppercase">Text</span>
            <div class="flex items-center justify-between">
                <textarea class="textarea w-full textarea-bordered h-64" v-model="block.data" placeholder=""></textarea>
            </div>
        </div>
    </div>
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
