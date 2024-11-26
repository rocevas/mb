<template>
    <AppLayout :title="title">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Templates
            </h2>
        </template>
        <div class="overflow-y-auto">
            <section class="py-10 px-10 w-full mx-auto container relative">
            <div class="grid grid-cols-4 md:grid-cols-6 justify-center gap-12">
                <!-- Blank template -->
                <Link :href="route('templates.create')" class="">
                    <div class="w-full aspect-square rounded-xl overflow-hidden">
                        <img alt="" src="https://placehold.co/600x600" class="object-cover" />
                    </div>
                    <p class="mt-4 font-medium text-center">Blank</p>
                </Link>
                <!-- Templates -->
                <div v-for="(template, index) in props.templates" :key="template.id" class="relative w-full">
                    <Link :href="route('templates.show', template.uid)" class="">
                        <div class="w-full aspect-square rounded-xl overflow-hidden">
                            <img alt="" src="https://placehold.co/400x400" class="object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-center">{{ template.title }}</p>
                    </Link>
                </div>
            </div>
        </section>
        </div>
    </AppLayout>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';

const props = defineProps({
    title: String,
    templates: Array
})
</script>
