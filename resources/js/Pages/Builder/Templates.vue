<template>
    <AppLayout :title="title">
        <section class="mt-20 mx-auto w-10/12 relative">
            <div class="grid grid-cols-6 md:grid-cols-4 justify-center gap-3">
                <!-- Blank template -->
                <a href="/templates/create" class="card w-56 bg-base-100 shadow-xl">
                    <div class="w-full aspect-w-5 aspect-h-8 rounded-lg overflow-hidden">
                        <img alt="" src="/images/templates/template.png" class="object-cover" />
                    </div>
                    <p class="mt-4 text-lg font-medium text-center">Blank</p>
                </a>
                <!-- Templates -->
                <div v-for="(template, index) in props.templates" :key="template.id" class="relative w-full">
                    <a :href="'/templates/'+template.id" class="card w-56 bg-base-100 shadow-xl">
                        <div class="w-full aspect-w-5 aspect-h-8 rounded-lg overflow-hidden">
                            <img alt="" :src="'/images/templates/template' + (template ? '_' + template.id : '') +'.png'" class="object-contain" />
                        </div>
                        <p class="mt-4 text-lg font-medium text-center">{{ template.title}}</p>
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
