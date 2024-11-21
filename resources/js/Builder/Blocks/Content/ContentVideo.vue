<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="py-4 px-4">
                <div class="container mx-auto relative">
                    <a v-if="builderMode === 'preview'" :href="block.data.youtubeVideoCode ? 'https://www.youtube.com/watch?v=' + block.data.youtubeVideoCode : '#'" target="_blank" :data-testing="builderMode">
                        <img :src="block.data.youtubeVideoCode ? 'https://img.youtube.com/vi/' + block.data.youtubeVideoCode + '/maxresdefault.jpg' : 'https://placeholder.mailerlite.com/640x200-video_v2.jpg'" alt="" class="object-cover h-96 w-full" loading="lazy">
                        <span v-if="block.data.youtubeVideoCode" class="absolute inset-0 flex justify-center items-center z-10">
                            <img src="/images/placeholders/play-red.png" alt="" class="object-cover h-16 w-auto" loading="lazy">
                        </span>
                    </a>
                    <img v-if="builderMode === 'edit'" :src="block.data.youtubeVideoCode ? 'https://img.youtube.com/vi/' + block.data.youtubeVideoCode + '/maxresdefault.jpg' : 'https://placeholder.mailerlite.com/640x200-video_v2.jpg'" alt="" class="object-cover h-96 w-full h-auto" loading="lazy">
                    <span v-if="block.data.youtubeVideoCode && builderMode === 'edit'" class="absolute inset-0 flex justify-center items-center z-10">
                        <img src="/images/placeholders/play-red.png" alt="" class="object-cover h-16 w-auto" loading="lazy">
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {computed, inject} from "vue";
    import { usePage } from '@inertiajs/vue3'

    export default {
        name: 'ContentVideo',
        props: {
            block: {
                type: Object,
                required: true,
            },
            first: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const builderMode = computed(() => inject('builderMode')); //edit or preview
            return { builderMode }
        },
    }
</script>
