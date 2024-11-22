<template>
    <!-- Logo options -->
    <div class="h-full overflow-y-auto p-2 scrollbar">
        <div class="space-y-2">
            <div>
                <h3 class="font-medium">Image</h3>
                <div class="btn btn-ghost border border-gray-300 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                    <img :src="block.data.imageUrl" alt="" class="object-scale-down" @click="$emit('showFileManager', block.data, 'imageUrl')" />
                </div>
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

const emit = defineEmits(['update:modelValue', 'showFileManager']);

const block = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
</script>
