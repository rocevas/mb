<template>
    <AppLayout :title="title">
        <main class="flex overflow-hidden relative">
            <div class="mx-auto max-w-[640px] w-full">
                <!-- Start editor area-->
                <div v-for="(block, index) in draft" :key="block.uuid" class="relative w-full">
                    <div>
                        <BlockPreviewer :block="block" :first="index == 0"/>
                    </div>
                </div>
                <!-- End editor area -->
            </div>
        </main>
    </AppLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useBuilderStore } from '../../Builder/Stores/BuilderStore.js';
import AppLayout from '../../Layouts/BuilderLayout.vue';
import BlockPreviewer from '../../Builder/Blocks/BlockPreviewer.vue'

const props = defineProps({
    title: String,
    template: Object,
})

const draft = ref([])
const builderStore = useBuilderStore();

onMounted(() => {
    if (props.template.template) {
        builderStore.setBuilder(JSON.parse(props.template.template));
    }
    draft.value = builderStore.getBlocks();
})

</script>
