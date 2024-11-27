<template>
    <div class="relative group/section hover:z-10">
        <div class="pr-12 -mr-12">
            <div class="outline outline-transparent group-hover/section:outline-teal-500/50">
                <component :is="blocks[block?.componentName]" :block="block" @showFileManager="handleShowFileManager" class="border-2 border-transparent group-hover/section:border-primary"/>
            </div>

            <div class="absolute top-0 -right-10 hidden group-hover/section:flex">
                <Dropdown align="left">
                    <template #trigger>
                        <button class="ce-toolbar__settings-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"></path></svg>
                        </button>
                    </template>

                    <template #content>
                        <DropdownLink @click="handleOptionsEvent(true)" :for="block.uuid" as="button" class="flex gap-2">
                            <Icon name="pencil" class="h-5 w-5 text-base-content/50"/> Edit
                        </DropdownLink>

                        <DropdownLink @click="handleCloneEvent()" :for="block.uuid" as="button" class="flex gap-2">
                            <Icon name="copy" class="h-5 w-5 text-base-content/50"/> Duplicate
                        </DropdownLink>

                        <DropdownLink @click="handleDeleteEvent()" as="button" class="flex gap-2">
                            <Icon name="trash" class="h-5 w-5 text-base-content/50"/> Delete
                        </DropdownLink>

                        <div class="border-t border-gray-200 dark:border-gray-600" />

                        <DropdownLink @click="handleMoveEvent('up')" as="button">
                            Move up
                        </DropdownLink>

                        <DropdownLink @click="handleMoveEvent('down')" as="button">
                            Move down
                        </DropdownLink>
                    </template>
                </Dropdown>
            </div>
        </div>
    </div>

    <teleport to="#settings" v-if="builderStore.getSelectedOption() === block.uuid">
        <div class="">
            <div class="flex flex-col divide-y">
                <div class="flex flex-1 flex-col">
                    <p class="p-2 text-center">{{ block.description }}</p>
                    <ul class="overflow-y-auto">
                        <component :is="blocks[block?.optionsComponentName]" v-model="block" @showFileManager="handleShowFileManager"/>
                    </ul>
                </div>
                <!-- Block options: save and cancel buttons -->
                <div class="flex flex-shrink-0 justify-end p-4 space-x-3">
                    <button type="button" class="btn btn-primary float-left" @click="builderStore.showSidebarOptions(false)">Save</button>
                    <button type="button" class="btn float-right" @click="builderStore.showSidebarOptions(false)">Cancel</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import {computed} from 'vue'
import {useBuilderStore} from '../Stores/BuilderStore.js'
import Dropdown from '@/Components/Dropdown.vue';
import Icon from '../Components/Icon.vue'

import ButtonsButton from './Buttons/ButtonsButton.vue'
import ButtonsButtonOptions from './Buttons/ButtonsButtonOptions.vue'
import ButtonsTwoButtons from './Buttons/ButtonsTwoButtons.vue'
import ButtonsTwoButtonsOptions from './Buttons/ButtonsTwoButtonsOptions.vue'
import ButtonsThreeButtons from './Buttons/ButtonsThreeButtons.vue'
import ButtonsThreeButtonsOptions from './Buttons/ButtonsThreeButtonsOptions.vue'

import ContentImage from './Content/ContentImage.vue'
import ContentImageOptions from './Content/ContentImageOptions.vue'
import ContentText from './Content/ContentText.vue'
import ContentTextOptions from './Content/ContentTextOptions.vue'
import ContentTitle from './Content/ContentTitle.vue'
import ContentTitleOptions from './Content/ContentTitleOptions.vue'
import ContentHorizontalImageText from './Content/ContentHorizontalImageText.vue'
import ContentHorizontalImageTextOptions from './Content/ContentHorizontalImageTextOptions.vue'
import ContentHorizontalTextImage from "./Content/ContentHorizontalTextImage.vue";
import ContentHorizontalTextImageOptions from "./Content/ContentHorizontalTextImageOptions.vue";

import HeaderLogo from './Header/HeaderLogo.vue'
import HeaderLogoOptions from './Header/HeaderLogoOptions.vue'
import ContentVideo from './Content/ContentVideo.vue'
import ContentVideoOptions from './Content/ContentVideoOptions.vue'

import FeaturesHighlight3 from './Features/FeaturesHighlight3.vue'
import FeaturesHighlight3Options from './Features/FeaturesHighlight3Options.vue'

import ContentLinks from './Content/ContentLinks.vue'
import ContentLinksOptions from './Content/ContentLinksOptions.vue'

import Section from './Sections/Section.vue'
import SectionOptions from './Sections/SectionOptions.vue'
import DropdownLink from "@/Components/DropdownLink.vue";

const props = defineProps({
    block: {
        type: Object,
        required: true,
        default: () => ({})
    },
    index: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['move', 'clone', 'delete', 'options', 'update:modelValue']);

const builderStore = useBuilderStore()

const block = computed({
    get: () => props.block,
    set: (value) => emit('update:modelValue', value),
})

const handleMoveEvent = (direction) => {
    builderStore.moveBlock(direction, props.block);
}

const handleCloneEvent = () => {
    emit('clone', props.block)
}

const handleDeleteEvent = () => {
    emit('delete', props.block)
}

const handleOptionsEvent = (show) => {
    builderStore.showSidebarOptions(props.block.uuid);
}

const handleShowFileManager = (block, name) => {
    builderStore.filemanager.showFileManager(block, name);
}

const blocks = {
    ButtonsButton,
    ButtonsButtonOptions,
    ButtonsTwoButtons,
    ButtonsTwoButtonsOptions,
    ButtonsThreeButtons,
    ButtonsThreeButtonsOptions,

    ContentImage,
    ContentImageOptions,
    ContentText,
    ContentTextOptions,
    ContentTitle,
    ContentTitleOptions,
    ContentHorizontalImageText,
    ContentHorizontalImageTextOptions,
    ContentHorizontalTextImage,
    ContentHorizontalTextImageOptions,

    HeaderLogo,
    HeaderLogoOptions,
    ContentVideo,
    ContentVideoOptions,

    FeaturesHighlight3,
    FeaturesHighlight3Options,

    ContentLinks,
    ContentLinksOptions,

    Section,
    SectionOptions
}
</script>
