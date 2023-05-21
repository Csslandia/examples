<script setup>
import { ref } from "vue";

defineProps(["src", "alt", "text"]);

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
    <img
        :src="src"
        :alt="alt"
        class="pointer"
        @click="open"
        aria-hidden="true"
    />

    <div class="viewer fade" :class="isOpen && 'open'">
        <button class="i-close lg" @click="close" />
        <img :src="src" :alt="alt" />
        <div class="mt-6" v-if="text">{{ text }}</div>
    </div>
</template>
