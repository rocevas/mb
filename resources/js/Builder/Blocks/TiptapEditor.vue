<template>
    <div class="editor-wrapper">
        <!-- Redaktoriaus turinys -->
        <EditorContent :editor="editor" class="editor-content" />
    </div>
</template>

<script>
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import DragHandle from 'tiptap-extension-global-drag-handle'
import AutoJoiner from 'tiptap-extension-auto-joiner'

export default {
    name: 'NotionLikeEditor',
    components: {
        EditorContent,
    },
    setup() {

        // Tiptap redaktoriaus inicializacija
        const editor = useEditor({
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
            content: `
                <p>Type something...</p>
            `,
        });

        return {
            editor,
        }
    },
};


</script>

<style scoped>
.editor-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.editor-content {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 16px;
    min-height: 300px;
    font-family: sans-serif;
}
</style>
