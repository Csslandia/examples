<script setup>
import { ref } from "vue";

defineProps(["btnText", "content"]);

let isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
const close = () => {
    isOpen.value = false;
};
</script>

<template>
    <button class="btn bg-a" @click="toggle">{{ btnText }}</button>

    <div
        class="fade fixed bottom right w-80% max-w-17 m-7"
        :class="isOpen && 'open'"
    >
        <div class="alert">
            <div>{{ content }}</div>
            <button class="i-close sm" @click="close" />
        </div>
    </div>
</template>
