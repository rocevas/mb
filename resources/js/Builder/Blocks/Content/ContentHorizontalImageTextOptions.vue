<template>
    <!-- Horizontal Image and Text options. -->
    <div class="h-full overflow-y-auto p-2 scrollbar">
        <div class="space-y-2">
            <div>
                <span class="text-sm font-medium uppercase">Image</span>
                <div class="btn aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                    <img :src="block.data.imageUrl" alt="" class="object-cover" @click="$emit('showFilemanager', block.data, 'imageUrl')" />
                </div>
            </div>
            <div>
                <span class="text-sm font-medium uppercase">Subtitle</span>
                <div class="flex items-center justify-between">
                    <input v-model="block.data.subtitle" type="text" class="input input-bordered input-sm w-full">
                </div>
            </div>
            <div>
                <span class="text-sm font-medium uppercase">Heading</span>
                <div class="flex items-center justify-between">
                    <textarea class="textarea w-full textarea-bordered" v-model="block.data.heading" placeholder=""></textarea>
                </div>
            </div>
            <div>
                <span class="text-sm font-medium uppercase">Text</span>
                <div class="flex items-center justify-between h-fit">
                    <textarea class="textarea w-full textarea-bordered h-64" v-model="block.data.text" placeholder=""></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'ContentHorizontalImageTextOptions',
        emits: ['update:modelValue', 'showFilemanager'],
        components: {

        },
        props: {
            modelValue: {
                type: Object,
                default: () => ({}),
            }
        },
        setup(props, context) {
            const block = computed({
                get: () => props.modelValue,
                set: (value) => context.emit('update:modelValue', value),
            })

            return { block }
        },
    })
</script>
