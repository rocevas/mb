import { Node, mergeAttributes } from '@tiptap/core';

export const Column = Node.create({
    name: 'column',
    group: 'block',
    content: 'block+',
    parseHTML() {
        return [{ tag: 'div[data-type="column"]' }];
    },
    renderHTML({ HTMLAttributes }) {
        return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'column', class: 'col' }), 0];
    },
});

export const Columns = Node.create({
    name: 'columns',
    group: 'block',
    content: 'column+',
    parseHTML() {
        return [{ tag: 'div[data-type="columns"]' }];
    },
    renderHTML({ HTMLAttributes, node }) {
        const columnsClass = `grid grid-cols-${node.childCount}`;
        return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'columns', class: columnsClass }), 0];
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
