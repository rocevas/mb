<template>
    <div class="">
        <div class="mt-8 font-bold uppercase text-sm text-gray-500">Add new link</div>

        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Title</span>
            </label>
            <input v-model="title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Link</span>
            </label>
            <input v-model="url" type="text" class="input input-bordered input-sm">
        </div>

        <div class="flex justify-end">
            <button @click="add()" class="btn btn-sm btn-outline btn-primary mt-2">Add</button>
        </div>

        <div class="mt-8 mb-2 font-bold uppercase text-sm text-gray-500">Current links</div>

        <div class="flex flex-col mb-8">
            <div class="overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full">
                    <div class="overflow-hidden rounded-xl">
                        <table class="min-w-full divide-y divide-gray-200">
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="link in block.data.links" :key="link.uuid">
                                    <td class="px-2 py-1 whitespace-nowrap">
                                        {{ truncateText(link.title) }}
                                    </td>
                                    <td class="px-2 py-1 flex justify-end items-center my-auto py-auto">
                                        <button @click="remove(link.uuid)" class="btn btn-sm btn-ghost text-red-500">
                                            <Icon name="trash" class="w-4 h-4"/>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, computed, ref } from 'vue'
import Icon from '../../Icon.vue'
import { nanoid } from "nanoid";

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

const title = ref('');
const url = ref('');

const add = () => {
    block.value.data.links.push({
        uuid: nanoid(),
        title: title.value,
        url: url.value,
    });

    title.value = '';
    url.value = '';
};

const remove = (uuidToRemove) => {
    const index = block.value.data.links.findIndex((link) => link.uuid === uuidToRemove);
    if (index !== -1) {
        block.value.data.links.splice(index, 1);
    }
};

const truncateText = (text, length = 20) => {
    return text.length <= length ? text : text.substring(0, length) + '...';
};
</script>
