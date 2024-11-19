<template>
    <EditorContent :editor="editor" class="editor-content" />
</template>

<script setup>
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import DragHandle from 'tiptap-extension-global-drag-handle'
import AutoJoiner from 'tiptap-extension-auto-joiner'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: 'Type here'
    },
});

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
    content: props.modelValue,
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: "Type '/' to open the command menu...",
        }),
        TaskList,
        TaskItem,
        DragHandle.configure({handleSelector: '.drag-handle'}),
        AutoJoiner,
    ],
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
    },
});

defineExpose({
    editor,
})
</script>

<style scoped>

</style>
