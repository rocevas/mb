<template>
    <div class="space-y-2 p-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Button 1</span>
            </label>
            <input v-model="block.data.buttons[0].title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="input-group input-group-md">
                <span>🔗</span>
                <input v-model="block.data.buttons[0].url" type="text" placeholder="Enter URL" class="input input-bordered input-sm w-full" />
            </label>
        </div>

        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Button 2</span>
            </label>
            <input v-model="block.data.buttons[1].title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="input-group input-group-md">
                <span>🔗</span>
                <input v-model="block.data.buttons[1].url" type="text" placeholder="Enter URL" class="input input-bordered input-sm w-full" />
            </label>
        </div>

        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">Button 3</span>
            </label>
            <input v-model="block.data.buttons[2].title" type="text" class="input input-bordered input-sm">
        </div>
        <div class="form-control">
            <label class="input-group input-group-md">
                <span>🔗</span>
                <input v-model="block.data.buttons[2].url" type="text" placeholder="Enter URL" class="input input-bordered input-sm w-full" />
            </label>
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'ButtonsThreeButtonsOptions',
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
