import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'

import SlashCommandsList from './SlashCommandsList.vue'

export default {
    items: ({ query }) => {
        return [
            {
                title: 'Heading 1',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', { level: 1 })
                        .run()
                },
            },
            {
                title: 'Heading 2',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', { level: 2 })
                        .run()
                },
            },
            {
                title: 'Heading 3',
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', { level: 3 })
                        .run()
                },
            },
            {
                title: 'Text',
                description: "Just start typing with plain text.",
                command: ({ editor, range }) => {
                    editor
                        .chain()
                        .focus()
                        .deleteRange(range)
                        .toggleNode('paragraph', 'paragraph')
                        .run()
                },
            },
            {
                title: "Bullet List",
                description: "Create a simple bullet list.",
                searchTerms: ["unordered", "point"],
                command: ({ editor, range }) => {
                    editor.chain().focus().deleteRange(range).toggleBulletList().run();
                },
            },
            {
                title: "Numbered List",
                description: "Create a list with numbering.",
                searchTerms: ["ordered"],
                command: ({ editor, range }) => {
                    editor.chain().focus().deleteRange(range).toggleOrderedList().run();
                },
            },
            {
                title: "To-do List",
                description: "Track tasks with a to-do list.",
                searchTerms: ["todo", "task", "list", "check", "checkbox"],
                command: ({ editor, range }) => {
                    editor.chain().focus().deleteRange(range).toggleTaskList().run();
                },
            },
            {
                title: "Table",
                description: "Insert a table.",
                searchTerms: ["table"],
                command: ({ editor, range }) => {
                    editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3 }).run();
                },
            },
            {
                title: '2 Columns',
                command: ({ editor, range }) => {
                    editor.chain().focus().deleteRange(range).insertColumns(2).run();
                },
            },
            {
                title: '3 Columns',
                command: ({ editor, range }) => {
                    editor.chain().focus().deleteRange(range).insertColumns(3).run();
                },
            },
        ].filter(item => item.title.toLowerCase().startsWith(query.toLowerCase())).slice(0, 10)
    },

    render: () => {
        let component
        let popup

        return {
            onStart: props => {
                component = new VueRenderer(SlashCommandsList, {
                    // using vue 2:
                    // parent: this,
                    // propsData: props,
                    props,
                    editor: props.editor,
                })

                if (!props.clientRect) {
                    return
                }

                popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                })
            },

            onUpdate(props) {
                component.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                })
            },

            onKeyDown(props) {
                if (props.event.key === 'Escape') {
                    popup[0].hide()

                    return true
                }

                return component.ref?.onKeyDown(props)
            },

            onExit() {
                popup[0].destroy()
                component.destroy()
            },
        }
    },
}
