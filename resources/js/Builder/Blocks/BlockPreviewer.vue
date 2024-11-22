<template>
    <div class="relative">
        <div>
            <component :is="blocks[block?.componentName]" :block="block" :first="first"/>
        </div>
    </div>
</template>

<script setup>
import ButtonsButton from './Buttons/ButtonsButton.vue'
import ContentImage from './Content/ContentImage.vue'
import ContentText from "./Content/ContentText.vue";
import ContentTitle from './Content/ContentTitle.vue'
import ContentVideo from './Content/ContentVideo.vue'
import ContentHorizontalImageText from "./Content/ContentHorizontalImageText.vue";
import ContentHorizontalTextImage from "./Content/ContentHorizontalTextImage.vue";

import ContentLinks from './Content/ContentLinks.vue'

import FeaturesHighlight3 from './Features/FeaturesHighlight3.vue'

import HeaderLogo from './Header/HeaderLogo.vue'

const props = defineProps({
    block: {
        type: Object,
        required: true
    },
    first: {
        type: Boolean,
        default: false
    }
})

const blocks = {
    ButtonsButton,
    ContentImage,
    ContentText,
    ContentTitle,
    ContentVideo,
    ContentHorizontalImageText,
    ContentHorizontalTextImage,
    ContentLinks,
    FeaturesHighlight3,
    HeaderLogo,
}
</script>
