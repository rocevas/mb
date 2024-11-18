<template>
    <div class="space-y-2 p-2">
        <div>
            <span class="text-sm font-medium uppercase">Text</span>
            <div class="flex items-center justify-between">
                <textarea class="textarea w-full textarea-bordered h-64" v-model="block.data.text" placeholder=""></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'ContentTextOptions',
        emits: ['update:modelValue'],
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
