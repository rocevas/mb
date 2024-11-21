<template>
    <div class="relative group">
        <div @click="handleOptionsEvent(true)">
            <component :is="block.componentName" :block="block" class="border-2 border-transparent group-hover:border-primary"/>
        </div>

        <div class="absolute -top-4 left-4 flex flex-row p-0 -ml-1.5 group-hover:flex bg-transparent">
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label class="btn btn-sm btn-ghost handle drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="draggable" class="h-5 w-5 text-base-content/50 cursor-move"/>
                </label>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label @click="handleMoveEvent('up')" class="btn btn-sm btn-ghost handle drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="chevron-up" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label @click="handleMoveEvent('down')" class="btn btn-sm btn-ghost handle drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="chevron-down" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
        </div>

        <div class="absolute -top-4 right-4 flex flex-row p-0 -ml-1.5 rounded-md hidden group-hover:flex bg-transparent">
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label @click="handleOptionsEvent(true)" :for="block.uuid" class="btn btn-sm btn-ghost drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="pencil" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content pr-2">
                <label @click="handleCloneEvent()" :for="block.uuid" class="btn btn-sm btn-ghost drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="copy" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
            <div class="flex flex-col items-center justify-center drawer-content">
                <label @click="handleDeleteEvent()" class="btn btn-sm btn-ghost drawer-button px-1 rounded-full bg-base-300 group-hover:bg-base-300">
                    <Icon name="trash" class="h-5 w-5 text-base-content/50"/>
                </label>
            </div>
        </div>
    </div>

    <teleport to="#settings" v-if="builderStore.getSelectedOption() === block.uuid">
        <div class="">
            <div class="flex flex-col divide-y">
                <div class="flex flex-1 flex-col">
                    <p class="p-2 text-center">{{ block.description }}</p>
                    <ul class="overflow-y-auto">
                        <component :is="block.optionsComponentName" v-model="block"/>
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

<script>
    import {computed} from 'vue'
    import {useBuilderStore} from '../Stores/BuilderStore.js'
    import Icon from '../Icon.vue'

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

    export default {
        name: 'BlockWrapper',
        emits: ['move', 'clone', 'delete', 'options', 'update:modelValue'],
        components: {
            Icon,

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
        },
        props: {
            block: {
                type: Object,
                required: true,
                default: () => ({})
            },
            index: {
                type: Number,
                required: true
            }
        },
        setup(props, context) {
            const builderStore = useBuilderStore()

            const block = computed({
                get: () => props.block,
                set: (value) => context.emit('update:modelValue', value),
            })

            const handleMoveEvent = (direction) => {
                builderStore.moveBlock(direction, props.block);
            }

            const handleCloneEvent = () => {
                context.emit('clone', props.block)
            }

            const handleDeleteEvent = () => {
                context.emit('delete', props.block)
            }

            const handleOptionsEvent = (show) => {
                builderStore.showSidebarOptions(props.block.uuid);
            }
            // const handleOptionsEvent = (show) => {
            //     if (builderStore.getSelectedOption() !== props.block.uuid) {
            //         builderStore.showSidebarOptions(props.block.uuid);
            //     }
            // };

            return { handleMoveEvent, handleCloneEvent, handleDeleteEvent, handleOptionsEvent, block, builderStore }
        },
    }
</script>
