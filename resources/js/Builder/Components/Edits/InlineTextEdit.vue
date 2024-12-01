<template>
    <div class="editor" ref="htmlelement"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import EditorJS from '@editorjs/editorjs';
import { IconListNumbered, IconListBulleted } from '@codexteam/icons';
// import DragDrop from 'editorjs-drag-drop';
import ImageTool from '../Editorjs/ImageTool.js';
import ListTool from '@editorjs/list';
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
const emit = defineEmits(['update:modelValue', 'showFileManager']);
const localBlock = computed(() => props.modelValue);
let editor;
let updatingModel = false;

// model -> view
const modelToView = () => {
    if (!props.modelValue) return;
    if (typeof props.modelValue === 'string') {
        editor.blocks.renderFromHTML(props.modelValue);
        return;
    }
    editor.render(props.modelValue);
}

// view -> model
const viewToModel = (api, event) => {
    updatingModel = true;
    editor.save().then((outputData) => {
        emit('update:modelValue', outputData);
    }).catch((error) => {
        console.error('Saving failed:', error);
    }).finally(() => {
        updatingModel = false;
    });
}

const handleShowFileManager = () => {
    console.log('Emitting showFileManager with:', props.modelValue, 'image');
    emit('showFileManager', props.modelValue, 'image');
}

onMounted(() => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    editor = new EditorJS({
        holder: htmlelement.value,
        placeholder: props.placeholder,
        inlineToolbar: ['bold', 'italic', 'link'],
        tools: {
            // list: {
            //     class: ListTool,
            //     inlineToolbar: true,
            //     config: {
            //         defaultStyle: 'unordered',
            //         maxLevel: 1,
            //         checklists: false,
            //     },
            // },
            list: {
                class: ListTool,
                inlineToolbar: true,
                // shortcut: 'CMD+SHIFT+L',
                config: {
                    defaultStyle: 'unordered',
                    maxLevel: 1,
                },
                toolbox: [
                    {
                        icon: IconListNumbered, // OL icon
                        title: 'Ordered List',
                        data: {
                            style: 'ordered',
                        }
                    },
                    {
                        icon: IconListBulleted, // UL icon
                        title: 'Unordered List',
                        data: {
                            style: 'unordered',
                        }
                    }
                ]
            },

            image: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: '/uploadFile', // Your endpoint that provides file uploading
                        byUrl: '/fetchUrl', // Your endpoint that provides URL fetching
                    },
                    additionalRequestHeaders: {
                        'X-CSRF-TOKEN': csrfToken
                    },
                    features: {
                        caption: false,
                    }
                }
            },
            video: VideoTool,
            table: TableTool,
            twoColumns: TwoColumnTool,
            threeColumns: ThreeColumnTool,
        },
        minHeight: 'auto',
        data: props.modelValue,
        // onReady: () => {
        //     modelToView();
        //     new DragDrop(editor);
        // },
        onReady: modelToView,
        onChange: viewToModel,
    });
});

const computedModelValue = computed(() => props.modelValue);

computedModelValue.value; // Access the computed property to trigger reactivity

onUnmounted(() => {
    editor.destroy();
});
</script>
