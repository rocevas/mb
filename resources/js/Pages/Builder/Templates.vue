<template>
    <AppLayout :title="title">
        <section class="mt-20 mx-auto w-10/12 relative">
            <div class="grid grid-cols-4 md:grid-cols-6 justify-center gap-12">
                <!-- Blank template -->
                <a href="/templates/create" class="">
                    <div class="w-full aspect-square rounded-xl overflow-hidden">
                        <img alt="" src="https://placehold.co/600x600" class="object-cover" />
                    </div>
                    <p class="mt-4 font-medium text-center">Blank</p>
                </a>
                <!-- Templates -->
                <div v-for="(template, index) in props.templates" :key="template.id" class="relative w-full">
                    <a :href="'/templates/'+template.id" class="">
                        <div class="w-full aspect-square rounded-xl overflow-hidden">
                            <img alt="" src="https://placehold.co/400x400" class="object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-center">{{ template.title }}</p>
                    </a>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/BuilderLayout.vue';

const props = defineProps({
    title: String,
    templates: Array
})
</script>
