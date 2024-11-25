<template>
    <div class="editorjs" ref="htmlelement"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import EditorJS from '@editorjs/editorjs';
import DragDrop from 'editorjs-drag-drop';
import ListTool from '@editorjs/list';
import ImageTool from '@editorjs/image';
import TableTool from '@editorjs/table';
import TwoColumnTool from '../Editorjs/TwoColumnTool.js';
import ThreeColumnTool from '../Editorjs/ThreeColumnTool.js';
import VideoTool from '../Editorjs/VideoTool.js';

const htmlelement = ref(null);
const props = defineProps({
    modelValue: {
        type: [String, Object],
        default: '',
    },
    placeholder: {
        type: String,
        default: 'Type here...',
    },
});
const emit = defineEmits(['update:modelValue']);
let editor;
let updatingModel = false;

// model -> view
function modelToView() {
    if (!props.modelValue) return;
    if (typeof props.modelValue === 'string') {
        editor.blocks.renderFromHTML(props.modelValue);
        return;
    }
    editor.render(props.modelValue);
}

// view -> model
function viewToModel(api, event) {
    updatingModel = true;
    editor.save().then((outputData) => {
        emit('update:modelValue', outputData);
    }).catch((error) => {
        console.error('Saving failed:', error);
    }).finally(() => {
        updatingModel = false;
    });
}

onMounted(() => {
    editor = new EditorJS({
        holder: htmlelement.value,
        placeholder: props.placeholder,
        inlineToolbar: ['bold', 'italic', 'link'],
        tools: {
            list: ListTool,
            image: ImageTool,
            table: TableTool,
            video: VideoTool,
            twoColumns: TwoColumnTool,
            threeColumns: ThreeColumnTool,
        },
        minHeight: 'auto',
        data: props.modelValue,
        onReady: () => {
            modelToView();
            new DragDrop(editor);
        },
        onChange: viewToModel,
    });
});

const computedModelValue = computed(() => props.modelValue);

computedModelValue.value; // Access the computed property to trigger reactivity

onUnmounted(() => {
    editor.destroy();
});
</script>

<style>
.column-tool {
    display: flex;
    gap: 1rem;
}

.column-tool .column {
    flex: 1;
    border: 1px solid #ccc;
    padding: 1rem;
}
</style>
