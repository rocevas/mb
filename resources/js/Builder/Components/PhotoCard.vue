s<template>
    <div class="card card-compact shadow h-full hover:shadow-lg">
        <figure>
            <img :src="image.url" alt="{{ image.title }}" loading="lazy" class="btn btn-ghost object-cover h-48 w-96" @click="handleSelectFile" />
        </figure>
        <div class="card-body flow-root">
            <p class="float-left">{{ image.title }}</p>
            <div class="card-actions justify-end float-right">
                <button class="btn btn-danger btn-xs" @click="handleDeleteFile">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useBuilderStore} from "../Stores/BuilderStore.js";

const props = defineProps({
    image: {
        type: Object,
        required: true
    },
});

const builderStore = useBuilderStore()

const handleSelectFile = () => {
    builderStore.filemanager.selectFileManager(props.image.url);
}

const handleDeleteFile = () => {
    builderStore.filemanager.deleteFile(props.image.url);
}
</script>
