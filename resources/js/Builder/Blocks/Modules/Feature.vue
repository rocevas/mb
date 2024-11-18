<template>
    <ModuleWrapper :module="feature" :optionsTitle="'Feature'" :moduleOptions="FeatureOptions" >
        <div class="p-4 hover:shadow-md hover:border-secondary hover:duration-0 hover:cursor-move">
            <img :src="feature.imageUrl" class="w-16 h-16" alt="" />
            <p contenteditable class="bg-white text-lg md:text-2xl font-medium" @input="updateContent($event, 'title')">
                {{ feature.title }}
            </p>
            <p contenteditable class="font-light break-words" @input="updateContent($event, 'description')">
                {{ feature.description }}
            </p>
        </div>
    </ModuleWrapper>
</template>

<script setup>
import {computed, onMounted} from 'vue'
import ModuleWrapper from "./ModuleWrapper.vue";
import FeatureOptions from "./FeatureOptions.vue";

const props = defineProps({
    feature: {
        type: Object,
        default: {}
    },
});

const emit = defineEmits(['update:modelValue'])

const feature = computed({
    get() {
        return props.feature
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const updateContent = (e, contentType) => {
    if ( props.feature[contentType] ) {
        props.feature[contentType] = e.target.innerText;
    }
}

onMounted(() => {
    //console.log('Feature test', this);
})
</script>
