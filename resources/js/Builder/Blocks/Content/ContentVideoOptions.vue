<template>
    <div class="space-y-2 p-2">
        <div class="form-control">
            <label class="label -mb-2">
                <span class="text-sm font-medium uppercase">YouTube link</span>
            </label>
            <input v-model="block.data.youtubeVideoUrl"  @input="handleYoutubeUrlChanged($event, block)" type="text" class="input input-bordered input-sm">
        </div>
    </div>
</template>

<script>
    import { defineComponent, computed } from 'vue'

    export default defineComponent({
        name: 'ContentVideoOptions',
        emits: ['update:modelValue'],
        props: {
            modelValue: {
                type: Object,
                default: () => ({}),
            }
        },
        methods: {
            handleYoutubeUrlChanged(event, block){
                let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                let match = event.target.value.match(regExp);
                block.data.youtubeVideoCode = (match && match[7].length==11) ? match[7] : '';
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
