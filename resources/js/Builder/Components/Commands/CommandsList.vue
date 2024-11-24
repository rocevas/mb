<template>
    <div class="dropdown-menu">
        <template v-if="items.length">
            <button
                :class="{ 'is-selected': index === selectedIndex }"
                v-for="(item, index) in items"
                :key="index"
                @click="selectItem(index)"
            >
                {{ item.title }}
            </button>
        </template>
        <div class="item" v-else>
            No result
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    command: {
        type: Function,
        required: true,
    },
});

const selectedIndex = ref(0);

watch(() => props.items, () => {
    selectedIndex.value = 0;
});

const upHandler = () => {
    selectedIndex.value = ((selectedIndex.value + props.items.length) - 1) % props.items.length;
};

const downHandler = () => {
    selectedIndex.value = (selectedIndex.value + 1) % props.items.length;
};

const enterHandler = () => {
    selectItem(selectedIndex.value);
};

const selectItem = (index) => {
    const item = props.items[index];
    if (item) {
        props.command(item);
    }
};

const onKeyDown = ({ event }) => {
    if (event.key === 'ArrowUp') {
        upHandler();
        return true;
    }
    if (event.key === 'ArrowDown') {
        downHandler();
        return true;
    }
    if (event.key === 'Enter') {
        enterHandler();
        return true;
    }
    return false;
};

defineExpose({
    onKeyDown,
});
</script>

<style scoped>
/* Dropdown menu */
.dropdown-menu {
    background: white;
    border: 1px solid lightgray;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    overflow: auto;
    padding: 0.4rem;
    position: relative;
}

.dropdown-menu button {
    align-items: center;
    background-color: transparent;
    display: flex;
    gap: 0.25rem;
    text-align: left;
    width: 100%;
}

.dropdown-menu button:hover {
    background-color: lightgray;
}

.dropdown-menu button:hover.is-selected {
    background-color: gray;
}

.dropdown-menu button.is-selected {
    background-color: gray;
}
</style>
