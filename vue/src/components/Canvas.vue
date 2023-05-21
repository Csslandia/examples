<script setup>
import { ref } from "vue";

defineProps(["btnText"]);

let isOpen = ref(false);

const open = () => {
    isOpen.value = true;
    document.addEventListener("keydown", keyDown);
};
const close = () => {
    isOpen.value = false;
    document.removeEventListener("keydown", keyDown);
};
const keyDown = (e) => {
    if (e.key === "Escape") close();
};
</script>

<template>
    <button class="btn bg-a" @click="open">{{ btnText }}</button>

    <div class="canvas" :class="isOpen && 'open'">
        <div class="w-80% max-w-17 p-8"><slot /></div>
        <div @click="close" aria-hidden="true" />
    </div>
</template>
