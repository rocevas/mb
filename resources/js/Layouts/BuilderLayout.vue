<template>
    <div>
        <Head :title="title" />
        <div class="flex flex-col h-screen max-h-screen bg-gray-50 overflow-hidden">
            <slot name="header" />
            <slot/>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {Head} from '@inertiajs/vue3';

defineProps({
    title: String,
});

// Example of a reactive property
const someReactiveProperty = ref(false);

// Ensure that updates to reactive properties do not cause recursive updates
function updateProperty() {
    if (!someReactiveProperty.value) {
        someReactiveProperty.value = true;
    }
}
</script>
