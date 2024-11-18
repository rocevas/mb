<template>
    <div class="space-y-2 p-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Title</span>
            </label>
            <input v-model="block.data.title" type="text" class="input input-bordered input-sm">
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'ContentTitleOptions',
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
