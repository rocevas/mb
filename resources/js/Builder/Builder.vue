<template>
    <AppLayout :title="title">
        <template #header>
            <BuilderHeader :template="template" @showSaveTemplateModal="saveTemplateModal = true" @updateTemplate="updateTemplate()" />
        </template>
        <main class="flex overflow-hidden relative flex-1">

            <div class="flex flex-1 px-3 pb-3">
                <div class="flex flex-col rounded-3xl bg-white w-full shadow border relative overflow-hidden">
                    <div class="w-[80px] px-4 overflow-y-auto border-r absolute top-0 left-0 bottom-0">
                        <BlockGroup v-for="group in groups" :key="group.uuid" :title="group.title" :blocks="group.blocks"/>
                    </div>
                    <div class="flex overflow-y-auto ">
                        <div class="mx-auto max-w-[640px] w-full rounded-lg border my-6">
                            <Draggable class="dragArea min-h-[10rem] rounded-lg" :list="builderStore.getBlocks()" handle=".handle" group="blocks" item-key="uuid" :class="{'border-dashed border-2 border-gray-200': builderStore.getBlocks().length === 0}">
                                <template #item="{ element, index }">
                                    <div>
                                        <BlockWrapper :block="element" :index="index" @clone="cloneBlock(index)" @delete="deleteBlock(index)" />
                                    </div>
                                </template>
                            </Draggable>
                        </div>
                    </div>
                    <div class="w-[300px] px-4 overflow-y-auto transition-all border-l absolute top-0 right-0 bottom-0" :class="{'-right-[300px]': !builderStore.isSidebarOptionsOpened()}">
                        <div id="settings">

                        </div>
                    </div>
                </div>

            </div>

        </main>
    </AppLayout>

    <!-- Save template modal -->
    <DialogModal :show="saveTemplateModal" @close="close">
        <template #title>
            Save template
        </template>

        <template #content>
            <div>
                <label for="save-template-value" class="block text-sm font-medium">Title</label>
                <div class="mt-1">
                    <input id="save-template-value" name="save-template-value" type="text"
                       v-model="templateForm.title" autocomplete="" required="true"
                       class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                </div>
            </div>
        </template>

        <template #footer>
            <button type="button" class="btn btn-light" @click="close">CLose</button>
            <button type="submit" class="btn btn-dark" @click="saveTemplate">Save template</button>
        </template>
    </DialogModal>
</template>

<script setup>
import {useForm} from '@inertiajs/vue3';
import {provide, ref, onMounted, onBeforeMount, computed} from 'vue';
import Draggable from 'vuedraggable';
import {useBuilderStore} from './Stores/BuilderStore.js';
import AppLayout from '../Layouts/BuilderLayout.vue';
import BuilderHeader from "./BuilderHeader.vue";
import DialogModal from "@/Components/DialogModal.vue";
import BlockWrapper from "./Blocks/BlockWrapper.vue";
import BlockGroup from "./Blocks/BlockGroup.vue";

const props = defineProps({
    title: String,
    template: Object,
})

const builderMode = 'edit';
provide('builderMode', builderMode);

const builderStore = useBuilderStore();
const selectedOption = ref('');

const saveTemplateModal = ref(false);

const templateForm = useForm({
    title: props.title ? props.title : '',
    template: ''
});

// Cache the result of getGroups
const groups = computed(() => builderStore.getGroups);

// builder
const cloneBlock = (index) => {
    builderStore.cloneBlock(index);
}
const deleteBlock = (index) => {
    if (builderStore.getBlocks()[index].uuid === selectedOption.value) {
        showOptions('');
    }
    builderStore.deleteBlock(index);
}

const saveTemplate = () => {
    templateForm.template = JSON.stringify(builderStore.getBuilder());
    templateForm.post(route('templates.store'), {
        // ErrorBag: 'addCustomer',
        preserveScroll: true,
        onSuccess: () => (close()),
    });
};

const updateTemplate = () => {
    templateForm.template = JSON.stringify(builderStore.getBuilder());
    templateForm.put(route('templates.update', props.template.id), {
        // ErrorBag: 'addCustomer',
        preserveScroll: true,
        onSuccess: () => (close()),
    });
};

const close = () => {
    templateForm.reset();
    templateForm.clearErrors();
    saveTemplateModal.value = false;
};

onMounted(() => {
    if (props.template.template) {
        builderStore.setBuilder(JSON.parse(props.template.template));
    }
})

onBeforeMount(() => {
    builderStore.resetBuilder();
})
</script>
