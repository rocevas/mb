<template>
    <!-- Image options -->
    <div class="h-full overflow-y-auto p-2 scrollbar">
        <div class="space-y-2">
            <div>
                <span class="text-sm font-medium uppercase">Image</span>
                <div class="btn aspect-w-2 aspect-h-1 block w-full overflow-hidden rounded-lg">
                    <img :src="block.data.imageUrl" alt="" class="object-cover" @click="$emit('showFilemanager', block.data, 'imageUrl')" />
                </div>
            </div>
            <div class="divider my-2"></div>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <span class="text-sm font-medium uppercase">TOP PADDING</span>
                    <input type="range" min="0" max="10" step="1" class="range range-secondary range-xs" v-model="block.data.paddingTop" />
                </div>
                <div>
                    <span class="text-sm font-medium uppercase">BOTTOM PADDING</span>
                    <input type="range" min="0" max="10" step="1" class="range range-secondary range-xs" v-model="block.data.paddingBottom" />
                </div>
            </div>
            <div class="divider my-2"></div>
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

const emit = defineEmits(['update:modelValue', 'showFilemanager']);

const block = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
</script>
