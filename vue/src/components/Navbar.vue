<script setup>
import { ref } from "vue";

let isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="navbar">
        <div>
            <a href="#">
                <img src="https://csslandia.com/csslandia.svg" alt="logo" />
                <div class="fw-6 ml-6">Csslandia</div>
            </a>
            <button
                class="hamburger sm"
                :class="isOpen && 'open'"
                @click="toggle"
            >
                <span />
            </button>
        </div>
        <nav :class="isOpen && 'open'">
            <a href="#about">About</a>
            <a href="#our-team">Our Team</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</template>
