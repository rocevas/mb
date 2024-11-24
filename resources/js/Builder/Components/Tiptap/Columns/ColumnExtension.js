import { Node, mergeAttributes } from '@tiptap/core';

export const Column = Node.create({
    name: 'column',
    group: 'block',
    content: 'block+',
    parseHTML() {
        return [{ tag: 'div[data-type="column"]' }];
    },
    renderHTML({ HTMLAttributes }) {
        return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'column', class: 'column' }), 0];
    },
});

export const Columns = Node.create({
    name: 'columns',
    group: 'block',
    content: 'column+',
    draggable: true, // Make the entire columns element draggable
    parseHTML() {
        return [{ tag: 'div[data-type="columns"]' }];
    },
    renderHTML({ HTMLAttributes, node }) {
        const columnsClass = `columns columns-${node.childCount}`;
        return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'columns', class: columnsClass }), 0];
    },
    addOptions() {
        return {
            allowTableNodeSelection: true, // Add this option to allow node selection
        };
    },
    addCommands() {
        return {
            insertColumns: (columns) => ({ commands }) => {
                return commands.insertContent({
                    type: 'columns',
                    content: Array.from({ length: columns }, () => ({ type: 'column', content: [{ type: 'paragraph' }] })),
                });
            },
        };
    },
});
