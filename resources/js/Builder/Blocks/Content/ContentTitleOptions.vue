<template>
    <div class="space-y-2 p-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Title</span>
            </label>
            <input v-model="block.data.title" type="text" class="input input-bordered input-sm">
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
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
</script>
