import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';
// import builderData from '../../src/templates/builder.json';
import blocks from "../Blocks/blocks.js";
import builderData from '../builder.json';
import { nanoid } from "nanoid";

export const useBuilderStore = defineStore('builderStore', {
    state: () => ({
        builder: useLocalStorage('builder', {
            id: 0,
            settings: [],
            blocks: []
        }),
        editor: {
            layout: 'email',
            showingSidebarBlocks: false,
            showingSidebarOptions: false,
        },
    }),
    getters: {
        getGroups: () => {
            return blocks.groups.value
                .map((groups) => {
                    groups.blocks = groups.blocks.filter((block) => block.visible);
                    return groups;
                })
                .filter((groups) => groups.blocks.length !== 0);
        },
        getBlocks: (state) => {
            return () => state.builder.blocks
        },
        getBuilder: (state) => {
            return () => state.builder
        },
        getSelectedOption: (state) => {
            return () => state.editor.selectedOption
        },
        isSidebarOptionsOpened: (state) => {
            return () => state.editor.showingSidebarOptions
        },
        getPageBlocks: (state) => {
            return (blocks) => {
                // activePage can be empty - for previewing multiple pages in single html page
                return state.builder.blocks
            }
        },
    },
    actions: {
        setBuilder(newBuilder) {
            if (Object.keys(newBuilder).length) {
                this.builder = newBuilder;
            } else {
                this.builder = builderData;
            }
        },
        resetBuilder() {
            this.builder = {
                settings: [],
                blocks: [],
                editor: []
            }
        },

        findBlockIndex(block) {
            return this.builder.blocks.findIndex(x => x.uuid === block.uuid);
        },
        moveBlock(direction, block) {
            let index = this.findBlockIndex(block);
            if (direction === 'up' && index > 0) {
                let el = this.builder.blocks[index];
                this.builder.blocks[index] = this.builder.blocks[index - 1];
                this.builder.blocks[index - 1] = el;
            }
            if (direction === 'down' && index !== -1 && index < this.builder.blocks.length - 1) {
                let el = this.builder.blocks[index];
                this.builder.blocks[index] = this.builder.blocks[index + 1];
                this.builder.blocks[index + 1] = el;
            }
        },
        cloneBlock(index) {
            let newBlock = JSON.parse(JSON.stringify(this.builder.blocks[index]))
            newBlock.uuid = nanoid();
            this.builder.blocks.splice(index+1, 0, newBlock);
        },

        deleteBlock(index) {
            this.builder.blocks.splice(index, 1)
        },
        setSelectedOption(uuid) {
            this.editor.selectedOption = uuid;
        },
        showSidebarOptions(uuid) {
            if (this.editor.selectedOption !== uuid) {
                this.editor.showingSidebarBlocks = (uuid === '' || uuid === false);
                this.editor.showingSidebarOptions = !this.editor.showingSidebarBlocks;
                this.setSelectedOption(uuid);
            }
        }
    }
})
