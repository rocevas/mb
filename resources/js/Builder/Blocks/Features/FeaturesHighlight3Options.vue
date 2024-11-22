<template>
    <!-- Horizontal Text and Image options. -->
    <div class="h-full overflow-y-auto p-2 scrollbar">
        <div class="space-y-2">
            <div>
                <h3 class="font-medium">Title</h3>
                <div class="mt-2 flex items-center justify-between">
                    <input v-model="block.data.title" type="text" class="input input-bordered input-sm w-full">
                </div>
            </div>
            <div>
                <h3 class="font-medium">Subtitle</h3>
                <div class="mt-2 flex items-center justify-between">
                    <input v-model="block.data.subtitle" type="text" class="input input-bordered input-sm w-full">
                </div>
            </div>
            <div class="mt-8 font-bold uppercase text-sm">Add new feature</div>
            <div>
                <h3 class="font-medium">Image</h3>
                <div class="btn aspect-w-5 w-16 h-16 overflow-hidden">
                    <img :src="imageUrl" alt="" class="object-cover" @click="$emit('showFileManager', block.data, 'imageUrl')" />
                </div>
            </div>
            <div>
                <h3 class="font-medium">Subtitle</h3>
                <div class="mt-2 flex items-center justify-between">
                    <input v-model="title" type="text" class="input input-bordered input-sm w-full">
                </div>
            </div>
            <div>
                <h3 class="font-medium">Description</h3>
                <div class="mt-2 flex items-center justify-between">
                    <textarea class="textarea w-full textarea-bordered" v-model="description" placeholder=""></textarea>
                </div>
            </div>
            <div class="flex justify-end">
                <button @click="add()" class="btn btn-sm btn-outline btn-primary mt-2">Add</button>
            </div>

            <div class="mt-8 mb-2 font-bold uppercase text-sm text-gray-500">Current features</div>

            <div class="flex flex-col mb-8">
                <div class="overflow-x-auto">
                    <div class="py-2 align-middle inline-block min-w-full">
                        <div class="overflow-hidden rounded-xl">
                            <table class="min-w-full divide-y divide-gray-200">
                                <tbody class="divide-y divide-gray-200">
                                <tr v-for="feature in block.data.list" :key="feature.uuid">
                                    <td class="px-2 py-1 whitespace-nowrap">
                                        {{ truncateText(feature.title) }}
                                    </td>
                                    <td class="px-2 py-1 flex justify-end items-center my-auto py-auto">
                                        <button @click="remove(feature.uuid)" class="btn btn-sm btn-ghost text-red-500">
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
    </div>
</template>

<script setup>
import { defineComponent, computed, ref } from 'vue'
import Icon from '../../Components/Icon.vue'
import { nanoid } from "nanoid";

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

const imageUrl = ref('https://cdn.mailerlite.com/images/editor/icon1.png')
const title = ref('New feature')
const description = ref('Check out this new awesome feature')

const add = () => {
    block.value.data.list.push({
        uuid: nanoid(),
        imageUrl: imageUrl.value,
        title: title.value,
        description: description.value,
    })

    title.value = ''
    description.value = ''
}

const remove = (uuidToRemove) => {
    const index = block.value.data.list.findIndex((features) => {
        return features.uuid === uuidToRemove
    })

    block.value.data.list.splice(index, 1);
}

const truncateText = (text, length = 15) => {
    if(text.length <= 15) {
        return text
    }

    return text.substring(0, length) + '...'
}
</script>
