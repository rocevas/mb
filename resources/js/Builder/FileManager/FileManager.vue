<template>
    <!-- Start filemanager content -->
    <div>
        <div class="modal hidden" :class="{'!flex absolute indent-0 top-0': show}">
            <div class="modal-box modal-fullscreen bg-white z-50">
                <button class="btn btn-sm btn-circle absolute right-2 top-2" @click="builderStore.filemanager.hideFileManager">✕</button>
                <div class="navbar flex-col shadow-lg bg-neutral text-neutral-content">
                    <div class="flex-1 px-2 mx-2">
                        <span class="text-lg font-bold">FileManager</span>
                    </div>
                </div>
                <div class="form-control py-4">
                    <div class="input-group justify-center">
                        <input type="text" placeholder="Add from url..." class="input input-bordered w-96" v-model="addImageUrl" />
                        <button class="btn btn-success" @click="builderStore.filemanager.addFileByUrl(addImageUrl); addImageUrl=''">
                            Import
                        </button>
                    </div>
                </div>
                <section class="mt-4 mx-auto w-10/12 relative">
                    <div class="grid grid-cols-6 justify-center gap-3">
                        <div v-for="(image, index) in builderStore.filemanager.getFiles()" :key="image.url" class="relative w-full">
                            <PhotoCard :image="image" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <!-- End filemanager content -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PhotoCard from "../Components/PhotoCard.vue";
import { useBuilderStore } from '../Stores/BuilderStore.js';

const builderStore = useBuilderStore();
const addImageUrl = ref('');

const props = defineProps({
    show: {
        type: Boolean,
        required: true
    }
})

onMounted(() => {

})
</script>
