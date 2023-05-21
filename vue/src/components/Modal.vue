<script setup>
import { ref } from "vue";

defineProps(["btnText", "title"]);

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

    <div class="modal" :class="isOpen && 'open'">
        <div>
            <div class="fs-6 bold">
                <h5>{{ title }}</h5>
                <button class="i-close sm" @click="close" />
            </div>
            <div><slot /></div>
            <div class="x-right">
                <button class="btn bd-a c-a mr-5" @click="close">Close</button>
                <input type="submit" class="btn bg-a" />
            </div>
        </div>
    </div>
</template>
