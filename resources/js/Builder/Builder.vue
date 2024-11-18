<template>
    <AppLayout :title="title">
        <template #header>
            <BuilderHeader :template="template" @showSaveTemplateModal="saveTemplateModal = true" @updateTemplate="updateTemplate()" />
        </template>
        <main class="flex overflow-hidden relative">
            <div class="w-[300px] px-4">
                Left
            </div>
            <div class="flex flex-1 pb-4">
                <div class="rounded-3xl bg-white w-full shadow overflow-y-auto">
                    <div class="mx-auto max-w-[640px] w-full">
<!--                    <TiptapEditor />-->
                        <Draggable class="dragArea w-[50rem] min-h-[10rem] rounded-lg" :list="builderStore.getBlocks()" handle=".handle" group="blocks" item-key="uuid" @change="log" :class="{'border-dashed border-2 border-gray-200': builderStore.getBlocks().length === 0}">
                            <template #item="{ element, index }">
                                <div>
                                    <BlockWrapper :block="element" @clone="cloneBlock(index)" @delete="deleteBlock(index)" />
                                </div>
                            </template>
                        </Draggable>
                    </div>
                </div>
            </div>
            <div class="w-[300px] px-4">
                <div id="settings">

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
import {useForm, usePage} from '@inertiajs/vue3';
import {ref, onMounted, onBeforeMount} from 'vue';
import {useBuilderStore} from './Stores/BuilderStore.js';
import AppLayout from '../Layouts/BuilderLayout.vue';
import BuilderHeader from "./BuilderHeader.vue";
import TiptapEditor from "@/Builder/Blocks/TiptapEditor.vue";
import DialogModal from "@/Components/DialogModal.vue";
import Draggable from 'vuedraggable';
import BlockWrapper from "./Blocks/BlockWrapper.vue";

const props = defineProps({
    title: String,
    template: {
        type: Object,
        default: () => ({})
    },
})

const builderStore = useBuilderStore();

const saveTemplateModal = ref(false);

const templateForm = useForm({
    title: props.title ? props.title : '',
    template: ''
});



const log = (evt) => {
    console.log(evt);
}

// builder
const cloneBlock = (index) => {
    builderStore.cloneBlock(index);
}
const deleteBlock = (index) => {
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
