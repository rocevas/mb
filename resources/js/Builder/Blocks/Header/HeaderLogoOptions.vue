<template>
    <!-- Logo options -->
    <div class="h-full overflow-y-auto p-2 scrollbar">
        <div class="space-y-2">
            <div>
                <h3 class="font-medium">Image</h3>
                <div class="btn btn-ghost border border-gray-300 aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                    <img :src="block.data.imageUrl" alt="" class="object-scale-down" @click="$emit('showFilemanager', block.data, 'imageUrl')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'HeaderLogoOptions',
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
