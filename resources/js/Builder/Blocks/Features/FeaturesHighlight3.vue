<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="px-4 py-4">
                <div class="space-y-6">
                    <p contenteditable class="text-3xl font-bold mb-4 text-black" @input="updateContent($event, 'title')">
                        {{ block.data.title }}
                    </p>
                    <p contenteditable class="text-md text-black" @input="updateContent($event, 'subtitle')">
                        {{ block.data.subtitle }}
                    </p>
                    <div class="grid grid-cols-12 md:gap-8 space-x-0 space-y-8 md:space-x-0 md:space-y-0 text-black">
                        <div v-for="(item, index) in block.data.list" :key="item.uuid" class="col-span-12 md:col-span-4 space-y-1">
                            <ModulesFeature :feature="item" @delete="deleteModule(index)" @clone="cloneModule(index)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
       import { computed } from 'vue'
import ModulesFeature from "../Modules/Feature.vue";
import { nanoid } from "nanoid";

const props = defineProps({
    block: {
        type: Object,
        default: {}
    }
});

const emit = defineEmits(['update:modelValue'])

const block = computed({
    get() {
        return props.block
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const deleteModule = (index) => {
    props.block.data.list.splice(index, 1)
}

const cloneModule = (index) => {
    let newModule = JSON.parse(JSON.stringify(props.block.data.list[index]))
    newModule.uuid = nanoid();
    props.block.data.list.splice(index+1, 0, newModule);
}

const updateContent = (e, contentType) => {
    if ( props.block.data[contentType] ) {
        props.block.data[contentType] = e.target.innerText;
    }
}
</script>
