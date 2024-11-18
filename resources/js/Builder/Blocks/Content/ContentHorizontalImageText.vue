<template>
    <div class="bg-white">
        <div class="max-w-6xl mx-auto">
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img :src="block.data.imageUrl" class="max-w-xs" />
                    <div>
                        <p contenteditable @input="updateContent($event, 'subtitle')" class="text-md text-green-500 w-full">{{ block.data.subtitle }}</p>
                        <h2 contenteditable @input="updateContent($event, 'heading')" class="text-lg text-black font-bold w-full">
                            {{ block.data.heading }}
                        </h2>
                        <p contenteditable @input="updateContent($event, 'text')" class="text-md text-black w-full">
                            {{ block.data.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContentHorizontalImageText',
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
        methods: {
            updateContent(e, contentType) {
                if ( this.block.data[contentType] ) {
                    this.block.data[contentType] = e.target.innerText;
                }
            },
        },
        setup() {

        },
    }
</script>
