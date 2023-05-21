<script setup>
import { ref } from "vue";

defineProps(["title"]);

let isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="folder" :class="isOpen && 'open'">
        <div @click="toggle" aria-hidden="true">{{ title }}</div>
        <div><slot /></div>
    </div>
</template>
