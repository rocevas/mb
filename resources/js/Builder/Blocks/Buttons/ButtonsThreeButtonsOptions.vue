<template>
    <div class="space-y-2 p-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Button 1</span>
            </label>
            <input v-model="block.data.buttons[0].title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="input-group input-group-md">
                <span>🔗</span>
                <input v-model="block.data.buttons[0].url" type="text" placeholder="Enter URL" class="input input-bordered input-sm w-full" />
            </label>
        </div>

        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Button 2</span>
            </label>
            <input v-model="block.data.buttons[1].title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="input-group input-group-md">
                <span>🔗</span>
                <input v-model="block.data.buttons[1].url" type="text" placeholder="Enter URL" class="input input-bordered input-sm w-full" />
            </label>
        </div>

        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Button 3</span>
            </label>
            <input v-model="block.data.buttons[2].title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="input-group input-group-md">
                <span>🔗</span>
                <input v-model="block.data.buttons[2].url" type="text" placeholder="Enter URL" class="input input-bordered input-sm w-full" />
            </label>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'

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
