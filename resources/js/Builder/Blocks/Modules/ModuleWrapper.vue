<template>
    <div class="relative group">
        <div @click.stop="handleOptionsEvent()">
            <!-- Module start -->
            <slot class="border-2 border-transparent group-hover:border-primary"></slot>
            <!-- Module end -->
        </div>

        <div class="absolute -top-4 right-4 flex flex-row p-0 -ml-1.5 rounded-md hidden group-hover:flex bg-transparent">
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label @click.stop="handleOptionsEvent()" :for="module.uuid" class="btn btn-sm btn-ghost drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="pencil" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label @click.stop="handleCloneEvent()" :for="module.uuid" class="btn btn-sm btn-ghost drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="clone" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content">
                <label @click.stop="handleDeleteEvent()" class="btn btn-sm btn-ghost drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="trash2" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
        </div>
    </div>

    <teleport to="#settings" v-if="builderStore.getSelectedOption() === module.uuid">
        <div class="">
            <div class="flex h-full flex-col divide-y divide-base-200 bg-editor-sidebar shadow-xl">
                <div class="flex min-h-0 flex-1 flex-col">
                    <p class="p-2 text-center">{{ optionsTitle || 'Options' }}</p>
                    <ul class="menu h-screen p-0 overflow-y-auto text-base-content">
                        <component :is="moduleOptions" :module="module"/>
                    </ul>
                </div>
                <!-- Module options: save and cancel buttons -->
                <div class="flex flex-shrink-0 justify-end p-4 space-x-3 flow-root h-32">
                    <button type="button" class="btn btn-primary float-left" @click="builderStore.showSidebarOptions(false)">Save</button>
                    <button type="button" class="btn float-right" @click="builderStore.showSidebarOptions(false)">Cancel</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import {computed, ref, defineAsyncComponent, onMounted} from 'vue'
import Icon from "../../Components/Icon.vue";
import {useBuilderStore} from "../../Stores/BuilderStore.js";

const emit = defineEmits(['clone', 'delete', 'options', 'update:modelValue'])

const props = defineProps({
    module: {
        type: Object,
        required: true,
        default: () => ({})
    },
    moduleOptions: {
        required: true,
    },
    optionsTitle: {
        type: String,
        required: false,
        default: () => ('Options')
    }
});

const builderStore = useBuilderStore();

const module = computed({
    get() {
        return props.module
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

//const optionsComponent = computed (() => defineAsyncComponent(() => import("./FeatureOptions.vue")))

const handleCloneEvent = () => {
    emit('clone', props.module);
}

const handleDeleteEvent = () => {
    emit('delete', props.module);
}

const handleOptionsEvent = () => {
    builderStore.showSidebarOptions(props.module.uuid);
}

</script>
