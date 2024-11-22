<template>
    <ul class="list-none">
        <li class="text-lg font-bold ">{{ title }}</li>
        <Draggable
            class="cursor-move"
            :list="blocks"
            :sort="false"
            :clone="clone"
            :group="{
                name: 'blocks',
                pull: 'clone',
                put: false
            }"
            item-key="uuid">
            <template #item="{ element }">
                <li>
                    <a class="p-1 mb-1">
                        <div class="p-1 border border-gray-400 rounded-md bg-white">
                            <span class="text-xs">{{ element.description }}</span>
                            <img :src="element.thumbUrl" class="w-full h-auto" loading="lazy">
                        </div>
                    </a>
                </li>
            </template>
        </Draggable>
    </ul>
</template>

<script setup>
import {computed} from 'vue'
import Draggable from 'vuedraggable'
import {nanoid} from "nanoid";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    blocks: {
        type: Array,
        required: true
    }
});

const clone = (block) => {
    let newBlock = JSON.parse(JSON.stringify(block))
    newBlock.uuid = nanoid();
    return newBlock
}
</script>
