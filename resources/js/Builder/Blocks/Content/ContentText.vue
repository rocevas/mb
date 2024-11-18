<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="p-4 pt-1">
                <p class="text-center text-black" contenteditable @input="updateContent($event, 'text')">
                    {{ block.data.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'ContentText',
        props: {
            block: {
                type: Object,
                required: true
            },
        },
        methods: {
            updateContent(e, contentType) {
                if ( this.block.data[contentType] ) {
                    this.block.data[contentType] = e.target.innerText;
                }
            },
        },
        setup() {

        },
    })
</script>
