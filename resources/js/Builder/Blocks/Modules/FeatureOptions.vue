<template>
    <div class="space-y-2 p-2">
        <div class="mt-8 font-bold uppercase text-sm">Feature details</div>
        <div>
            <h3 class="font-medium">Image</h3>
            <div class="btn aspect-w-5 w-16 h-16 overflow-hidden">
                <img :src="module.imageUrl" alt="" class="object-cover" @click="builderStore.filemanager.showFileManager(module,'imageUrl')" />
            </div>
        </div>
        <div>
            <h3 class="font-medium">Subtitle</h3>
            <div class="mt-2 flex items-center justify-between">
                <input v-model="module.title" type="text" class="input input-bordered input-sm w-full">
            </div>
        </div>
        <div>
            <h3 class="font-medium">Description</h3>
            <div class="mt-2 flex items-center justify-between">
                <textarea class="textarea w-full textarea-bordered" v-model="module.description" placeholder=""></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useBuilderStore} from "../../Stores/BuilderStore.js";

const emit = defineEmits(['update:modelValue', 'showFileManager'])

const props = defineProps({
    module: {
        type: Object,
        required: true,
        default: () => ({})
    }
});

const builderStore = useBuilderStore();

const module = computed({
    get() {
        return props.module
    },
    set(value) {
        emit('update:modelValue', value)
    }
})
</script>
