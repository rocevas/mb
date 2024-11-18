<template>
    <span class="text-md uppercase ">{{ title }}</span>
    <Draggable class="dragArea list-group grid grid-cols-3 gap-2" :list="blocks" :sort="false" :clone="clone" :group="{ name: 'blocks', pull: 'clone', put: false }" item-key="uuid">
        <template #item="{ element }">
            <li>
                <div class="card w-28 h-28 bg-base-100 px-1 py-4 border border-gray-500 border-opacity-50 hover:shadow-md hover:border-secondary hover:duration-0 hover:cursor-move" @mouseover="element.state = 'hover'" @mouseleave="element.state = 'default'">
                    <figure class="w-16 h-16"><img :src="'/icons/' + element.icon + '/' + (element.state ? element.state : 'default') + '.svg'" loading="lazy"></figure>
                    <div class="card-body px-1 py-0 text-center">
                        <p class="text-xs p-0 m-0">{{ element.description }}</p>
                    </div>
                </div>
            </li>
        </template>
    </Draggable>

</template>

<script>
    import { defineComponent } from 'vue'
    import Draggable from 'vuedraggable'
    import {nanoid} from "nanoid";

    export default defineComponent({
        name: 'BlockGroupIcon',
        components: {
            Draggable,
        },
        props: {
            title: {
                type: String,
                required: true
            },
            blocks: {
                type: Array,
                required: true
            }
        },
        setup() {
            const clone = (block) => {
                let newBlock = JSON.parse(JSON.stringify(block))
                newBlock.uuid = nanoid();
                return newBlock
            }

            return { clone }
        },
    })
</script>
