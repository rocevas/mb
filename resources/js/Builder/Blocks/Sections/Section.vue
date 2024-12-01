<template>
    <div>
        <div class="w-full">
            <div class="py-4 px-10">
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
