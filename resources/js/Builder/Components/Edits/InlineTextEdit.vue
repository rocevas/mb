<template>
    <EditorContent :editor="editor" class="editor-content" />
</template>

<script setup>
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import Placeholder from '@tiptap/extension-placeholder';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';

import AutoJoiner from 'tiptap-extension-auto-joiner'

import GlobalDragHandle from 'tiptap-extension-global-drag-handle';
import SlashCommands from '@/Builder/Components/Tiptap/SlashCommands/SlashCommands.js';
import suggestion from '@/Builder/Components/Tiptap/SlashCommands/suggestion.js';
import { Column, Columns } from '@/Builder/Components/Tiptap/Columns/ColumnExtension.js';


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

const emit = defineEmits(['update:modelValue']);

const editor = useEditor({
    content: props.modelValue,
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: "Type '/' to open the command menu...",
        }),
        TaskList.configure({
            HTMLAttributes: {
                class: 'task-list',
            },
        }),
        TaskItem,
        AutoJoiner,
        GlobalDragHandle.configure({
            dragHandleWidth: 20,
            scrollTreshold: 100, // default
            excludedTags: ['div.column']
        }),
        SlashCommands.configure({
            suggestion,
        }),
        Table.configure({
            allowTableNodeSelection: true
        }),
        TableRow,
        TableCell,
        TableHeader,
        Column,
        Columns.configure({
            allowTableNodeSelection: true
        }),
    ],
    onUpdate: ({editor}) => {
        emit('update:modelValue', editor.getHTML());
    },
});

defineExpose({
    editor,
});
</script>

<style scoped>
.drag-handle {
    cursor: grab;
    user-select: none;
}
</style>
