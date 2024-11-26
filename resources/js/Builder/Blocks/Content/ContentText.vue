<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4 pt-1">
                <InlineTextEdit v-model="localBlock.data" @showFileManager="forwardShowFileManager" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted} from 'vue';
import InlineTextEdit from "@/Builder/Components/Edits/InlineTextEdit.vue";

const props = defineProps({
    block: {
        type: Object,
        required: true,
    }
});
const emit = defineEmits(['showFileManager']);
const localBlock = computed(() => props.block);

const forwardShowFileManager = (data, type) => {
    emit('showFileManager', data, type);
};

</script>
