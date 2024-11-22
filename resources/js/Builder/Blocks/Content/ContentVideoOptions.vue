<template>
    <div class="space-y-2 p-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">YouTube link</span>
            </label>
            <input v-model="block.data.youtubeVideoUrl"  @input="handleYoutubeUrlChanged($event, block)" type="text" class="input input-bordered input-sm">
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

const handleYoutubeUrlChanged = (event, block) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = event.target.value.match(regExp);
    block.data.youtubeVideoCode = match && match[7].length === 11 ? match[7] : '';
};
</script>
