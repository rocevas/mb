<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4 pt-1">
                <InlineTextEdit v-model="localBlock.data.text" />
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

const localBlock = computed(() => props.block);
</script>
